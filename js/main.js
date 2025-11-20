function validateLogin(event) {
    event.preventDefault(); 

    const username = document.getElementById("uname").value.trim();
    const password = document.getElementById("pwd").value.trim();

    const validUser = "admin";
    const validPass = "1234";

    if (username === validUser && password === validPass) {
        window.location.href = "index.html";
    } else {
        showModal();
    }
}

function showModal() {
    document.querySelector(".modal").style.display = "block";
}

function dismissModal() {
    document.querySelector(".modal").style.display = "none";
}

let navOpen = false;

function toggleNav() {
    const nav = document.querySelector(".nav-sidebar");
    const button = document.querySelector(".btn-toggle-nav");
    const links = document.querySelectorAll(".nav-sidebar ul li a");

    if (!navOpen) {
        nav.style.width = "272px";
        button.style.transform = "rotate(90deg)";

        links.forEach(link => {
            link.style.opacity = "1";
        });

        navOpen = true;
    } else {
        nav.style.width = "50px";
        button.style.transform = "rotate(0deg)";

        links.forEach(link => {
            link.style.opacity = "0";
        });

        navOpen = false;
    }
}