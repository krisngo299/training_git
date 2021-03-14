var vueInstance = new Vue({
    el: '#app',
    data: {
        title:'Dien thoai Samsung'
    },
    methods: {
        say: function (text) {
            return 'Hello' + text;
        }
    }
});
//he thong phan ung Reactivity
console.log(vueInstance);


setTimeout(() => {
    vueInstance.title = 'Iphone';
}, 3000);