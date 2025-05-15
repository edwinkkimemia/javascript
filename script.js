document.getElementById('changeTextBtn').addEventListener('click', function() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'Text changed dynamically at ' + new Date().toLocaleTimeString() + '!';
});

document.getElementById('changeStyleBtn').addEventListener('click', function() {
    const textElement = document.getElementById('dynamicText');
    textElement.style.backgroundColor = '#e0f7fa';
    textElement.style.border = '2px solid #0288d1';
    textElement.style.padding = '15px';
});

let elementAdded = false;
document.getElementById('toggleElementBtn').addEventListener('click', function() {
    const container = document.getElementById('newElementContainer');
    if (!elementAdded) {
        const newElement = document.createElement('p');
        newElement.id = 'newElement';
        newElement.textContent = 'This is a new element added dynamically!';
        newElement.style.color = '#d32f2f';
        container.appendChild(newElement);
        elementAdded = true;
        this.textContent = 'Remove Element';
    } else {
        const newElement = document.getElementById('newElement');
        if (newElement) {
            newElement.remove();
            elementAdded = false;
            this.textContent = 'Add Element';
        }
    }
});