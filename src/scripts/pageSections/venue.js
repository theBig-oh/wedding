import { MakeElement } from '../utils';



const Venues = function(venue) {

  const makeEle = new MakeElement;

   const tocMarker = makeEle.createEle('div','Venue', null, ['toc-marker','venue-toc-marker']);

  const venueContainer = makeEle.createEle('div','Venues',null,['venueContainer','bodyContainerItem','text-page'])
  const venueMainBg = makeEle.createEle('div','Venue-BG', null, ['venueContainerItem','venue-bg']);
  const venueMainBgContainer = makeEle.createEle('div','Venue-BG-container', null, ['venueContainerItem','venue-bg-container']);
  
  const venueText = makeEle.createEle('div','Venue-Text', null, ['venue-text','venueContainerItem', 'textPageTextContainer']);

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

  venueBlurb.innerHTML = venue[0].venueBlurb;


  venueText.append(venueTextHeader, venueBlurb);
  venueMainBgContainer.append(venueMainBg);

  venueContainer.append(tocMarker, venueMainBgContainer, venueText);

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