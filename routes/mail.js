const express = require('express');
const router = express.Router();

router.post('/send',function(req,res,next){
    console.log('mail sent')
});

module.export=router;
