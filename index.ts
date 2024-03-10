const fa_bars = document.querySelector(".fa-bars")!;

fa_bars.addEventListener("click", () => {
  fa_bars.classList.toggle("fa-xmark");
  document.querySelector(".navBlock")?.classList.toggle("active");
});
