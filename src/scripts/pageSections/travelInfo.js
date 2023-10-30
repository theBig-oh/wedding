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


/*
  TO DO- 

    REDUCE THIS TO SMALLER RE-USABLE COMPONENTS
      - The "Location" and "Hotel Options" now both have similar styles, I can reduce the amount of code by making 1 component
        that deals with both and only changes with the data. 

    DO A MORE REACTIVE COMPONENT
      - This can be seen by the images being brought in the "Location" components, and in the click events in the "locations" navigation

*/


function pagePlus(item, mobileContent, desktopContent, desktopContainer) {
    let pagePlusItemMobile = makeEle.createEle('div', 'pagePlus-'+i, null, ['pagePlusItem', 'pagePlusItem-'+i,'textPageTextContainer']);
    let pagePlusPicturesMobile = makeEle.createEle('div', 'pagePlusImage-'+i, null, ['pagePlusImage','pagePlusImage-'+i]);

    /*Desktop*/
    let pagePlusNavNameDesktop = makeEle.createEle('div', 'pagePlusNavNameDesktop'+i, null, ['pagePlusNavItem', 'pagePlusNavItem'+i, (i == 0 ? 'is-active' : null)]);
    let pagePlusPicturesDesktop = makeEle.createEle('div', 'pagePlusImage-'+i, null, ['pagePlusDesktopImage','pagePlusDesktopImage-'+i]);
    let PagePlusPicturesDesktopContainer = makeEle.createEle('div', 'pagePlusImageContainer-'+i, null, ['pagePlusImageContainer','pagePlusImageContainer-'+i, (i == 0 ? 'is-active' : null)]);
    let PagePlusDetailsDesktopItem = makeEle.createEle('div', 'pagePlusDetailsDesktopItem'+i, null, ['pagePlusDetailsDesktopItem', 'pagePlusDetailsDesktopItem'+i, (i == 0 ? 'is-active' : null)]);


    x.images.forEach((y,j) => {
      let pagePlusPic = makeEle.createEle('div', 'pagePlusImg-'+j, null, ['pagePlusImg-'+j, 'pagePlusImg']);
      let pagePlusDesktopPic = makeEle.createEle('div', 'pagePlusImg-'+j, null, ['pagePlusImg-'+j, 'pagePlusDesktopImg','imageContainer']);
      pagePlusPic.style.backgroundImage = y ? "url("+y+ ")" : null;
      pagePlusDesktopPic.style.backgroundImage = y ? "url("+y+ ")" : null;

      pagePlusPicturesMobile.append(pagePlusPic);
      pagePlusPicturesDesktop.append(pagePlusDesktopPic);

      pagePlusPic.addEventListener('click', function(e) {
          displayModal(y);
      });
      pagePlusDesktopPic.addEventListener('click', function(e) {
          displayModal(y);
      });


    })


    pagePlusPicturesDesktopContainer.append(pagePlusPicturesDesktop);
    pagePlusItemMobile.append(pagePlusPicturesMobile);

    desktopContainer.append(pagePlusDetailsDesktopItem);

    travelDesktopImageContainer.append(pagePlusPicturesDesktopContainer);

    travelDesktoppagePlusNav.append(pagePlusNavNameDesktop);

    travelpagePluss.append(pagePlusItemMobile);

    if (x.isVenue) {
      pagePlusItemMobile.classList.add('is-venue');
    }


    pagePlusNavNameDesktop.addEventListener('click', function(e) {
      let navItemGroup = e.target.parentNode.parentNode.children;
      let pagePlusDescriptionGroup = document.querySelectorAll('.pagePlusDetailsDesktopItem');
      let pagePlusPictureGroup = document.querySelectorAll('.pagePlusImageContainer');
      
      for (var i=0; i <= navItemGroup.length -1; i++) {
          navItemGroup[i].classList.remove('is-active');
          pagePlusDescriptionGroup[i].classList.remove('is-active');
          pagePlusPictureGroup[i].classList.remove('is-active');
      }

      e.target.parentNode.classList.add('is-active');

      for (var i = 0; i <= navItemGroup.length -1; i++) {
        if (navItemGroup[i].classList.contains('is-active')) {
          pagePlusDescriptionGroup[i].classList.add('is-active');
          pagePlusPictureGroup[i].classList.add('is-active');

        }
      }
    })
}




const TravelInfo = function(locations, destination) {

  const tocMarker = makeEle.createEle('div','Travel', null, ['toc-marker','travel-toc-marker']);

  /* Mobile Divs*/
  const TravelContainer = makeEle.createEle('div','Travels',null,['TravelContainer','bodyContainerItem','text-page']);
  const TravelMainBg = makeEle.createEle('div','Travel-BG', null, ['TravelContainerItem','Travel-bg']);
  const TravelText = makeEle.createEle('div','Travel-Text', null, ['Travel-text','TravelContainerItem']);
  const TravelTextHeader = makeEle.createEle('div','Travel-Text-Header',null,['Travel-text-header','TravelTextItem']);
  const TravelBlurb = makeEle.createEle('div','Travel-Blurb',null, ['Travel-blurb','TravelTextItem']);
  const travelHotels = makeEle.createEle('div','Travel-Hotel', null, ['travelHotel']);
  const travelHotelsContainer = makeEle.createEle('div','Travel-Hotel-Container', null, ['travelHotelsContainer','travelBlurbItem'])
  const travelMobileContainer = makeEle.createEle('div','Travel-Mobile-Container',null, ['travelMobileContainer' ]);
  const travelMobileDirectionsContainer = makeEle.createEle('div','travel-mobile-directions-container',null,['travelMobileDirectionsContainer']);

  /*Desktop Divs*/
  const travelDesktopContainer = makeEle.createEle('div','Travel-Desktop-Container',null, ['travelDesktopContainer' ]);
  const travelDesktopHotelNav = makeEle.createEle('div','Travel-Desktop-Hotel-Nav',null, ['travelDesktopHotelNav']);
  const travelDesktopTextContainer = makeEle.createEle('div','travel-desktop-text-container',null, ['textPageTextContainer','travelDesktopTextContainer']);
  const travelDesktopImageContainer = makeEle.createEle('div','travel-desktop-text-container',null, ['travelDesktopImageContainer']);
  let travelDirectionsNav = makeEle.createEle('div','travel-directions-nav',null, 'travelDirectionsNav');
  const travelDesktopDirectionsContainer = makeEle.createEle('div','travel-desktop-directions-container',null,['travelDesktopDirectionsContainer']);
  const travelDesktopDirectionsImageContainer = makeEle.createEle('div','travel-desktop-directions-image-container',null,['travelDesktopDirectionsImageContainer']);
  const travelDesktopDirectionsTextContainer = makeEle.createEle('div','travel-desktop-directions-text-container',null,['travelDesktopDirectionsTextContainer','textPageTextContainer']);
  const travelDesktopDirectionsTextInnerContainer = makeEle.createEle('div','travel-desktop-directions-text-inner-container',null,['travelDesktopDirectionsTextInnerContainer','textPageTextContainer']);

  const travelObject = ["The Location", "Hotel Options"];
  const travelTextNav = makeEle.createEle('div','Travel-Text-Nav', null, ['travelTextNav']);
  const travelDirections = makeEle.createEle('div', 'Travel-Directions', null, ['travelDirections','travelBlurbItem']);
  const travelDirectionsMobile = makeEle.createEle('div','Travel-Directions-Mobile', null, ['travelDirectionsMobile']);

  let currentInfoNav = 0;
  let currentHotelInfo = 0;

  travelDirections.classList.add('is-active');

  destination.forEach((x,y) => {
    console.log(x);

    let destinationNavItem = makeEle.createEle('div','destinationNavItem'+y,null,['destinationNavItem',x.codeName]);
    let destinationContent = makeEle.createEle('div','destinationContent'+y,null,['destinationContent',x.codeName]);
    let destinationPictureGroup = makeEle.createEle('div','destinationPicturesGroup'+y, null, ['destinationPictureGroup',x.codeName, (x.images.length > 1 ? 'multiple-images' : 'single-image'), (y == 0 ? 'is-active' : null)]);
    let destinationPicturesMobile = makeEle.createEle('div', 'destinationImage-'+y, null, ['destinationImage','destinationImage-'+y]);
 let destinationPicturesDesktop = makeEle.createEle('div', 'destinationImage-'+y, null, ['destinationDesktopImage','destinationDesktopImage-'+y]);
    let destinationPicturesDesktopContainer = makeEle.createEle('div', 'destinationImageContainer-'+y, null, ['destinationImageContainer','destinationImageContainer-'+y, (y == 0 ? 'is-active' : null)]);
    let destinationDetailsDesktopItem = makeEle.createEle('div', 'destinationDetailsDesktopItem'+y, null, ['destinationDetailsDesktopItem', 'destinationDetailsDesktopItem'+y, (y == 0 ? 'is-active' : null)]);

    let destinationItemMobile = makeEle.createEle('div','destinationItemMobile'+y,null,['destinationItemMobile','mobileItem','textPageTextContainer']);


    if (y == 0) {
      destinationNavItem.classList.add('is-active');
      destinationContent.classList.add('is-active');
    }

    destinationNavItem.innerHTML = `
      <div class="wrapper">
        <div class="text"> ${x.navItem}</div>
      </div>
    `;

    destinationNavItem.dataset.codeName = x.codeName;

    destinationItemMobile.innerHTML = `
        <div class="wrapper">
          <div class="name"> ${x.name} </div>
          <div class="blurb"> ${x.blurb} </div>
        </div>
    `;

    destinationContent.innerHTML = `
      <div class="wrapper"> 
          <div class="heading"> ${x.name} </div>
          <div class="blurb"> ${x.blurb} </div>
      </div>
    `;

    x.images.forEach((z,j) => {
      let destinationPic = makeEle.createEle('div', 'destinationImg-'+j, null, ['destinationImg-'+j, 'destinationImg']);
      let destinationDesktopPic = makeEle.createEle('div', 'destinationImg-'+j, null, ['destinationImg-'+j, 'destinationDesktopImg','imageContainer']);
      destinationPic.style.backgroundImage = z ? "url("+z+ ")" : null;
      destinationDesktopPic.style.backgroundImage = z ? "url("+z+ ")" : null;

      destinationPicturesMobile.append(destinationPic);
      destinationPictureGroup.append(destinationDesktopPic);

      destinationPic.addEventListener('click', function(e) {
          displayModal(z);
      });
      destinationDesktopPic.addEventListener('click', function(e) {
          displayModal(z);
      });


    })

  

    travelDirectionsNav.append(destinationNavItem);
    travelDesktopDirectionsTextInnerContainer.append(destinationContent);
    travelDesktopDirectionsImageContainer.append(destinationPictureGroup);
    travelDirectionsMobile.append(destinationItemMobile);

    destinationNavItem.addEventListener('click', function(e) {
      let navItemGroup = document.querySelectorAll('.destinationNavItem');
      let destinationDescriptionGroup = document.querySelectorAll('.destinationContent');
      let destinationPicturesGroup = document.querySelectorAll('.destinationPictureGroup');

      navItemGroup.forEach((i,c) => {
        i.classList.remove('is-active');
        destinationDescriptionGroup[c].classList.remove('is-active');
        destinationPicturesGroup[c].classList.remove('is-active');

        if (i.classList.contains(e.target.dataset.codeName)) {
          i.classList.add('is-active');
          destinationDescriptionGroup[c].classList.add('is-active');
          destinationPicturesGroup[c].classList.add('is-active');
        }
      })
    })

  })


  travelMobileDirectionsContainer.append(travelDirectionsMobile);

  travelDesktopDirectionsTextContainer.append(travelDirectionsNav,travelDesktopDirectionsTextInnerContainer, travelDesktopDirectionsImageContainer);

  travelDesktopDirectionsContainer.append(travelDesktopDirectionsTextContainer, travelDesktopDirectionsImageContainer);

  travelDirections.append(travelMobileDirectionsContainer, travelDesktopDirectionsContainer);


  let travelDirectionsDesktop = makeEle.createEle('div', 'travelDirectionsDesktop', null, ['travelDirectionsDesktop', 'travelDirectionsDesktop']);
  let hotelDetailsDesktop = makeEle.createEle('div', 'hotelDetailsDesktop', null, ['hotelDetailsDesktop', 'hotelDetailsDesktop']);
  let hotelDisclaimer = makeEle.createEle('div','hotelDisclaimer', null,'hotelDisclaimer');  


    hotelDisclaimer.innerHTML = `
      <div class="wrapper">
        <div class="disclaimer">
          <p> These are <strong>ONLY HOTEL RECOMMINDATIONS</strong>.</p>
          <p> We encourage you to look for your own accomidations if these suggestions don't work for you </p>
        </div>
      </div>
    `;



  locations.forEach((x,i) => {
    /*Mobile*/
    let hotelItemMobile = makeEle.createEle('div', 'Hotel-'+i, null, ['hotelItem', 'hotelItem-'+i,'textPageTextContainer']);
    let hotelPicturesMobile = makeEle.createEle('div', 'hotelImage-'+i, null, ['hotelImage','hotelImage-'+i,'mobileItem']);

    /*Desktop*/
    let hotelNavNameDesktop = makeEle.createEle('div', 'hotelNavNameDesktop'+i, null, ['hotelNavItem', 'hotelNavItem'+i, (i == 0 ? 'is-active' : null)]);
    let hotelPicturesDesktop = makeEle.createEle('div', 'hotelImage-'+i, null, ['hotelDesktopImage','hotelDesktopImage-'+i]);
    let hotelPicturesDesktopContainer = makeEle.createEle('div', 'hotelImageContainer-'+i, null, ['hotelImageContainer','hotelImageContainer-'+i, (i == 0 ? 'is-active' : null)]);
    let hotelDetailsDesktopItem = makeEle.createEle('div', 'hotelDetailsDesktopItem'+i, null, ['hotelDetailsDesktopItem', 'hotelDetailsDesktopItem'+i, (i == 0 ? 'is-active' : null)]);

    /*Mobile version*/

    hotelItemMobile.innerHTML = `
        <div class="wrapper">
          <div class="name"> ${x.name} </div>
          <div class="price"> ${x.priceRange} </div>
          <a class="link" href="${x.link}"> Hotel Website </a>
          <div class="blurb"> ${x.blurb} </div>
        </div>
    `;

    /*Desktop Version*/

    hotelNavNameDesktop.innerHTML = `
      <div class="name">
        ${x.name}
      </div>
    `;



    hotelDetailsDesktopItem.innerHTML = `
    <div class="wrapper">
      <div class="name"> ${x.name} </div>
      <div class="price"> ${x.priceRange} </div>
      <div class="link"> 
      <a href="${x.link}"> Hotel Website </a>
      </div>
      <div class="blurb"> ${x.blurb} </div>
      <div class="disclaimer"> 
        <div class="disclaimer-wrapper">
          <div class="disclaimer">
            <p> ***These are only hotel recommendiations.</p>
            <p> *** We encourage you to look for your own accomidations if these suggestions don't work for you </p>
          </div>
        </div>

      </div>
    </div>
    `;



    x.images.forEach((y,j) => {
      let hotelPic = makeEle.createEle('div', 'hotelImg-'+j, null, ['hotelImg-'+j, 'hotelImg']);
      let hotelDesktopPic = makeEle.createEle('div', 'hotelImg-'+j, null, ['hotelImg-'+j, 'hotelDesktopImg','imageContainer']);
      hotelPic.style.backgroundImage = y ? "url("+y+ ")" : null;
      hotelDesktopPic.style.backgroundImage = y ? "url("+y+ ")" : null;

      hotelPicturesMobile.append(hotelPic);
      hotelPicturesDesktop.append(hotelDesktopPic);

      hotelPic.addEventListener('click', function(e) {
          displayModal(y);
      });
      hotelDesktopPic.addEventListener('click', function(e) {
          displayModal(y);
      });


    })


    hotelPicturesDesktopContainer.append(hotelPicturesDesktop);
    hotelItemMobile.append(hotelPicturesMobile);

    hotelDetailsDesktop.append(hotelDetailsDesktopItem);

    travelDesktopImageContainer.append(hotelPicturesDesktopContainer);

    travelDesktopHotelNav.append(hotelNavNameDesktop);

    travelHotels.append(hotelItemMobile);

    if (x.isVenue) {
      hotelItemMobile.classList.add('is-venue');
    }


    hotelNavNameDesktop.addEventListener('click', function(e) {
      let navItemGroup = e.target.parentNode.parentNode.children;
      let hotelDescriptionGroup = document.querySelectorAll('.hotelDetailsDesktopItem');
      let hotelPictureGroup = document.querySelectorAll('.hotelImageContainer');
      
      for (var i=0; i <= navItemGroup.length -1; i++) {
          navItemGroup[i].classList.remove('is-active');
          hotelDescriptionGroup[i].classList.remove('is-active');
          hotelPictureGroup[i].classList.remove('is-active');
      }

      e.target.parentNode.classList.add('is-active');

      for (var i = 0; i <= navItemGroup.length -1; i++) {
        if (navItemGroup[i].classList.contains('is-active')) {
          hotelDescriptionGroup[i].classList.add('is-active');
          hotelPictureGroup[i].classList.add('is-active');

        }
      }
    })

  })


  travelObject.forEach((x,i) => {
    const travelTextNavItem = makeEle.createEle('div', 'travel-text-nav-item-'+i, null, ['travelTextNavItem','travelTextNavItem'+i,'textPageTextContainer']);
    travelTextNavItem.innerHTML = `<div> ${x} </div>`;
    travelTextNavItem.clickNum = currentHotelInfo;

    if (i == 0) {
      travelTextNavItem.classList.add('is-active');
    }

    travelTextNav.append(travelTextNavItem);


    travelTextNavItem.addEventListener('click', function(e) {
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

  travelMobileContainer.append(hotelDisclaimer, travelHotels);

  travelMobileContainer.children[0].classList.add('textPageTextContainer');

  travelDesktopTextContainer.append(travelDesktopHotelNav, hotelDetailsDesktop);
  
  travelDesktopContainer.append(travelDesktopTextContainer, travelDesktopImageContainer);

  travelHotelsContainer.append(travelMobileContainer, travelDesktopContainer);

  TravelBlurb.append(travelDirections, travelHotelsContainer);

  TravelText.append(TravelTextHeader, travelTextNav, TravelBlurb);

  TravelContainer.append(tocMarker,TravelText);


  return TravelContainer;

}


export default TravelInfo;