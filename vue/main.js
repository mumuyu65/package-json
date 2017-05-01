/**
 * Created by yuyangyang on 2017/5/1.
 */
/* 引入vue和主页 */
import Vue from 'vue'
import App from './App.vue'
import routes from './routes'

/* 实例化一个vue */
const app=new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed:{
        viewComponent: function () {
            const matchingView = routes[this.currentRoute];
            return matchingView
                ? require('./static/templates/page/' + matchingView + '.vue')
                : require('./static/templates/page/404.vue')
        }
    },
    //将h作为createElement的别名是一个通用惯例
    render (h) {
        return h(App)
    }
})

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})