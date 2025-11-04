function printWithWait(text, ms) {
  setTimeout(() => console.log(text), ms);
}

printWithWait("Hello World!", 1000);
