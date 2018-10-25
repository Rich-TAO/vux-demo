<template>
    <div class="search">
        <form action="" class="form">
            <input type="text" v-bind:placeholder="ph">
            <div class="img">
                <img src="../../assets/img/sousuo@2x.png" alt="">   
            </div>
        </form>
    </div>
</template>

<script>
import { Search } from 'vux'
export default {
    name:'Search',
    components: {
        'search':Search
    },
    props:['ph'],
    data(){
        return{
        }
    },
    
}
</script>

<style lang="less" scoped>
.search{
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    .form{
        display: flex;
        flex: 1;
        align-items: center;
        padding: 22px 0;
        padding-left: 30px;
        input{
            height: 44px;
            flex: 1;
            border:none;
            display: block;
            border-radius: 6px;
        }
        .img{
            width: 80px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 40px;
                height: 40px;
            }
        }
    }
}
</style>


