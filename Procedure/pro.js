const form = document.getElementById('Calculation');

function calculate(event) {
  event.preventDefault();

        const base = document.getElementById('base').value;
    
    
        const height = document.getElementById('height').value;
        
        const triarea = 0.5 / base * height 
    
    document.getElementById('triangle_area').innerHTML =triarea;

 
}
  
    form.addEventListener('submit', calculate);