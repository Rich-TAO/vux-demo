<template>
  <div class="hello">
    <div class="search">
      <search ph="请输入酒名、商品、用户等"></search>
    </div>
    <div class="banner">
      <banner></banner>
    </div>
    <!-- 导航 -->
    <div class="nav">
      <nav-li></nav-li>
    </div>
    <div class="main">
      <swiper></swiper>
      <video-div></video-div>
    </div>
  </div>
</template>

<script>
  import  Search  from './Home/Search'
  import Banner from './Home/Banner'
  import Nav from './Home/Nav'
  import swiper from './Home/Swiper'
  import Videos from './Home/Videos'
export default {

  name: "HelloWorld",
  components: {
    'search':Search,
    'banner':Banner,
    'nav-li':Nav,
    'swiper':swiper,
    'video-div':Videos
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello{
  overflow:scroll;
}
.nav{
  width: 94%;
  margin: -172px auto;
  border-radius: 20px;
  box-shadow: #ccc 0 6px 4px 0;
  z-index: 10;
  position: relative;
}
.main{
  margin-top: 180px;
}
</style>
