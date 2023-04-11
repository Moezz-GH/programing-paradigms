function RectArea(lenght, width) {
    return (lenght * width);
}

function View(event) {
    event.preventDefault();

    const Ilenght = document.getElementById('lenght').value;
    const Iwidth = document.getElementById('width').value;
    const area = RectArea(Ilenght, Iwidth);
    document.getElementById('rect_area').innerHTML = area;
}

function connectForm(formId, formSubmitHandler) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
  }

  connectForm('Calculation', View);  