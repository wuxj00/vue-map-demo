/**
 * 预警观测点
 */
const fireObservationPoints = [
  {
    station: '观测点1',
    dryIndex: 30,
    temperature: 20,
    humidity: 70,
    radiance: 80,
    barometric: 101.325,
    longitude: 103.942971,
    latitude: 33.29039
  },
  {
    station: '观测点2',
    dryIndex: 34,
    temperature: 23,
    humidity: 66,
    radiance: 80,
    barometric: 101.300,
    longitude: 103.919209,
    latitude: 33.259344
  },
  {
    station: '观测点3',
    dryIndex: 32,
    temperature: 20,
    humidity: 68,
    radiance: 80,
    barometric: 101.324,
    longitude: 103.993933,
    latitude: 33.211685
  },
  {
    station: '观测点4',
    dryIndex: 31,
    temperature: 24,
    humidity: 80,
    radiance: 80,
    barometric: 101.222,
    longitude: 103.903104,
    latitude: 33.173758
  },
  {
    station: '观测点5',
    dryIndex: 36,
    temperature: 20,
    humidity: 64,
    radiance: 70,
    barometric: 101.234,
    longitude: 103.861433,
    latitude: 33.066397
  },
  {
    station: '观测点6',
    dryIndex: 37,
    temperature: 19,
    humidity: 63,
    radiance: 90,
    barometric: 101.325,
    longitude: 103.93174,
    latitude: 33.036283
  }
];

/**
 * 林火监管负责人
 */
const fireAdminList = [
  {
    phone: '18723415638',
    stphonetion: '9号监测站',
    person: '张三'
  },
  {
    phone: '18289563271',
    stphonetion: '8号监测站',
    person: '李四'
  },
  {
    phone: '18747429813',
    stphonetion: '7号监测站',
    person: '王二'
  },
  {
    phone: '18723415638',
    stphonetion: '6号监测站',
    person: '张三'
  },
  {
    phone: '18289563271',
    stphonetion: '5号监测站',
    person: '李四'
  },
  {
    phone: '18747429813',
    stphonetion: '4号监测站',
    person: '王二'
  },
  {
    phone: '18723415638',
    stphonetion: '3号监测站',
    person: '张三'
  },
  {
    phone: '18289563271',
    stphonetion: '10号监测站',
    person: '李四'
  },
  {
    phone: '18747429813',
    stphonetion: '11号监测站',
    person: '王二'
  },
  {
    phone: '18723415638',
    stphonetion: '12号监测站',
    person: '张三'
  },
  {
    phone: '18289563271',
    stphonetion: '13号监测站',
    person: '李四'
  },
  {
    phone: '18723415638',
    stphonetion: '14号监测站',
    person: '张三'
  },
  {
    phone: '18747429813',
    stphonetion: '15号监测站',
    person: '王二'
  },
  {
    phone: '18289563271',
    stphonetion: '16号监测站',
    person: '李四'
  },
  {
    phone: '18723415638',
    stphonetion: '9号监测站',
    person: '张三'
  },
  {
    phone: '18747429813',
    stphonetion: '8号监测站',
    person: '王二'
  },
  {
    phone: '18289563271',
    stphonetion: '7号监测站',
    person: '李四'
  },
  {
    phone: '18723415638',
    stphonetion: '6号监测站',
    person: '张三'
  },
  {
    phone: '18747429813',
    stphonetion: '5号监测站',
    person: '王二'
  },
  {
    phone: '18723415638',
    stphonetion: '4号监测站',
    person: '张三'
  },
  {
    phone: '18289563271',
    stphonetion: '3号监测站',
    person: '李四'
  },
  {
    phone: '18747429813',
    stphonetion: '10号监测站',
    person: '王二'
  },
  {
    phone: '18289563271',
    stphonetion: '11号监测站',
    person: '李四'
  },
  {
    phone: '18723415638',
    stphonetion: '12号监测站',
    person: '张三'
  },
  {
    phone: '18747429813',
    stphonetion: '13号监测站',
    person: '王二'
  },
  {
    phone: '18289563271',
    stphonetion: '14号监测站',
    person: '李四'
  },
  {
    phone: '18747429813',
    stphonetion: '15号监测站',
    person: '王二'
  },
  {
    phone: '18723415638',
    stphonetion: '16号监测站',
    person: '张三'
  }
];

/**
 * 林火预警报告
 */
const fireEmergencyReportList = [
  {
    date: '2018-05-08',
    station: '9号监测站',
    status: '已处理'
  },
  {
    date: '2018-05-07',
    station: '8号监测站',
    status: '处理中'
  },
  {
    date: '2018-05-06',
    station: '7号监测站',
    status: '已处理'
  },
  {
    date: '2018-05-05',
    station: '6号监测站',
    status: '未处理'
  },
  {
    date: '2018-05-04',
    station: '5号监测站',
    status: '已处理'
  },
  {
    date: '2018-05-03',
    station: '4号监测站',
    status: '处理中'
  },
  {
    date: '2018-05-02',
    station: '3号监测站',
    status: '未处理'
  },
  {
    date: '2018-05-01',
    station: '10号监测站',
    status: '已处理'
  },
  {
    date: '2018-04-30',
    station: '11号监测站',
    status: '处理中'
  },
  {
    date: '2018-04-29',
    station: '12号监测站',
    status: '已处理'
  },
  {
    date: '2018-04-28',
    station: '13号监测站',
    status: '未处理'
  },
  {
    date: '2018-04-27',
    station: '14号监测站',
    status: '已处理'
  },
  {
    date: '2018-04-26',
    station: '15号监测站',
    status: '处理中'
  },
  {
    date: '2018-04-25',
    station: '16号监测站',
    status: '未处理'
  },
  {
    date: '2018-04-24',
    station: '9号监测站',
    status: '已处理'
  },
  {
    date: '2018-04-23',
    station: '8号监测站',
    status: '处理中'
  },
  {
    date: '2018-04-22',
    station: '7号监测站',
    status: '已处理'
  },
  {
    date: '2018-04-21',
    station: '6号监测站',
    status: '未处理'
  },
  {
    date: '2018-04-20',
    station: '5号监测站',
    status: '已处理'
  },
  {
    date: '2018-04-19',
    station: '4号监测站',
    status: '处理中'
  },
  {
    date: '2018-04-18',
    station: '3号监测站',
    status: '未处理'
  },
  {
    date: '2018-04-17',
    station: '10号监测站',
    status: '已处理'
  },
  {
    date: '2018-04-16',
    station: '11号监测站',
    status: '处理中'
  },
  {
    date: '2018-04-15',
    station: '12号监测站',
    status: '已处理'
  },
  {
    date: '2018-04-14',
    station: '13号监测站',
    status: '未处理'
  },
  {
    date: '2018-04-13',
    station: '14号监测站',
    status: '已处理'
  },
  {
    date: '2018-04-12',
    station: '15号监测站',
    status: '处理中'
  },
  {
    date: '2018-04-11',
    station: '16号监测站',
    status: '未处理'
  }
];

module.exports = {
  // 预警观测点
  fireObservationPoints,
  // 林火监管负责人
  fireAdminList,
  // 林火预警报告
  fireEmergencyReportList
};
