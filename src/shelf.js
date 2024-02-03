function shelfBook(book, sciFiShelf){
  if(book.genre==="sciFi" && sciFiShelf.length <= 2){
    sciFiShelf.unshift(book)
  }
    return sciFiShelf 
}

function unshelfBook(){

}

function listTitles(){

}

function searchShelf(){

}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};