import mongoose from "mongoose";

mongoose.connect("mongodb+srv://douglas:123@douglas.pu9ir2l.mongodb.net/douglas-node");

let db = mongoose.connection;

export default db;