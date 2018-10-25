<template>
  <div id="app">
      <Tabbar></Tabbar>
  </div>
</template>

<script>
import  Tabbar  from './components/Home/Tabbar'
export default {
  name: 'App',
  components: {
        'Tabbar':Tabbar
    },
     created () {
    this.$http.get('http://localhost:5000/users/api').then(({data}) => {
      console.log(data)
    })
     this.$wechat.onMenuShareTimeline({
      title: 'hello VUX'
      
    })
    console.log(this.$wechat)
  }
}
</script>


<style lang="less">
@import '~vux/src/styles/reset.less';


#app{
  height: 100%;
}
</style>
