import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'
import getDatas, { createShipmentRequest } from './controller'
const app = express()

const port = 4444
app.use(cors({
    origin:'http://localhost:8100',
    credentials:false
}))
app.options(/.*/,cors({
    origin:"http://localhost:8100",
    credentials:false
}))
app.use(express.json())
// app.options('*',cors())


app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });

app.get('/jsondata',function(req:Request,res:Response,next:NextFunction){
  //getDatas(req,res)  
  createShipmentRequest(req,res,next)
})

app.listen(port,'localhost',()=>{
    console.log('listening on port ' + port)
})