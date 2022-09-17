const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
require("colors");
const connectDb = require("../config/db");
const { engine } = require("express-handlebars");
const app = express();
const sendEmail = require("./service/sendEmail");

dotenv.config({
  path: path.join(__dirname, "..", "config", ".env"),
});

app.use(express.static("public"));

// set template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./backend/views");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.get("/", (_, res) => {
  res.render("home");
});

app.get("/contact", (_, res) => {
  res.render("contact");
});

app.post("/send", async (req, res) => {
  try {
    await sendEmail(req.body);
    res.render("contact", {
      msg: "Form has been send",
    });
  } catch (error) {
    res.send(error.message);
  }
});

// app.post("/send", (req, res) => {
//   res.redirect("https://www.google.com");
// });

// app.post("/send", (req, res) => {
//   res.render("contact", {
//     msg: "Form has been send",
//   });
// });

// app.post("/send", (req, res) => {
//   console.log(req.body);
//   res.send("Form has been send");
// });

app.use("/api/v1", require("./routes/filmsRoutes"));

app.use("/users", require("./routes/usersRoutes"));

app.use(require("./middlewares/badUrlError"));
app.use(require("./middlewares/errorHandler"));

const { PORT } = process.env;

(async () => {
  await connectDb();
})();

app.listen(PORT, () => {
  console.log(`Hello in backend on port ${PORT}`.cyan);
});
