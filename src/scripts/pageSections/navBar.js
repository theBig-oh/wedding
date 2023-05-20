import { MakeElement } from '../utils';

const doc = document.querySelector('body');
  
const NavBar = function() {
    console.log('this is the navBar');

    const makeEle = new MakeElement;

    const pageLinks = {
        "links": [
            {"name": "Venue", "link": "#Venue"},
            {"name": "Travel", "link": "#Travel"},
            {"name": "Registry", "link": "#Registry"},
            {"name": "FAQs", "link": "#FAQs"},
        ]
    }

    const navbar = makeEle.createEle('div','NavBar',null,'navbar');
    const navLogo = makeEle.createEle('div','NavLogo',null,'navlogo');
    const navLinkContainer = makeEle.createEle('div','navBarContainer',null,'navbarcontainer');
    navbar.append(navLogo, navLinkContainer);

    pageLinks.links.forEach((link, i) => {
        console.log(link);

        let navlinkItem = makeEle.createEle('a', 'navlinkItem-'+i,null,'navlinkItem');

        navlinkItem.href = link.link;
        navlinkItem.innerHTML = `
            <div>
                ${link.name}
            </div>
        `;

        navLinkContainer.append(navlinkItem);

    })


    console.log(navbar.getBoundingClientRect());


    return navbar
}



export default NavBar;