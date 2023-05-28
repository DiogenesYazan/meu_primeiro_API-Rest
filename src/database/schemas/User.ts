import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },  
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

User.pre("save", async function (next) {
    const hash = await bcryptjs.hash(this.password, 12);
    this.password = hash;
    next();
})

export default mongoose.model('User', User);