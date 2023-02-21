var http = require("http");
const PORT=8081
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  let url=req.url.split('?')[0]
  if(url=="/welcome"){
    res.writeHead(200,{"Content-type":"text/plain"})
    res.write("Wellcome to Dominos!")
    res.end()
  }
  else if(url == "/contact"){
    res.writeHead(200,{"Content-type":"application/json"})
    res.write(JSON.stringify({
        phone:'18602100000',
        email: 'guestcaredominos@jublfood.com' 
    }))
    res.end()
  }
  else{
    res.writeHead(404,{"Content-type":"text/plain"})
    res.end("404! Content not found")
  }
}
httpServer.listen(PORT,console.log(`server is running at port ${PORT}`))
module.exports = httpServer;