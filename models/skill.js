const skills = [
    {id: 888, skill: 'HTML', pass: true},
    {id: 333, skill: 'CSS', pass: false},
    {id: 101010, skill: 'Java Script', pass: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }