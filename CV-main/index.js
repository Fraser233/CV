function titleShowUp() {
  var showUp = document.getElementById("subtitleImg");
  let width = screen.width;

  if (width < 1080px)
    showUp.style.display = "block";
  else showUp.style.display = "none";
}
