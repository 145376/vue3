import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'

import './assets/css/common.css'
import './assets/css/iconfont.css'

import {Button, Form, Input, DatePicker, Radio, Checkbox} from 'ant-design-vue'

const app = createApp(App);
// console.log(window.innerWidth)

app.use(Button);
app.use(Form);
app.use(Input);
app.use(DatePicker);
app.use(Radio);
app.use(Checkbox);
app.use(router);
app.use(store);
app.mount('#app');
