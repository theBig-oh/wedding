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
    const navBarMobile = makeEle.createEle('div','NavBarMobile', null, 'navbarMobile');
    const navMobileLinkContainer = makeEle.createEle('div','navBarContainer',null,'navbarcontainer');
    const navMobileLogo = makeEle.createEle('div','NavLogo',null,'navlogo');
    const navLogo = makeEle.createEle('div','NavLogo',null,'navlogo');
    const navLinkContainer = makeEle.createEle('div','navBarContainer',null,'navbarcontainer');
    
    navBarMobile.append(navMobileLogo, navMobileLinkContainer);
    navbar.append(navBarMobile, navLogo, navLinkContainer);
    

    pageLinks.links.forEach((link, i) => {
        console.log(link);

        let navlinkItem = makeEle.createEle('a', 'navlinkItem-'+i,null,'navlinkItem');

        navlinkItem.href = link.link;
        navlinkItem.innerHTML = `
            <div>
                ${link.name}
            </div>
        `;
        navMobileLinkContainer.append(navlinkItem);
        navLinkContainer.append(navlinkItem);


    })

    /* Need to figure out a better way for this since this is literally a copy of above. */
    pageLinks.links.forEach((link, i) => {
        console.log(link);

        let navlinkItem = makeEle.createEle('a', 'navlinkItem-'+i,null,'navlinkItem');

        navlinkItem.href = link.link;
        navlinkItem.innerHTML = `
            <div>
                ${link.name}
            </div>
        `;
        navMobileLinkContainer.append(navlinkItem);
    })



    navBarMobile.children[0].addEventListener('click', (e) => {
        navBarMobile.children[1].classList.contains('is-active') ? navBarMobile.children[1].classList.remove('is-active') : navBarMobile.children[1].classList.add('is-active');
        navBarMobile.parentNode.classList.contains('is-active') ? navBarMobile.parentNode.classList.remove('is-active') : navBarMobile.parentNode.classList.add('is-active');
    })

    navBarMobile.children[1].addEventListener('click', (e) => {
        navBarMobile.parentNode.classList.remove('is-active');
        navBarMobile.children[1].classList.remove('is-active');
    })



    return navbar
}



export default NavBar;