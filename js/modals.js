"use strict"

var loginButton = document.querySelector(".user-login");
var mapShowButton = document.querySelector(".find-us");
var loginBlock = document.querySelector(".modal-login");
var mapBlock = document.querySelector(".modal-map");
var closeModal = document.querySelector(".modal-close");
var closeMap = document.querySelector(".modal-close-map")



var openModal = function (button, modal, buttonClose) {
    if (modal) {
        
        button.addEventListener("click", function (e) {
            e.preventDefault();
            modal.classList.add("modal-show");
        });
        
        buttonClose.addEventListener("click", function (e) {
            e.preventDefault();
            modal.classList.remove("modal-show");
        });

        window.addEventListener('keydown', function (e) {
            e.keyCode === 27 && modal.classList.contains('modal-show') && modal.classList.remove('modal-show');
        });
    }
};


openModal(loginButton, loginBlock, closeModal);
openModal(mapShowButton, mapBlock, closeMap);