import { MakeElement } from '../utils';



<<<<<<< HEAD
const TravelInfo = function(location) {
=======
const TravelInfo = function(locations) {
>>>>>>> d70cc089154665998d110434cfaab601fc17c7b3

  const makeEle = new MakeElement;

  console.log('this is the locations');

<<<<<<< HEAD
=======
  console.log(locations);
>>>>>>> d70cc089154665998d110434cfaab601fc17c7b3

  const TravelContainer = makeEle.createEle('div','Travels',null,['TravelContainer','bodyContainerItem'])
  const TravelMainBg = makeEle.createEle('div','Travel-BG', null, ['TravelContainerItem','Travel-bg']);
  const TravelText = makeEle.createEle('div','Travel-Text', null, ['Travel-text','TravelContainerItem']);
  const TravelTextHeader = makeEle.createEle('div','Travel-Text-Header',null,['Travel-text-header','TravelTextItem']);
  const TravelBlurb = makeEle.createEle('div','Travel-Blurb',null, ['Travel-blurb','TravelTextItem']);
  const travelObject = ["How to get there", "Hotel Options"];
  const travelTextNav = makeEle.createEle('div','Travel-Text-Nav', null, ['travelTextNav']);
  const travelDirections = makeEle.createEle('div', 'Travel-Directions', null, ['travelDirections','travelBlurbItem'])
  const travelHotels = makeEle.createEle('div','Travel-Hotel', null, ['travelBlurbItem', 'travelHotel']);

  let currentHotelInfo = 0;


  TravelTextHeader.innerHTML = `<div> The Travel </div>`;





  travelObject.forEach((x,i) => {
    const travelTextNavItem = makeEle.createEle('div', 'travel-text-nav-item-'+i, null, ['travelTextNavItem','travelTextNavItem'+i]);
    travelTextNavItem.innerHTML = `<div> ${x} </div>`;

    travelTextNav.append(travelTextNavItem);

  })


  locations.forEach((x,i) => {
    console.log(x);
    console.log(i);

    let hotelItem = makeEle.createEle('div', 'Hotel-'+i, null, ['hotelItem', 'hotelItem-'+i]);

    hotelItem.innerHTML = `
      <div class="name"> ${x.name} </div>
      <div class="price"> ${x.priceRange} </div>
      <div class="blurb"> ${x.blurb} </div>
    `;


    travelHotels.append(hotelItem);

    if (x.isVenue) {
      hotelItem.classList.add('is-venue');
    }

  })

  TravelBlurb.append(travelDirections, travelHotels);

  TravelText.append(TravelTextHeader, travelTextNav, TravelBlurb);

  TravelContainer.append(TravelText);


  return TravelContainer;

}


export default TravelInfo;