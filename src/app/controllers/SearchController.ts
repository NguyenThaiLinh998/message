class SearchController {
  index(req, res) {
    return res.render("search");
  }
  searchPostForm(req, res) {
    // console.log("req", req.body);
    return res.send({ alo: req.body.search });
  }
}
export default new SearchController();
