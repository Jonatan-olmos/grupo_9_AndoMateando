var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieCheck = require('./middlewares/cookieCheck');
var indexRouter = require("./routes/index.routes");
var usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");
const transferLocals = require('./middlewares/transferLocals');
var app = express();

// view engine setup
app
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .use(methodOverride("_method"))
  .use(logger("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, "..", "public")))

  /* configuracion session */

  .use(
    session({
      secret: "Ando Mateando!!",
    })

  )

  /* --------------------- RUTAS ----------------- */
 

  .use("/", indexRouter)
  .use("/usuarios", usersRouter)
  .use("/productos", productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(cookieCheck)
.use(transferLocals);
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
