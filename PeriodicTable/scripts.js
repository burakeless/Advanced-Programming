var elementDiv, modalDiv, elementContent, modalContent, elementPlaceHolder, periodicTable, columns, expandedTable, rows, headerEl, elements, modal;

periodicTable = document.querySelector('.periodic-table');
columns = document.querySelectorAll('.col');
expandedTable = document.querySelector('.expanded-table');
rows = document.querySelectorAll('.row');
headerEl = document.querySelector('h1');

elements.forEach(function(element) {

    elementContent = '<div class="element-symbol">' + element.symbol + '</div>' +
        '<div class="element-number">' + element.number + '</div>';

    modalContent = '<div class="modal-content">' +
        '<div class="modal-content-text"><p>' + element.name + '</p><p>' + element.type + '</p>'+
        '<div class="modal-content-weight">' + element.weight + '</div>' +
        '<div class="modal-content-number">' + element.number + '</div>' +
        '</div>';

    if (element.number === '57' || element.number === '89') {
        elementPlaceHolder = document.createElement('div');
        elementPlaceHolder.classList.add('outline');
    }

    elementDiv = document.createElement('div');
    elementDiv.classList.add('element');
    elementDiv.innerHTML = elementContent;

    modalDiv = document.createElement('div');
    modalDiv.className = 'modal';
    modalDiv.innerHTML = modalContent;

    elementType(element.type);

    elementPlacement(element.number);
});

elements = document.querySelectorAll('.element');

elements.forEach(function(element) {
    element.addEventListener('click', displayModal);
});

window.onresize = getWidth;
window.onload = getWidth;
window.onclick = closeModal;