import search from "./search";
import site from "./site";
import auth from "./auth";

export default function route(app) {
  // app.get("/", (req, res) => {
  //   return res.render("home");
  // });
  app.use("/auth", auth);
  // app.use("/search", search);
  // app.use("/", site);
}
