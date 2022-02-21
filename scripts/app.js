// Array, and other useful tools
const infoArray = [];
let iconTracker = false;

// Table buttons
const tableButtonsCollection = document.querySelectorAll(".table");
tableButtonsCollection.forEach(item => {
  item.addEventListener("click", (event) => {
    let itemData = item.dataset;
    if(itemData.iconx || itemData.icono) {
      
    } else {
      if(iconTracker) {
        item.dataset.iconx = "icon-x";
        let itemIcon = item.querySelector(".x");
        console.log(itemIcon);
        iconTracker = true;
      } else {
        item.dataset.icono = "icon-o";
        let itemIcon = item.querySelector(".o");
        console.log(itemIcon);
        iconTracker = false;
      }
    }
  });
});

