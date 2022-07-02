<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="SPU名称">{{ spu.spuName }}</el-form-item>
      <el-form-item label="SKU名称">
        <el-input v-model="skuInfo.skuName" placeholder="SKU名称" />
      </el-form-item>
      <el-form-item label="价格（元）">
        <el-input v-model="skuInfo.price" placeholder="价格（元）" type="number" />
      </el-form-item>
      <el-form-item label="重量（千克）">
        <el-input v-model="skuInfo.weight" placeholder="重量（千克）" />
      </el-form-item>
      <el-form-item label="规格描述">
        <el-input v-model="skuInfo.skuDesc" type="textarea" rows="4" />
      </el-form-item>
      <el-form-item label="平台属性">
        <el-form label-width="80px" inline>
          <el-form-item v-for="(attr,index) in attrInfoList" :key="index" :label="attr.attrName">
            <el-select v-model="attr.attrIdAndValueId" placeholder="请选择">
              <el-option v-for="(attrValue,index1) in attr.attrValueList" :key="index1" :label="attrValue.valueName" :value="`${attr.id}:${attrValue.id}`" />
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="销售属性">
        <el-form label-width="80px" inline>
          <el-form-item v-for="(saleAttr,index) in spuSaleAttrList" :key="index" :label="saleAttr.saleAttrName">
            <el-select v-model="saleAttr.attrIdAndValueId" placeholder="请选择">
              <el-option v-for="(saleAttrValue,index1) in saleAttr.spuSaleAttrValueList" :key="index1" :label="saleAttrValue.saleAttrName" :value="`${saleAttr.id}:${saleAttrValue.id}`" />
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="图片列表">
        <el-table border="" :data="spuImageList" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="80" />
          <el-table-column label="图片">
            <template slot-scope="{row,$index}">
              <img src="row.imgUrl" style="height:100px;width:100px"></img>
            </template>
          </el-table-column>
          <el-table-column label="名称" prop="imgName" />
          <el-table-column label="操作">
            <template slot-scope="{row,$index}">

              <el-button v-if="row.isDefault ==0 " type="primary" @click="changeDefault(row)">设置默认</el-button>
              <el-button v-else>默认</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spuImageList: [],
      spuSaleAttrList: [],
      attrInfoList: [],
      skuInfo: {
        category3Id: 0,
        spuId: 0,
        tmId: 0,
        skuName: '',
        price: 0,
        weight: '',
        skuDesc: '',
        skuDefaultImg: '',
        skuImageList: [],
        skuSaleAttrValueList: [],
        skuAttrValueList: []
      },
      spu: {},
      imgList: []
    }
  },
  methods: {
    // reqAddSku
    async save() {
      const { attrInfoList, skuInfo, spuSaleAttrList, imgList } = this
      // const arr = []
      // attrInfoList.forEach(item => {
      //   if (item.attrIdAndValueId) {
      //     const [attrId, valueId] = item.attrIdAndValueId.split(':')
      //     const obj = { valueId, attrId }
      //     arr.push(obj)
      //   }
      // })
      skuInfo.skuAttrValueList = attrInfoList.reduce((prev, item) => {
        if (item.attrIdAndValueId) {
          const [attrId, valueId] = item.attrIdAndValueId.split(':')
          prev.push({ attrId, valueId })
        }
        return prev
      }, [])

      skuInfo.skuSaleAttrValueList = spuSaleAttrList.reduce((prev, item) => {
        if (item.attrIdAndValueId) {
          const [saleAttrId, saleAttrValueId] = item.attrIdAndValueId.split(':')
          prev.push({ saleAttrId, saleAttrValueId })
        }
        return prev
      }, [])
      skuInfo.skuImageList = imgList.map(item => {
        return {
          imgName: item.imgName,
          imgUrl: item.imgUrl,
          isDefault: item.isDefault,
          spuImgId: item.id
        }
      })
      const result = await this.$API.spu.reqAddSku(skuInfo)
      if (result.code == 200) {
        console.log('----', result)
        this.$message({
          type: 'success',
          message: '添加SKU成功！'
        })
        this.$emit('changeScenes', 0)
      }
    },
    cancel() {
      this.$emit('changeScenes', 0)
      Object.assign(this._data, this.$options.data())
    },
    changeDefault(row) {
      this.spuImageList.forEach(item => {
        item.isDefault = 0
      })
      row.isDefault = 1
      this.skuInfo.skuDefaultImg = row.imgUrl
    },
    handleSelectionChange(params) {
      this.imgList = params
    },
    async getData(category1Id, category2Id, spu) {
      this.skuInfo.category3Id = spu.category3Id
      this.skuInfo.spuId = spu.id
      this.skuInfo.tmId = spu.tmId
      this.spu = spu
      const result = await this.$API.sku.reqSpuImageList(spu.id)
      if (result.code == 200) {
        // this.spuImageList = result.data
        const list = result.data
        list.forEach(item => {
          item.isDefault = 0
        })
        this.spuImageList = list
      }
      const result1 = await this.$API.sku.reqSpuSaleAttrList(spu.id)
      if (result1.code == 200) {
        this.spuSaleAttrList = result1.data
      }
      const result2 = await this.$API.sku.reqAttrInfoList(category1Id, category2Id, spu.category3Id)
      if (result2.code == 200) {
        this.attrInfoList = result2.data
      }
    }
  }

}
</script>

<style>

</style>
