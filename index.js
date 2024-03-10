var fa_bars = document.querySelector(".fa-bars");
fa_bars.addEventListener("click", function () {
    var _a;
    fa_bars.classList.toggle("fa-xmark");
    (_a = document.querySelector(".navBlock")) === null || _a === void 0 ? void 0 : _a.classList.toggle("active");
});
