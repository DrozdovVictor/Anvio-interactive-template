/* Variables */

//----- Header -----//
const headerNavMenu1 = document.getElementById('header-nav-menu-1')
const headerNavMenu1Items = Array.from(headerNavMenu1.children)
const headerNavMenu1ItemMenu1 = document.getElementById('header-nav-menu-1-item-menu-1')
const headerNavMenu1ItemMenu2 = document.getElementById('header-nav-menu-1-item-menu-2')
const headerNavMenu2 = document.getElementById('header-nav-menu-2')
const headerNavMenu2Items = Array.from(headerNavMenu2.children)
const headerNavMenu2ItemMenu1 = document.getElementById('header-nav-menu-2-item-menu-1')
const headerNavMenu2ItemMenu2 = document.getElementById('header-nav-menu-2-item-menu-2')

const headerNavMobileImgCard = document.getElementById('header-nav-mobile-img-card')
const headerNavMobileImgCardMenu = document.getElementById('header-nav-mobile-img-card-menu')

const mobileMenu = document.getElementById('mobile-menu')
const headerSpan = document.getElementById('firstspan')
const mobileMenuContent = document.getElementById('header-nav-menu-mobile-content')
const headerNavMenuContenthead = document.getElementById('header-nav-menu-mobile-content-head')
const headerNavMenuContentheadItems = Array.from(headerNavMenuContenthead.children)
const headerNavMobileMenusBlock = document.getElementById('header-nav-mobile-menusBlock')
const headerNavMenuContentMenu1 = document.getElementById('header-nav-menu-mobile-content-menu-1')
const headerNavMenuContentMenu2 = document.getElementById('header-nav-menu-mobile-content-menu-2')
const mobileMenuContentItem1 = document.getElementById('header-nav-menu-mobile-content-content-item1')
const mobileMenuContentItem2 = document.getElementById('header-nav-menu-mobile-content-content-item2')
const headerMenuMobileItem2Content = document.getElementById('menu-mobile-item2-content')

const mobileEntentainmentsMenuOpenElements = document.getElementById('mobile-entertainments-menu-open-elements')
const mobileEntentainmentsMenuOpenElementsItems = Array.from(mobileEntentainmentsMenuOpenElements.children)
const mobileEntentainmentsMenu = document.getElementById('modile-entertainments-menu')
const mobileEntentainmentsMenuItems = Array.from(mobileEntentainmentsMenu.children)
const mobileEntentainmentsMenuBtnsClose = document.querySelectorAll('.modile-entertainments-menu-btn-close')

const slider = document.getElementById('slider')
const sliderItems = Array.from(slider.children)
const sliderBtnNext = document.getElementById('slider-btn-next')
const sliderBtnPrev = document.getElementById('slider-btn-prev')
const sliderPoints = document.getElementById('slider-points')
const sliderPointsItems = Array.from(sliderPoints.children)

//----- Entertainments Section -----//
const entertainmentsBtns = document.getElementById('entertainments-content-btns')
const entertainmentsBtnsItems = Array.from(document.querySelectorAll('button.btn'))
const tab1 = document.querySelector('#tab-1')
const entertainmentsContentCard = document.getElementById('entertainments-content-card')

const entertainmentsSliderbtnPrev = document.getElementById('entertainments-slider-btn-prev')
const entertainmentsSliderbtnNext = document.getElementById('entertainments-slider-btn-next')
const entertainmentsSliderContentImgs = document.getElementById('entertainments-slider-content-imgs')
const entertainmentsSliderContentImgsItems = Array.from(entertainmentsSliderContentImgs.children)
const entertainmentsSliderCards = document.getElementById('entertainments-slider-cards')
const entertainmentsSliderImgs = document.getElementById('entertainments-slider-cards-imgs')
const entertainmentsSliderImgsItems = Array.from(entertainmentsSliderImgs.children)

const modalButton = document.querySelectorAll('.modal-button')
const modalWindow = document.querySelectorAll('.modal')
const modalWindowContent = document.querySelectorAll('.modal-main')
const modalCloseBtns = document.querySelectorAll('.back-circle')
const modalWindowContentItem1FirstChild = document.getElementById('arena-item')

//----- Emotions Section -----//
const emotionsSlider = document.getElementById('emotions-slider')
const emotionsSliderItems = Array.from(emotionsSlider.children)
const emotionsBtnPrev = document.getElementById('emotions-content-btn-prev')
const emotionsBtnNext = document.getElementById('emotions-content-btn-next')

//----- Events Section -----//
const eventsBtns = document.getElementById('events-btns')
const eventsBtnsItems = Array.from(eventsBtns.children)
const eventsCards = document.getElementById('events-cards')
const eventsCardsItems = Array.from(eventsCards.children)

const eventsSlider = document.querySelectorAll('.events-slider-content')
const eventsSliderBtnPrev = document.querySelectorAll('.events-slider-btn-prev')
const eventsSliderBtnNext = document.querySelectorAll('.events-slider-btn-next')

const eventSliderMobile = document.querySelectorAll('.events-btns-item-slider-content')
const eventSliderMobileBtnPrev = document.querySelectorAll('.events-btns-item-slider-btn-prev')
const eventSliderMobileBtnNext = document.querySelectorAll('.events-btns-item-slider-btn-next')

//----- Impressions Section -----//
const impressionsSlider = document.getElementById('impressions-slider')
const impressionsSliderItems = Array.from(impressionsSlider.children)
const impressionsSliderBtnPrev = document.getElementById('impressions-content-btn-prev')
const impressionsSliderBtnNext = document.getElementById('impressions-content-btn-next')

//----- Reviews Section -----// 
const reviewsSlider = document.getElementById('reviews-slider')
const reviewsSliderItems = Array.from(reviewsSlider.children)
const reviewsSliderBtnPrev = document.getElementById('reviews-content-btn-prev')
const reviewsSliderBtnNext = document.getElementById('reviews-content-btn-next')
const reviewsItemContent1 = document.getElementById('reviews-item-content1')
const reviewsItemContentItems1 = Array.from(reviewsItemContent1.children)
const reviewsItemContent2 = document.getElementById('reviews-item-content2')
const reviewsItemContentItems2 = Array.from(reviewsItemContent2.children)

//----- Stocks Section -----//
const stocksSlider = document.getElementById('stocks-slider')
const stocksSliderItems = Array.from(stocksSlider.children)
const stocksSliderBtnPrev = document.getElementById('stocks-content-btn-prev')
const stocksSliderBtnNext = document.getElementById('stocks-content-btn-next')

//----- News Section -----//
const newsSlider = document.getElementById('news-slider')
const newsSliderItems = Array.from(newsSlider.children)
const newsSliderBtnPrev = document.getElementById('news-content-btn-prev')
const newsSliderBtnNext = document.getElementById('news-content-btn-next')

//----- Offers Section -----//
const offersSlider = document.getElementById('offers-slider')
const offersSliderItems = Array.from(offersSlider.children)
const offersSliderBtnPrev = document.getElementById('offers-content-btn-prev')
const offersSliderBtnNext = document.getElementById('offers-content-btn-next')

/* Functions */

//----- For Some Sections -----//

window.addEventListener('load', function () {
  emotionsSlider.scrollLeft = emotionsSliderItems[0].offsetWidth * 4 - 50
  impressionsSlider.scrollLeft = impressionsSliderItems[0].offsetWidth * 2.5 - 52.5
  reviewsSlider.scrollLeft = reviewsSliderItems[0].offsetWidth * 2 + 60
  stocksSlider.scrollLeft = stocksSliderItems[0].offsetWidth * 2 - 5
  newsSlider.scrollLeft = newsSliderItems[0].offsetWidth * 2 - 25
  offersSlider.scrollLeft = offersSliderItems[0].offsetWidth * 2 + 60
})

function btnScroll (btn, arr, arrChild, direction) {
 btn.addEventListener('click', function() {
   if (direction === 'prev') {
     arr.scrollLeft -= arrChild.offsetWidth + 30
   }
   if (direction === 'next') {
     arr.scrollLeft += arrChild.offsetWidth + 30
   }
 })
}

btnScroll(emotionsBtnPrev, emotionsSlider, emotionsSliderItems[0], 'prev')
btnScroll(emotionsBtnNext, emotionsSlider, emotionsSliderItems[0], 'next')
btnScroll(impressionsSliderBtnPrev, impressionsSlider, impressionsSliderItems[0], 'prev')
btnScroll(impressionsSliderBtnNext, impressionsSlider, impressionsSliderItems[0], 'next')
btnScroll(reviewsSliderBtnPrev, reviewsSlider, reviewsSliderItems[0], 'prev')
btnScroll(reviewsSliderBtnNext, reviewsSlider, reviewsSliderItems[0], 'next')
btnScroll(stocksSliderBtnPrev, stocksSlider, stocksSliderItems[0], 'prev')
btnScroll(stocksSliderBtnNext, stocksSlider, stocksSliderItems[0], 'next')
btnScroll(newsSliderBtnPrev, newsSlider, newsSliderItems[0], 'prev')
btnScroll(newsSliderBtnNext, newsSlider, newsSliderItems[0], 'next')
btnScroll(offersSliderBtnPrev, offersSlider, offersSliderItems[0], 'prev')
btnScroll(offersSliderBtnNext, offersSlider, offersSliderItems[0], 'next')

// For Events Section Mobile Sliders //
eventSliderMobileBtnPrev.forEach(function (element) {
  element.addEventListener('click', function () {
    eventSliderMobile.forEach(function (item) {
      let itemArr = Array.from(item.children)
      item.scrollLeft -= itemArr[0].offsetWidth
    })
  })
}) 

eventSliderMobileBtnNext.forEach(function (element) {
  element.addEventListener('click', function () {
    eventSliderMobile.forEach(function (item) {
      let itemArr = Array.from(item.children)
      item.scrollLeft += itemArr[0].offsetWidth
    })
  })
})

//----- Header -----// 
function noAnimation () {
  headerSpan.classList.add('preload')
}

window.addEventListener('load', noAnimation())

function showHeaderItems (element1, element2) {
  element1.addEventListener('click', function () {
    element1.classList.toggle('active')
    element2.classList.toggle('active')
  })
}

showHeaderItems(headerNavMenu1Items[0],  headerNavMenu1ItemMenu1)
showHeaderItems(headerNavMenu1Items[1],  headerNavMenu1ItemMenu2)
showHeaderItems(headerNavMenu2Items[1],  headerNavMenu2ItemMenu1)
showHeaderItems(headerNavMenu2Items[3],  headerNavMenu2ItemMenu2)
showHeaderItems(headerNavMobileImgCard,  headerNavMobileImgCardMenu)

headerNavMobileImgCardMenu.addEventListener('click', function (event) {
  event.stopPropagation();
})


mobileMenu.addEventListener('click', function () {
  mobileMenu.classList.toggle('active')
  mobileMenuContent.classList.toggle('active')
  headerSpan.classList.remove('preload')
  if (mobileMenu.classList.contains('active')) {
    mobileMenuContent.classList.add('active')
  } else {
    mobileMenuContentItem1.classList.remove('active')
    mobileMenuContentItem2.classList.remove('active')
  }
})

mobileMenuContent.addEventListener('click', function (event) {
  event.stopPropagation();
})

headerNavMenuContentheadItems[0].addEventListener('click', function () {
  headerNavMenuContentheadItems[0].classList.toggle('active')
  headerNavMenuContentMenu1.classList.toggle('active')
})

headerNavMenuContentheadItems[1].addEventListener('click', function () {
  headerNavMenuContentheadItems[1].classList.toggle('active')
  headerNavMenuContentMenu2.classList.toggle('active')
  headerNavMobileMenusBlock.style.flexDirection = 'column-reverse'
})

mobileMenuContentItem1.addEventListener('click', function () {
  mobileMenuContentItem1.classList.toggle('active')
  mobileMenu.classList.add('active')
})

mobileMenuContentItem2.addEventListener('click', function () {
  mobileMenuContentItem2.classList.toggle('active')
  mobileMenu.classList.add('active')
  headerMenuMobileItem2Content.classList.toggle('active')
})

mobileEntentainmentsMenuOpenElementsItems.forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.stopPropagation()
    mobileEntentainmentsMenu.classList.add('active')
  })
})

mobileEntentainmentsMenuItems.forEach(function (element) {
  element.addEventListener('click', function () { 
    element.classList.add('active')
  })
})

mobileEntentainmentsMenuBtnsClose.forEach(function (element, index) {
  element.dataset.index = index
  element.addEventListener('click', function (event) {
    event.stopPropagation()
    mobileEntentainmentsMenuItems[index].classList.remove('active')
  }) 
})

mobileEntentainmentsMenuItems.pop().addEventListener('click', function () {
  mobileEntentainmentsMenu.classList.remove('active')
})

sliderItems.forEach(function (slide, index) { 
  if (index !== 0) {
    slide.classList.add('hidden')
  }

  // Добавляем индексы 
  slide.dataset.index = index

  // Добавляем эктив 
  sliderItems[0].setAttribute('data-active', '')
})

sliderPointsItems.forEach(function (item, index) {
  item.dataset.index = index
  sliderPointsItems[0].setAttribute('data-active', '')
  sliderPointsItems[0].classList.add('active')
})

  sliderBtnNext.addEventListener('click', function () {
  showNextSlide('next')
  sliderItems.forEach(function (element) {
    element.style.animation = 'myAnimation .7s'
  })
})

  sliderBtnPrev.addEventListener('click', function () {
  showNextSlide('prev')
  sliderItems.forEach(function (element) {
    element.style.animation = 'myAnimation .7s'
  })
})

function showNextSlide (direction) {
    // Скрываем текущий слайд 
    let currentSlide = slider.querySelector('[data-active]') // Нахождение текущего слайда и оформление его в переменную
    
    let currentSlideIndex = +currentSlide.dataset.index // Получение индекса текущего слайда через дата атрибут
  
    currentSlide.classList.add('hidden') // Собственно скрываем слайд
    currentSlide.removeAttribute('data-active') // Убираем дата атрибут эктив, т.к. он уже не эктив

    let currentPointSlide = sliderPoints.querySelector('[data-active]')
    let currentPointSlideIndex = +currentPointSlide.dataset.index 
    currentPointSlide.classList.remove('active')
    currentPointSlide.removeAttribute('data-active')

    let nextPointSlideIndex
    let nextSlideIndex
    if (direction === 'next') {
      nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1
      nextPointSlideIndex = currentPointSlideIndex + 1 === sliderPointsItems.length ? 0 : currentPointSlideIndex + 1
    } else if (direction === 'prev') {
      nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1
      nextPointSlideIndex = currentPointSlideIndex === 0 ? sliderPointsItems.length - 1 : currentPointSlideIndex - 1
    }

    let nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`) // Создание следующего слайда и нахождение его
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')

    let nextPointSlide = sliderPoints.querySelector(`[data-index='${nextPointSlideIndex}']`)
    nextPointSlide.classList.add('active')
    nextPointSlide.setAttribute('data-active', '')
}

//----- Entertainments Section -----//

function handleResize1() {
  if (window.innerWidth <= 805) {
    entertainmentsContentCard.classList.remove('active')
    entertainmentsBtnsItems.forEach(function (element) {
      element.addEventListener('click', function () {
        element.classList.toggle('active');
      });
    });
    entertainmentsBtnsItems[0].addEventListener('click', function () {
      tab1.classList.toggle('active');
      entertainmentsSliderImgs.scrollLeft = 15
    });
  } else { tab1.classList.remove('active');
    entertainmentsBtnsItems.forEach(function (element) {
    element.addEventListener('click', function () {
      entertainmentsContentCard.classList.toggle('active');
    });
  });
  window.addEventListener('load', function () {
    entertainmentsContentCard.classList.add('active')
  })
  }
}
handleResize1()
window.addEventListener('resize', handleResize1)
console.log(window.innerWidth)

// Slider //

entertainmentsSliderContentImgsItems.forEach(function (element, index) {
  if (index !== 1) {
    element.classList.add('hidden')
  } 

  element.dataset.index = index
  entertainmentsSliderContentImgsItems[1].setAttribute('data-active', '')
})

entertainmentsSliderImgsItems.forEach(function (element, index) {
  if(index !== 1) {
    element.classList.add('disable')
  }

  entertainmentsSliderImgsItems[1].setAttribute('data-active', '')
  element.dataset.index = index

})


entertainmentsSliderbtnNext.addEventListener('click', function () {
  let curSlide = entertainmentsSliderContentImgs.querySelector('[data-active]')
  let currSlideIndex = curSlide.dataset.index
  curSlide.classList.add('hidden')
  curSlide.removeAttribute('data-active', '')

  let nextSlideIndex = +currSlideIndex + 1 === entertainmentsSliderContentImgsItems.length ? 0 : +currSlideIndex + 1
  let nextSlide = entertainmentsSliderContentImgs.querySelector(`[data-index='${nextSlideIndex}']`)

  nextSlide.classList.remove('hidden')
  nextSlide.setAttribute('data-active', '')

  let currentItem = entertainmentsSliderImgs.querySelector('[data-active]')
  currentItem.classList.add('disable')
  currentItem.removeAttribute('data-active')

  let currentItemIndex = +currentItem.dataset.index

  let nextItemIndex = currentItemIndex + 1 === entertainmentsSliderImgsItems.length ? 0 : currentItemIndex + 1
  let nextItem = entertainmentsSliderImgs.querySelector(`[data-index='${nextItemIndex}']`)
  nextItem.classList.remove('disable')
  nextItem.setAttribute('data-active', '')
  console.log(nextItem)
})

entertainmentsSliderbtnPrev.addEventListener('click', function () {

  let curSlide = entertainmentsSliderContentImgs.querySelector('[data-active]')
  let currSlideIndex = curSlide.dataset.index
  curSlide.classList.add('hidden')
  curSlide.removeAttribute('data-active', '')

  let nextSlideIndex = +currSlideIndex === 0 ? entertainmentsSliderContentImgsItems.length - 1 : +currSlideIndex - 1
  let nextSlide = entertainmentsSliderContentImgs.querySelector(`[data-index='${nextSlideIndex}']`)

  nextSlide.classList.remove('hidden')
  nextSlide.setAttribute('data-active', '')

  let currentItem = entertainmentsSliderImgs.querySelector('[data-active]')
  currentItem.classList.add('disable')
  currentItem.removeAttribute('data-active')

  let currentItemIndex = +currentItem.dataset.index

  let nextItemIndex = currentItemIndex === 0 ? entertainmentsSliderContentImgsItems.length - 1 : currentItemIndex - 1
  let nextItem = entertainmentsSliderImgs.querySelector(`[data-index='${nextItemIndex}']`)
  nextItem.classList.remove('disable')
  nextItem.setAttribute('data-active', '')
  console.log(nextItem)

})

//----- Entertainments modal -----//
const scrollController = {
  disabledScroll () {
    document.body.style.cssText = `
      overflow: hidden;
    `;
  }, 
  ableScroll () {
    document.body.style.cssText = ''
  }
}

function EntertainmentsModal () {
  modalWindowContentItem1FirstChild.classList.add('active')
  if (window.innerWidth >= 1440) {
    modalButton.forEach(function (element, index) {
      element.dataset.index = index
      if (index < 2) { 
      element.addEventListener('click', function () {
        modalWindow.forEach(function () {
          modalWindow[index].classList.add('active')
        })
      })
      } else {
        modalButton[2].addEventListener('click', function () {
          modalWindow[1].classList.add('active')
        })
      }
    })

    modalWindowContent.forEach(function (element) {
      element.addEventListener('click', function () {
        event.stopPropagation()
      })
    })

    modalWindow.forEach(function (element) {
      element.addEventListener('click', function () {
        element.classList.remove('active')
      })
    })

    modalCloseBtns.forEach(function (element) {
      element.addEventListener('click', function () {
        modalWindow.forEach(function (element) {
          element.classList.remove('active')
        })
      })   
    })

  }

  modalButton.forEach(function (element) {
    element.addEventListener('click', function () {
      scrollController.disabledScroll()
    })
  })
}

EntertainmentsModal()

function getAbleScroll (element) {
  element.forEach(function (item) {
   item.addEventListener('click', function () {
    scrollController.ableScroll()
  })
  })
}

getAbleScroll(modalWindow),  getAbleScroll(modalCloseBtns)

//----- Events Section -----//
const resultSliderArr = []
const eventsSliderBtnPrevArr = []
const eventsSliderBtnNextArr = []

eventsSlider.forEach(function(element) {
  resultSliderArr.push(element)
})

eventsSliderBtnPrev.forEach(function (element) {
  eventsSliderBtnPrevArr.push(element)
})

eventsSliderBtnNext.forEach(function (element) {
  eventsSliderBtnNextArr.push(element)
})

eventsBtnsItems.forEach(function (element) {
  element.addEventListener('click', function () {
    element.classList.toggle('active')
  })
})

eventsBtnsItems.forEach(function (element) {
  if (window.innerWidth < 805) {
    element.addEventListener('click', function () {
    let elementChildren = Array.from(element.children)
    elementChildren[0].classList.toggle('active')
    elementChildren[1].classList.toggle('active')

    elementChildren[1].addEventListener('click', function (event) {
      event.stopPropagation()
    })

    }) 
  } else {
    let elementChildren = Array.from(element.children)
    elementChildren[1].classList.remove('active')
  }
})

function eventsFunction () {
  if (window.innerWidth > 768) {
    eventsCardsItems[0].classList.add('active')
    eventsBtnsItems.forEach(function (element, index) {
      element.dataset.index = index
      element.addEventListener('click', function () {
        if (eventsCardsItems[index]) {
          eventsCardsItems.forEach(function(item, i) {
            if (i !== index) {
              item.classList.remove('active');
            }
          })
          eventsCardsItems[index].classList.toggle('active')
          eventsCardsItems[index].classList.remove('hidden')
        }
      })
    })
  } else eventsCardsItems[0].classList.remove('active')
}

eventsFunction()

resultSliderArr.forEach(function (element) {
  let elementArr = Array.from(element.children)
  elementArr.forEach(function (item, index) {
    if (index !== 0) {
      item.classList.add('hidden')
    } else item.setAttribute('data-active', '')

    item.style.animation = 'none'
    item.dataset.index = index
  })
})

eventsSliderBtnNextArr.forEach(function (element) {
  element.addEventListener('click', function () {
    resultSliderArr.forEach(function (element) {
      let elementArr = Array.from(element.children)
      const currentSlide = element.querySelector('[data-active]', '')
      const currentSlideIndex = +currentSlide.dataset.index
      currentSlide.removeAttribute('data-active', '')
      currentSlide.classList.add('hidden')
    
      const nextSlideIndex = currentSlideIndex === elementArr.length - 1 ? 0 : currentSlideIndex + 1
    
      const nextSlide = element.querySelector(`[data-index = '${nextSlideIndex}']`)
      nextSlide.setAttribute('data-active', '')
      nextSlide.classList.remove('hidden')
      })
  })

  resultSliderArr.forEach(function (element) {
    let elementArr = Array.from(element.children)
    elementArr.forEach(function (item) {
      item.style.animation = 'myAnimation3 .7s' 
    })
  })
})

eventsSliderBtnPrevArr.forEach(function (element) {
  element.addEventListener('click', function () {
    resultSliderArr.forEach(function (element) {
      let elementArr = Array.from(element.children)
        const currentSlide = element.querySelector('[data-active]', '')
        const currentSlideIndex = +currentSlide.dataset.index
        currentSlide.removeAttribute('data-active', '')
        currentSlide.classList.add('hidden')
    
        const nextSlideIndex = currentSlideIndex === 0 ? elementArr.length - 1 : currentSlideIndex - 1
    
        const nextSlide = element.querySelector(`[data-index = '${nextSlideIndex}']`)
        nextSlide.setAttribute('data-active', '')
        nextSlide.classList.remove('hidden')
      })
  })

  resultSliderArr.forEach(function (element) {
    let elementArr = Array.from(element.children)
    elementArr.forEach(function (item) {
      item.style.animation = 'myAnimation3 .7s' 
    })
  })
})


//----- Reviews Section -----//

function showExtraText (element) {
  element.addEventListener('click', function () {
    element.parentElement.style.height = 500 + 'px'
    element.parentElement.style.alignItems = 'center'
    element.parentElement.style.animation = 'myAnimation1 .7s'
    reviewsItemContentItems1[1].style.display = 'inline'
    reviewsItemContentItems2[1].style.display = 'inline'

    element.addEventListener('mouseleave', function () {
      element.parentElement.style.animation = 'myAnimation2 .7s'
      element.parentElement.style.height = 320 + 'px'
      reviewsItemContentItems1[1].style.display = 'none'
      reviewsItemContentItems2[1].style.display = 'none'
    })

  })
}

showExtraText(reviewsSliderItems[3]) 
showExtraText(reviewsSliderItems[reviewsSliderItems.length - 1])

function handleResize2 (element) {
  if (window.innerWidth < 1024) {
     element.addEventListener('click', function() {
       element.parentElement.style.height = 810 + 'px'
       element.parentElement.style.animation = 'none'
       element.parentElement.style.alignItems = 'center'
       reviewsItemContentItems1[1].style.display = 'inline'
       reviewsItemContentItems2[1].style.display = 'inline'
     })

     element.addEventListener('mouseleave', function() {
      element.parentElement.style.animation = 'none'
      element.parentElement.style.height = 525 + 'px'
      reviewsItemContentItems1[1].style.display = 'none'
      reviewsItemContentItems2[1].style.display = 'none'
      reviewsSliderItems.forEach(function (element) {
        element.style.height = '100%'
      })
    })
  }
}

handleResize2(reviewsSliderItems[3])
handleResize2(reviewsSliderItems[reviewsSliderItems.length - 1])

/* Offers Section */

window.addEventListener('load', function () {
  if (window.innerWidth < 376) {
    offersSlider.scrollLeft = offersSliderItems[0].offsetWidth * 2
  }
})

