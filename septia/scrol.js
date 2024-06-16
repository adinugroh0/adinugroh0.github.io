window.addEventListener("scroll", muncul);
function muncul() {
  let elemens = document.querySelectorAll(".elemen");
  for (let i = 0; i < elemens.length; i++) {
    let tinggilayar = window.innerHeight;
    let jarakantarelemen = elemens[i].getBoundingClientRect().top;
    let ukuranscroll = 150;

    if (jarakantarelemen < tinggilayar - ukuranscroll) {
      elemens[i].classList.add("tampil");
    } else {
      elemens[i].classList.remove("tampil");
    }
  }
}
