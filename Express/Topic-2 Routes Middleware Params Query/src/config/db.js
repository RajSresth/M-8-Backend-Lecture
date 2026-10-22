import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Mongodb Connected ${conn.connection.host}:${conn.connection.port}`);
    } catch (error) {
        console.log("Mongodb Failed to Connect:",error);
        // Exit process with failure so your server knows the boot failed
        process.exit(1);
    }
}

export default connectDB;