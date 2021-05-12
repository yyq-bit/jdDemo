// 向数据库中插入一些商品
var MongoControl=require('./dbc').MongoControl
// console.log(MongoControl)
// 列表数据库
var listMongo=new MongoControl('jd','list') 
// 商品数据库
var goodsMongo=new MongoControl('jd','goods')
// 1.插入列表数据
// 京东超市,数码电器,京东服饰,京东生鲜,充值缴费,9.9拼
var list1={
    listImg:'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/195834/3/856/203215/608da1a4E98a5508e/efaf5de4c247fdd3.jpg!cr_1125x449_0_166!q70.jpg.dpg',
    listName:'京东超市',
    listIcon:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp'
}
var list2={
    listImg:'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/188964/32/1070/285747/608ef382Ecda0b85a/a414d0ef2e33001d.jpg!cr_1125x449_0_166!q70.jpg.dpg',
    listName:'数码电器',
    listIcon:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp'
}
var list3={
    listImg:'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/173079/12/4130/44595/6076e234E0a759428/d84e72f5888a81ab.jpg!cr_1053x420_4_0!q70.jpg.dpg',
    listName:'京东服饰',
    listIcon:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png.webp'
}
var list4={
    listImg:'http://m.360buyimg.com/babel/jfs/t1/193868/34/416/156952/608a1624E2f81798f/a29b2b23414e2cbe.png',
    listName:'京东生鲜',
    listIcon:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png.webp'
}
var list5={
    listImg:'http://m.360buyimg.com/babel/s1080x530_jfs/t1/193964/3/591/204542/608b8145E97de9917/2fb8df4f73d29bdc.jpg!q70.dpg.webp',
    listName:'充值缴费',
    listIcon:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp'
}
var list6={
    listImg:'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/172159/35/1016/148969/60619633Efe01a9b5/b7793e2df1a6a2c2.jpg!cr_1053x420_4_0!q70.jpg.dpg',
    listName:'9.9拼',
    listIcon:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/150351/19/14167/6853/5fed882dE195ef673/b2aa7d67e675baf8.png.webp'
}
// listMongo.insert(list6,function(err,res){
//     console.log(res)
// })

// 2.插入商品数据
var shop1={
    classify:'京东超市',
    shopName:'清风卷纸,原木纯品金装系列',
    shopImg:'http://img10.360buyimg.com/n2/s240x240_jfs/t1/157507/8/21238/183265/608b664bEb5e741d4/680dbc7f21ecffde.jpg!q70.jpg',
    price:'79.90',
}
var shop2={
    classify:'京东超市',
    shopName:'清风湿巾,EDI纯水系列',
    shopImg:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/116481/36/9172/64875/5ed74fa6E3b0a668c/19d8e598a8da9b88.jpg!q80.dpg.webp',
    price:'10.80',
}
var shop3={
    classify:'数码电器',
    shopName:'华为 Mate40 Pro 5G手机 亮黑色 全网通(8G+256G)碎屏险无线充套装',
    shopImg:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/165024/12/7251/176575/60330aa2E77d34b20/b206526908a9b07a.jpg!q80.dpg.webp',
    price:'7299.00',
}
var shop4={
    classify:'数码电器',
    shopName:'苏泊尔（SUPOR）电压力锅 智能触控 球釜双胆 开盖收汁 一键排压 SY-50YC9001Q 5L高压锅',
    shopImg:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/194824/13/612/165791/608bc0b9E552b6092/2eb553793277c31c.jpg!q80.dpg.webp',
    price:'308.00',
}
var shop5={
    classify:'京东服饰',
    shopName:'小西装外套女春秋',
    shopImg:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/127582/13/9414/93439/5f339f30E77a2b8d1/a57f720e1372a961.jpg!q80.dpg.webp',
    price:'168.00',
}
var shop6={
    classify:'京东生鲜',
    shopName:'良品铺子 酸奶果粒块 送礼送女友 蓝莓 草莓黄桃味 奶酪果干 零食54g',
    shopImg:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/186011/9/936/183784/60867410E98662091/98a9774fc1d8bd02.jpg!q80.dpg.webp',
    price:'32.90',
}
var shop7={
    classify:'9.9元拼',
    shopName:'温州特产传统手工桂花糕零食糕点下午茶甜点心250克/盒 原味250克',
    shopImg:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/134187/4/19049/153567/5fce091dE392cae79/84b34f01fd3c0e7f.jpg!q80.dpg.webp',
    price:'5',
}
var shop8={
    classify:'充值缴费',
    shopName:'辽宁联通手机话费充值100元 快充',
    shopImg:'http://m.360buyimg.com/mobilecms/s750x750_g13/M09/1C/12/rBEhU1MhjuMIAAAAAANf0RUxPa0AAKDAQH493cAA1_p267.jpg!q80.dpg.webp',
    price:'99.90',
}

// goodsMongo.insert(shop8,(err,res)=>{
//     console.log(res)
// })