document.addEventListener('DOMContentLoaded', function() {
  const steps = document.querySelectorAll('.step');
  const startBtn = document.getElementById('startBtn');
  const prevBtns = document.querySelectorAll('.prevBtn');
  const nextBtns = document.querySelectorAll('.nextBtn');
  let currentStep = 0;

  // Show the initial step
  steps[currentStep].classList.add('active');

  const mainSection = document.getElementById('shopify-section-template--22287641280832__main');
  mainSection.classList.add('intro-background-img');

  startBtn.addEventListener('click', function() {
    transitionToStep(currentStep + 1, 'slide-in-right');
    showProgressIndicator();
  });
  

  prevBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      transitionToStep(currentStep - 1, 'slide-in-left');
    });
    
  });

  nextBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      transitionToStep(currentStep + 1, 'slide-in-right');
    });
    
  });

  // Function to transition to a specific step
  function transitionToStep(nextStep, animation) {
    if (nextStep >= 0 && nextStep < steps.length) {
      mainSection.classList.remove('intro-background-img');
      steps[currentStep].classList.remove('active');
      steps[nextStep].classList.add('active');
      currentStep = nextStep;
      steps[nextStep].style.animationName = animation;
      steps[currentStep].style.animationName = animation;
      updateProgressIndicator();

      if (nextStep === 0) {
          hideProgressIndicator();
          document.querySelector('.pill').classList.remove('active');
          mainSection.classList.add('intro-background-img');
      }

      if (nextStep > 0) { // Add restart quiz button to steps after intro step
        mainSection.classList.remove('intro-background-img');
          const restartBtn = document.querySelector('.quiz-restart');
          restartBtn.addEventListener('click', function() {
            transitionToStep(0); // Go back to intro step
          });
      }
    }
  }

  function updateProgressIndicator() {
      const pills = document.querySelectorAll('.pill');
      pills.forEach((pill, index) => {
      if (index === currentStep ) {
        pill.classList.add('active');
      }

      if (index === currentStep + 1){
        pill.classList.remove('active');
      }
      });
  }

  function showProgressIndicator() {
      const progressIndicator = document.querySelector('.progress-indicator');
      progressIndicator.style.display = 'flex'; 
  }

  function hideProgressIndicator() {
      const progressIndicator = document.querySelector('.progress-indicator');
      progressIndicator.style.display = 'none'; 
  }

  const checkboxes = document.querySelectorAll('.checkbox-input');
  checkboxes.forEach(function(checkbox, index) {
    checkbox.addEventListener('change', function() {
      const correspondingImg = document.querySelectorAll('.img-for-label')[index];
      const correspondingText = document.querySelectorAll('.quiz-small-text')[index];
      if (checkbox.checked) {
        correspondingImg.classList.add('selected-image');
        correspondingText.classList.add('selected-text');
      } else {
        correspondingImg.classList.remove('selected-image');
        correspondingText.classList.remove('selected-text');
      }
    });
  });

  const checkboxesNoImg = document.querySelectorAll('.checkbox-input__no-image');
  checkboxesNoImg.forEach(function(checkbox, index) {
    checkbox.addEventListener('change', function() {
      const correspondingLabel = document.querySelectorAll('.label__no-image')[index];
      if (checkbox.checked) {
        correspondingLabel.classList.add('label-border');
      } else {
        correspondingLabel.classList.remove('label-border');
      }
    });
  });

});



  
  
