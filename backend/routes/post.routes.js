import express from 'express';


const router = express.Router();


router.post('/create_data', async (req,res) => {
    req.body;
    res.send('Data created successfully');
    console.log(req.body);
    
})

export default router;