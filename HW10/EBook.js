import Book from "./Book.js";

export default class EBook extends Book {
  constructor(title, author, year, fileType) {
    super(title, author, year);
    this.fileType = fileType;
  }

  get fileType() {
    return this._fileType;
  }

  set fileType(txt) {
    const formatfile = ["MP3", "PDF"];
    if (!formatfile.includes(txt)) {
      console.log("Формат файлу повинен бути MP3 або PDF");
    }
    this._fileType = txt;
  }
  printInfo() {
    console.log(this.title, this.author, this.year, this.fileType);
  }

  static bookToEBook(book, fileType) {
    return new EBook(book.title, book.author, book.year, fileType);
  }
}
