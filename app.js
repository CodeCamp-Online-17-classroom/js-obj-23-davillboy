// write code here
class Calculator {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(number) {
    this.value += number;
  }

  subtract(number) {
    this.value -= number;
  }

  multiply(number) {
    this.value *= number;
  }

  divide(number) {
    if (number === 0) {
      console.log('Cannot divide by zero!');
      return;
    }
    this.value /= number;
  }

  show() {
    alert('Current Value: ' + this.value);
  }
}

// กำหนดค่าเริ่มต้นเป็น 10
let calc = new Calculator(10);
calc.add(5); // 10 + 5 = 15
calc.subtract(3); // 15 - 3 = 12
calc.multiply(2); // 12 * 2 = 24
calc.divide(4); // 24 / 4 = 6
calc.show(); 
