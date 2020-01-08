var express=require("express")
var app = express()

const PORT= process.env.PORT|| 3000

app.get('/', (req,res)=>{
    res.send("welcome bro!")
})
app.get('/main', (req,res)=>{
    res.json({
      thispage:  "This is the main main that is not the main!",
      MMMMM: true
    })
})
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });