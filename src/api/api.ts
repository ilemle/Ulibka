import axios from 'axios'

const baseUrl = 'https://api.flickr.com/services'

const API_KEY = '05c3b9c943d732a6b3dbd575710625dd'
const galleriesPhotos ='flickr.galleries.getPhotos'
export const getPhotos = () => {
    return axios
        .get(`${baseUrl}/rest/?method=${galleriesPhotos}&api_key=${API_KEY}&gallery_id=72157647277042064%2Fwith%2F8432423659%2F&extras=url_z,url_sq,url_s,url_t,url_t,url_m,url_n,url_c,url_l,url_o&format=json&nojsoncallback=1`)
        .then(res => res.data)
}

