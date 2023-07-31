export interface ILaunchesList {
    docs: any[];
    orderByDesc: boolean;
}

export interface ILaunch {
    name: string
    details: string
    date_unix: number
    imgUrl: string
}
