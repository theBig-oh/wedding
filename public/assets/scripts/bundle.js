/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Data/Data.js":
/*!**********************************!*\
  !*** ./src/scripts/Data/Data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar data = {\n  /* Personal Info */\n  \"person\": {\n    \"names\": [{\n      \"firstName\": \"Oscar\",\n      \"lastName\": \"Medrano\",\n      \"nickName\": \"\",\n      \"title\": \"groom\"\n    }, {\n      \"firstName\": \"Alexandra\",\n      \"lastName\": \"Grosso\",\n      \"nickName\": \"Alex\",\n      \"title\": \"bride\"\n    }]\n  },\n  \"date\": {\n    \"month\": \"March\",\n    \"day\": 14,\n    \"time\": \"TBA\",\n    \"timecode\": \"\",\n    \"country\": \"Colombia\",\n    \"countryBlurb\": `\n\t\t\t<div class=\"wedding-blurb\">\n  \t\t\t\t<p>Join us in colorful and vibrant Cartagena, Colombia, a stunning destination for our wedding celebration.</p>\n  \t\t\t\t<p>Explore the historic old town, enjoy the delicious food and drinks, and soak up the Caribbean sun on the beach.</p>\n  \t\t\t\t<p>We can't wait to share this unforgettable experience with you!</p>\n\t\t\t</div>`\n  },\n  /* Hotels And Venue */\n  \"location\": [{\n    \"name\": \"Sofiatel Santa Clara\",\n    \"link\": \"\",\n    \"address\": \"\",\n    \"map\": \"\",\n    \"blurb\": `<div>\n       \t\t\t <h3>Our Wedding in Cartagena, Colombia</h3>\n        \t\t\t<p>Our wedding will be held at the <br></br><strong>Sofitel Hotel in Cartagena, Colombia</strong><br/><br/> A stunning venue located in the heart of the historic walled city.</p>\n        \t<p>With its elegant decor and amazing views, it's the perfect place for our dream wedding.</p>\n        \t<p>The hotel's event planning team is here to help us with everything, so we can relax and enjoy our special day.</p>\n        \t<p>Can't wait to celebrate with you there!</p>\n      \t\t</div>`,\n    \"isVenue\": true\n  }, {\n    \"name\": \"Sofiatel Santa Clara\",\n    \"link\": \"\",\n    \"address\": \"\",\n    \"map\": \"\",\n    \"blurb\": \"\",\n    \"isVenue\": false\n  }, {\n    \"name\": \"Sofiatel Santa Clara\",\n    \"link\": \"\",\n    \"address\": \"\",\n    \"map\": \"\",\n    \"blurb\": \"\",\n    \"isVenue\": false\n  }]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n/*                \"Programming\": {\n\t\t\t\t  \"ES6\": {\n\t\t\t\t\t\"level\": 7,\n\t\t\t\t  },\n\t\t\t\t  \"ReactJS\": {\n\t\t\t\t\t  \"level\": 6\n\t\t\t\t  },\n\t\t\t\t  \"AngularJS\": {\n\t\t\t\t\t  \"level\": 6\n\t\t\t\t  },\n\t\t\t\t  \"Ruby\": {\n\t\t\t\t\t\"level\":6\n\t\t\t\t  },\n\t\t\t\t},\n\t\t\t\t\"Design\": {\n\t\t\t\t  \"Adobe Illustrator\": {\n\t\t\t\t\t\"level\": 8,\n\t\t\t\t  },\n\t\t\t\t  \"CSS\": {\n\t\t\t\t\t\"level\": 9,\n\t\t\t\t  },\n\t\t\t\t  \"\"\n\t\t\t\t}*/\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/Data/Data.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n/* harmony import */ var _Data_Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data/Data.js */ \"./src/scripts/Data/Data.js\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _pageSections_title_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageSections/title.js */ \"./src/scripts/pageSections/title.js\");\n/* harmony import */ var _pageSections_projects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageSections/projects.js */ \"./src/scripts/pageSections/projects.js\");\n/* harmony import */ var _pageSections_Gallery_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageSections/Gallery.js */ \"./src/scripts/pageSections/Gallery.js\");\n/* harmony import */ var _pageSections_navBar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pageSections/navBar.js */ \"./src/scripts/pageSections/navBar.js\");\n/* harmony import */ var _pageSections_venue_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pageSections/venue.js */ \"./src/scripts/pageSections/venue.js\");\n\n\n\n\n\n\n\n\nfunction RenderSite() {\n  let body = document.querySelector('body');\n  let date = new Date();\n  let hours = date.getHours();\n  let makeEle = new _utils__WEBPACK_IMPORTED_MODULE_0__.MakeElement();\n  let bodyTime = makeEle.createEle('div', 'countdown', null, 'bodyTime');\n  let bodyContainer = makeEle.createEle('div', 'bodyContainer', [12, 12, 12, 12], ['bodyContain']);\n  bodyContainer.append((0,_pageSections_title_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Data_Data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].person), (0,_pageSections_navBar_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), (0,_pageSections_venue_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Data_Data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].location), (0,_pageSections_title_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Data_Data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].person), (0,_pageSections_venue_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Data_Data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].location));\n  body.append(bodyTime, bodyContainer);\n}\nRenderSite();\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/pageSections/Gallery.js":
/*!*********************************************!*\
  !*** ./src/scripts/pageSections/Gallery.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/scripts/utils.js\");\n\nconst makeEle = new _utils__WEBPACK_IMPORTED_MODULE_0__.MakeElement();\nfunction GetImgurData() {\n  const albumId = '5b1Iw74';\n  const imgurUrl = 'https://api.imgur.com/3/album/' + albumId;\n  const apiKey = 'd79980c38438700';\n  return new Promise((resolve, reject) => {\n    fetch(imgurUrl, {\n      headers: {\n        'Authorization': 'Client-ID ' + apiKey\n      }\n    }).then(data => data.json()).then(data => {\n      resolve(data.data);\n    });\n  });\n}\nclass GalleryCarousel {\n  constructor(imageCount, currentPage, images) {\n    this.state = {\n      currentCount: imageCount,\n      currentPage: currentPage ? currentPage : 0,\n      totalPages: images ? Math.ceil(images.length / imageCount) : 0,\n      images: images ? images : [],\n      renderedImages: []\n    };\n    this.changePage = this.changePage.bind(this);\n    this.displayModal = this.displayModal.bind(this);\n  }\n  imageSets(currentPage) {\n    let startCount = this.state.currentCount * currentPage;\n    let endCount = startCount + this.state.currentCount;\n    let imageResults = [];\n    for (startCount; startCount < endCount; startCount++) {\n      console.log(startCount);\n      let currentImage = this.state.images[startCount];\n      if (startCount >= this.state.images.length) {\n        console.log('No image exist');\n      } else {\n        let renderImageContainer = makeEle.createEle('div', 'renderImageContainer_' + (endCount - startCount), null, 'renderImageContainer');\n        let renderImage = makeEle.createEle('img', 'renderImage_' + (endCount - startCount), null, 'renderImages');\n        renderImage.src = currentImage.link;\n        /*\n                renderImage.style.background = 'url('+currentImage.link+') no-repeat';\n                */\n        renderImage.startCount = startCount;\n        renderImageContainer.append(renderImage);\n        renderImage.addEventListener('click', () => {\n          this.displayModal(currentImage);\n        });\n        imageResults.push(renderImageContainer);\n      }\n    }\n    this.state.renderedImages = imageResults;\n  }\n  displayModal(picture) {\n    let displayedModal = makeEle.createEle('div', 'displayModal', [12, 12, 12, 12], 'displayModalContainer');\n    let displayPicture = makeEle.createEle('img', 'displayPicture', [12, 12, 12, 12], 'displayModalPicture');\n    let pictureInfo = makeEle.createEle('div', 'picInfo', [12, 12, 12, 12], 'picInfo');\n    displayPicture.src = picture.link;\n    displayPicture.title = picture.description ? picture.description : '';\n    displayedModal.append(displayPicture);\n    document.querySelector('body').append(displayedModal);\n    displayedModal.addEventListener('click', e => {\n      if (e.target.classList.contains('displayModalContainer')) {\n        displayedModal.remove();\n      }\n    });\n  }\n  changePage(pageTurn) {\n    let currentPage = this.state.currentPage;\n    let newImages = [];\n    let loadedSet = false;\n    if (pageTurn) {\n      if (currentPage + 1 >= this.state.totalPages) {\n        console.log('max page reached');\n      } else {\n        this.state.currentPage = currentPage + 1;\n        this.imageSets(this.state.currentPage);\n      }\n    } else {\n      if (currentPage - 1 < 0) {\n        console.log('first page reached');\n      } else {\n        this.state.currentPage = currentPage - 1;\n        this.imageSets(this.state.currentPage);\n      }\n    }\n    newImages = this.state.renderedImages;\n    document.querySelector('#imageContainer').innerHTML = '';\n    newImages.forEach((img, i) => {\n      document.querySelector('#imageContainer').append(img);\n    });\n  }\n  renderDiv(imageCount) {\n    this.imageSets(this.state.currentPage);\n    let carouselContainerWithControls = makeEle.createEle('div', 'carouselWrapper', [12, 12, 12, 12], 'carouselWrapper');\n    let imageControlCount = Array(2).fill(null);\n    let imageControl = [];\n    let imageContainer = makeEle.createEle('div', 'imageContainer', null, 'imageContainer');\n    let imagesArray = this.state.renderedImages;\n    imageControlCount.forEach((ctr, i) => {\n      let controlIcon = makeEle.createEle('div', 'controlIcon_' + i, null, 'controlIcon');\n      let leftOrRight = makeEle.createEle('div', 'imageControl_' + i, null, 'imageControls');\n      if (i == 0) {\n        controlIcon.innerHTML = '<';\n        if (this.state.currentPage == 0) {\n          leftOrRight.classList.add('invalid');\n        } else {\n          leftOrRight.classList.remove('invalid');\n        }\n      } else {\n        controlIcon.innerHTML = '>';\n      }\n      leftOrRight.addEventListener('click', e => {\n        let currentPage = this.state.currentPage;\n        if (i == 1) {\n          this.changePage(true);\n          document.querySelector('#imageControl_0').classList.remove('invalid');\n          if (currentPage + 2 >= this.state.totalPages) {\n            leftOrRight.classList.add('invalid');\n          }\n        } else {\n          this.changePage(false);\n          document.querySelector('#imageControl_1').classList.remove('invalid');\n          if (this.state.currentPage == 0) {\n            leftOrRight.classList.add('invalid');\n          } else {\n            leftOrRight.classList.remove('invalid');\n          }\n        }\n      });\n\n      /*\n         Need to re-factor this cause it's too much repeating. \n         Will redo later. Rough draft first.\n        */\n      leftOrRight.append(controlIcon);\n      imageControl.push(leftOrRight);\n    });\n    imagesArray.forEach((image, i) => {\n      imageContainer.append(image);\n    });\n    carouselContainerWithControls.append(imageControl[0], imageContainer, imageControl[1]);\n    return carouselContainerWithControls;\n  }\n}\nfunction GalleryPage(galleryPics) {\n  let imageResults;\n  const galleryPageContainer = makeEle.createEle('div', 'galleryPageContainer', [12, 12, 12, 12], ['bodyContentItem', 'galleryPageContainer']);\n  let galleryTitle = makeEle.createEle('div', 'galleryTitle', [12, 12, 12, 12], 'galleryTitle');\n  let loadedState = false;\n  let state = {\n    imageCount: 8,\n    imageArray: []\n  };\n  if (loadedState == false) {\n    GetImgurData().then(res => {\n      return res;\n    }).then(res => {\n      imageResults = res.images;\n      if (Array.isArray(imageResults)) {\n        loadedState != loadedState;\n        let totalPages = imageResults ? Math.floor(imageResults.length / state.imageCount) : 0;\n        let galleryCarousel = new GalleryCarousel(state.imageCount, 0, imageResults);\n        galleryTitle.innerHTML = `<div class='titleText'> <div class='text_1'>Real life drawings</div> <div class='text_2'> Check more out on my <a href='http://instagram.com/the_big_oh'> Instagram </a> </div> </div>`;\n        galleryPageContainer.append(galleryTitle, galleryCarousel.renderDiv());\n      }\n    });\n  }\n  return galleryPageContainer;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryPage);\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/pageSections/Gallery.js?");

/***/ }),

/***/ "./src/scripts/pageSections/navBar.js":
/*!********************************************!*\
  !*** ./src/scripts/pageSections/navBar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/scripts/utils.js\");\n\nconst doc = document.querySelector('body');\nconst NavBar = function () {\n  console.log('this is the navBar');\n  const makeEle = new _utils__WEBPACK_IMPORTED_MODULE_0__.MakeElement();\n  const pageLinks = {\n    \"links\": [{\n      \"name\": \"Venue\",\n      \"link\": \"#venue\"\n    }, {\n      \"name\": \"Travel\",\n      \"link\": \"#venue\"\n    }, {\n      \"name\": \"Registry\",\n      \"link\": \"#venue\"\n    }, {\n      \"name\": \"FAQs\",\n      \"link\": \"#venue\"\n    }]\n  };\n  const navbar = makeEle.createEle('div', 'NavBar', null, 'navbar');\n  const navLogo = makeEle.createEle('div', 'NavLogo', null, 'navlogo');\n  const navLinkContainer = makeEle.createEle('div', 'navBarContainer', null, 'navbarcontainer');\n  navbar.append(navLogo, navLinkContainer);\n  pageLinks.links.forEach((link, i) => {\n    console.log(link);\n    let navlinkItem = makeEle.createEle('a', 'navlinkItem-' + i, null, 'navlinkItem');\n    navlinkItem.href = link.link;\n    navlinkItem.innerHTML = `\n            <div>\n                ${link.name}\n            </div>\n        `;\n    navLinkContainer.append(navlinkItem);\n  });\n  console.log(navbar.getBoundingClientRect());\n  return navbar;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/pageSections/navBar.js?");

/***/ }),

/***/ "./src/scripts/pageSections/projects.js":
/*!**********************************************!*\
  !*** ./src/scripts/pageSections/projects.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/scripts/utils.js\");\n\nconst ProjectPage = function (projectsInfo) {\n  const makeEle = new _utils__WEBPACK_IMPORTED_MODULE_0__.MakeElement();\n  let mainContent = makeEle.createEle('div', 'ProjectsPage', [12, 12, 12, 12], ['projectsPageContainer', 'bodyContainerItem']);\n  let mainTitle = makeEle.createEle('div', 'projectsPageTitle', [12, 12, 12, 12], 'projectsPageTitle');\n  let projectSwitchContainer = makeEle.createEle('div', 'projectSwitchButton', [12, 12, 12, 12], 'projectSwitchContainer');\n  let projectsContainerSwitch = makeEle.createEle('div', 'projectContainerSwitch', [12, 12, 12, 12], 'projectContainerSwitch');\n  let activeProject = 0;\n  mainTitle.innerHTML = `<div> <b>Projects I've worked on</b> </div> `;\n\n  /*  projectSwitch.innerHTML = `<div id='projectSide' class='projectSwitchButton'>\n                                For Work\n                              </div>\n                              <div id='projectSide' class='projectSwitchButton'>\n                                For Fun\n                              </div>\n  \n    `;\n  */\n\n  projectsInfo.forEach((projectType, i) => {\n    let activeClass = i == activeProject ? 'active_project' : 'not_active';\n    let projectSwitchButton = makeEle.createEle('div', 'projectSwitchButton_' + projectType.projectType, [6, 6, 6, 6], ['projectSwitchButton', 'projectButton_' + i, activeClass, 'switchControl']);\n    projectSwitchButton.innerHTML = `<div class='typeName'>\n                                             For ${projectType.projectType}\n                                          </div>\n                                          `;\n    let projectSwitch = makeEle.createEle('div', 'projectContainer_' + projectType.projectType, [12, 12, 12, 12], ['projectSwitchContainers', 'projectContainer_' + i, activeClass, 'switchControl']);\n    /*    \n        projectType.project.forEach((proj, x) => {\n          console.log(proj);\n          let projectItem = makeEle.createEle('a',`${projectType.projectType}_item_${proj.code}`,null, 'project');\n    \n          projectSwitch.append(projectItem);\n    \n    \n    \n    \n        }) */\n\n    /*  console.log(projectType);*/\n\n    projectType.projects.forEach((proj, x) => {\n      /*    console.log(proj);*/\n\n      let projectItem = makeEle.createEle('a', `${projectType.projectType}_item_${proj.code}`, [12, 5, 6, 6], 'projects');\n      projectItem.innerHTML = `\n            <div class='movableName'>\n              <p> ${proj.name}</p>\n            </div>\n\n\n      `;\n      projectItem.href = proj.url;\n      projectItem.style.background = 'url(../../public/assets/images/projectImages/' + proj.code + '.png) no-repeat';\n      projectItem.style.backgroundSize = '100% 100%';\n      projectSwitch.append(projectItem);\n    });\n    projectsContainerSwitch.append(projectSwitch);\n    projectSwitchContainer.append(projectSwitchButton);\n    projectSwitchButton.addEventListener('click', event => {\n      console.log('sup clicked!');\n      console.log(event);\n      console.log(i);\n      activeProject = i;\n      let switchArray = Array.of(document.querySelectorAll('.switchControl'));\n      switchArray[0].forEach((buttonClasses, i) => {\n        console.log(buttonClasses);\n        buttonClasses.classList.remove('active_project');\n        buttonClasses.classList.add('not_active');\n      });\n      document.querySelector('.projectButton_' + activeProject).classList.remove('not_active');\n      document.querySelector('.projectButton_' + activeProject).classList.add('active_project');\n      document.querySelector('.projectContainer_' + activeProject).classList.remove('not_active');\n      document.querySelector('.projectContainer_' + activeProject).classList.add('active_project');\n    });\n  });\n  mainContent.append(mainTitle, projectSwitchContainer, projectsContainerSwitch);\n  return mainContent;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectPage);\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/pageSections/projects.js?");

/***/ }),

/***/ "./src/scripts/pageSections/title.js":
/*!*******************************************!*\
  !*** ./src/scripts/pageSections/title.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/scripts/utils.js\");\n\n\n/*import email from '../../css/Assets/Icons/email.svg';\nimport github from '../../css/Assets/Icons/github.svg';\nimport linkedin from '../../css/Assets/Icons/linkedin.svg';\nimport instagram from '../../css/Assets/Icons/instagram.svg';\n*/\nconst TitlePage = function (PersonInfo) {\n  const makeEle = new _utils__WEBPACK_IMPORTED_MODULE_0__.MakeElement();\n  /*const svgArray = [email,linkedin,github,instagram]*/\n  const svgArray = ['1', '2', '3'];\n  const mainContent = makeEle.createEle('div', 'titleMainContent', null, ['titleOuterContainer', 'bodyContainerItem']);\n  const nameTitle = makeEle.createEle('div', 'titleName', null, 'titleName');\n  const titleImage = makeEle.createEle('div', 'titleImage', null, 'titleImage');\n\n  /*  \n      PersonInfo.names.forEach((name, i) => {\n          console.log(name);\n  \n          let nameDiv = makeEle.createEle('div',name.title + 'Name-div', null,['titleNameDiv',name.title+'name-div']);\n  \n          nameDiv.innerHTML = name.firstName + ' ' + name.lastName;\n  \n          nameTitle.append(nameDiv);\n      })\t\n    */\n\n  /*\n        USE THIS FOR INSPRIORATION \n         https://www.judieandz.com/\n   */\n\n  mainContent.append(titleImage, nameTitle);\n  return mainContent;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitlePage);\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/pageSections/title.js?");

/***/ }),

/***/ "./src/scripts/pageSections/venue.js":
/*!*******************************************!*\
  !*** ./src/scripts/pageSections/venue.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/scripts/utils.js\");\n\nconst Venues = function (venue) {\n  const makeEle = new _utils__WEBPACK_IMPORTED_MODULE_0__.MakeElement();\n  console.log('this is the venue');\n  console.log(venue);\n  const venueContainer = makeEle.createEle('div', 'Venues', null, ['venueContainer', 'bodyContainerItem']);\n  const venueMainBg = makeEle.createEle('div', 'Venue-BG', null, ['venueContainerItem', 'venue-bg']);\n  const venueText = makeEle.createEle('div', 'Venue-Text', null, ['venue-text', 'venueContainerItem']);\n  const venueTextHeader = makeEle.createEle('div', 'Venue-Text-Header', null, ['venue-text-header', 'venueTextItem']);\n  const venueBlurb = makeEle.createEle('div', 'Venue-Blurb', null, ['venue-blurb', 'venueTextItem']);\n  venueTextHeader.innerHTML = `<div> The Venue </div>`;\n  venueBlurb.innerHTML = venue[0].blurb;\n  venueText.append(venueTextHeader, venueBlurb);\n  venueContainer.append(venueMainBg, venueText);\n  return venueContainer;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Venues);\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/pageSections/venue.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetBacon\": () => (/* binding */ GetBacon),\n/* harmony export */   \"MakeElement\": () => (/* binding */ MakeElement)\n/* harmony export */ });\nconst GetBacon = () => {\n  const body = fetch('https://baconipsum.com/api/?type=all-meat&paras=3').then(res => res.json());\n  return body;\n};\n\n/*\n  MakeElements --- \n\n    MakeElement.createEle : Creates HTML element of your choosing\n                            \n                            Type: Takes string value, can create any element type ie \"div\", \"span\",\"img\"\n                            Name: Takes string value, sets element Id value\n                            Gridsize: Takes Array value, [xs,sm,md,lg]. Used for bootstrap's grid system\n                            Custom: Takes string value, sets custom classes\n                                    Uses an array if there is more than one custom class being called in.\n                                    \n\n*/\n\nfunction MakeElement() {\n  this.createEle = function (type, name, gridsize, custom) {\n    let newElement = document.createElement(type);\n    newElement.id = name;\n    let classStuff = ['noPadding'];\n    if (Array.isArray(custom)) {\n      custom.forEach(function (clas) {\n        classStuff.push(clas);\n      });\n    } else {\n      classStuff.push(custom);\n    }\n    if (gridsize == null) {\n      console.log('No bootstrap classes added');\n    } else {\n      gridsize.forEach(function (siz, i) {\n        let multiSize = ['xs', 'sm', 'md', 'lg'];\n        if (parseInt(siz) == 0) {\n          classStuff.push(`hidden-${multiSize[i]}`);\n        } else {\n          classStuff.push(`col-${multiSize[i]}-${siz}`);\n        }\n      });\n    }\n    classStuff.forEach(function (clas) {\n      newElement.classList.add(clas);\n    });\n    return newElement;\n  };\n}\n\n//# sourceURL=webpack://vanilla-website/./src/scripts/utils.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://vanilla-website/./src/styles/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/scripts/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/styles.scss");
/******/ 	
/******/ })()
;