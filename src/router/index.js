import Vue from 'vue'
import Router from 'vue-router'
// import ChannelList from '@/components/ChannelList/ChannelList'
// import HelloWorld from '@/components/HelloWorld'
// import ChannelSearch from '@/components/ChannelSearch/ChannelSearch'
const HelloWorld = () => import('@/components/HelloWorld.vue').then(m => m.default)
// const ChannelSearch = () => import('@/components/ChannelSearch/ChannelSearch.vue').then(m => m.default)
// const ChannelList = () => import('@/components/ChannelList/ChannelList.vue').then(m => m.default)

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    }
    
  ]
})
