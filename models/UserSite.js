import mongoose from "mongoose";
const UserSiteSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    token: { type: String, default: null, unique: true }
});
export default mongoose.model("UserSite", UserSiteSchema);