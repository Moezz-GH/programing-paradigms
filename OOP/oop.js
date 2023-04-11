class calculator {
    constructor(base, height,lenght,width,side,radius) {
    this.base = base;
    this.height = height;
    this.width= width;
    this.lenght= lenght;
    this.side= side;
    this.radius= radius;
    }

    calculateArea() {
    return 0.5 / this.base * this.height;
    
    }
    calculaterect() {
        return  this.lenght * this.width;
         }


         calculatesq() {
            return  this.side * this.side;
             }


             calculatecirc() {
                return  3.14 * (this.radius * this.radius);
                 }
}

class Form {
    constructor() {
        ////////////////////buttons////////////
    this.calculateButton = document.getElementById('calculatetriangle');
    this.rectangleButton = document.getElementById('calculaterectangle');
    this.squareButton = document.getElementById('calculatesquare');
    this.circleButton = document.getElementById('calculatecircle');
    //////////////////////triangle////////////////////
    this.BInput = document.getElementById('base');
    this.HInput = document.getElementById('height');
    // ///////////////////////rectangle///////////
    this.lInput = document.getElementById('length');
    this.WInput = document.getElementById('width');
    ////////////////////////////square//////////////////////
    this.SInput = document.getElementById('side');
    //////////////////////////////cicle//////////////////
    this.RInput = document.getElementById('radius');
    //////////////////////////outputs//////////////////////////////
    this.areaOutput = document.getElementById('triangle_area');
    this.rectOutput = document.getElementById('rectangle_area');
    this.squOutput = document.getElementById('square_area');
    this.cirOutput = document.getElementById('circle_area');
    this.areaCalculator = new calculator();
    this.calculateButton.addEventListener('click', (event) => {
        event.preventDefault();
        this.areaCalculator.base = this.BInput.value;
        this.areaCalculator.height = this.HInput.value;
    
        this.areaOutput.innerHTML = this.areaCalculator.calculateArea();
    });

    this.rectCalculator = new calculator();
        this.rectangleButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.rectCalculator.lenght = this.lInput.value;
        this.rectCalculator.width = this.WInput.value;
        this.rectOutput.innerHTML = this.rectCalculator.calculaterect();
    });
    this.sqCalculator = new calculator();
        this.squareButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.sqCalculator.side = this.SInput.value;
        this.squOutput.innerHTML = this.sqCalculator.calculatesq();
    });

    this.circleCalculator = new calculator();
        this.circleButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.circleCalculator.radius = this.RInput.value;
        this.cirOutput.innerHTML = this.circleCalculator.calculatecirc();
    });
}
}

    

document.addEventListener('DOMContentLoaded', () => {
    new Form();
});

