import { MakeElement } from '../utils';

const makeEle = new MakeElement;

const Spacer = function(context, anytext, image) {
    const makeEle = new MakeElement;

    const mainContent = makeEle.createEle('div','Spacer_' + context,null,['spacer','bodyContainerItem', 'spacer_'+context]);
    const nameTitle = makeEle.createEle('div', 'spacerName_' + context, null, ['spacerName', 'spacerName_'+context]);
    const titleImage = makeEle.createEle('div', 'spacerImage_' + context,null, ['spacerImage','spacerImage_'+context]);

    nameTitle.innerHTML = anytext ? anytext : null;
    titleImage.style.backgroundImage = image ? "url("+image+ ")" : null;

    mainContent.append(titleImage, nameTitle);

    return mainContent; 
}

export default Spacer;