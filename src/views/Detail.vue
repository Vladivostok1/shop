<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
    <img :src="detail.img" alt class="detail-img" />
    <div class="detail">
      <p class="detail-name">{{detail.name}}</p>
      <p class="detail-price">￥{{detail.price}}</p>
      <p class="detail-company">公司:{{detail.company}}</p>
      <p class="detail-city">所在地:{{detail.city}}</p>
    </div>
    <div class="toolbar">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" info="5"  />
        <van-goods-action-button type="warning" text="加入购物车" @click ="addCart" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "../service.config";
import {mapState} from "vuex"
export default {
  data() {
    return {
      detail: {}
    };
  },
  methods:{
      addCart(){
          //检查用户是否登录
         if(JSON.stringify(this.userInfo) === '{}'){
           this.$toast.fail('请先登录');
           setTimeout(()=>{
             this.$router.push('/profile');
           },1000)
         }else{
           axios({
             url:url.addCart,
             method:'post',
             data:{
               productId: this.detail._id,
               userId:this.userInfo._id
             }
           })
           .then(res=>{
            //  console.log(res);
            if(res.data.code == 200){
              this.$toast.success('添加成功')
            }
           })
           .catch(err=>{
             console.log(err);
           })
         }
      }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  created() {
    // console.log();
    axios({
      url: url.getDetail,
      method: "get",
      params: {
        id: this.$route.query.id
      }
    })
      .then(res => {
        console.log(res);
        this.detail = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.detail {
  padding: 0.2rem;
  &-img {
    height: 5rem;
    width: 100%;
  }
  &-name {
    font-weight: bolder;
    color: #333;
  }
  &-price {
    color: #ff7300;
    font-size: 0.4rem;
  }
}
</style>