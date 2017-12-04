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
        return url.replace(/(res\.cloudinary\.com\/[\-\w]+\/\w+\/upload\/)/, params);
    }
};

export default cloudinary;
