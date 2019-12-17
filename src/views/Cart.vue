<template>
  <div>
    <van-nav-bar title="购物车"></van-nav-bar>
    <div class="card">
      <van-card
        v-for="(item, index) in productList"
        :key="index"
        :price="item.price"
        :desc="item.company"
        :title="item.name"
        :thumb="item.img"
      >
        <div slot="footer">
          <van-button size="mini" @click="delCart(item._id, index)">删除</van-button>
        </div>
      </van-card>
    </div>
    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import axios from "axios";
import url from "../service.config";
import { mapState } from "vuex";
export default {
  data() {
    return {
      productList: []
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice() {
      return (
        this.productList.reduce((sum, elem) => {
          sum += elem.price;
          return sum;
        }, 0) * 100
      );
    }
  },
  created() {
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$toast.fail("请先登录");
      setTimeout(() => {
        this.$router.push("/profile");
      }, 1000);
    } else {
      axios({
        url: url.getCart,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          //   console.log(res);
          for (let item of res.data) {
            this.productList.push(item.productId);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    // delCart(item_id, index) {
        
    // },
    onSubmit() {
        this.$toast.success('提交成功')
    }
  }
};
</script>

<style lang="scss" scoped>
</style>