import app from "./app.js";
import connection from "./config/db.js";
app.listen(8080, () => {
  console.log("server setup completed");
});
