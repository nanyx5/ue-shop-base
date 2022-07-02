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
        min: 0,
        max: 100
      },
      yAxis: {
        show: false,
        type: 'category'
      },
      series: [{
        type: 'bar',
        data: [78],
        barWidth: 10,
        showBackground: true,
        backgroundStyle: {
          color: '#eee'
        },
        label: {
          show: true,
          formatter: '|',
          position: 'right'
        }
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
