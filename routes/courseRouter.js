const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware')

router.route('/').get(courseController.getAllCourses)
router.route('/').post(roleMiddleware(['teacher', 'admin']), courseController.createCourse); //http://localhost:3000/course
router.route('/:slug').get(courseController.getCourse); 
router.route('/:slug').delete(courseController.deleteCourse); 
router.route('/enroll').post(courseController.enrollCourse)
router.route('/release').post(courseController.releaseCourse)

module.exports = router;
