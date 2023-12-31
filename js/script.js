// To top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Section 3 JSON
let sec3Boxs = document.querySelector('.sec3-boxs');
let page = 8;

function getDataJson() {
    fetch('http://localhost:3000/boxs')
        .then(response => response.json())
        .then(data => {
            data.slice(page - 8, page).forEach(element => {
                sec3Boxs.innerHTML += `
            <div class="sec3-box">
            <img src="${element.image}" alt="Image">
            <p class="sec3-box-p1">${element.name}</p>
            <p class="sec3-box-p2">${element.price}</p>
            <div class = "sec3-box-btns">
            <button><a href = "./view.html?id=${element.id}">View Details</a></button>
            <button><a href = "./update.html?id=${element.id}">Update</a></button>
            <button onclick = "boxDelete(${element.id})">Delete</button>
            </div>
            <div class="sec3-box-hover">
            <p class="sec3-box-p3">+ ADD TO CART</p>
            <i class="bi bi-heart" onclick = "addFavorite(${element.id})""></i>
        </div>
        </div>`
            })
        })
}
getDataJson();


// Load More function
let loadMoreBtn = document.querySelector(".loadmore-btn");
loadMoreBtn.addEventListener('click', () => {
    page += 4;
    getDataJson();
})


// Boxs delete function
function boxDelete(id) {
    axios.delete(`http://localhost:3000/boxs/${id}`)
    window.location.reload();
}


// Add to Favorties Function
function addFavorite(id) {
    axios.get('http://localhost:3000/boxs/' + id)
        .then(res => {
            axios.post('http://localhost:3000/favorites', res.data)
        })
}



// Countdown Timer
const days = document.getElementById('day');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`April 19 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
    currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = m < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);

