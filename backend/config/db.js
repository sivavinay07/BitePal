import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vinaynaidu255_db_user:XELILsDAODCS7ZQ5@cluster0.leisntq.mongodb.net/BitePal?appName=Cluster0').then(() => console.log("DB Connected"));
}
