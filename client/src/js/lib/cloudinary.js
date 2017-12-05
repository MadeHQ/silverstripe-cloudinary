function getResourceType(url) {
    return url.match(/\w+\/(\w+)\/upload/)[1];
}
function getImageUrl(url, width, height, gravity) {
    let params = [];
    if (width) {
        params.push(`w_${parseInt(width, 10)}`);
    }
    if (height) {
        params.push(`h_${parseInt(height, 10)}`);
    }
    if (gravity) {
        params.push(`g_${parseInt(gravity, 10)}`);
    }
    params = `$1${params.join(',')}/`;
    return url.replace(/(\/[\-\w]+\/\w+\/upload\/)/, params);
}
function getVideoPreview(url, width, height, format) {
    let params = [
        'vs_15', // Video Sampling (https://cloudinary.com/documentation/video_manipulation_and_delivery#delivering_animated_gifs)
        'dl_100', // Delay (https://cloudinary.com/documentation/video_manipulation_and_delivery#delivering_animated_gifs)
        'e_loop' // Loop gif (https://cloudinary.com/documentation/video_manipulation_and_delivery#delivering_animated_gifs)
    ];
    if (width) {
        params.push(`w_${parseInt(width, 10)}`);
    }
    if (height) {
        params.push(`h_${parseInt(height, 10)}`);
    }
    params = `$1${params.join(',')}/`;
    let newUrl = url.replace(/(\/[\-\w]+\/\w+\/upload\/)/, params);
    if (format) {
        newUrl = newUrl.replace(/\.\w+$/, `.${format}`);
    }
    return newUrl;
}

export default {
    getResourceType,
    getImageUrl,
    getVideoPreview,
};
