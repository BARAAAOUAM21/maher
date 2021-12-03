const date = new Date()
const day = date.getDate()
const hour = date.getHours()

const logger =(req,res,next)=>{
     if (day>5|| hour<16|| hour>17) {
           res.send('<h1 style="text-align:center">SORRY<h1/>')
     }
     next()
}
module.exports=logger