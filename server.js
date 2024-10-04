import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import players from "./routes/playersRouter.js";
import notFound from "./middleware/notFound.js";

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

// setup static folder
app.use(
  express.static(path.join(__dirname, "public"))
);

// Routes
app.use("/", players);

// middleware
// app.use(notFound);

app.listen(PORT, () =>
  console.log(
    `Server running on http://localhost:${PORT}`
  )
);
