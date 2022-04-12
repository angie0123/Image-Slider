class App {
  static createElement = (type, name) => {
    const element = document.createElement(type);
    if (name) element.classList.add(name);
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

  initContainer() {
    const container = App.createElement('div', 'container');
    document.body.append(container);
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
}

const app = new App();
app.initContainer();
app.initSlides();
