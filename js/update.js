let id = new URLSearchParams(window.location.search).get("id")
const idImg = document.querySelector(".id-img");
const file = document.querySelector('input[type="file"]');
let form = document.querySelector('form');
let formImg = document.querySelector('.form-img');
let formName = document.querySelector('.form-name');
let formPrice = document.querySelector('.price');

fetch(`http://localhost:3000/boxs/${id}`)
    .then(res => res.json())
    .then(data => {
        idImg.src = data.image;
        formName.value = data.name;
        formPrice.value = data.price;
    })

file.addEventListener('input', (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            idImg.src = reader.result;
        }
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    axios.patch(`http://localhost:3000/boxs/${id}`, {
        image: idImg.src,
        name: formName.value,
        price: formPrice.value
    })
        .then(res => {
            console.log(res.data);
        })
})