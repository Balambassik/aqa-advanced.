const book = {
  title: "50 відтінків сірого",
  author: "Стівен Кінг",
  year: "2001",
};

book.title = "Темна Вежа";
book.author = "Джеф Безос";

const { title, author } = book;
console.log(title);
console.log(author);
