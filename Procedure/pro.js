const form = document.getElementById('TriCalculation');
const form2 = document.getElementById('RectCalculation');
const form3 = document.getElementById('SquarCalculation');
const form4 = document.getElementById('CirCalculation');


function calculate(event) {
  event.preventDefault();

        const base = document.getElementById('base').value;
    
    
        const height = document.getElementById('height').value;
        
        const triarea = 0.5 / base * height 
    
    document.getElementById('triangle_area').innerHTML =triarea;


    ///////////////////////rectangle//////////////////////////

    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const recarea = length * width
    document.getElementById('rectangle_area').innerHTML =recarea;


     ///////////////////////square//////////////////////////

     const side = document.getElementById('side').value;
     const sidearea = side * side
     document.getElementById('square_area').innerHTML =sidearea;

      ///////////////////////circle//////////////////////////

      const radius = document.getElementById('radius').value;
      const circlearea = 3.14*(radius * radius)
      document.getElementById('circle_area').innerHTML =circlearea;


 
}
  
    form.addEventListener('submit', calculate);
    form2.addEventListener('submit', calculate);
    form3.addEventListener('submit', calculate);
    form4.addEventListener('submit', calculate);