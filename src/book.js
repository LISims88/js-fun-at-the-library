function createTitle(bookTitle) {
  var bookIdea = bookTitle
  return `The ${bookIdea}`
}

function buildMainCharacter (name, age, pronouns){
  var character= {
    name:name,
    age:age,
    pronouns: pronouns
  }
  return character
}
function saveReview(review, reviews) {
  if (!reviews) {
    reviews = [];
  }
  for( i= 0; i < reviews.length; i++){
    if (reviews[i] === review){
      return review
    }
  }
  reviews.push(review);
  return reviews;
}

function calculatePageCount(title){
  var title = title.length * 20
  return title
}

function writeBook(bookTitle, character){
  var book = {
    title: bookTitle,
    mainCharacter: character,
    pageCount: calculatePageCount(bookTitle),
    genre: "fantasy"
  } 
  return book
}
function editBook(book){

}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}