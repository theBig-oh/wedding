import { MakeElement } from '../utils';

/*import email from '../../css/Assets/Icons/email.svg';
import github from '../../css/Assets/Icons/github.svg';
import linkedin from '../../css/Assets/Icons/linkedin.svg';
import instagram from '../../css/Assets/Icons/instagram.svg';
*/
const TitlePage = function(PersonInfo) {
  	const makeEle = new MakeElement;
  	/*const svgArray = [email,linkedin,github,instagram]*/
  	const svgArray = ['1','2','3'];

  	const mainContent = makeEle.createEle('div','titleMainContent',null,['titleOuterContainer','bodyContainerItem']);
    const nameTitle = makeEle.createEle('div', 'titleName', null, 'titleName');
    const titleImage = makeEle.createEle('div', 'titleImage',null, 'titleImage');

/*  
    PersonInfo.names.forEach((name, i) => {
        console.log(name);

        let nameDiv = makeEle.createEle('div',name.title + 'Name-div', null,['titleNameDiv',name.title+'name-div']);

        nameDiv.innerHTML = name.firstName + ' ' + name.lastName;

        nameTitle.append(nameDiv);
    })	
  */

  /*
        USE THIS FOR INSPRIORATION 

        https://www.judieandz.com/

  */





    mainContent.append(titleImage, nameTitle);

    return mainContent;
}

export default TitlePage;