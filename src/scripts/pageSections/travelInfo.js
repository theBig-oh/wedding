import { MakeElement } from '../utils';

  const makeEle = new MakeElement;


  function displayModal(picture) {
    let displayedModal = makeEle.createEle('div','displayModal', [12,12,12,12],'displayModalContainer');
    let displayPicture = makeEle.createEle('img','displayPicture', [12,12,12,12],'displayModalPicture');
    let pictureInfo = makeEle.createEle('div','picInfo',[12,12,12,12],'picInfo');

    displayPicture.src = picture;
    displayedModal.append(displayPicture);

    document.querySelector('body').append(displayedModal);

    displayedModal.addEventListener('click', (e) => {
      if(e.target.classList.contains('displayModalContainer')) {
        displayedModal.remove();
      }
    })
  }




const TravelInfo = function(locations) {
  const TravelContainer = makeEle.createEle('div','Travels',null,['TravelContainer','bodyContainerItem','text-page'])
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

  travelDirections.classList.add('is-active');

  travelDirections.innerHTML = `
    <div class="directions-wrapper">

      <div class="directions-texts-wrapper">
              <p>Get ready to join us in <strong>Cartagena, Colombia</strong> for our wedding! Here's how to get here from the USA.</p>
              <p>From New York City, you're in luck! Direct flights with <strong>Avianca</strong>, <strong>JetBlue</strong>, and <strong>Delta</strong> take about 5-6 hours.</p>
              <p>St. Louis buddies, connect through Miami, Atlanta, or Houston with airlines like <strong>American Airlines</strong>, <strong>Delta</strong>, or <strong>United</strong>. Travel time usually ranges from 7 to 9 hours.</p>
              <p>From other US cities, fly to hubs like Miami, Atlanta, Houston, or New York, and then connect to Cartagena.</p>
              <p>Check with airlines for updates and consider travel restrictions. Can't wait to celebrate with you in beautiful Cartagena! Safe travels!</p>
      </div>


      <div class="directions-images-wrapper">


      </div>

    </div>
  `;





  locations.forEach((x,i) => {
    console.log(x);
    console.log(i);

    let hotelItem = makeEle.createEle('div', 'Hotel-'+i, null, ['hotelItem', 'hotelItem-'+i]);
    let hotelPictures = makeEle.createEle('div', 'hotelImage-'+i, null, ['hotelImage','hotelImage-'+i]);

    hotelItem.innerHTML = `
        <div class="wrapper">
          <div class="name"> ${x.name} </div>
          <div class="price"> ${x.priceRange} </div>
          <div class="blurb"> ${x.blurb} </div>
        </div>
    `;

    x.images.forEach((y,j) => {
      let hotelPic = makeEle.createEle('div', 'hotelImg-'+j, null, ['hotelImg-'+j, 'hotelImg']);
      hotelPic.style.backgroundImage = y ? "url("+y+ ")" : null;

      hotelPictures.append(hotelPic);

      hotelPic.addEventListener('click', function(e) {
          displayModal(y);
      });


    })



    hotelItem.append(hotelPictures);

    travelHotels.append(hotelItem);

    if (x.isVenue) {
      hotelItem.classList.add('is-venue');
    }

  })


  travelObject.forEach((x,i) => {
    const travelTextNavItem = makeEle.createEle('div', 'travel-text-nav-item-'+i, null, ['travelTextNavItem','travelTextNavItem'+i]);
    travelTextNavItem.innerHTML = `<div> ${x} </div>`;
    travelTextNavItem.clickNum = currentHotelInfo;

    if (i == 0) {
      travelTextNavItem.classList.add('is-active');
      console.log(document.querySelectorAll('.travelBlurblItem')[0]);
    }

    travelTextNav.append(travelTextNavItem);


    travelTextNavItem.addEventListener('click', function(e) {
      console.log(e.target);
      currentHotelInfo = i

      document.querySelectorAll('.travelTextNavItem').forEach((y) => {
        y.classList.remove('is-active');
      });

      document.querySelectorAll('.travelBlurbItem').forEach((y,z) => {
        y.classList.remove('is-active');

        if(z == i) {
          y.classList.add('is-active');

        } 

      })

      e.target.parentNode.classList.add('is-active');
    });
  })


  TravelBlurb.append(travelDirections, travelHotels);

  TravelText.append(TravelTextHeader, travelTextNav, TravelBlurb);

  TravelContainer.append(TravelText);


  return TravelContainer;

}


export default TravelInfo;