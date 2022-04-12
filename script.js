class App {
  static createElement = (type, name) => {
    const element = document.createElement(type);
    if (name) element.classList.add(name);
    return element;
  };
  static getElement = (className) => {
    return document.querySelector(`.${className}`);
  };

  initContainer() {
    const container = App.createElement('div', 'container');
    document.body.append(container);
  }

  initSlides() {
    const slides = App.createElement('div', 'slides-container');
    const container = App.getElement('container');
    container.append(slides);
  }
}

const app = new App();
app.initContainer();
app.initSlides();
