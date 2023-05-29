import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url: string) => {
    if(!url) return noImage;

    const targer = 'media/';
    const index = url.indexOf(targer) + targer.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl; 