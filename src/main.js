import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VideoBackground from 'vue-responsive-video-background-player'
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.config.productionTip = false
new Vue({
  vuetify,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')


Vue.component('video-background', VideoBackground);

