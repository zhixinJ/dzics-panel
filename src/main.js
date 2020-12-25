import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.scss' // 全局样式
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);

// 引入echarts
import echarts from 'echarts/lib/echarts'
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require("echarts/lib/component/title");
require("echarts/lib/component/axisPointer");
require("echarts/lib/component/legend");
require("echarts/lib/component/markPoint");
require("echarts/lib/component/markLine");
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
