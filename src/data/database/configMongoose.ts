import mongoose from "mongoose";
import config from "../../config";
import Letter from "../models/Letter";
import User from "../models/User";

const configMongoose = async () => {
  if (process.env.MODE_ENV !== "production") {
    mongoose.set("debug", true);
  }

  mongoose.connect(
    config.mongoURI,
    {
      autoCreate: true,
    },
    (error) => {
      if (error) {
        console.log("MongoDB Init Error", error);
      } else {
        console.log("MonogDB Init Success!!");
      }
    }
  );

  User.createCollection().then(function (collection) {
    console.log("User Collection is Created");
  });
  Letter.createCollection().then(function (collection) {
    console.log("Letter Collection is Created");
  });
};

mongoose.connection.on("error", (error) => {
  console.error("MongoDB Connection Error", error);
});
mongoose.connection.on("disconnected", () => {
  console.error("MongoDB Disconnected. Try Connect");
  configMongoose();
});

export default configMongoose;
