const average = (array) => {
  let som = 0;
  let result = 0;
  if (!array.length) {
    result = undefined;
  }
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      result = undefined;
      break;
    }
      som += array[i];
    
    result = Math.round(som / array.length);
  }
  return result;
};

module.exports = average;
