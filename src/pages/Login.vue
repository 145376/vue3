<template>
  <div class="login">
    <video  autoplay="autoplay" muted loop="loop" preload="auto" poster="../assets/images/static_bg.jpg">
      <source src="../assets/images/dota2_bg.webm">
    </video>
    <div :class='["panel", show?"translate":""]'>
      <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules" ref="formRef">
        <a-form-item label="账号" name="account">
          <a-input v-model:value="formState.account"></a-input>
        </a-form-item>
        <a-form-item label="密码" name="password">
          <a-input v-model:value="formState.password" type="password"></a-input>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 16, offset: 2 }">
          <a-button type="primary" size="large" @click="onSubmit">登录</a-button>
          <span class="toRegister">
            还没有账号?<router-link to="/register">去注册</router-link>
          </span>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup(){
    const formRef = ref()
    const show = ref(false)
    const router = useRouter()
    const formState = reactive({
      account: '',
      password: ''
    })
    const rules = {
      account:[
        {
          required: true,
          message: '请输入账号',
          trigger: 'blur',
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        }
      ]
    }

    onMounted( () => {
      setTimeout( ()  => {
        show.value = true
      }, 500)
    } )

    const onSubmit = () => {
      formRef.value.validate().then( () => {
        console.log('submit');
        router.push( { path: '/home' } )
      } ).catch( (err) => {
        console.log(err);
      } )
    }

    return {
      show,
      formState,
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      rules,
      onSubmit,
      formRef
    }
  },
})
</script>

<style lang="less" scoped>
.login{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  video{
    position: absolute;
    top: -200px;
    left:0;
    width: 100%;
    background: url('../assets/images/static_bg.jpg') no-repeat top center;
    background-size: 100% auto;
  }
  .panel{
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: hsla(255,255,255,.8);
    width: 0;
    height: 100%;
    transition: width .1s ease-out;
    .ant-form{
      width: 100%;
      .toRegister{
        font-size: 12px;
        margin-left: 5%;
      }
      .ant-btn{
        width: 160px;
        margin-top: 30px;
      }
    }
  }
  .translate{
    width: 40%;
  }
}
</style>