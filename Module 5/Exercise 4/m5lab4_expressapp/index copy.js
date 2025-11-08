import express, { json } from "express"; // import the express package
import friendRoutes from "./routes/friendRoutes.js";

const app = express(); // create a new app
const port = 3000; // change this to run the app on a different port - usually a 4 digit number

// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(json());

app.use("/", express.static("public"));
app.use("/friends", friendRoutes);

// Only start the server when not running tests
if (process.env.NODE_ENV !== "test") {
  // starts the backend app on the given port
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

export default app;
