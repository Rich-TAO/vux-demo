<template>
    <div class="nav">
        <ul>
            <li v-for="(li,index) in lis" :key="index">
                <img src="../../assets/img/02.png" alt="">
                <p>校友会</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Nav',
    data (){
        return {
            lis:[1,2,3,4,5,6,7,8]
        }
    }
}
</script>

<style lang="less" scoped>
.nav{
    width: 100%;
    height: 344px;
    background: #fff;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        li{
            width: 25%;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                width: 72px;
                height: 72px;
            }
            p{
                margin-top: 20px;
                font-family: PingFang SC;
                flex-shrink: 24px;
                color: #000;
            }
        }
    }
}
</style>


