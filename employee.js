let salary = 100000;

let payGrades = {
  entryLevel: {
    taxMultiplier: .05,
    benefits: ['health'],
    minSalary: 10000,
    maxSalary: 49999
  },
  midLevel: {
    taxMultiplier: .1,
    benefits: ['health', 'housing'],
    minSalary: 50000,
    maxSalary: 99999
  },
  seniorLevel: {
    taxMultiplier: .2,
    benefits: ['health', 'housing', 'wellness', 'gym'],
    minSalary: 100000,
    maxSalary: 200000
  }
};
//在上述三个level key中间根据 salary 的情况执行不同的选择
function getCadre() {
  if (salary >= payGrades.entryLevel.minSalary && salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (salary >= payGrades.midLevel.minSalary && salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * salary;
}

function getBenefits() {
  return payGrades[getCadre()].benefits.join(', ');
}

function calculateBonus() {
  return .02 * salary;
}
//退还资格reimbursementCosts是一个固定值，取决于每个人的 employeeBenefits有几项
function reimbursementEligibility() {
  let reimbursementCosts = {
    health: 5000,
    housing: 8000,
    wellness: 6000,
    gym: 12000
  };
  let totalBenefitsValue = 0;
  let employeeBenefits = payGrades[getCadre()].benefits; //employeeBenefits也是一个数组
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}

function getEmployeeInformation(inputSalary) {
  salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
