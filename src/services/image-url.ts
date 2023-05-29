const getCroppedImageUrl = (url: string) => {
    const targer = 'media/';
    const index = url.indexOf(targer) + targer.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl; 