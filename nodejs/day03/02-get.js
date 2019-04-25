//使用get方法发送请求
var http = require('http');
var options = {
   hostname:'www.tmooc.cn',
   port:80,
   path:'/web/index_new.html',
}
var req = http.get(options,(res)=>{
//   console.log(res.statusCode)
//   console.log(JSON.stringify(res.headers));
//   res.on('data',chunk=>{
//       console.log(chunk.toString())
//   })
})
req.setTimeout(10000,() => {
    req.abort();
    console.log('请求超时，已终止请求')
});
req.on('error',(err)=>{
    console.log(`请求发生错误 :${err}`)
})
req.on('response',(res)=>{
    console.log(res)
    res.on('data',chunk=>{
        console.log(chunk.toString())
    })
})