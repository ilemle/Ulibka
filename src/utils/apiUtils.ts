import { PhotosResponse, statInfo } from "../types"

export const isApiResponseOk = (data: PhotosResponse) => {
    return data.stat === statInfo.ok
}