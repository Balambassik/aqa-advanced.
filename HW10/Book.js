export default class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }

    set title(txt) {
        if (typeof txt !== "string") {
            console.log("Назва книги поввина бути рядком")
        }
        this._title = txt
    }
    set author(txt) {
        if (typeof txt !== "string") {
            console.log("Автор повинен бути рядком")
        }
        this._author = txt
    }
    set year(value) {
        if (typeof value !== "number") {
            console.log("Рік повинен бути числом")
        }
        this._year = value
    }


    printInfo() {
        console.log(this.title, this.author, this.year);
    }

    static oldestBook(books) {
        let oldest = books[0];

        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldest.year) {
                oldest = books[i]
            }
        }
        return oldest
    }
}
