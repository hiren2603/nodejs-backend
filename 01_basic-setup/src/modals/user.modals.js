import mongoose  from 'mongoose'

const userSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone:{
        type: Number,
    },
    password:{
        type: String,
        required: [true, 'Password is Required']
    },
    avatar: {
        type: String,
    },
    refreshToken: {
        type: String
    },
    
}, 
{
    timestamps: true
}
)

export const User = mongoose.model('User', userSchema)