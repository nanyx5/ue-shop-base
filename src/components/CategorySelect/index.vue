<template>
  <div>
    <el-form :inline="true" :model="cForm" class="demo-form-inline">
      <el-form-item label="一级分类">
        <el-select v-model="cForm.category1Id" placeholder="请选择" :disabled="show" @change="handler1">
          <el-option v-for="(c1,index) in list1" :key="index" :label="c1.name" :value="c1.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select v-model="cForm.category2Id" placeholder="请选择" :disabled="show" @change="handler2">
          <el-option v-for="(c2,index) in list2" :key="index" :label="c2.name" :value="c2.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select v-model="cForm.category3Id" placeholder="请选择" :disabled="show" @change="handler3">
          <el-option v-for="(c3,index) in list3" :key="index" :label="c3.name" :value="c3.id" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CategorySelect',
  props: ['show'],
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      cForm: {
        category1Id: '',
        category2Id: '',
        category3Id: ''
      }
    }
  },
  mounted() {
    this.getCategory1List()
  },
  methods: {
    async getCategory1List() {
      const result = await this.$API.attr.reqCategory1List()
      if (result.code == 200) {
        this.list1 = result.data
      }
    },
    async handler1() {
      const { category1Id } = this.cForm
      const result = await this.$API.attr.reqCategory2List(category1Id)
      this.cForm.category2Id = ''
      this.cForm.category3Id = ''
      this.list2 = []
      this.list3 = []
      this.$emit('getCategoryId', { categoryId: category1Id, level: 1 })
      if (result.code == 200) {
        this.list2 = result.data
      }
    },
    async handler2() {
      const { category2Id } = this.cForm
      const result = await this.$API.attr.reqCategory2List(category2Id)
      this.cForm.category3Id = ''
      this.list3 = []
      this.$emit('getCategoryId', { categoryId: category2Id, level: 2 })

      if (result.code == 200) {
        this.list3 = result.data
      }
    },
    handler3() {
      const { category3Id } = this.cForm
      this.$emit('getCategoryId', { categoryId: category3Id, level: 3 })
    }
  }
}
</script>

<style>

</style>
