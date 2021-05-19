import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'

import './assets/css/common.css'
import './assets/css/iconfont.css'

import {Row, Col, Button, Form, Input, DatePicker, Radio, Checkbox} from 'ant-design-vue'

const app = createApp(App);

app.use(Button);
app.use(Form);
app.use(Input);
app.use(DatePicker);
app.use(Radio);
app.use(Checkbox);
app.use(Row);
app.use(Col);
app.use(router);
app.mount('#app');
