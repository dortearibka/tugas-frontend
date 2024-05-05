 window.onload = function() {
    const navbarItems = document.querySelectorAll('nav ul li');
    console.log(navbarItems); 
    navbarItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.textContent.trim() === "Apaan tuh?") {
          alert("Oops, di sini tidak ada apa-apa😄");
        }
      });
    });
  }