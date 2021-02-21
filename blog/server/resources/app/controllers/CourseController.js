const Course = require('../models/Course');

class CourseController {
  // [GET] '/courses'
  index(req, res, next) {
    Course.find({})
    // .then(els => console.log(els))
    .then(courses => res.render('pages/index', {courses})) // courses is a array obj
    .catch(next);
  }

  // [GET] /courses/:slug
  detail(req, res, next) {
    Course.findOne({ 'slug': req.params.slug })
    .then(course => {
      res.render('pages/courses/detail', {course});
      // res.json(course);
    })
    .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render('pages/courses/create');
  }

  // [POST] /courses/store
  store(req, res, next) {
    const dataForm = req.body;
    const course = new Course(dataForm);
    course.save()
    .then(() => res.redirect('/'))
    .catch(next);
  }
};

module.exports = new CourseController();