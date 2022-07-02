import request from '@/utils/request'
// GET /admin/product/{page}/{limit}
export const reqSpuList = (page, limit, category3Id) => request({
  url: `/admin/product/${page}/${limit}`,
  params: { category3Id },
  method: 'get'
})
// GET /admin/product/getSpuById/{spuId}
export const reqSpu = (spuId) => request({
  url: `/admin/product/getSpuById/${spuId}`,
  method: 'get'
})

// GET /admin/product/baseTrademark/getTrademarkList
export const reqTrademarkList = () => request({
  url: `/admin/product/baseTrademark/getTrademarkList`,
  method: 'get'
})

// GET GET /admin/product/spuImageList/{spuId}
export const reqSpuImageList = (spuId) => request({
  url: `/admin/product/spuImageList/${spuId}`,
  method: 'get'
})

// GET /admin/product/baseSaleAttrList
export const reqBaseSaleAttrList = (spuId) => request({
  url: `/admin/product/baseSaleAttrList`,
  method: 'get'
})

// POST /admin/product/saveSpuInfo
export const reqAddOrUpdateSpu = (spuInfo) => {
  if (spuInfo.id) {
    return request({
      url: '/admin/product/updateSpuInfo',
      method: 'post',
      data: spuInfo
    })
  } else {
    return request({
      url: '/admin/product/saveSpuInfo',
      method: 'post',
      data: spuInfo
    })
  }
}

export const reqDeleteSpu = (spuId) => request({
  url: `/admin/product/deleSpu/${spuId}`,
  method: 'delete'
})

export const reqAddSku = (skuInfo) => request({
  url: `/admin/product/saveSkuInfo`,
  method: 'post',
  data: skuInfo
})

export const reqSkuList = (spuId) => request({
  url: `/admin/product/findBySpuId/${spuId}`,
  method: 'get'
})
