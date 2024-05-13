const express = require('express')
const { getAllAuthor, getAuthorById, updateAuthorById, deleteAuthorById } = require('../controllers/authorController')
const router = express.Router()

router.get('/', getAllAuthor)

router.get('/:articleId', getAuthorById)

router.post('/', addArtcile)

router.patch('/:articleId', updateAuthorById)

router.delete('/:articleId', deleteAuthorById)

module.exports = router