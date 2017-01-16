import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SearchComponent}   from './components/search/search.component';
import {ReservedComponent} from './components/reserved/reserved.component';
import {ServiceDetailComponent} from './components/servicedetail/servicedetail.component';

const routes: Routes = [
    {path: '', redirectTo: '/search', pathMatch: 'full'},
    {path: 'search', component: SearchComponent},
    {path: 'reserved', component: ReservedComponent},
    {path: 'detail/:id', component: ServiceDetailComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}