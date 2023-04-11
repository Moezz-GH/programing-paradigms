function RectArea(radius) {
    return 3.14*(radius * radius);
}

function View(event) {
    event.preventDefault();

    const Iradius = document.getElementById('radius').value;
    const area = RectArea(Iradius );
    document.getElementById('circle_area').innerHTML = area;
}

function connectForm(formId, formSubmitHandler) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
  }

  connectForm('Calculation', View);  