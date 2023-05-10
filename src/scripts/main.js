import { MakeElement } from './utils';

import Data from './Data/Data.js';
import '../styles/styles.scss';

import TitlePage from './pageSections/title.js';
import ProjectsPage from './pageSections/projects.js';
import GalleryPage from './pageSections/Gallery.js';
import NavBar from './pageSections/navBar.js';
import Venues from './pageSections/venue.js';


function RenderSite(){
  let body = document.querySelector('body');

  let date = new Date();
  let hours = date.getHours();

  let makeEle = new MakeElement;
  let bodyTime = makeEle.createEle('div','countdown',null, 'bodyTime');




  let bodyContainer = makeEle.createEle('div','bodyContainer',[12,12,12,12],['bodyContain']);  
  bodyContainer.append(TitlePage(Data.person), NavBar(), Venues(Data.location),TitlePage(Data.person),Venues(Data.location));
  body.append(bodyTime, bodyContainer);




}

RenderSite(); 