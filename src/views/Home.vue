<template>
	<div class="container">

		<!-- 头部信息 -->
		<div class="header-wrap l-flex l-row-center">
			<img src="../assets/logo.png" alt="" class="logo-img" >
			<h3 class="dzics-title font-bolder">菲仕智能数字看板</h3>
		</div>

		<!-- 内容 -->
		<div class="content-wrap">
			<div class="angle">
				<!--内容边框的四个角-->
				<div>
					<i class="angle-topL"></i>
					<i class="angle-topR"></i>
					<i class="angle-bottomL"></i>
					<i class="angle-bottomR"></i>
				</div>

				<div class="panel-wrap l-flex l-flex-col l-row-between">
				  <!-- 面板上面部分信息 -->
          <el-row class="w-100 h-30">

            <el-col class="h-100" :span="8">
              <div style="width:95%;">
                <div class="rect-taps-blue">
                  <div class="rect-taps-white">
                    <!-- 子模块标题部分 -->
                    <div class="item-title">
                      <div class="rect-taps-title">
                        <div class="font-bolder l-font-20 l-text-center item-title-pd">产品名称</div>
                      </div>
                    </div>
                    <div class="l-flex">
                      <div class="w-50">
                        <img src="../assets/logo.png" alt="" srcset="" width="90%" height="88px">
                        <!-- 子模块信息部分 -->
                        <div class="item-info l-text-left">
                          <div class="item-info-text l-font-16">产品ID：ID900000</div>
                          <div class="item-info-text l-font-16">规格型号：ZH89909</div>
                          <div class="item-info-text l-font-16">计划总产：1000</div>
                          <div class="item-info-text l-font-16">节拍时间：2</div>
                        </div>
                      </div>
                      <div class="w-50">
                        <div class="item-info l-text-left">
                          <el-row class="w-100 l-row-center l-col-center">
                            <el-col :span="12" class="l-flex l-flex-col l-row-around l-col-center">
                              <div class="l-flex l-row-around l-col-center l-font-13 item-circle">200件</div>
                              <div class="font-bolder l-font-16 l-text-center circle-title-pd">实际日产</div>
                            </el-col>

                            <el-col :span="12" class="l-flex l-flex-col l-row-around l-col-center">
                              <el-progress type="circle" :percentage="80" :width="progressWidth"></el-progress>
                              <div class="font-bolder l-font-16 l-text-center circle-title-pd">日完成率</div>
                            </el-col>
                          </el-row>
                          <div class="item-info-text l-font-16">计划日产：500</div>
                          <div class="item-info-text l-font-16">计划完工：3</div>
                          <div class="item-info-text l-font-16">实际日产：200</div>
                          <div class="item-info-text l-font-16">实际节拍：3</div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </el-col>

            <el-col class="h-100" :span="16">
              <div style="width:100%;height:100%;">
                <div class="rect-taps-blue">
                  <div class="rect-taps-white">
                    <!-- 图表标题部分 -->
                    <div class="item-title">
                      <div class="rect-taps-title">
                        <div class="font-bolder l-font-20 l-text-center item-title-pd">日产柱状图</div>
                      </div>
                    </div>
                    <!-- 图表信息部分 -->
                    <div id="echart2" style="width: 100%;height:90%;" ref="echart2"></div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row class="w-100 h-30">

            <el-col class="h-100" :span="8">
              <div style="width:95%;">
                <div class="rect-taps-blue">
                  <div class="rect-taps-white">
                    <!-- 子模块标题部分 -->
                    <div class="item-title">
                      <div class="rect-taps-title">
                        <div class="font-bolder l-font-20 l-text-center item-title-pd">产品名称</div>
                      </div>
                    </div>
                    <div class="l-flex">
                      <div class="w-50">
                        <img src="../assets/logo.png" alt="" srcset="" width="90%" height="88px">
                        <!-- 子模块信息部分 -->
                        <div class="item-info l-text-left">
                          <div class="item-info-text l-font-16">产品ID：ID900000</div>
                          <div class="item-info-text l-font-16">规格型号：ZH89909</div>
                          <div class="item-info-text l-font-16">计划总产：1000</div>
                          <div class="item-info-text l-font-16">节拍时间：2</div>
                        </div>
                      </div>
                      <div class="w-50">
                        <div class="item-info l-text-left">
                          <el-row class="w-100 l-row-center l-col-center">
                            <el-col :span="12" class="l-flex l-flex-col l-row-around l-col-center">
                              <div class="l-flex l-row-around l-col-center l-font-13 item-circle">200件</div>
                              <div class="font-bolder l-font-16 l-text-center circle-title-pd">实际日产</div>
                            </el-col>

                            <el-col :span="12" class="l-flex l-flex-col l-row-around l-col-center">
                              <el-progress type="circle" :percentage="80" :width="progressWidth"></el-progress>
                              <div class="font-bolder l-font-16 l-text-center circle-title-pd">日完成率</div>
                            </el-col>
                          </el-row>
                          <div class="item-info-text l-font-16">计划日产：500</div>
                          <div class="item-info-text l-font-16">计划完工：3</div>
                          <div class="item-info-text l-font-16">实际日产：200</div>
                          <div class="item-info-text l-font-16">实际节拍：3</div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </el-col>

            <el-col class="h-100" :span="16">
              <div style="width:100%;height:100%;">
                <div class="rect-taps-blue">
                  <div class="rect-taps-white">
                    <!-- 图表标题部分 -->
                    <div class="item-title">
                      <div class="rect-taps-title">
                        <div class="font-bolder l-font-20 l-text-center item-title-pd">日产柱状图</div>
                      </div>
                    </div>
                    <!-- 图表信息部分 -->
                    <div id="echart2" style="width: 100%;height:90%;" ref="echart2"></div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>

				  <!-- 面板下面部分信息 -->
          <!-- <el-row class="w-100 h-30">
            <el-col class="h-100" :span="8">
              <div style="width:584px;">
                <div class="rect-taps-blue">
                  <div class="rect-taps-white">
                    子模块标题部分
                    <div class="item-title">
                      <div class="rect-taps-title">
                        <div class="font-bolder l-font-20 l-text-center item-title-pd">机器人信息</div>
                      </div>
                    </div>
                    <div class="l-flex">
                      <div class="w-50">
                        <img src="../assets/logo.png" alt="" srcset="" width="90%" height="130px">
                        子模块信息部分
                        <div class="item-info l-text-left">
                          <div class="item-info-text l-font-16">实时位置：X:0 Y:0 Z:0</div>
                          <div class="item-info-text l-font-16">操作模式：自动</div>
                          <div class="item-info-text l-font-16">链接状态：<font class="text-warn">脱机</font></div>
                          <div class="item-info-text l-font-16">运行状态：<font class="text-warn">停机</font></div>
                          <div class="item-info-text l-font-16">速度倍率：20%</div>
                        </div>
                      </div>
                      <div class="w-50">
                        <div class="item-info l-text-left">
                          <el-row class="w-100 l-row-center l-col-center">
                            <el-col :span="24" class="l-flex l-flex-col l-row-around l-col-center">
                              <div class="l-flex l-row-around l-col-center l-font-13 item-circle">200件</div>
                              <div class="font-bolder l-font-16 l-text-center circle-title-pd">总产</div>
                            </el-col>
                          </el-row>
                          <div class="item-info-text l-font-16">加工节拍：0s</div>
                          <div class="item-info-text l-font-16">停机次数：0次</div>
                          <div class="item-info-text l-font-16">生产数量：700个</div>
                          <div class="item-info-text l-font-16">停机状态：0
                            <div>停机状态：</div>
                            <icon name="green" scale="2"></icon>
                          </div>
                          <div class="item-info-text l-font-16">告警状态：80%</div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </el-col>

            <el-col class="h-100 l-flex l-flex-col l-row-around" :span="16">
              <div style="width:100%;height:378px;">
                <div class="rect-taps-blue">
                  <div class="rect-taps-white">
                    图表标题部分
                    <div class="item-title">
                      <div class="rect-taps-title">
                        <div class="font-bolder l-font-16 l-text-center item-title-pd">月产柱状图</div>
                      </div>
                    </div>
                    图表信息部分
                    <div id="echart1" style="width: 100%;height:340px;" ref="echart1"></div>
                  </div>
                </div>
              </div>

              
            </el-col>
          </el-row> -->
					
				</div>
			</div>
		</div>

		<!-- 底部信息 -->
		<div class="footer-wrap l-flex l-row-right l-col-center">
			<div>版权所有©www.dzics.com/大正工业机器人技术有限公司</div>
			<img src="../assets/logo.png" alt="" class="logo-img">
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data(){
    return {
      progressWidth: 66,
    }
  },
  components: {},
  mounted() {
    // this.handleChartDay()
    this.handleChartMounth()
  },
  methods:{
    handleChartDay(){
      var myChart = this.$echarts.init(document.getElementById('echart1'))
      var option = {
        color:["#FF6600","#0099FF"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['蒸发量', '降水量'],
            right:'10'
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '蒸发量',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 32.2, 32.6, 20.0, 6.4, 3.3],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '降水量',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 256.2, 48.7, 18.8, 6.0, 2.3],
                markPoint: {
                    data: [
                        {name: '年最高', value: 256.2, xAxis: 7, yAxis: 183},
                        {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
      }
      myChart.setOption(option)
    },
    handleChartMounth(){
      var myChart = this.$echarts.init(document.getElementById('echart2'))
      var option = {
        color:["#FF6600","#0099FF"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['蒸发量', '降水量'],
            left: '20'
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1', '2', '3', '4', '5', '6', '7']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '蒸发量',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 32.2, 32.6, 20.0, 6.4, 3.3,2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 32.2, 32.6, 20.0, 6.4, 3.3,, 76.7, 135.6, 32.2, 32.6, 20.0, 6.4, 3.3],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '降水量',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 256.2, 48.7, 18.8, 6.0, 2.3, 76.7, 135.6, 32.2, 32.6, 20.0, 6.4, 3.3,2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 256.2, 48.7, 18.8, 6.0, 2.3],
                markPoint: {
                    data: [
                        {name: '年最高', value: 256.2, xAxis: 7, yAxis: 183},
                        {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
      }
      myChart.setOption(option)
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
	padding: 16px 24px;
	/* 头部样式开始 */
	.header-wrap {
		position: relative;
		padding: 16px 0;
		.logo-img {
			width: 190px;
			height: 46px;
			position: absolute;
			top: 0;
			left: 0;
		}
		.dzics-title {
			font-size: 28px;
		}
	}
	/* 头部样式结束 */

	/* 内容样式开始 */
	.content-wrap {
		width: 100%;
		height: calc(100vh - 123px);
		height: -webkit-calc(100vh - 123px);
		height: -moz-calc(100vh - 123px);

		.panel-wrap{
			width: calc(100% - 60px);
			height:calc(100% - 60px);
			// background:rgb(243, 243, 243);
      margin:28px;
      
      /** 子模块标题样式 */
      .item-title{
        height:60px;
        .item-title-pd{
          padding-top: 24px;
        }
      }

      .circle-title-pd{
        padding: 6px 0 4px;
      }

      /**子模块信息模块样式 */
      .item-info{
        padding: 0 26px 20px;

        .item-info-text{
          padding: 3px 0;
          margin-top: 10px;
          border-bottom: 1px solid #b2b2b2;
        }

        .item-circle{
          width:54px;
          height:54px;
          border:6px solid #20A0FF;
          border-radius:50%;
        }
      }
		}
	}
	/* 内容样式结束 */

	/* 底部样式开始 */
	.footer-wrap {
		margin-top: 15px;
		.logo-img {
			width: 110px;
			height: 16px;
			margin-left: 12px;
		}
	}
	/* 底部样式结束 */
}
</style>

