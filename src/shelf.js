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

function listTitles(shelf){
  list =[]
    for (i =0; i < shelf.length; i++){
      list.push(shelf[i]["title"])
     }
  return list.join(", ")
}

function searchShelf(shelf, title){
  //console.log('shelf',shelf)
  //console.log('book', title)
  //console.log(shelf[0][title])
  for (var i = 0; i < shelf.length; i++){
    if (shelf[i].title === title){
        return true
    }
  }
  return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};