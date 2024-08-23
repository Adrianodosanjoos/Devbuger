const {Router} = require ('express')

const router = new Router()

router.get ('/',(request, response) => {
    return response.status(200).json({message: 'hello world'})
})

module.exports = router