function toggleMenu() {
      const sidebar = document.getElementById("sidebar");
    	sidebar.classList.toggle("active");
    }
    
    document.addEventListener("click", function (e) {
    const sidebar = document.getElementById("sidebar");
    const burger = document.querySelector(".burger");

    /* Si la sidebar est ouverte
    	 ET que le clic n'est pas dans la sidebar
    	 ET que le clic n'est pas sur le burger */
    	 
    if (
      sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      sidebar.classList.remove("active");
    }
  });
  
  //MINIATURE
  
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
