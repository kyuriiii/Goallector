export class API {
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios({ method: 'post', url, data })
            .then((rep) => { resolve(rep.data); });
        });
    }
}

export class MSG {
    success(title, text) {
        Swal.fire({ icon: 'success', title, text });
    }
    error(title,text) {
        Swal.fire({ icon: 'error', title, text });
    }
}