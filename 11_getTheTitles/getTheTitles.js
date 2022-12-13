const getTheTitles = function() {
  const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
  ]
  var list = [];
  for(var i = 0;i < books.length; i++){
    list.push(books[i].title);
  }
  return list;
};

// Do not edit below this line
module.exports = getTheTitles;
