<template>
  <div>
    <el-card>
      <div slot="header" class="card__header">
        <div class="cate-header">
          <span>销售额类别占比</span>
          <el-radio-group v-model="value">
            <el-radio-button label="全部渠道" />
            <el-radio-button label="线上" />
            <el-radio-button label="门店" />
          </el-radio-group>
        </div>
      </div>
      <div ref="charts" class="charts" />
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      value: ''
    }
  },
  mounted() {
    const lineCharts = echarts.init(this.$refs.charts)
    console.log('-+-', lineCharts)
    lineCharts.setOption(
      {
        title: {
          text: '视频',
          subtext: 1048,
          left: 'center',
          top: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'outsize'
            },
            labelLine: {
              show: true
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
    )
    lineCharts.on('mouseover', (params) => {
      const { name, value } = params.data
      lineCharts.setOption({
        title: {
          text: name,
          subtext: value
        }
      })
    })
  }

}
</script>

<style>
.cate-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.charts{
  width: 100%;
  height: 300px;
}
</style>
