import { MakeElement } from './utils';

import Data from './Data/Data.js';
import '../styles/styles.scss';

import TitlePage from './pageSections/title.js';
import GalleryPage from './pageSections/Gallery.js';
import NavBar from './pageSections/navBar.js';
import Venues from './pageSections/venue.js';
import Spacer from './pageSections/spacer.js';
import TravelInfo from './pageSections/travelInfo.js';

function RenderSite(){
  let body = document.querySelector('body');

  let date = new Date();
  let hours = date.getHours();

  let makeEle = new MakeElement;
  let bodyTime = makeEle.createEle('div','countdown',null, 'bodyTime');

  let spacerInfo = [
      {
    "context": "Intro",
    "anyText": null,
    "image": "../../public/assets/images/engage/highlight/photoshop/2.jpg",
  },
  {
    "context": "Cartagena",
    "anyText": "Cartagena",
    "image": "../../public/assets/images/location/place/cartagena.jpg",
  }

    ]





  let bodyContainer = makeEle.createEle('div','bodyContainer',[12,12,12,12],['bodyContain']);  
  bodyContainer.append(Spacer(spacerInfo[0].context,null,spacerInfo[0].image),
                        NavBar(), 
                        Venues(Data.location),
                        Spacer(spacerInfo[1].context,spacerInfo[1].anyText,spacerInfo[1].image),
                        TravelInfo(Data.location));
  body.append(bodyTime, bodyContainer);




}

RenderSite(); 