var app = new Vue({
    el:'#app',
    data:{
        active: false,
        riquadri:[
            {
                foto: 'img/avadabarbers-second-blog-320x202.jpg',
                titolo: 'Avada Barbers Now Open',
                paragrafo: 'Il miglior posto per tagliare i capelli.'
            },
            {
                foto: 'img/avadabarbers-choosing-blog-320x202.jpg',
                titolo: 'Choosing The Right Barber',
                paragrafo: 'Miglior comodità e prezzo.'
            },
            {
                foto: 'img/avadabarbers-ourservice-blog-320x202.jpg',
                titolo:'Quick Service Guide',
                paragrafo: 'T facim a barb come barbanera il 4 imperatore.'
            }
        ]
    },
    methods: {
        toggleNavClass() {
            if (this.active == false) {
                return 'nav'
            } else {
                return 'sticky-nav'
            }

        }
    },
    mounted() {
        window.document.onscroll = () => {
            let navBar = document.getElementById('nav');
            if (window.scrollY > navBar.offsetTop) {
                this.active = true;
            } else {
                this.active = false;
            }
        }
    }
});