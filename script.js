const filterBtn = document.querySelector("#filterbtn");
const aboutBtn = document.querySelector("#aboutbtn");
const allbtn = document.getElementById('all');
const menuBack = document.getElementById('menu-back');
const aleitafilter =document.getElementById('aleitafilter');
const borisovfilter =document.getElementById('borisovfilter');
const chernigovfilter =document.getElementById('chernigovfilter');
const formantafilter =document.getElementById('formantafilter');
const jolanafilter =document.getElementById('jolanafilter');
const kavkazfilter =document.getElementById('kavkazfilter');
const lunacharskyfilter =document.getElementById('lunacharskyfilter');
const odessafilter =document.getElementById('odessafilter');
const tonikafilter =document.getElementById('tonikafilter');
const trembitafilter =document.getElementById('trembitafilter');
const uralfilter =document.getElementById('uralfilter');
const zhitomirfilter =document.getElementById('zhitomirfilter');
const electric =document.getElementById('electric');
const bass =document.getElementById('bass');
const acoustic =document.getElementById('acoustic');
const black =document.getElementById('black');
const brown =document.getElementById('brown');
const red =document.getElementById('red');
const sunburst =document.getElementById('sunburst');
const yellow =document.getElementById('yellow');
const gold =document.getElementById('gold');
const aluminum =document.getElementById('aluminum');
const fiftys =document.getElementById('50s');
const sixties =document.getElementById('60s');
const seventies =document.getElementById('70s');
const eighties =document.getElementById('80s');
const frostov =document.getElementById('f-rostov');
const fborisov =document.getElementById('f-borisov');
const fchernigov =document.getElementById('f-chernigov');
const fcremona =document.getElementById('f-cremona');
const fjolana =document.getElementById('f-jolana');
const flunacharsky =document.getElementById('f-lunacharsky');
const fordjonikidze =document.getElementById('f-ordjonikidze');
const ftrembita = document.getElementById('f-trembita');
const fural =document.getElementById('f-ural');
const fzhitomir =document.getElementById('f-zhitomir');



let guitars = [
    {
        "img": "aleita-1.png",
        "brand": "aleita",
        "type": "electric",
        "bodyColor": "black",
        "decade": "70s",
        "factory": "Rostov",
        "name": "aleita-1"
    },
    {
        "img": "aleita-2.png",
        "brand": "aleita",
        "type": "electric",
        "bodyColor": "black",
        "decade": "70s",
        "factory": "Rostov",
        "name": "aleita-2"
    },
    {
        "img": "borisov.png",
        "brand": "borisov",
        "type": "bass",
        "bodyColor": "brown",
        "decade": "80s",
        "factory": "Borisov",
        "name": "borisov"
    },
    {
        "img": "chernigov.png",
        "brand": "chernigov",
        "type": "electric",
        "bodyColor": "red",
        "decade": "70s",
        "factory": "Chernigov",
        "name": "chernigov"
    },
    {
        "img": "cremona.png",
        "brand": "cremona",
        "type": "electric",
        "bodyColor": "red",
        "factory": "Cremona (Czechoslovakia)",
        "name": "cremona"
    },
    {
        "img": "formanta-1.png",
        "brand": "formanta",
        "type": "electric",
        "bodyColor": "red",
        "decade": "80s",
        "factory": "Borisov",
        "name": "formanta-1"
    },
    {
        "img": "formanta-2.png",
        "brand": "formanta",
        "type": "electric",
        "bodyColor": "black",
        "decade": "80s",
        "factory": "Borisov",
        "name": "formanta-2"
    },
    {
        "img": "formanta-bass.png",
        "brand": "formanta",
        "type": "bass",
        "bodyColor": "black",
        "decade": "80s",
        "factory": "Borisov",
        "name": "formanta-bass"
    },
    {
        "img": "jolana.png",
        "brand": "jolana",
        "type": "electric",
        "bodyColor": "red",
        "decade": "60s",
        "factory": "Jolana (Czechoslovakia)",
        "name": "jolana"
    },
    {
        "img": "kavkaz-1.png",
        "brand": "kavkaz",
        "type": "bass",
        "bodyColor": "black",
        "decade": "70s",
        "factory": "Rostov",
        "name": "kavkaz-1"
    },
    {
        "img": "kavkaz-2.png",
        "brand": "kavkaz",
        "type": "bass",
        "bodyColor": "black",
        "decade": "70s",
        "factory": "Rostov",
        "name": "kavkaz-2"
    },
    {
        "img": "lunacharskaya.png",
        "brand": "lunacharsky",
        "type": "electric",
        "bodyColor": "sunburst",
        "decade": "70s",
        "factory": "Lunacharsky",
        "name": "lunacharskaya"
    },
    {
        "img": "odessa-1.png",
        "brand": "odessa",
        "type": "bass",
        "bodyColor": "sunburst",
        "decade": "80s",
        "factory": "Borisov",
        "name": "odessa-1"
    },
    {
        "img": "odessa-2.png",
        "brand": "odessa",
        "type": "bass",
        "bodyColor": "sunburst",
        "decade": "80s",
        "factory": "Borisov",
        "name": "odessa-2"
    },
    {
        "img": "tonika-1.png",
        "brand": "tonika",
        "type": "electric",
        "bodyColor": "black",
        "decade": "60s",
        "factory": "Rostov",
        "name": "tonika-1"
    },
    {
        "img": "tonika-2.png",
        "brand": "tonika",
        "type": "electric",
        "bodyColor": "yellow",
        "decade": "60s",
        "factory": "Ordjonikidze",
        "name": "tonika-2"
    },
    {
        "img": "tonika-3.png",
        "brand": "tonika",
        "type": "electric",
        "bodyColor": "black",
        "decade": "60s",
        "factory": "Ordjonikidze",
        "name": "tonika-3"
    },
    {
        "img": "trembita.png",
        "brand": "trembita",
        "type": "acoustic",
        "bodyColor": "gold",
        "decade": "50s",
        "factory": "Trembita (Lviv)",
        "name": "trembita"
    },
    {
        "img": "ural-1.png",
        "brand": "ural",
        "type": "bass",
        "bodyColor": "brown",
        "decade": "70s",
        "factory": "Ural (Sverdlovsk)",
        "name": "ural-1"
    },
    {
        "img": "ural-2.png",
        "brand": "ural",
        "type": "bass",
        "bodyColor": "brown",
        "decade": "70s",
        "factory": "Ural (Sverdlovsk)",
        "name": "ural-2"
    },
    {
        "img": "ural-guitar-1.png",
        "brand": "ural",
        "type": "electric",
        "bodyColor": "red",
        "decade": "80s",
        "factory": "Ural (Sverdlovsk)",
        "name": "ural-guitar-1"
    },
    {
        "img": "ural-guitar-2.png",
        "brand": "ural",
        "type": "electric",
        "bodyColor": "black",
        "decade": "70s",
        "factory": "Ural (Sverdlovsk)",
        "name": "ural-guitar-2"
    },
    {
        "img": "zhitomir-1.png",
        "brand": "zhitomir",
        "type": "acoustic",
        "bodyColor": "aluminum",
        "decade": "80s",
        "factory": "Zhitomir",
        "name": "zhitomir-1"
    },
    {
        "img": "zhitomir-2.png",
        "brand": "zhitomir",
        "type": "acoustic",
        "bodyColor": "aluminum",
        "decade": "80s",
        "factory": "Zhitomir",
        "name": "zhitomir-2"
    }
]
let placeholder = document.querySelector("#guitars");
let infoplaceholder = document.querySelector("#info-container")
  
    displayData(guitars);

    // Define displayData function
    function displayData(guitars) {
      placeholder.innerHTML = "";
      infoplaceholder.innerHTML = "";

      /*for loop cycles through each item in the array    */
      for (let guitar of guitars) {
        const itemElement = document.createElement("button");
        itemElement.innerHTML = `<button class="guitar"><div class="thumbnail"  data-guitar="${guitar.name}"><img src='guitars/${guitar.img}' alt='${guitar.name}'></div></div>`;
          
        placeholder.appendChild(itemElement);
          
        const iteminfo = document.createElement("div");
        iteminfo.innerHTML = `<div class="info" id="${guitar.name}"><div id="info-back" class="close"></div>
        <div class="pic">
            <img src="Guitars/color/${guitar.img}">
        </div>
        <div class="text">
            <h5>${guitar.brand}</h5>
            <p>
                type: ${guitar.type}<br>
                body color: ${guitar.bodyColor}<br>
                decade: ${guitar.decade}<br>
                factory: ${guitar.factory}<br>
                <br>
            </p>
            <button class="x close"><img src="x.png"></button>      
        </div>
    </div>`;
          
        infoplaceholder.appendChild(iteminfo);
      }
    }


function freezeBackground (){
    const background = document.querySelector('#crayon');
    
    background.classList.toggle('crayon');
    background.classList.toggle('crayon-paused');
    
    
}


function toggleFilterMenu() {
  const filterMenu = document.querySelector('#filter-menu');
    
  filterMenu.classList.toggle('filter-menu');
  filterMenu.classList.toggle('show-filter');
    
    const filter = document.querySelector('#filter');
    
    filter.classList.toggle('menu-item');
    filter.classList.toggle('menu-item-clicked');
    
    freezeBackground();
}


filterBtn.addEventListener('click', toggleFilterMenu);
menuBack.addEventListener('click', toggleFilterMenu);


allbtn.addEventListener('click', function() {
    
    displayData(guitars);
    toggleFilterMenu();
    
});

aleitafilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "aleita");
    displayData(filteredData);
    toggleFilterMenu();
});
borisovfilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "borisov");
    displayData(filteredData);
    toggleFilterMenu();
});
chernigovfilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "chernigov");
    displayData(filteredData);
    toggleFilterMenu();
});
cremonafilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "cremona");
    displayData(filteredData);
    toggleFilterMenu();
});
formantafilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "formanta");
    displayData(filteredData);
    toggleFilterMenu();
});
jolanafilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "jolana");
    displayData(filteredData);
    toggleFilterMenu();
});
kavkazfilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "kavkaz");
    displayData(filteredData);
    toggleFilterMenu();
});
lunacharskyfilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "lunacharsky");
    displayData(filteredData);
    toggleFilterMenu();
});
odessafilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "odessa");
    displayData(filteredData);
    toggleFilterMenu();
});
tonikafilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "tonika");
    displayData(filteredData);
    toggleFilterMenu();
});
trembitafilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "trembita");
    displayData(filteredData);
    toggleFilterMenu();
});
uralfilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "ural");
    displayData(filteredData);
    toggleFilterMenu();
});
zhitomirfilter.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.brand == "zhitomir");
    displayData(filteredData);
    toggleFilterMenu();
});
electric.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.type == "electric");
    displayData(filteredData);
    toggleFilterMenu();
});
bass.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.type == "bass");
    displayData(filteredData);
    toggleFilterMenu();
});
acoustic.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.type == "acoustic");
    displayData(filteredData);
    toggleFilterMenu();
});
black.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.bodyColor == "black");
    displayData(filteredData);
    toggleFilterMenu();
});
red.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.bodyColor == "red");
    displayData(filteredData);
    toggleFilterMenu();
});
brown.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.bodyColor == "brown");
    displayData(filteredData);
    toggleFilterMenu();
});
sunburst.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.bodyColor == "sunburst");
    displayData(filteredData);
    toggleFilterMenu();
});
yellow.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.bodyColor == "yellow");
    displayData(filteredData);
    toggleFilterMenu();
});
gold.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.bodyColor == "gold");
    displayData(filteredData);
    toggleFilterMenu();
});
aluminum.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.bodyColor == "aluminum");
    displayData(filteredData);
    toggleFilterMenu();
});
fiftys.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.decade == "50s");
    displayData(filteredData);
    toggleFilterMenu();
});
sixties.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.decade == "60s");
    displayData(filteredData);
    toggleFilterMenu();
});
seventies.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.decade == "70s");
    displayData(filteredData);
    toggleFilterMenu();
});
eighties.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.decade == "80s");
    displayData(filteredData);
    toggleFilterMenu();
});
frostov.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.factory == "Rostov");
    displayData(filteredData);
    toggleFilterMenu();
});
fborisov.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.factory == "Borisov");
    displayData(filteredData);
    toggleFilterMenu();
});
fchernigov.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.factory == "Chernigov");
    displayData(filteredData);
    toggleFilterMenu();
});
fcremona.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.factory == "Cremona (Czechoslovakia)");
    displayData(filteredData);
    toggleFilterMenu();
});
fjolana.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.factory == "Jolana (Czechoslovakia)");
    displayData(filteredData);
    toggleFilterMenu();
});
flunacharsky.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.factory == "Lunacharsky");
    displayData(filteredData);
    toggleFilterMenu();
});
fordjonikidze.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.factory == "Ordjonikidze");
    displayData(filteredData);
    toggleFilterMenu();
});
ftrembita.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.factory == "Trembita (Lviv)");
    displayData(filteredData);
    toggleFilterMenu();
});
fural.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.factory == "Ural (Sverdlovsk)");
    displayData(filteredData);
    toggleFilterMenu();
});
fzhitomir.addEventListener('click', function() {
    const filteredData = guitars.filter((guitar) => guitar.factory == "Zhitomir");
    displayData(filteredData);
    toggleFilterMenu();
});


const items = document.querySelectorAll(".guitar");
const close = document.querySelectorAll(".close");

const openInfo = (item) => {
  const thumbnail = item.querySelector('.thumbnail');
  const info = document.getElementById(thumbnail.dataset.guitar);
  info.classList.add("info-show");
    console.log("show class added");
    info.classList.remove("info");
    console.log("info class removed");
    freezeBackground();
}

const closeAllInfo = () => {
  let infoShow = document.querySelector(".info-show");
  
    infoShow.classList.add("info");
    infoShow.classList.remove("info-show");
    freezeBackground();
  
}

items.forEach((item) => {
  const thumbnail = item.querySelector('.guitar');
  const info = item.querySelector('.info');
  item.addEventListener("click", (event) => {
    openInfo(item);
  });
});

close.forEach((trigger) => {
//  console.log(trigger);
  trigger.addEventListener("click", (event) => {
    closeAllInfo();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllInfo();
  }
});


//const aleita1 = document.getElementById('aleita-1');
//
//aleita1.addEventListener('click', function() {
//    
//    console.log("clicked");
//    
////    closeInfo();
//    
//    const info = document.getElementById('aleita-1-info');
//    
//        info.classList.toggle('info');
//        info.classList.toggle('info-show');
//    
//    freezeBackground();
//    
//    const menuShow = document.querySelector('.show-filter');
//    if (menuShow){
//        toggleFilterMenu();
//    }
//    
//    });
//
//const infoBack = document.getElementById('info-back');
//const x = document.querySelector(".x");
//
//function closeInfo(){
//    
//    const visibleInfo = document.querySelectorAll('.info-show');
//       
//    elements.forEach()
//        visibleInfo.classList.toggle('info');
//        visibleInfo.classList.toggle('info-show');
//        freezeBackground();    
//    
//};
//
////if (infoBack){ 
//    infoBack.addEventListener('click', closeInfo());
////              }
////if (x){
//    x.addEventListener('click', closeInfo());
////}
//   
