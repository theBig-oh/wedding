import { MakeElement } from '../utils';

  const makeEle = new MakeElement;

function RegisterPage(regItems) {

    const registerContainer = makeEle.createEle('div', 'Registery-Page', null, ['bodyContainerItem','registery-page','text-page']);

    console.log(regItems);
    const registerWrapper = makeEle.createEle('div','Register-wrapper', null, ['register-wrapper']);
    const registerPageTitle = makeEle.createEle('div','Register-Title', null, ['registerPageItem', 'registerTitle']);
    const registerPageText = makeEle.createEle('div','Register-page-text', null, ['registerPageItem','registerPageText']);

    const registerBodyWrapper = makeEle.createEle('div','Register-body-wrapper', null, 'register-body-wrapper');


    const registerItemsContainer = makeEle.createEle('div','Register-Item-Container', null,['registerPageItem','reigsterItemContainer']);

    registerPageTitle.innerHTML = `
      <div class="title">
        The Registry
      </div>
    `;

    registerPageText.innerHTML = `
        <div class="text"> 
          <div class="register-text">
              <p>Hey there, awesome guests! Wanna know where to find our wedding registry? We've got you covered!</p>
          </div>

          <div class="register-text">
              <p>Just hop onto your favorite wedding registry websites or apps, and search for our names.</p>
              <p>You'll find a bunch of handpicked items we'd love to have for our new life together.</p>
          </div>

          <div class="register-text">
              <p>From kitchen gadgets to funky decor, we've got a mix of goodies that'll turn our house into a home.</p>
              <p>No pressure, though – your presence at the wedding is already an amazing gift!</p>
          </div>

          <div class="register-text">
              <p>Thanks for joining us on this exciting journey. Can't wait to see you and celebrate together!</p>
          </div>


        </div>
    `;

    regItems.forEach((x,i) => {
        console.log(x);

        let regItemsContain = makeEle.createEle('a', 'regItemContain', null, 'regItemContain');

        regItemsContain.innerHTML = `
          <div class="name">
              ${x.name}
          </div>
        `;

        regItemsContain.href = x.url;

        registerItemsContainer.append(regItemsContain);
      })


    registerBodyWrapper.append(registerPageText, registerItemsContainer);

    registerWrapper.append(registerPageTitle, registerBodyWrapper);

    registerContainer.append(registerWrapper);




    return registerContainer;
  }


export default RegisterPage;