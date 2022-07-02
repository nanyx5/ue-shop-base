<template>
  <div ref="charts" class="charts">
    1
  </div>
</template>

<script>
// import echarts from 'echarts'
// import echarts from 'echarts'
import * as echarts from 'echarts'

export default {
  name: '',
  computed: {

  },
  mounted() {
    console.log('--', echarts)

    const lineCharts = echarts.init(this.$refs.charts)
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
</style>
