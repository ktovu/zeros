module.exports = function getZerosCount(number) {
  // your implementation
  var result = 0;

  do{
      var a = Math.floor(number/5);
      number = a;
      result += a;
  }while(a >= 5);

  return(result);
  
}
