interface Service{
    name: string,
    city: string,
    address: string,
    type: string,
    reviews?: Review[],
    $key?: string
}

interface Review{
    name: string,
    text: string,
    rating: number
}

interface ReserveService{
    name: string,
    city: string,
    address: string,
    type: string,
    date: string,
    telNumber: number,
    key: string,
    status: string
}