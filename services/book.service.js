import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const bookService = {
    getBooks,
    getDefaultFilter
}

const STORAGE_KEY = 'booksDB'

_createDemoBooks()

function getBooks(filterBy = getDefaultFilter()){
    return storageService.query(STORAGE_KEY)
        .then(books => {
            if(filterBy.title) {
                const regex = new RegExp(filterBy.title, 'i')
                books = books.filter(book => regex.test(book.title))
            }
            return books
        })
}

function getDefaultFilter(){
    return {title: ''}
}

function _createDemoBooks() {
    let books = utilService.loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = [
            {
                "id": "AXeMG7wNskc",
                "title": "metus hendrerit",
                "description": "placerat nisi sodales suscipit tellus",
                "thumbnail": "http://ca.org/books-photos/20.jpg",
                "listPrice": { "amount": 109, "currencyCode": "EUR", "isOnSale": false }
            },
            {
                "id": "BXeMG8wNskc",
                "title": "harry potter",
                "description": "placerat nisi sodales suscipit tellus",
                "thumbnail": "http://ca.org/books-photos/20.jpg",
                "listPrice": { "amount": 109, "currencyCode": "EUR", "isOnSale": false }
            },
            {
                "id": "CXeMG9wNskc",
                "title": "The lord of the rings",
                "description": "placerat nisi sodales suscipit tellus",
                "thumbnail": "http://ca.org/books-photos/20.jpg",
                "listPrice": { "amount": 109, "currencyCode": "EUR", "isOnSale": false }
            }
        ]
    }
    utilService.saveToStorage(STORAGE_KEY, books)
}