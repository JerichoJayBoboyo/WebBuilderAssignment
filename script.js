const navBar = document.getElementById("nav");

function changeColor() {
  const element = document.querySelector("#book-appointment-section");
  const rect = element.getBoundingClientRect();
  const topPosition = rect.top + window.scrollY;

  console.log(
    `Element's top position relative to the document: ${topPosition}px`
  );

  if (topPosition > 750) {
    navBar.style.background = "#272727";
  } else {
    navBar.style.background = ""; // Reset to default or another color if needed
  }
}

// Call the function initially to set the color based on the initial position
changeColor();

// Add event listeners to respond to scrolling and resizing
window.addEventListener("scroll", changeColor);
window.addEventListener("resize", changeColor);

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("nav-links-cntr");
const bar = document.getElementById("bars");
const eks = document.getElementById("eks");

function toggleSidebar() {
  sidebar.classList.toggle("show");

  if (sidebar.classList.contains("show")) {
    bar.style.display = "none";
    eks.style.display = "flex";
  } else {
    bar.style.display = "flex";
    eks.style.display = "none";
  }
}
menuBtn.addEventListener("click", toggleSidebar);
