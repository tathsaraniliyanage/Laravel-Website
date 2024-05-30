             // Select all elements with the "i" tag and store them in a NodeList called "stars"
             const stars = document.querySelectorAll(".stars i");

             // Loop through the "stars" NodeList
             stars.forEach((star, index1) => {
               // Add an event listener that runs a function when the "click" event is triggered
               star.addEventListener("click", () => {
                 // Loop through the "stars" NodeList Again
                 stars.forEach((star, index2) => {
                   // Add the "active" class to the clicked star and any stars with a lower index
                   // and remove the "active" class from any stars with a higher index
                   index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
                 });
               });
             });
                
             
             
             
             
             
                
            const nav = document.querySelector('.nav')
            window.addEventListener('scroll', fixNav)
             
            function fixNav() {
                if(window.scrollY > nav.offsetHeight + 150) {
                      nav.classList.add('active')
                } else {
                      nav.classList.remove('active')
                }
                    
            }
             
             
             
             
             const panels = document.querySelectorAll('.panel')
             
             panels.forEach(panel => {
                 panel.addEventListener('click', () => {
                     removeActiveClasses()
                     panel.classList.add('active')
                 })
             })
             
             function removeActiveClasses() {
                 panels.forEach(panel => {
                     panel.classList.remove('active')
                 })
             }







            //  accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}