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

module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}