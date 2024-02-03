function shelfBook(book, sciFiShelf){
  if(book.genre==="sciFi" && sciFiShelf.length <= 2){
    sciFiShelf.unshift(book)
  }
    return sciFiShelf 
}

function unshelfBook(book, shelf){
  for( var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book)  {
          shelf.splice(i, 1)
          i--
    }
  }  
  return shelf
}

function listTitles(){

}

function searchShelf(){

}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};