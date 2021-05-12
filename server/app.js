const express = require('express')
const app=express()

// 所有/接口的逻辑都由index.js去处理
app.use('/',require('./index'))
// 所有/admin接口的逻辑都由admin.js去处理
app.use('/admin',require('./admin.js'))

app.listen(4000)