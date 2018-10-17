const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// 连接地址
const url = 'mongodb://localhost:27017'

// 数据库名
const dbName = 'myproject'

// 使用connect方法连接到服务器
MongoClient.connect(url, (err, client) => {
    assert.equal(null, err)
    console.log("Connected successfully to server")
    
    const db = client.db(dbName)
    
    client.close()
})