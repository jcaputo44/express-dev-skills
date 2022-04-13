const skills = [
    {id: 888, todo: 'HTML', done: true},
    {id: 333, todo: 'CSS', done: false},
    {id: 101010, todo: 'Java Script', done: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }