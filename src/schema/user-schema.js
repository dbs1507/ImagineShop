import Mongoose from '../../db.js'

const userSchema = new Mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
    },
    {
        collection: 'Users',
        timestamp: true
    }

)

export default Mongoose.model('Users', userSchema, 'Users')