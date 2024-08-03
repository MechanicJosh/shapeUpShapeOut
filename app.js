class Shape{
    constructor(height = null, width = null){
        this.width = Number(width);
        this.height = Number(height);
    }    
    draw(){
        const shapeElement = document.createElement('div');
        shapeElement.classList.add('shape');

        shapeElement.style.width = `${this.width}px`;
        shapeElement.style.height = `${this.height}px`;
        shapeElement.style.position = 'absolute';
        shapeElement.style.opacity = 0.75;
        shapeElement.style.top = `${Math.random() * (600 - this.height)}px`;
        shapeElement.style.left = `${Math.random() * (600 - this.width)}px`;
        shapeElement.style.backgroundColor = this.color;

        shapeElement.addEventListener('click', () => this.describe());
        shapeElement.addEventListener('dblclick', () => shapeElement.remove());

        document.getElementById('shapeContainer').appendChild(shapeElement);
        this.element = shapeElement;
    }
    describe(){        
        document.getElementById('shapeNameOutput').value = this.name;
        document.getElementById('shapeWidthOutput').value = this.width;
        document.getElementById('shapeHeightOutput').value = this.height;
        document.getElementById('shapeRadiusOutput').value = 'N/A';
        document.getElementById('shapeAreaOutput').value = this.area();
        document.getElementById('shapePerimeterOutput').value = this.perimeter();
    }
}

const circleButton = document.getElementById('Circle');
circleButton.addEventListener('click', () => {
    const radiusInput = document.getElementById('circleInput').value;
    const circle = new Circle(radiusInput);
    const circleArea = circle.area();
    const circlePerimeter = circle.perimeter()
    circle.draw();
});

class Circle extends Shape{
    constructor(radius){
        super(radius * 2, radius * 2);
        this.radius = radius;
        this.color = 'purple'; 
        this.name = 'circle';
    }
    draw(){
        super.draw();
        this.element.style.backgroundColor = this.color; 
        this.element.style.borderRadius = '50%';
        
    }
    describe(){
        super.describe();
        document.getElementById('shapeRadiusOutput').value = this.radius;
    }
    area(){
        return Math.PI * (this.radius * this.radius);
    }
    perimeter(){
        return (2 * Math.PI * this.radius);
    }
}

class Square extends Shape{
    constructor(height){
        super(height);
        this.color = 'red';
        this.width = Number(height);
        this.name = 'square';
    }
    describe(){
        super.describe();
    }
    draw(){
        super.draw();
        this.element.style.backgroundColor = this.color;
    }
    area(){
        return this.height * this.height; 
    }
    perimeter(){
        return 4 * this.height;
    }
}

const squareButton = document.getElementById('Square');
squareButton.addEventListener('click', () => {
    const squareInput = document.getElementById('squareInput').value;
    const square = new Square(squareInput);
    const squareArea = square.area();
    const squarePerimeter = square.perimeter();
    square.draw();
});

const rectangleButton = document.getElementById('Rectangle');
rectangleButton.addEventListener('click', () => {
    const rectangleInputWidth = document.getElementById('rectangleInputWidth').value;
    const rectangleInputHeight = document.getElementById('rectangleInputHeight').value;
    const rectangle = new Rectangle(rectangleInputWidth, rectangleInputHeight);
    const rectangleArea = rectangle.area()
    const rectanglePerimeter = rectangle.perimeter();
    rectangle.draw();
});

class Rectangle extends Shape{
    constructor(width,height){
        super(width,height);
        this.color = 'green';
        this.name = 'rectangle';
    }
    draw(){
        super.draw();
        this.element.style.backgroundColor = this.color;
    }
    describe(){
        super.describe();
    }
    area(){
        return Number(this.width * this.height);
    }
    perimeter(){
        return (2 * (this.width + this.height));
    }
}

const triangleButton = document.getElementById('Triangle');
triangleButton.addEventListener('click', () => {
    const triangleInput = document.getElementById('triangleInput').value;
    const triangle = new Triangle(triangleInput);
    const triangleArea = triangle.area();
    const trianglePerimeter = triangle.perimeter();
    triangle.draw();
});

class Triangle extends Shape{
    constructor(height){
        super(height);
        this.width = Number(height);
        this.color = 'yellow';
        this.name = 'triangle';
    }
    draw(){
        const shapeElement = document.createElement('div');
        shapeElement.classList.add('shape');
        shapeElement.style.width = 0;
        shapeElement.style.height = 0;
        shapeElement.style.borderBottom = `${this.height}px solid ${this.color}`;
        shapeElement.style.borderLeft = `${this.height}px solid transparent`;
        shapeElement.style.position = 'absolute';
        shapeElement.style.opacity = 0.75;
        shapeElement.style.top = `${Math.random() * (600 - this.height)}px`;
        shapeElement.style.left = `${Math.random() * (600 - this.height)}px`;
        shapeElement.addEventListener('click', () => this.describe());
        shapeElement.addEventListener('dblclick', () => shapeElement.remove());

        document.getElementById('shapeContainer').appendChild(shapeElement);
        this.element = shapeElement;
    }
    describe(){
        super.describe();
    }
    area(){
        return (1/2) * this.height * this.height;
    }
    perimeter(){
        return 2 * this.height + (Math.sqrt(2)) * this.height;
    }
};