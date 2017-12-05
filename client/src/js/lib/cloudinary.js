const cloudinary = {
    getResourceType: (url) => { /* eslint arrow-body-style: "warn" */
        return url.match(/\w+\/(\w+)\/upload/)[1];
    },
    getImageUrl: (url, width, height, gravity) => {
        let params = [];
        if (width) {
            params.push('w_' + parseInt(width, 10)); /* eslint prefer-template: "warn" */
        }
        if (height) {
            params.push('h_' + parseInt(height, 10)); /* eslint prefer-template: "warn" */
        }
        if (gravity) {
            params.push('g_' + parseInt(gravity, 10)); /* eslint prefer-template: "warn" */
        }
        params = '$1' + params.join(',') + '/'; /* eslint prefer-template: "warn" */
        return url.replace(/(\/[\-\w]+\/\w+\/upload\/)/, params);
    },
    getVideoPreview: (url, width, height, format) => {
        let params = [
            'vs_15', // Video Sampling (https://cloudinary.com/documentation/video_manipulation_and_delivery#delivering_animated_gifs)
            'dl_100', // Delay (https://cloudinary.com/documentation/video_manipulation_and_delivery#delivering_animated_gifs)
            'e_loop' // Loop gif (https://cloudinary.com/documentation/video_manipulation_and_delivery#delivering_animated_gifs)
        ];
        if (width) {
            params.push('w_' + parseInt(width, 10)); /* eslint prefer-template: "warn" */
        }
        if (height) {
            params.push('h_' + parseInt(height, 10)); /* eslint prefer-template: "warn" */
        }
        params = '$1' + params.join(',') + '/'; /* eslint prefer-template: "warn" */
        let newUrl = url.replace(/(\/[\-\w]+\/\w+\/upload\/)/, params);
        if (format) {
            newUrl = newUrl.replace(/\.\w+$/, '.' + format); /* eslint prefer-template: "warn" */
        }
        return newUrl;
    }
};

export default cloudinary;
