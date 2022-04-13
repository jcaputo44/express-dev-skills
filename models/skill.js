const skills = [
    {id: 888, skill: 'HTML', pass: true},
    {id: 333, skill: 'CSS', pass: false},
    {id: 101010, skill: 'Java Script', pass: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.pass = false;
    skills.push(skill);
  }
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }