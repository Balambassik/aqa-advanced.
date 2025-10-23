import  Book  from './Book.js';

import EBook from './Ebook.js';

// Task 1 
const book1 = new Book("Лелека", "Леонід Кучма", 325)
const book2 = new Book("Зоряні війни", "Джордж Лукас", 1985)
const book3 = new Book("Як знайти себе", "Я", 2025)

book1.printInfo()
book2.printInfo()
book3.printInfo()
console.log("-------------------------------")
//Task 2
const ebook1 = new EBook("Лелека", "Леонід Кучма", 325, "MP3")
const ebook2 = new EBook("Зоряні війни", "Джордж Лукас", 1985, "PDF")
const ebook3 = new EBook("Як знайти себе", "Я", 2025, "PDF")


ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();
console.log("-------------------------------")
//Task 4
const AllBooks = [book1, book2, book3, ebook1, ebook2, ebook3]
const oldest = Book.oldestBook(AllBooks)
console.log("Найстаріша книга")
oldest.printInfo()
console.log("-------------------------------")
//Task 5
const newEbook = EBook.bookToEBook(book3, "PDF")
console.log("Електронна версія книги")
newEbook.printInfo()