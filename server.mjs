//#region 
import express from 'express'

const server = express();
const port = (process.env.PORT || 8080);
server.set('port', port);

//#endregion

server.use(express.static('public'));


//#region 
server.get("/", whenRootIsRequested);

server.get("/fact",retriveFact);


function retriveFact(request,respons,next){
    respons.send("A beard second is the avrage lenght of beard groth on a physesist in 1 second (about 4nm").end();
}


function whenRootIsRequested(request,res,next){

    res.status(200).send('Ja det er vår server').end();
    res.send("Foresten, glemte en ting");

    next();

}

//#endregion

//#region 
server.listen(server.get('port'), function () {
console.log('server running', server.get('port'));
});
//#endregion