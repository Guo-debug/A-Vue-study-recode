const app = new Vue({
    el: '#app',
    data: {
        usname: '',
        uspswd: '',
    },
    components: {
        Login: {
            template: '#Login',
            data: {
                userName: name,
                userPswd: pswd,
            },
            methods: {
                changeName(event) {
                    this.userName = event.target.value;
                },
            },
            props: {
                name: String,
                pswd: Number,
            },
        },
    },
});
