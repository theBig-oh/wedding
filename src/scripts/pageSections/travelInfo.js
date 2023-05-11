import { MakeElement } from '../utils';



const TravelInfo = function(venue) {

  const makeEle = new MakeElement;

  console.log('this is the venue');

  console.log(venue);

  const TravelContainer = makeEle.createEle('div','Travels',null,['TravelContainer','bodyContainerItem'])
  const TravelMainBg = makeEle.createEle('div','Travel-BG', null, ['TravelContainerItem','Travel-bg']);

  const TravelText = makeEle.createEle('div','Travel-Text', null, ['Travel-text','TravelContainerItem']);

  const TravelTextHeader = makeEle.createEle('div','Travel-Text-Header',null,['Travel-text-header','TravelTextItem']);
  const TravelBlurb = makeEle.createEle('div','Travel-Blurb',null, ['Travel-blurb','TravelTextItem']);

  TravelTextHeader.innerHTML = `<div> The Travel </div>`;




  TravelText.append(TravelTextHeader, TravelBlurb);

  TravelContainer.append(TravelMainBg, TravelText);


  return TravelContainer;

}


export default TravelInfo;