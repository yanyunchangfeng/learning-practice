console.log('54435')
onmessage = function(e){
  console.log(e);
  var n = e.data;
  var bool  = isPrime(n);
  if(bool){
      postMessage(n+'是一个质数')
  }else{
      postMessage(n+"不是一个质数")
  }
}
function isPrime(num){
   var start = new Date();
   do {
       var now  = new Date();

   }while((now-start)<=5000);
   for(var i=2; i<num; i++){
    if(num%i===0){
      break;
    }
  }
  if(i===num){
    return true;
  }else {
    return false;
  }
}
