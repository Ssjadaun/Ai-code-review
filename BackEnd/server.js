require('dotenv').config()
const app = require('./src/app')



app.listen(3000, () => {
    console.log('Server is running on https://ai-code-review-backend-kpsv.onrender.com')
})