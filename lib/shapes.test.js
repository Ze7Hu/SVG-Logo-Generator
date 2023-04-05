const { Circle, Square, Triangle } = require ("./shapes.js");

describe('Circle',() => {
    it ('should return the line of code that makes a circle',() => {
    const shapes = new Circle();
    shapes.setColor("red");
    expect(shapes.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />')
    });
    });


describe('Square',() => {
    it ('should return a square',() => {
    const shapes = new Square();
    shapes.setColor("blue");
    expect(shapes.render()).toEqual(`<rect x="50" y="50" width="250" height="250" fill="blue"/>`)
    });
    });
  


describe('Triangle',() => {
    it('should return the line of code that makes a triangle',() => {
    const shapes = new Triangle();
    shapes.setColor("red");
expect(shapes.render()).toEqual(`<polygon points="150,18 244,182 56,182" fill="red"/>`)

    });
    });
