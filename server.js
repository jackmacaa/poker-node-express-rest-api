import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import players from "./routes/playersRouter.js";
import notFound from "./middleware/notFound.js";
import { logger } from "./middleware/logger.js";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  methodOverride(function (req, res) {
    if (
      req.body &&
      typeof req.body === "object" &&
      "_method" in req.body
    ) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      console.log(method, req.body._method);
      delete req.body._method;
      return method;
    }
  })
);

// setup static folder
app.use(
  express.static(path.join(__dirname, "public"))
);

// middleware
// app.use(notFound);
app.use(logger);

// Routes
app.use("/", players);

app.listen(PORT, () =>
  console.log(
    `Server running on http://localhost:${PORT}`
  )
);
