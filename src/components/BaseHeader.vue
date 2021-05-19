<template>
  <div class="home">
    <header>
      <a-row>
        <a-col :xs="12" :xl="4">
            <div class="logo">
              <img src="../assets/images/logo.png" alt="">
            </div>
        </a-col>
        <a-col :xs="12" :xl="14">
           <div class="menu">
              <router-link 
                class="item" 
                v-for="( item, index ) in 5" 
                :key="index"
                to="/home"
                exact
              >首页</router-link>
            </div>
        </a-col>
        <a-col :xs="12" :xl="4">
          <div class="util">
            <div class="profile">
              <img src="../assets/images/avatar.jpg" alt="">
              <div>
                <div>我是你爸爸</div>
                <div>jsaifvheruig</div>
              </div>
            </div>
            <div class="logout">
              <div>
                <span>退出</span>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </header>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseHeader',
  setup(){

  }
})
</script>

<style lang="less" scoped>
.home{
  header{
    width: 100%;
    padding: 10px 20px;
    background-color: rgba( 0, 0, 0, .5 );
    .logo{
      width: 40px;
      height: 40px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .menu{
      display: flex;
      align-items: center;
      margin-top: 10px;
      font-size: 14px;
      color: #fff;
      .item{
        margin-right: 40px;
        &.router-link-active{
          color: #fff;
        }
      }
    }
    .util{
      display: flex;
      align-items: center;
      color: #fff;
      .profile{
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin-right: 50px;
        img{
          width: 30px;
          height: 30px;
          margin-right: 5px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .logout{
        cursor: pointer;
        font-size: 12px;
      }
    }
  }
 #barchart{
   width: 500px;
   height: 300px;
 }
}
</style>