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
  <div>
    <div :id="renderId" class="components-baidumap"></div>
    <div id="result"></div>
  </div>

</template>

<script>
import mapStyle from '@/assets/conf/mapStyle';
import iconpath from '@/assets/image/location.png';

export default {
  name: 'baidu-map',
  data() {
    return {
      renderId: 'baidumap-visitorWarn',
      // 百度地图对象
      BMap: null,
      // 百度地图实例
      mapInst: null,
      // 初始化时的中心位置116.404, 39.915 lon: 104.092626, lat: 30.648106
      center: { lon: 116.404, lat: 39.915 },
      zoom: 14
    };
  },
  created() {
    this.BMap = window.BMap;
  },
  mounted() {
    this.initMap();
    const marker = this.drawMaker();
    const BMap = this.BMap;
    this.mapInst.addEventListener('click', (e) => {
      this.circleSearch('火锅', new BMap.Point(e.point.lng, e.point.lat));
    });
    // this.searchPlace('高升桥');
    // this.rectSearch('银行', this.mapInst.getBounds())
    this.mapInst.clearOverlays();
    this.drivingRoute();
    this.globalScene();
    this.getIpLocation();
  },

  methods: {
    initMap() {
      const me = this;
      const BMap = me.BMap;
      const map = new BMap.Map(this.renderId, {
        minZoom: 2,
        maxZoom: 20
      });
      me.mapInst = map;
      // 初始化中间位置
      map.centerAndZoom(new BMap.Point(this.center.lon, this.center.lat), this.zoom);
      // 设置地图样式模式
      // map.setMapStyle({ style: 'midnight' });
      // map.setMapStyle({
      //   styleJson: mapStyle
      // });
      // 设置边界区域
      map.enableScrollWheelZoom(true);
      this.setBoundry();
    },
    /**
     * 设置地图边界
     * @param districtName 区县名称
     */
    setBoundry(districtName = '四川省') {
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
          // mapInst.addOverlay(ply);
          // 调整视野
          // mapInst.setViewport(ply.getPath());
        }
      });
    },
    drawMaker() {
      const BMap = this.BMap;
      const point = new BMap.Point(103, 30);
      const icon = new BMap.Icon(iconpath, new BMap.Size(42, 50));
      const marker = new BMap.Marker(point, {
        icon
      });
      marker.enableDragging();
      this.mapInst.addOverlay(marker);
      return marker;
    },
    searchPlace(name, area = '四川') {
      const BMap = this.BMap;

      const local = new BMap.LocalSearch(area, {
        renderOptions: { map: this.mapInst },
        onMarkersSet: (pois) => {
          console.log(pois);
        }
      });
      local.search(name);
    },
    circleSearch(name, ponit) {
      const BMap = this.BMap;
      const local = new BMap.LocalSearch(this.mapInst, {
        renderOptions: {
          map: this.mapInst,
          autoViewport: true },
        onMarkersSet: (pois) => {
          console.log(pois);
        }
      });
      local.searchNearby(name, ponit);
    },
    rectSearch(name, boudery) {
      const BMap = this.BMap;
      const local = new BMap.LocalSearch(this.mapInst, {
        renderOptions: {
          map: this.mapInst,
          autoViewport: true },
        onMarkersSet: (pois) => {
          console.log(pois);
        }
      });
      local.searchInBounds(name, boudery);
    },
    drivingRoute() {
      const BMap = this.BMap;
      const transit = new BMap.DrivingRoute(this.mapInst, {
        renderOptions: {
          map: this.mapInst,
          panel: 'result',
          autoViewport: true
        },
        // policy: 0
      });
      transit.search(new BMap.Point(103, 30), new BMap.Point(104.092626, 30.648106));
    },
    globalScene() {
      const BMap = this.BMap;
      const stCtrl = new BMap.PanoramaControl();
      stCtrl.setOffset(new BMap.Size(20, 20));
      this.mapInst.addControl(stCtrl);
    },
    getIpLocation() {
      const BMap = this.BMap;
      const myCity = new BMap.LocalCity();
      myCity.get((result) => {
        const { center } = result;
        const point = new BMap.Point(center.lng, center.lat);
        const marker = new BMap.Marker(point);
        this.mapInst.addOverlay(marker);
      });
    }
  },
};
</script>

<style scoped lang="scss">
.components-baidumap{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
  #result{
    position: absolute;
    z-index: 2;
  }
</style>
