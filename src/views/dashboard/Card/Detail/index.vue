<template>
  <div>
    <div class="card-header">
      <span>{{ title }}</span>
      <span>
        <i class="el-icon-info" />
      </span>
    </div>
    <div class="card-content">{{ count }}</div>
    <div class="card-charts">
      <slot name="charts">
        1
      </slot>
    </div>
    <div class="card-footer">
      <slot name="footer">
        footer
      </slot>
    </div>

  </div>
</template>

<script>
export default {
  props: ['title', 'count']

}
</script>

<style lang="scss">
.card-header{
  display: flex;
  justify-content: space-between;
  color:#d9d9d9;
  // font-size: 16px;
}
.card-content{
font-size: 30px;
padding: 10px 0;
}

.card-charts{
  height: 50px;
}

.card-footer{
  padding: 10px;
  border-top: 1px solid #eee;
}
</style>
