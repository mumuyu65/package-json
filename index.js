import Vue from 'vue'
import routes from './vue/routes'

const app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed:{
        viewComponent(){
            const matchingView = routes[this.currentRoute];
            return matchingView
                ? require('./vue/static/templates/page/' + matchingView + '.vue')
                : require('./vue/static/templates/page/404.vue')
        }
    },
    render (h) {
        return h(this.ViewComponent)
    }
})

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})