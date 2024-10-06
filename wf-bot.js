class WordFlow {
  constructor() {
    this.url = "https://cors-anywhere.herokuapp.com/https://scrabutility.com/TWL06.txt";
    this.validWords = new Set();

    this.submitButton = document.querySelector(".rounded-full.capitalize.text-white");
    this.refreshButton = [...document.getElementsByClassName("rounded-full capitalize text-black")].pop();

    this.refreshButton.addEventListener("click", () => console.log("refresh"));
  }

  async init() {
    const response = await fetch(this.url);
    const text = await response.text();
    this.validWords = new Set(text.split("\r\n"));
  }

  async play() {
    const button = (await this.submitLetters()) ? this.submitButton : this.refreshButton;
    button.click();
    setTimeout(() => this.play(), 3000);
  }

  async submitLetters() {
    const container = document.querySelector(".grid.grid-cols-6");
    const buttons = [...document.querySelectorAll(".grid.grid-cols-6 div button")];

    const letters = container.textContent.replace("?", "");
    const word = this.findValidWord(letters);
    console.log("submit:", letters, "->", word);

    if (!word) return false;

    for (const letter of word.substring(1)) {
      const button = buttons.find((button) => button.textContent.includes(letter));
      button.click();
    }

    return true;
  }

  findValidWord(letters) {
    const uniqueLetters = [...new Set(letters.split(""))];
    const initialLetters = document.querySelector(".w-10").textContent;
    return this.#buildWord(initialLetters, uniqueLetters.join(""));
  }

  #buildWord(currentWord, remainingLetters) {
    if (currentWord.length > 2 && this.validWords.has(currentWord)) {
      return currentWord;
    }

    for (let i = 0; i < remainingLetters.length; i++) {
      const newCurrentWord = currentWord + remainingLetters[i];
      const newRemainingLetters = remainingLetters.slice(0, i) + remainingLetters.slice(i + 1);
      const result = this.#buildWord(newCurrentWord, newRemainingLetters);
      if (result) return result;
    }

    return null;
  }
}

async function start() {
  const game = new WordFlow();
  await game.init();
  await game.play();
  return game;
}
