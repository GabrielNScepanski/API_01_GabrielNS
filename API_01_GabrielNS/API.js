const express = require('expreess')
const mysql =require ('mysql2')
const cors= reuire ('cors')

const mysql_config = require ('./inc/mySql_config')
const functions = require('./inc/functions')

const API_AVALIABILITY = true
const API_VERSION = '1.0.0'

const app = express()
app.listen(3000,()=>{
    console.log("API está executanddo")
    
})

app.use((req,res,next)=>{
    if(API_AVALIABILITY){
        next()
    } else{
        res.json(functions.response('atenção', 'API está em manutenção. Sinto muito',0,null))
    }
})

const conection = mysql.createConection(mysql_config)
app.use(cors())

app.get('/',(req,res)=>{
    res.json(functions.response('sucesso', 'API está Rodando',0,null))
})
app.get('/tasks',(req,res)=>{
    conection.query('SLECT * FROM tasks', (err,rows))
})


app.get('/',(req,res)=>{
    res.json(functions.response('Atenção', 'Rota não encontrada',0,null))
})

