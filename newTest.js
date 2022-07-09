function calc(x) {
    let arrayOfNumbers = [];

    for (let char of x) {
        arrayOfNumbers.push(char.charCodeAt());
    }

    let temp = arrayOfNumbers.join('');
    let temp2 = [...temp];
    let sumOfNumbersBefore = 0;

    for (let i of temp2) {
        sumOfNumbersBefore += +i;
    }

    for (let i of temp2) {
      if (i === '7') {
        temp2[temp2.indexOf(i)] = '1'
      }
    }

    let temp3 = temp2.join('');
    let temp4 = [...temp3];
    let sumOfNumbersAfter = 0;

    for (let i of temp4) {
        sumOfNumbersAfter += +i;
    }

    let result = sumOfNumbersBefore - sumOfNumbersAfter;

    return  result;
}

alert(calc('abcdef'));
alert(calc('ifkhchlhfd'));
alert(calc('aaaaaddddr'));
alert(calc('jfmgklf8hglbe'));
alert(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));