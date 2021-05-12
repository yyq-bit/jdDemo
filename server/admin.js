// 后台服务器
const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const urlEncodedParser=bodyParser.urlencoded({extended:false})

var MongoControl=require('./dbc').MongoControl
var goodsMongo=new MongoControl('jd','goods')

router.post('/addGoods',urlEncodedParser,(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    // console.log(req.body)
    var obj=req.body
    // console.log(obj)
    goodsMongo.insert(obj,(err,result)=>{
        if(err){
            res.status(404).send('添加商品失败')
        }else{
            res.status(200).send('添加商品成功！')
        }
    })
})

module.exports=router