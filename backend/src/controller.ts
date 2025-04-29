import {Request, Response, NextFunction} from 'express'
import * as dotenv from 'dotenv'
import { writeFile } from 'fs'
import fetch from 'node-fetch'

dotenv.config()
export default function getDatas(req:Request,res:Response){
    res.json({username:'asdasdasd',password:123456})
}
const baseurl = process.env.BASE_URL !
export function createShipmentRequest(req:Request,res:Response,next:NextFunction){
    if(!baseurl)
    {
        console.error('BASE_URL Not Defined')
    }
    const shipReqData = {
        userName:'reenorains@proton.me',
        password:"RWj_QiUf]5rFL}7",
        language:"EN",
        clientSystemId: '11003540413894000',
        sender:{
            clientId: "00000110035404138940000",
            phone1:{
                number:'0885131440'
            },
            clientName:"БОЖИДАР ДИМИТРОВ",
            email: "reenorains@proton.me",
        },
        recipient:{
            phone1:{
                number:"0887951217"
            },
            clientName: "EGIPTQNINA",
            email:"bozhidard1@icloud.com",
            privatePerson: true,
            pickupOfficeId:164,

        },
        service:{
            pickupDate: "2025-04-29",
            serviceId:505
        },
        content:{
            parcelsCount:1,
            totalWeight:0.12,
            contents:"DRUGS",
            package:"BOX",
        },
        payment:{
            courierServicePayer:"RECIPIENT"
        }
    }

    const siteSampleData={
        userName:'reenorains@proton.me',
        password:"RWj_QiUf]5rFL}7",
        language:"EN",
        countryId:100,
        postCode:6000
    }

    fetch(`${baseurl}/location/site`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json;charset=utf-8",
        },
        body:JSON.stringify(siteSampleData)
    })
    .then(rsl=>rsl.text())
    .then(fnl=>{console.log(fnl)})
    // .then(data=>{writeFile('./output',data,(cb)=>{
    //     console.log(`Finished writing:\n ${cb}`)
    // })})
    // .then(result=>{
    //     console.log(result)
        
    // })   
    .catch(err=>console.log('Error received:\n'+err))
}