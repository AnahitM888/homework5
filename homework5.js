//Impliment the following methods

//1. find() method

function customFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return array[i];
      }
    }
    return undefined;
  }
  
//2. map() method

Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

//3.function 

customFindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

//4. reduce() method

function customReduce(array, callback, initialValue) {
    let accumulator = initialValue === undefined ? array[0] : initialValue;
    
    for (let i = initialValue === undefined ? 1 : 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    
    return accumulator;
  }