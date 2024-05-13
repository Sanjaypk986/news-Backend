const express = require('express')
const { getAllArticles, getArticleById, addArtcile, updateArticleById, deleteArticleById } = require('../controllers/articleController')
const router = express.Router()

router.get('/', getAllArticles)

router.get('/:articleId', getArticleById)

router.post('/', addArtcile)

router.patch('/:articleId', updateArticleById)

router.delete('/:articleId', deleteArticleById)

module.exports = router