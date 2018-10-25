<template>
<div class="video">
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for='(item,index) in items' :key='index'>
        <div class="main">
            <!-- <swiper-item> -->
            <img src="../../assets/img/shipins.png" alt="">    
            <!-- <video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"></video> -->
        </div>
    </swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</div>

</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
            el:".swiper-paginations"
        },
        paginationClickable: true,
        autoplay: {
            delay: 3000, //自动切换的时间间隔，单位ms
            stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
            stopOnLastSlide: true, //如果设置为true，当切换到最后一个slide时停止自动切换。
            disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
            reverseDirection: true, //开启反向自动轮播。
            waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        },
        autoplayDisableOnInteraction: false,
        loop: true,
        speed:1000,
        effect: 'cube',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        // coverflow: {
        //   rotate: 50,
        //   stretch: 10,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true
        // },
        //  cubeEffect: {
        //   slideShadows: true, //开启slide阴影。默认 true。
        //   shadow: true, //开启投影。默认 true。
        //   shadowOffset: 100, //投影距离。默认 20，单位px。
        //   shadowScale: 0.6 //投影缩放比例。默认0.94。
        // },
        coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows : true
        },
      },
      items:[1,2,3]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(1, 1000, false);
    
  },
  methods:{
      callback(){}
  }
};
</script>

<style lang="less" scoped>
.video{
    height: 332px;
    width: 100%;
    .mian{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        img{
          width: 100%;
          height: 200px;
        }
        
    }
}
</style>

