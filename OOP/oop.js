class Tricalculator {
    constructor(base, height) {
    this.base = base;
    this.height = height;
    }

    calculateArea() {
    return 0.5 / this.base * this.height;
    }
}

class Form {
    constructor() {
    this.calculateButton = document.getElementById('calculate');
    this.BInput = document.getElementById('base');
    this.HInput = document.getElementById('height');
    this.areaOutput = document.getElementById('triangle_area');
    this.areaCalculator = new Tricalculator();
    this.calculateButton.addEventListener('click', (event) => {
        event.preventDefault();
        this.areaCalculator.base = this.BInput.value;
        this.areaCalculator.height = this.HInput.value;
        this.areaOutput.innerHTML = this.areaCalculator.calculateArea();
    });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new Form();
});

