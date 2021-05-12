// 前台服务器
var MongoControl=require('./dbc').MongoControl
// 列表数据库
var listMongo=new MongoControl('jd','list') 
// 商品数据库
var goodsMongo=new MongoControl('jd','goods')
// 购物车数据库
var shoppingCart=new MongoControl('jd','shoppingCart')

const express=require('express')
const router=express.Router()

const bodyParser=require('body-parser')
const urlEncodedParser=bodyParser.urlencoded({extended:false})

router.get('/list',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    listMongo.find({},(err,result)=>{
        if(err){
            res.status(404).send('获取商品列表信息失败')
        }else{
            res.status(200).send(result)
        }
    })
})
router.post('/goods',urlEncodedParser,(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    // 接收前端传过来的数据
    // console.log(req.body)
    var {shopName}=req.body
    goodsMongo.find({classify:shopName},(err,result)=>{
        if(err){
            res.status.sned('获取对应商品信息失败')
        }else{
            res.status(200).send(result)
        }
    })
})
router.post('/getGood',urlEncodedParser,(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    var {id}=req.body
    goodsMongo.findById(id,(err,result)=>{
        if(err){
            res.status(404).send('查找对应id商品失败')
        }else{
            res.status(200).send(result)
        }
    })
})
router.post('/addShoppingCart',urlEncodedParser,(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    var {id}=req.body
    goodsMongo.findById(id,(err,result)=>{
        if(err){
            res.status(404).send('查找对应id商品失败')
        }else{
            // console.log(result)
            var obj=result[0]
            shoppingCart.insert(obj,(err,data)=>{
                if(err){
                    res.status(404).send('插入数据失败')
                }else{
                    res.send('插入数据成功！')
                }
            })
        }
    })
})
router.get('/getShoppingCart',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    shoppingCart.find({},(err,result)=>{
        if(err){
            res.status(404).send('查询购物车数据库失败')
        }else{
            res.status(200).send(result)
        }
    })
})
router.post('/deleteShoppingCart',urlEncodedParser,(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    var {id}=req.body
    // console.log(req.body)
    shoppingCart.removeById(id,(err,result)=>{
        if(err){
            res.status(404).send('删除购物车商品失败')
        }else{
            res.status(200).send('删除商品成功!')
        }
    })
})

module.exports=router