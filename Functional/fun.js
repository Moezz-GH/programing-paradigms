function TriangleArea(base, height) {
    return (0.5 / base * height);
}

function View(event) {
    event.preventDefault();

    const Ibase = document.getElementById('base').value;
    const Iheight = document.getElementById('height').value;
    const area = TriangleArea(Ibase, Iheight);
    document.getElementById('triangle_area').innerHTML = area;
}

function connectForm(formId, formSubmitHandler) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
  }

  connectForm('Calculation', View);  