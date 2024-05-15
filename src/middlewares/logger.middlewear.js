import fs from 'fs';
import winston from 'winston';
const fsPromise=fs.promises;

// async function log(logData){
//     try{
//         logData= `\n ${new Date().toString()} - ${logData }`;
//        await fsPromise.appendFile('log.txt', logData)
//     }
//     catch(err){
//         console.log(err);
//     }
// }

const logger=winston.createLogger({
    level:'info',
    format:winston.format.json(),
    defaultMeta:{service: 'request-logging'},
    transports:[
        new winston.transports.File({filename:'log.txt'})
    ]
})
const loggerMiddleWAre=async (req, res, next)=>{
    //1. log request body.
    if(!req.url.includes('signin')){
    const logData=`${req.url} - ${JSON.stringify(req.body)}`
    logger.info(logData);
    }
    next();
}

export default loggerMiddleWAre;