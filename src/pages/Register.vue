<template>
  <div class="register">
      <div class="head">
        <div class="contianer">
          <div class="logo">
            <span class="iconfont icon-icon-test"></span>
            <h1>水蒸气平台</h1>
          </div>
          <nav>
            <div>商店</div>
            <div>关于</div>
            <div>客服</div>
          </nav>
        </div>
      </div>
      <div class="info">
        <div class="contianer">
          <div class="title">创建您的帐户</div>
          <div class="form">
            <a-form layout="vertical" :model="formState" :wrapperCol="{span: 12}">
              <a-form-item label="账号名称">
                <a-input v-model:value="formState.account"></a-input>
              </a-form-item>
              <a-form-item label="密码">
                <a-input v-model:value="formState.password"></a-input>
              </a-form-item>
              <a-form-item label="出生年月">
                <a-date-picker
                  v-model:value="formState.birthday"
                  type="date"
                  style="width: 100%"
                  placeholder="选择出生年月"
                />
              </a-form-item>
              <a-form-item label="地区">
                <a-input v-model:value="formState.country"></a-input>
              </a-form-item>
              <a-form-item label="性别">
                <a-radio-group v-model:value="formState.gender" size="large">
                  <a-radio :value="1">男</a-radio>
                  <a-radio :value="2">女</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item>
               <a-checkbox v-model:checked="formState.clause">我同意《水蒸汽平台软件许可和服务协议》和《蒸汽平台个人信息保护政策》的条款。</a-checkbox>
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 14, offset: 0 }">
                <a-button type="primary" @click="onSubmit">确认</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
      <div class="foot"></div>
  </div>
</template>

<script>
import {defineComponent, reactive} from 'vue'
export default defineComponent({
  setup(){
    const formState = reactive({
      account: '',
      password: '',
      birthday: '',
      country: '',
      gender: 0,
      clause: false
    })

    const onSubmit = () => {
      console.log('注册');
    }

    return {
      formState,
      onSubmit
    }
  }
})
</script>

<style lang="less" scoped>
.register{
  .head{
    height: 120px;
    padding-top: 30px;
    background-color: #171a21;
    .contianer{
      display: flex;
      .logo{
        display: flex;
        color: #fff;
        h1{
          color: inherit;
          margin-left: 5px;
        }
        .iconfont{
          font-size: 32px;
          vertical-align: top;
        }
      }
      nav{
        display: flex;
        padding-top: 10px;
        margin-left: 50px;
        color: #fff;
        font-size: 18px;
        div{
          flex: 1;
          margin-right: 15px;
        }
      }
    }
  }
  .info{
    padding: 100px;
    background-color: #212429;
    color: #fff;
    .contianer{
      .title{
        font-size: 30px;
        letter-spacing: .1em;
      }
      .form{
        margin-top: 30px;
        /deep/ .ant-form-item-label > label,
        /deep/ .ant-radio-wrapper,
        /deep/ .ant-checkbox-wrapper
        {
          color: #fff;
        }
        /deep/ .ant-btn{
          width: 140px;
        }
      }
    }
  }
  .foot{
    height: 120px;
    background-color: #171a21;
  }
}
</style>