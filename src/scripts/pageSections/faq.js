import { MakeElement } from '../utils';

  const makeEle = new MakeElement;

function FaqPage() {

   const tocMarker = makeEle.createEle('div','FAQs', null, ['toc-marker','faq-toc-marker']);

    const faqContainer = makeEle.createEle('div', 'faq-Page', null, ['bodyContainerItem','faq-page','text-page']);

    const faqWrapper = makeEle.createEle('div','faq-wrapper', null, ['faq-wrapper']);
    const faqPageTitle = makeEle.createEle('div','faq-Title', null, ['faqPageItem', 'faqTitle']);
    const faqPageText = makeEle.createEle('div','faq-page-text', null, ['faqPageItem','faqPageText','textPageTextContainer']);

    const faqBodyWrapper = makeEle.createEle('div','faq-body-wrapper', null, 'faq-body-wrapper');

    faqPageTitle.innerHTML = `
      <div class="title">
        Frequently Asked Questions
      </div>
    `;

    faqPageText.innerHTML = `
        <div class="text"> 
          <div class="faq-text">
              <p>Have any questions or need further information? We're here to help!</p>
              <p>Please feel free to reach out to us at <br/><br/><a href="mailto:FAQs@alexoscarwedding.nyc">FAQs@AlexOscarWedding.nyc</a><br/></p>
              <p>Whether it's regarding accommodations, transportation, or any other details, we'll be happy to assist you.</p>
              <p>Don't hesitate to drop us an email, and we'll get back to you as soon as possible.</p>
              <p>Looking forward to celebrating with you!</p>
          </div>
        </div>
    `;

    faqBodyWrapper.append(faqPageText);

    faqWrapper.append(faqPageTitle, faqBodyWrapper);

    faqContainer.append(tocMarker, faqWrapper);




    return faqContainer;
  }


export default FaqPage;