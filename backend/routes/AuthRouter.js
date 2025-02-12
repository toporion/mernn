const router=require('express').Router();

router.post('/signup',(req,res)=>{
    res.send('Registration success')
})

module.exports= router;
