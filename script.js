class App {
  static createElement = (type, ...args) => {
    const element = document.createElement(type);
    if (args) {
      [...args].forEach((arg) => {
        element.classList.add(arg);
      });
    }
    return element;
  };
  static getElement = (className) => {
    return document.querySelector(`.${className}`);
  };
  images = [
    './images/first.jpg',
    './images/second.jpg',
    './images/third.jpg',
    './images/fourth.jpg',
    './images/fifth.jpg',
  ];
  currentSlideIndex = this.images.length - 1; //starts off at images.fifth.jpg
  slideWidth = 600;

  initContainer() {
    const container = App.createElement('div', 'container');
    document.body.append(container);
  }

  initButtons() {
    const container = App.getElement('container');
    const prevBtn = App.createElement('div', 'button', 'previous');
    const nextBtn = App.createElement('div', 'button', 'next');
    container.append(prevBtn, nextBtn);
  }

  initSlides() {
    const slides = App.createElement('div', 'slides-container');
    this.images.forEach((image) => {
      const slide = App.createElement('div', 'slide');
      slide.style['background-image'] = `url(${image})`;
      slides.append(slide);
    });
    const container = App.getElement('container');
    container.append(slides);
  }

  nextSlide() {
    this.currentSlideIndex--;
    this.showSlide();
  }

  showSlide() {
    const slides = App.getElement('slides-container');
    const translatePx = this.currentSlideIndex * this.slideWidth;
    slides.setAttribute('style', `transform: translateX(-${translatePx}px)`);
  }

  prevSlide() {
    this.currentSlideIndex++;
    this.showSlide();
  }
}

const app = new App();
app.initContainer();
app.initSlides();
app.initButtons();
app.showSlide();
app.nextSlide();
app.prevSlide();
