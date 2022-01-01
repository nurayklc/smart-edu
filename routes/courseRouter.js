const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.route('/').get(courseController.getAllCourses)
router.route('/').post(courseController.createCourse); //http://localhost:3000/course

module.exports = router;
