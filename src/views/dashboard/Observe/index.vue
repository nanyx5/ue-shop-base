<template>
  <div>
    <el-card>
      <el-row :gutter="10">
        <el-col :span="12">
          <Search />
        </el-col>
        <el-col :span="12">
          <category />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Search from './Search'
import Category from './Category'

export default {
  components: {
    Category,
    Search
  }

}
</script>

<style>
.card__header{
border-bottom: 1px solid #EBEEF5;
}
</style>
