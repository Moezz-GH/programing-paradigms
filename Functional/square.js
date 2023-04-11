function RectArea(side) {
    return (side * side);
}

function View(event) {
    event.preventDefault();

    const Iside = document.getElementById('side').value;
    const area = RectArea(Iside );
    document.getElementById('square_area').innerHTML = area;
}

function connectForm(formId, formSubmitHandler) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
  }

  connectForm('Calculation', View);  