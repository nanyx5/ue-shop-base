<template>
  <div ref="charts" class="charts" />
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
        type: 'bar',
        data: [10, 15, 20, 22, 32, 15, 8, 11, 58, 65]
      }],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      },
      tooltip: {}
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
