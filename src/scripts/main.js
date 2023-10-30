import { MakeElement } from './utils';

import Data from './Data/Data.js';
import '../styles/styles.scss';

import TitlePage from './pageSections/title.js';
import GalleryPage from './pageSections/Gallery.js';
import NavBar from './pageSections/navBar.js';
import Venues from './pageSections/venue.js';
import Spacer from './pageSections/spacer.js';
import TravelInfo from './pageSections/travelInfo.js';
import RegisterPage from './pageSections/registry.js';
import FaqPage from './pageSections/faq.js';

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
    "context": "Travel",
    "anyText": "Travel",
    "image": "../../public/assets/images/engage/highlight/58.jpg",
  },
    {
    "context": "Registry",
    "anyText": "Registry",
    "image": "../../public/assets/images/engage/highlight/36.jpg",/* Pix that work: 29, 36, 45,*/
  },
    {
    "context": "FAQ",
    "anyText": "FAQ",
    "image": "../../public/assets/images/engage/highlight/9.jpg", //Possible pix: 9 
  }

    ]





  let bodyContainer = makeEle.createEle('div','bodyContainer',[12,12,12,12],['bodyContain']);  
  bodyContainer.append(Spacer(spacerInfo[0].context,null,spacerInfo[0].image),
                        NavBar(), 
                        Venues(Data.location),
                        Spacer(spacerInfo[1].context,spacerInfo[1].anyText,spacerInfo[1].image),
                        TravelInfo(Data.location, Data.destination),
                        Spacer(spacerInfo[2].context,spacerInfo[2].anyText,spacerInfo[2].image),
                        RegisterPage(Data.registry),
                        Spacer(spacerInfo[3].context,spacerInfo[3].anyText,spacerInfo[3].image),
                        FaqPage());
  body.append(bodyTime, bodyContainer);




}

RenderSite(); 