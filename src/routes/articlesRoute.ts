import * as controller from '@src/controllers/articlesControllers';

const express = require('express');
const router = express.Router();

router.get('/create', controller.createNewArticle);
router.post('/create', controller.saveNewArticle);
router.get('/details/:id', controller.viewArticle);
router.get('/edit/:id', controller.editArticle);
router.put('/edit/:id', controller.saveArticle);
router.delete('/delete/:id', controller.deleteArticle);

export default router;
