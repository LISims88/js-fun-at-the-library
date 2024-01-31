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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}