function initAccordion(){
  const accordionQuestion = document.querySelectorAll('.accordion__question');
  const accordionColapse = document.querySelectorAll('.accordion__colapse p');
  const activeClass = 'active';
  const openClass ='open';

  if(accordionQuestion && accordionColapse){
    accordionQuestion[0].classList.add(openClass);
    accordionColapse[0].classList.add(activeClass);

  function accordionActive(){
    this.classList.toggle(openClass);
    const ElementSibling = this.nextElementSibling.querySelector('p');
    ElementSibling.classList.toggle(activeClass);
  }

  accordionQuestion.forEach( item => item.addEventListener('click', accordionActive));
  
  }
}

initAccordion();
