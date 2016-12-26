import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/concat'
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const QUAKE_URL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
const map = L.map('map').setView([33.858631, -118.279602], 7);
L.tileLayer(`http://{s}.tile.osm.org/{z}/{x}/{y}.png`).addTo(map);

const notify: Element|null = document.querySelector('#notify');

let places = [];
let popup = document.querySelector('#info-popup') as HTMLDivElement;

let quakes: Observable<any> = Observable.create((observer: Observer<any>) => {
    let req = new XMLHttpRequest();
    req.open('GET', QUAKE_URL);
    req.onload = () => {
        observer.next(req.response);
        return observer.complete();
    };
    req.onerror = (err) => {
        return observer.error(err)
    };

    req.send()
})
    .mergeMap((res: any): Observable<any> => Observable.from(JSON.parse(res).features))
    .map(({geometry:{coordinates:[x, y]}, properties:{mag, type, place, code}}) => {
        return {
            x,
            y,
            mag,
            type,
            place,
            code,
            point: L.circle([y, x], mag * 10000)
        }
    });

quakes.subscribe(({point, place}) => {
    point.addTo(map);
    places.push({point, place});
});

let mouseEv = Observable.fromEvent(document, 'mousemove');

let hover = mouseEv
    .filter((e: MouseEvent) => (e.target as SVGElement).tagName === 'path')
    .mergeMap((ev: MouseEvent) => Observable.from(places)
        .filter((quake: any) => quake.point._path === ev.target)
        .map((quake: any) => {
            return {place: quake.place, x: ev.pageX, y: ev.pageY}
        }));

let unhover = mouseEv
    .filter((e: MouseEvent) => (e.target as SVGElement).tagName !== 'path');

hover.subscribe((ev:any) => {
    popup.style.top = `${ev.y + 20}px`;
    popup.style.left = `${ev.x + 20}px`;
    popup.style.display = "block";
    popup.innerHTML = ev.place;
});

unhover.subscribe(() => {
    popup.style.display = "none";
});
// Observable.fromEvent(document,'mouseenter').map ... filter
// Observable.fromEvent(document,'mouseleave').