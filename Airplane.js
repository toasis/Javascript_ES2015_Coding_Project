//availableAirplanes是包含两个对象的数组
let availableAirplanes = [{
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
  }
];
//飞行的必要条件
let flightRequirements = {
  requiredStaff: 4,
};
//满足飞行必要条件的判断语句
function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};
//使用forEach函数遍历数组availableAirplanes内的两个对象，forEach内部的匿名函数通过形参element['object.key']调用数组内部的具体值
function displayFuelCapacity() {
  availableAirplanes.forEach(function (element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();
//更为复杂，使用forEach函数遍历数组availableAirplanes内的两个对象，forEach内部的匿名函数通过形参element['object.key']调用数组内部的具体值后还执行了一个判断语句。
function displayStaffStatus() {
  availableAirplanes.forEach(function (element) {
    console.log(element.name +
      ' meets staff requirements:' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff)
    );
  });
}
displayStaffStatus();
