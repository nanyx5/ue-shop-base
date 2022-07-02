<template>
  <div>
    <div class="header ">
      <span class="sarech-header"> 搜索用户数</span>
    </div>
    <div class="main">
      <span class="main-title">12321</span>
      <span class="main-content">17.1</span>
    </div>
    <div class="footer" style="height:100px">
      <div ref="charts" class="charts" />
    </div>
  </div></template>

<script>
// import echarts from 'echarts'
// import echarts from 'echarts'
import * as echarts from 'echarts'

export default {
  name: '',
  computed: {

  },
  mounted() {
    const lineCharts = echarts.init(this.$refs.charts)
    console.log('-+-', lineCharts)
    lineCharts.setOption({
      xAxis: {
        show: false,
        type: 'category'
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'line',
        data: [10, 15, 20, 22, 32, 15, 8, 11, 58, 65],
        itemStyle: {
          opacity: 0
        },
        lineStyle: {
          color: 'purple'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'purple'
              },
              {
                offset: 1,
                color: '#fff'
              }
            ],
            global: false
          }
        }
      }],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    })
  }
}
</script>

<style lang="scss" scoped>
 .charts{
  height: 100%;
  width: 100%;
 }

 .header{
  display: flex;
  align-items: center;
 }

 .search-header{
  margin-right: 20px;
 }

.main{
  margin: 10px 0;
}
 .main-title{
  margin-right: 30px;
 }

  .main-content{
  margin-right: 10px;
 }
</style>
