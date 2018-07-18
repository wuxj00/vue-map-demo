import _ from 'lodash';

const tooltip = {
  trigger: 'axis',
  axisPointer: {
    type: 'line',
    lineStyle: {
      color: '#637DD5',
      type: 'dashed'
    }
  },
  padding: [10, 20, 10, 20],
  backgroundColor: 'rgba(47,100,203,0.9)',
  textStyle: {
    fontSize: 18,
  },
  extraCssText: 'border-radius: 10px;'
};

const lineSeries = {
  type: 'line',
  symbolKeepAspect: true,
  symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAMAAADH72RtAAAAVFBMVEUlfOQAAAAmf+MmfOQnfOQnfOMnf+UmfeRCwtw3peAwlOMqhuMlfeMlgOkujOknfONGyNtExdxBwN5Av9s+tt45rt4mfeUofuUnfuIugOQkgORGy9tZCf+fAAAAG3RSTlOWAJSRbTwnh9ajlpM2EQWK8uTPz7qrfllPHByKmGeOAAAAZUlEQVQY02WQRQ7AMBDEHC4z5///bKOouayPlhZmUB+Ds0EH26lEMj6QOe5sOgrGJ/MY0Hs1rbWGsf+MhXaOiUrDqeiBJWY2MAMOmvjTgueCupgGnDRySm6W1+WHMoVM+rcxljZeyeMKUaWWW7QAAAAASUVORK5CYII=',
  symbolSize: 14,
  showAllSymbol: true,
  data: [],
  areaStyle: {
    normal: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: 'rgba(24,76,201,0.7)'
        }, {
          offset: 1,
          color: 'rgba(127,208,255,0.1)'
        }],
        globalCoord: false // 缺省为 false
      }
    }
  },
  itemStyle: {
    normal: {
      color: '#3189E5'
    }
  },
  lineStyle: {
    normal: {
      width: 3
    }
  }
};

const xAxis = {
  type: 'category',
  axisTick: {
    show: true,
    inside: true
  },
  boundaryGap: false,
  axisLine: {
    show: true,
    lineStyle: {
      color: 'rgba(118,146,255,0.3)',
      width: 1
    }
  },
  axisLabel: {
    inside: false,
    margin: 20,
    textStyle: {
      color: '#7692FF',
      fontWeight: 'normal',
      fontSize: 14
    },
    interval: 0
  },
  data: []
};

const yAxis = {
  type: 'value',
  axisTick: {
    show: false
  },
  axisLine: {
    show: true,
    lineStyle: {
      color: 'rgba(118,146,255,0.3)',
      width: 1
    }
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: 'rgba(255,255,255,0.1)',
      width: 1
    }
  },
  axisLabel: {
    margin: 10,
    textStyle: {
      color: '#7692FF',
      fontWeight: 'normal',
      fontSize: 14
    },
    verticalAlign: 'top'
  }
};

const pieOption = {
  tooltip: false,
  legend: {
    right: 0,
    bottom: 20,
    itemWidth: 10,
    itemHeight: 10,
    orient: 'vertical',
    textStyle: {
      color: '#7692FF',
      fontSize: 12
    }
  },
  color: [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [{
      offset: 0, color: '#5840F0'
    }, {
      offset: 1, color: '#9D19F8'
    }],
    globalCoord: false
  }, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [{
      offset: 0, color: '#740DBC'
    }, {
      offset: 1, color: '#FA53FC'
    }],
    globalCoord: false
  }, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [{
      offset: 0, color: '#0093FF'
    }, {
      offset: 1, color: '#0029F7'
    }],
    globalCoord: false
  }, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [{
      offset: 0, color: '#06861A'
    }, {
      offset: 1, color: '#16A924'
    }],
    globalCoord: false
  }, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [{
      offset: 0, color: '#FBDA1D'
    }, {
      offset: 1, color: '#F87D19'
    }],
    globalCoord: false
  }, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [{
      offset: 0, color: '#1DE9FB'
    }, {
      offset: 1, color: '#1972F8'
    }],
    globalCoord: false
  }],
};

const visualMap = {
  min: 0,
  max: 1000,
  calculable: true,
  inRange: {
    color: ['#01A634', '#06A8DA', '#0D3AFB', '#8738EF', '#C537E3']
  },
  textStyle: {
    color: '#fff'
  }
};

const getTooltip = option => Object.assign({}, tooltip, option);
const getLineSeries = option => Object.assign({}, lineSeries, option);
const getXAxis = option => Object.assign({}, xAxis, option);
const getYAxis = option => Object.assign({}, yAxis, option);

const getPieOption = option => _.defaultsDeep(option, pieOption);

const getVisualMap = option => _.defaults(option, visualMap);

export default {
  getTooltip,
  getLineSeries,
  getXAxis,
  getYAxis,
  getPieOption,
  getVisualMap
};
