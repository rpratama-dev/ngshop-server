import express from 'express';
import path from 'path';
var router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../..', 'build', 'index.html'));
});
export default router;
