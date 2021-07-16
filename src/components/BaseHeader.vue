<template>
  <div class="home">
    <header>
      <div class="logo">
        <img src="../assets/images/logo.png" alt="">
      </div>
      <ul class="head-nav">
        <li v-for="(item, index) in navList" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="user-info">
        <img src="../assets/images/avatar.jpg" alt="">
        <div class="info">
          <div>wasd123456kkk</div>
          <div>尊贵会员</div>
        </div>
      </div>
      <div class="logout">
        退出
      </div>
    </header>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseHeader',
  setup(){
    const navList = [
      {
        id: 1,
        name: '首页',
        path: ''
      },
      {
        id: 2,
        name: '我的发帖',
        path: ''
      },
      {
        id: 3,
        name: '我的数据',
        path: ''
      },
      {
        id: 4,
        name: '我的库存',
        path: ''
      },
      {
        id: 5,
        name: '相关资讯',
        path: ''
      },
      {
        id: 6,
        name: '关于我们',
        path: ''
      }
    ]
    return {
      navList
    }
  }
})
</script>

<style lang="less" scoped>
.home{
  header{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    background-color: rgba( 0, 0, 0, .5 );
    .logo{
      width: 80px;
      height: 80px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .head-nav{
      display: flex;
      align-items: center;
      flex: 5;
      margin-left: 60px;
      font-size: 18px;
      color: #fff;
      li{
        margin-right: 40px;
        .router-link-active{
          color: #fff;
          &:hover{
            color: #1890ff;
          }
        }
      }
    }
    .user-info{
      flex: 2;
      display: flex;
      align-items: center;
      color: #fff;
      img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
      }
    }
    .logout{
      flex: 1;
      cursor: pointer;
      font-size: 16px;
      color: #fff;
    }
  }
 #barchart{
   width: 500px;
   height: 300px;
 }
}
</style>