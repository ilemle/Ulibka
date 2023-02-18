
export interface IPhoto {
    farm: number
    has_comment: number
    height_sq: number
    id: string
    is_primary: number
    isfamily: number
    isfriend: number
    ispublic: number
    owner: string
    secret: string
    server: string
    title: string
    url_sq: string
    url_z:string
    url_c:string
    url_n:string
    url_m:string
    url_s:string
    url_q:string
    url_t:string
    url_o:string
    url_l:string
    width_sq: number
}
export enum statInfo {
    ok = 'ok',
    fail = "fail"
}

export interface IPhotosInfo {
    page: number
    pages: number
    perpage: number
    photo: IPhoto[]
    total: number
}

export interface IPhotosResponse {
    stat: statInfo
    photos: IPhotosInfo
    code: number
    message: string
}