class Shape{
    constructor(name, height = null, width = null){
        this.name = name;
        this.width = width;
        this.height = height;
    }    
    draw(){
        const shapeElement = document.createElement('div');
        shapeElement.classList.add('shape');
        shapeElement.style.width = `${this.width}px`;
        shapeElement.style.height = `${this.height}px`;

        
        shapeElement.style.position = 'absolute';
        shapeElement.style.top = `${Math.random() * (600 - this.height)}px`;
        shapeElement.style.left = `${Math.random() * (600 - this.width)}px`;

        shapeElement.style.backgroundColor = this.color;

        shapeElement.addEventListener('click', () => this.describe());
        shapeElement.addEventListener('dblclick', () => shapeElement.remove());

        document.getElementById('shapeContainer').appendChild(shapeElement);
        this.element = shapeElement;
    }
}

const circleButton = document.getElementById('Circle');
circleButton.addEventListener('click', () => {
    const radiusInput = document.getElementById('circleInput').value;
    const circle = new Circle('circle', radiusInput);
    circle.draw();
});

class Circle extends Shape{
    constructor(name, radius){
        super(name, radius * 2, radius * 2);
        this.radius = radius;
        this.color = 'purple'; 
    }
    draw(){
        super.draw();
        this.element.style.backgroundColor = this.color; 
        this.element.style.borderRadius = '50%';
        
    }
    circleArea(){
        return Math.PI * (this.radius * this.radius);
    }
    circlePerimeter(){
        return 2 * Math.PI * this.radius;
    }
}

const squareButton = document.getElementById('Square');
squareButton.addEventListener('click', () => {
    const squareInput = document.getElementById('squareInput').value;
    const square = new Square('square', squareInput);
    square.draw();
});

class Square extends Shape{
    constructor(name,height){
        super(name, height);
        this.color = 'red';
        this.width = height;
    }
    draw(){
        super.draw();
        this.element.style.backgroundColor = this.color;
    }
    squareArea(){
        return this.height * this.height; 
    }
    squarePerimeter(){
        return 4 * this.height;
    }
}

const rectangleButton = document.getElementById('Rectangle');
rectangleButton.addEventListener('click', () => {
    const rectangleInputWidth = document.getElementById('rectangleInputWidth').value;
    const rectangleInputHeight = document.getElementById('rectangleInputHeight').value;
    const rectangle = new Rectangle('rectangle', rectangleInputWidth, rectangleInputHeight);
    rectangle.draw();
});

class Rectangle extends Shape{
    constructor(name,width,height){
        super(name,width,height);
        this.color = 'green';
    }
    draw(){
        super.draw();
        this.element.style.backgroundColor = this.color;
    }
    rectanlgeArea(){
        return this.width * this.height;
    }
    rectanglePerimeter(){
        return 2 * (this.width + this.height);
    }
}

const triangleButton = document.getElementById('Triangle');
triangleButton.addEventListener('click', () => {
    const triangleInput = document.getElementById('triangleInput').value;
    const triangle = new Triangle('triangle', triangleInput);
    triangle.draw();
});

class Triangle extends Shape{
    constructor(name, height){
        super(name,height);
        this.color = 'yellow';
    }
    draw(){
        const shapeElement = document.createElement('div');
        shapeElement.classList.add('shape');
        shapeElement.style.width = 0;
        shapeElement.style.height = 0;
        shapeElement.style.borderBottom = `${this.height}px solid ${this.color}`;
        shapeElement.style.borderLeft = `${this.height}px solid transparent`;
        shapeElement.style.position = 'absolute';
        shapeElement.style.top = `${Math.random() * (600 - this.height)}px`;
        shapeElement.style.left = `${Math.random() * (600 - this.width)}px`;
        shapeElement.addEventListener('click', () => this.describe());
        shapeElement.addEventListener('dblclick', () => shapeElement.remove());

        document.getElementById('shapeContainer').appendChild(shapeElement);
        this.element = shapeElement;
    }
    triangleArea(){
        return (1/2) * this.height * this.height;
    }
    trianglePerimeter(){
        return 2 * this.height + (Math.sqrt(2)) * this.height;
    }

}





// const myCircle = new Circle('circle',50);
// const circarea = myCircle.circleArea();
// const circPerimeter = myCircle.circlePerimeter();
// console.log(myCircle, circarea, circPerimeter);

// const myRectangle = new Rectangle('rectangle', 10, 5);
// const recArea = myRectangle.rectanlgeArea();
// const recPerimeter = myRectangle.rectanglePerimeter();
// console.log(myRectangle, recArea, recPerimeter);

// const mySquare = new Square('square',5);
// const sqArea = mySquare.squareArea();
// const sqPerimeter = mySquare.squarePerimeter();
// console.log(mySquare, sqArea, sqPerimeter);

// const myTriangle = new Triangle('triangle', 10);
// const triArea = myTriangle.triangleArea();
// const triPerimeter = myTriangle.trianglePerimeter();
// console.log(myTriangle, triArea, triPerimeter);