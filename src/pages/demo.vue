<template>
<div class="wrapper">
  <baidu-map></baidu-map>
</div>
</template>
<script>
import BaiduMap from '@/components/baidu-map';

export default {
  components: {
    BaiduMap
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
  .wrapper{
    width: 100%;
    height: 100%;
  }
</style>
