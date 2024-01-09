const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");

// Connect to mongoDB
mongoose
  .connect("mongodb://localhost:27017/exampleDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to MongoDB.");
  })
  .catch((err) => {
    console.log("Connection Failed.");
    console.log(err);
  });

// Define a schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  major: String,
  scholarship: { merit: Number, other: Number },
});

// Create a model for student
const Student = mongoose.model("Student", studentSchema);

// Do something as db.collection.XXX  in MongoDB shell
// //Create an object - insert one
// const Jennie = new Student({
//   name: "Jennie Brown",
//   age: 24,
//   major: "History",
//   scholarship: { merit: 600, other: 0 },
// });

// // Save object to database
// Jennie.save()
//   .then(() => {
//     console.log("Jennie has been save to DB.");
//   })
//   .catch((e) => {
//     console.log("Error has happed.");
//     console.log(e);
//   });

// middleware - use static files in "public" folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { classA });
});

app.listen(200, () => {
  console.log("Server is running at port 200.");
});
