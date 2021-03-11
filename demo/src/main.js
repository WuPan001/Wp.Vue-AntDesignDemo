import Vue from 'vue'
import App from './App.vue'

//引入antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import echarts from 'echarts';
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
//全局引入
Vue.use(Antd);
new Vue({
  render: h => h(App),
}).$mount('#app')
