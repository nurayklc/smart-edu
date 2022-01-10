const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    req.flash('success', `${category.name} has been remove successfuly`);
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    req.flash('error', `Something happened!`);
    res.status(400).redirect('/users/dashboard');
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id)
    req.flash('success', `${category.name} has been remove successfuly`);
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    req.flash('error', `Something happened!`);
    res.status(400).redirect('/users/dashboard');
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findOne({id: req.params.id})
    category.name = req.body.name
    category.save()
    req.flash('success', `${category.name} has been update successfuly`);
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    req.flash('error', `Something happened!`);
    res.status(400).redirect('/users/dashboard');
  }
};