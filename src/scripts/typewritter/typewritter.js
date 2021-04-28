class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.textElement = txtElement;
    this.words = words;
    this.visibleText = '';
    this.currentIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const fullWord = this.words[this.currentIndex];

    if (this.isDeleting) {
      this.wait = 100;
      this.visibleText = this.visibleText.substring(
        0,
        this.visibleText.length - 1
      );
      this.textElement.textContent = this.visibleText;
    }

    if (!this.isDeleting) {
      this.wait = 200;
      this.visibleText = fullWord.substring(0, this.visibleText.length + 1);
      this.textElement.textContent = this.visibleText;
    }

    if (this.visibleText == fullWord) {
      this.wait = 1000;
      this.isDeleting = true;
    }

    if (this.visibleText.length == 0) {
      this.wait = 300;
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
    }

    setTimeout(() => this.type(), this.wait);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const domElem = document.getElementById('hero__typewritter');
  const words = JSON.parse(domElem.getAttribute('data-words'));

  const typewritter = new TypeWriter(domElem, words);
});
