/**
* File Created by wuxiaojun at 2018/7/18.
* Copyright 2016 CMCC Corporation Limited.
* All rights reserved.
*
* @Desc
* @author 吴小军 wuxiaojun@chmi.chinamobile.com
* @date 2018/7/18
* @version
*/
<template>
  <div :id="renderId" class="components-baidumap"></div>
</template>

<script>
import mapStyle from '@/assets/conf/mapStyle';

export default {
  template: '',
  name: 'baidu-map',
  data() {
    return {
      renderId: 'baidumap-visitorWarn',
      // 百度地图对象
      BMap: null,
      // 百度地图实例
      mapInst: null,
      // 初始化时的中心位置
      center: { lon: 103.93852, lat: 33.319881 },
    };
  },
  created() {
    this.BMap = window.BMap;
  },
  mounted() {
    this.initMap();
  },

  methods: {
    initMap() {
      const me = this;
      const BMap = me.BMap;
      const map = new BMap.Map(this.renderId, {
        minZoom: 9,
        maxZoom: 13
      });
      me.mapInst = map;

      // 初始化中间位置
      map.centerAndZoom(new BMap.Point(this.center.lon, this.center.lat), 11);
      // 设置地图样式模式
      // map.setMapStyle({ style: 'midnight' });
      map.setMapStyle({
        styleJson: mapStyle
      });
      // 设置边界区域
      map.enableScrollWheelZoom(true);
      this.setBoundry();
    },
    /**
     * 设置地图边界
     * @param districtName 区县名称
     */
    setBoundry(districtName = '九寨沟县') {
      const me = this;
      const BMap = this.BMap;
      const mapInst = me.mapInst;
      const boundry = new BMap.Boundary();
      boundry.get(districtName, (rs) => { // 获取行政区域
        const count = rs.boundaries.length; // 行政区域的点有多少个
        for (let i = 0; i < count; i += 1) {
          // 建立多边形覆盖物
          const ply = new BMap.Polygon(rs.boundaries[i], {
            strokeWeight: 2,
            strokeColor: '#1A8EEA',
            fillColor: '#3b4bc6'
          });
          // 添加覆盖物
          mapInst.addOverlay(ply);
          // 调整视野
          mapInst.setViewport(ply.getPath());
        }
      });
    }
  },
};
</script>

<style scoped lang="scss">
.components-baidumap{
  width: 100%;
  height: 100%;
}
</style>
