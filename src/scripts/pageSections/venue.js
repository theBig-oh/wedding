import { MakeElement } from '../utils';



const Venues = function(venue) {

  const makeEle = new MakeElement;

  console.log('this is the venue');

  console.log(venue);

  const venueContainer = makeEle.createEle('div','Venues',null,['venueContainer','bodyContainerItem'])
  const venueMainBg = makeEle.createEle('div','Venue-BG', null, ['venueContainerItem','venue-bg']);

  const venueText = makeEle.createEle('div','Venue-Text', null, ['venue-text','venueContainerItem']);

  const venueTextHeader = makeEle.createEle('div','Venue-Text-Header',null,['venue-text-header','venueTextItem']);
  const venueBlurb = makeEle.createEle('div','Venue-Blurb',null, ['venue-blurb','venueTextItem']);

  venueTextHeader.innerHTML = `<div> The Venue </div>`;


  venueBlurb.innerHTML = venue[0].venueBlurb;


  venueText.append(venueTextHeader, venueBlurb);

  venueContainer.append(venueMainBg, venueText);


  return venueContainer;

}


export default Venues;