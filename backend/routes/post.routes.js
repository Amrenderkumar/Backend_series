import express from 'express';
import  Data from '../models/post.model.js';


const router = express.Router();
router.post('/create_data', async (req, res) => {
  try {
    const data = await Data.create(req.body);

    res.status(201).json({
      message: "Data created successfully",
      data
    });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ message: "Error saving data" });
  }
});




export default router;