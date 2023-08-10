const express =require('express')
const path =require('path')

const app =express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

 //for excepting url-encoded data as post request
 app.use(express.urlencoded({extended:false}))


 // routes
app.get("/",(req,res)=>{
    return res.render('home',{title:"HomePage"})
})

app.get("/task2",(req,res)=>{
    return res.render('task2',{title:"task2"})
})

app.get("/task3",(req,res)=>{
    return res.render('task3',{title:"task3"})
})

app.post("/textjson2",(req,res)=>{
    const request=req.body.jsoninput
    const data =JSON.parse(request)
    return res.send(data)
})

app.post("/textjson3",(req,res)=>{
    const request=req.body.jsoninput
    const data =JSON.parse(request)
    return res.render('responseDisplay',{
        title:"task3",
        data
    })
})



// server listening
const PORT=3000
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("server running at POrt : ",PORT)
})