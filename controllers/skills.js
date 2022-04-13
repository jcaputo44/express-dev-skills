const Skill = require('../models/skill');

module.exports = {
    index,
    show
  };
  
//   function index(req, res) {
//     const skills = Skill.getAll();
//     res.render('skills/index', { skills });
// };

  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
    });
  }