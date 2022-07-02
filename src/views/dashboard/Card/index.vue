<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card><Detail title="总销售额" count="￥ 125">
          <template slot="charts">
            <span>周同比 35%</span>
            <span>日同比 35%</span>
          </template>
          <template slot="footer">
            <span>日销售额 ￥1234</span>
          </template>
        </Detail></el-card>
      </el-col>
      <el-col :span="6">
        <el-card><Detail title="访问量" count="125">
          <template slot="charts">
            <lineCharts />
          </template>
          <template slot="footer">
            <span>日销售额 ￥1234</span>
          </template>
        </Detail></el-card> </el-col>
      <el-col :span="6">
        <el-card><Detail title="支付笔数" count="125">
          <template slot="charts">
            <barCharts />
          </template>
          <template slot="footer">
            <span>日销售额 ￥1234</span>
          </template>
        </Detail></el-card> </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="运营活动效果" count="125">
            <template slot="charts">
              <progressCharts />
            </template>
            <template slot="footer">
              <span>日销售额 ￥1234</span>
            </template>
          </Detail></el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from './Detail'
import lineCharts from './lineChart'
import barCharts from './barChart'
import progressCharts from './progressChart'

export default {
  components: {
    Detail,
    lineCharts,
    barCharts,
    progressCharts
  }

}
</script>

<style>
</style>
