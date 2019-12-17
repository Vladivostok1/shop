<template>
  <div>
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="catagory">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li
              v-for="(item,index) in types"
              :class="{active:active == index}"
              @click="selectCatagory(item.typeId,index)"
              :key="index"
            >{{item.typeName}}</li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="content" @load="onLoad" v-model="isLoading" :finished="finished">
              <div @click = "goDetail(item._id)" class="content-item" v-for="(item, index) in productList" :key="index">
                <img :src="item.img" alt />
                <p class="content-item-name">{{item.name}}</p>
                <p>￥{{item.price}}</p>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "../service.config";
export default {
  data() {
    return {
      types: [],
      active: 0,
      productList: [],
      typeId: 1,
      start: 0,
      limit: 20,
      finished: false,
      isLoading: false
    };
  },
  created() {
    axios({
      url: url.getTypes
    })
      .then(res => {
        // console.log(res);
        this.types = res.data;
        this.selectCatagory(this.typeId, this.active);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.getProductList();
      }, 2000);
    },
    onRefresh() {
      setTimeout(() => {
        this.productList = [];
        this.getProductList();
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 2000);
    },
    goDetail(id){
      // console.log(id);
      this.$router.push({
        path:'/detail',
        query:{
          id:id
        }
      });
    },
    selectCatagory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.finished = false;
      this.getProductList();
    },
    getProductList() {
      this.isLoading = true;
      axios({
        url: url.getProductByType,
        methdos: "get",
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            this.finished = true;
          }
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background: #eee;
  li {
    height: 0.6rem;
    line-height: height;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
    font-size: 14px;
  }
  .active {
    background: #ffffff;
  }
}
.container {
  position: fixed;
  top: 46px;
  right: 0;
  bottom: 1rem;
  overflow-y: scroll;
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  &-item {
    width: 40%;
    text-align: center;
    padding: 0 10px;
    img {
      width: 2rem;
      height: 2rem;
    }
    &-name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>