<template>
<div class="recommend">
    <div class="top">
        <h2 class="top-left">藏酒推荐</h2>
        <p class="top-right">查看更多</p>
    </div>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for='(item,index) in items' :key='index'>
        <div class="main">
            <!-- <swiper-item> -->
                    <ul>
                        <li>
                            <img src="../../assets/img/chanpin.png" alt="">
                            <p class="p1">
                                <span>【茅台旗舰店】</span>园博洞藏柔雅酱香型老酒500ML
                            </p>
                            <p class="p2">
                                <span>￥</span>5500.00
                            </p>
                            <div class="p3">
                                <p class="p3-left">1000.00</p>
                                <p class="p3-right">已售906</p>
                            </div>
                        </li>
                        <li>
                            <img src="../../assets/img/chanpins.png" alt="">
                            <p class="p1">
                                <span>【茅台旗舰店】</span>园博洞藏柔雅酱香型老酒500ML
                            </p>
                            <p class="p2">
                                <span>￥</span>5500.00
                            </p>
                            <div class="p3">
                                <p class="p3-left">1000.00</p>
                                <p class="p3-right">已售906</p>
                            </div>
                        </li>
                    </ul>
            <!-- </swiper-item> -->
    </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
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
            el:".swiper-pagination"
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
        // effect: 'coverflow',
        // grabCursor: true,
        // centeredSlides: true,
        // slidesPerView: 'auto',
        coverflow: {
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
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
    .recommend{
        width: 100%;
        .top{
            width: 100%;
            height: 100px;
            display: flex;
            justify-content:space-between;
            align-items: center;
            padding: 0 20px;
            h2{
                font-size: 34px;
                color: #000;
            }
            p{
                color: #666;
                font-size: 24px;
            }
        }
        .main{
            width: 100%;
            ul{
                width: 100%;
                height: 460px;
                display: flex;
                justify-content: space-between;
                padding: 0 20px;
                li{
                    width: 344px;
                    img{
                        width: 344px;
                        height: 220px;
                    }
                    .p1{
                        font-size: 24px;
                        color: #000;
                        font-family: PingFang SC;
                    }
                    .p2{
                        font-size: 34px;
                        color: #8D0F10;
                        font-family: DIN;
                        span{
                            font-size: 24px;
                        }
                    }
                    .p3{
                        font-size: 24px;
                        color: #666;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .p3-left{
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }

    }
</style>