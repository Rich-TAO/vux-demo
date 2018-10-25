<template>
  <div class="hello">
    <router-view></router-view>
    <div class="vux_tab">
      <Tabbar @on-index-change='changeTab'>
        <tabbar-item selected link="/"  @on-item-click='handler'>
          <img slot="icon" src="../../assets/img/shouye.png">
          <img slot="icon-active" src="../../assets/img/shouyex.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item selected link="/ChannelList" @on-item-click='handler'>
          <img slot="icon" src="../../assets/img/dingdanss.png">
          <img slot="icon-active" src="../../assets/img/dingdan.png">
          <span slot="label">订单</span>
        </tabbar-item>
        <tabbar-item selected link="/ChannelSearch" @on-item-click='handler'>
          <img slot="icon" src="../../assets/img/wode.png">
          <img slot="icon-active" src="../../assets/img/wode.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </Tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux"

export default {
  name: "HelloWorld",
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isShow:false,
      selected:'index'
    };
  },
  methods: {
    handler(newVal) {
      this.isShow = !this.isShow
      console.log(newVal)
    },
    changeTab (tabs){
      console.log(tabs)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.vux_tab{
  height: 100px;
  // position: fixed;
}
.vux_tab /deep/ .weui-tabbar{
  height: 100px;
  background: #fff;
  position: fixed;
}

.vux_tab /deep/ .weui-tabbar .weui-tabbar__item .weui-tabbar__icon {
  margin-top: 10px;
  height: 40px;
  width: 40px;
}
.vux_tab /deep/ .weui-tabbar .weui-tabbar__item .weui-tabbar__label{
  font-size: 24px;
  color: #000;
  text-decoration: none;
  border: 0;
}
 .vux_tab /deep/.weui-tabbar .weui-bar__item_on .weui-tabbar__label{
   color: rgb(172, 164, 164);
 }


</style>
