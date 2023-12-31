let id = new URLSearchParams(window.location.search).get("id");
let sec3Boxs = document.querySelector('.sec3-boxs');


fetch(`http://localhost:3000/boxs/${id}`)
    .then(res => res.json())
    .then(data => {
        sec3Boxs.innerHTML += `
    <div class="sec3-box">
                <img src="${data.image}" alt="image">
                <p class="sec3-box-p1">${data.name}</p>
                <p class="sec3-box-p2">${data.price}</p>
                <div class="sec3-box-hover">
            <p class="sec3-box-p3">+ ADD TO CART</p>
            <i class="bi bi-heart"></i>
    </div>
    `
    });