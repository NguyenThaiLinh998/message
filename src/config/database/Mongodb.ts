import mongoose from "mongoose";

class Mongodb {
  connect = async () => {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/Message");
      console.log("connect success");
    } catch (error) {
      console.log("connect fail");
    }
  };
}
export default new Mongodb();
