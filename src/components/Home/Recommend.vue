<template>
    <div class="recommend">
        <div class="top">
            <h2 class="top-left">藏酒推荐</h2>
            <p class="top-right">查看更多</p>
        </div>
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
    </div>
</template>

<script>
import { Swiper } from 'vux'

export default {
    name:'Recommend',
     components: {
        "swiper":Swiper
    }
}
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
            padding: 0 30px;
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
                display: flex;
                justify-content: space-between;
                padding: 0 30px;
                li{
                    width: 334px;
                    img{
                        width: 334px;
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


