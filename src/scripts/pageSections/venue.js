import { MakeElement } from '../utils';



const Venues = function(venue) {

  const makeEle = new MakeElement;

  console.log('this is the venue');

  console.log(venue);

  const venueContainer = makeEle.createEle('div','Venues',null,['venueContainer','bodyContainerItem'])
  const venueMainBg = makeEle.createEle('div','Venue-BG', null, ['venueContainerItem','venue-bg']);
  const venueMainBgContainer = makeEle.createEle('div','Venue-BG-container', null, ['venueContainerItem','venue-bg-container']);
  
  const venueText = makeEle.createEle('div','Venue-Text', null, ['venue-text','venueContainerItem']);

  const venueTextHeader = makeEle.createEle('div','Venue-Text-Header',null,['venue-text-header','venueTextItem']);
  const venueBlurb = makeEle.createEle('div','Venue-Blurb',null, ['venue-blurb','venueTextItem']);

  let picNum = 1;
  let picCollect = [
      "url(../../public/assets/images/location/venue/sofitel-1.jpeg)",
      "url(../../public/assets/images/location/venue/sofitel-2.jpeg)",
      "url(../../public/assets/images/location/venue/sofitel-3.jpeg)",
      "url(../../public/assets/images/location/venue/sofitel-4.jpeg)"
    ];




  venueTextHeader.innerHTML = `<div> The Venue </div>`;


<<<<<<< HEAD

  venueBlurb.innerHTML = venue[0].blurb;
=======
  venueBlurb.innerHTML = venue[0].venueBlurb;
>>>>>>> d70cc089154665998d110434cfaab601fc17c7b3


  venueText.append(venueTextHeader, venueBlurb);
  venueMainBgContainer.append(venueMainBg);

  venueContainer.append(venueMainBgContainer, venueText);

setTimeout(picChange(), 3000);

  function picChange() {
    if (picNum >= 4) {
      picNum = 1;
    } else {
      picNum +1;
    }
    console.log('whats up');

      venueMainBg.style.backgroundImage = picCollect[picNum];

  }
  return venueContainer;

}


export default Venues;