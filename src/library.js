const { should } = require("chai")

function createLibrary(name){
  var library = {
    name:name,
  }
  library.shelves = {fantasy:[], fiction:[], nonFiction:[]}
  
  return library
}

function addBook(library, book){
   if(book.genre ==="fantasy"){
    library.shelves.fantasy.push(book)
  } else if(book.genre === "nonFiction"){
    library.shelves.nonFiction.push(book)
  } else{
    library.shelves.fiction.push(book)
  }
  return library
}


function checkoutBook(library, title, genre) {
  for(var i = 0; i < library.shelves[genre].length; i++){
    if(title === library.shelves[genre][i].title){
       library.shelves[genre].splice(i,1);
       return `You have now checked out ${title} from the ${library.name}.`
      }
    }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`
}


function takeStock(library, genre ){
  var bookcount= []
  if(genre){
    for(var i = 0; i < library.shelves[genre].length; i++){
      bookcount.push(library.shelves[genre].length)
      }
    return `There are a total of ${library.shelves[genre].length} ${genre} books at the ${library.name}.`
  } else{
    return `There are a total of ${library.shelves.fantasy.length + library.shelves.fiction.length + library.shelves.nonFiction.length} books at the ${library.name}.`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
}