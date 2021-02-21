class SiteController {
  // [GET] '/'
  index(req, res) {
    res.render('pages/index');
  }
}

module.exports = new SiteController();