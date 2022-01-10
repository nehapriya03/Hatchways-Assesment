const express = require("express");
const morgan = require("morgan");
const route = require("./routes/route");

const app = express();
const cors = require("cors");
app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("", route);

var project = "Hatchways";
var port = 9000;
app.listen(port, () => {
  console.log(`${project} is running at port ${port}`);
});
