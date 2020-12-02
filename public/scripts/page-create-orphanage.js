//create map
const map = L.map('mapid').setView([-27.2169063,-49.6438079], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
});

//add photo field
function addPhotoField() {
    //take container of #images
    const container =  document.querySelector('#images');
    //take container to duplicate .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');
    //make clone of the last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);
    //check if the field is empty, if yes, do not add to the container of images
    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return
        //'return' in this case is for stop the reading lines of codes
    };
    //clean the field before add the container of images
    input.value = "";
    //add the clone to container of #images
    container.appendChild(newFieldContainer);
}

//delete field
function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length < 2) {
        //clear the field value
        span.parentNode.children[0].value = "";

        return
    };

    //delete field
    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event) {
    //remove the classe .active (from the buttons)
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active')
    /* if the arrow function have just one argument and one line of instruction, you can remove the () and {} */);

    //get the cliked button and add the classe .active in the button that was clicked
    const button = event.currentTarget;
    button.classList.add('active');
    //update the input hidden with the selected value
    const input = document.querySelector('[name="open_on_weekends"]')
    //check if is yes or not
    input.value = button.dataset.value;
}