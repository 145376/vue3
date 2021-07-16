import sensors from './sensorsdata.min.js'

sensors.init({ // 神策系统配置
  server_url: 'http://10.10.1.78:8106/sa/sa?project=NewRetailDemo&remark=v10', // 数据接收地址
  is_track_single_page: true, // 单页应用页面浏览事件采集(url改变就触发)
  use_app_track: true,
  show_log: false, // 控制台显示数据开
  heatmap: { // 热图设置 default开启 not_collect关闭（详细配置解释看官方文档）
      clickmap: 'default', // 点击热图，收集点击事件
      scroll_notice_map: 'default', // 视区热图，收集页面区域停留时间
  }
})

sensors.quick('autoTrack') // 首次触发页面加载事件 $pageview
export default sensors