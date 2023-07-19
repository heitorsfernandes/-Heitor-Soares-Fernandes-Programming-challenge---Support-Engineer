function extractingArray(data) {
    if (data.length === 0){
        return 'Array is empty'
    }

    const onlyStrings = [];
    const onlyNumbers = [];
  
    for (const element of data) {
      if (typeof element !== 'string' && typeof element !== 'number') {
        return 'Array must contain only numbers and strings';
      }
      if (typeof element === 'string') {
        onlyStrings.push(element);
      } if (typeof element === 'number'){
        onlyNumbers.push(element);
      }
    }
  
    const largestNumber = onlyNumbers.reduce((acc, current) => {
        return Math.max(acc, current);
      }, Number.NEGATIVE_INFINITY);
  
    return {
      arrayOfStrings: onlyStrings,
      arrayOfNumbers: onlyNumbers,
      largestNumber: largestNumber,
    };
  }

  
  
  
  
  