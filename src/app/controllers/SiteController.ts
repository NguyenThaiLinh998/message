const Category = require("../models/Category");

class SiteController {
  home = async (req, res) => {
    // Category.find({}, function (err, cate) {
    //   if (!err) {
    //     console.log("cate", cate);
    //     return res.json(cate);
    //   }
    //   console.log("err", err);
    // });
    const getDataCategory = async () => {
      const data = await Category.find({}).exec();
      console.log("data", data);
      // return res.json(data);
      return data;
    };
    const newData = await getDataCategory();
    return res.json(newData);

    // return res.render("home");
  };
}
export default new SiteController();
