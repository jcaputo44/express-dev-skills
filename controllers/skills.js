const Skill = require('../models/skill');

module.exports = {
    index
  };
  
  function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
};

//   function index(req, res) {
//     res.render('skills/index', {
//       skills: Todo.getAll()
//     });
//   }