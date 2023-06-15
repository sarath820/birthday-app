

  

    function flipCard() {
      this.classList.toggle('flipped'); // Toggle the 'flipped' class on click
      

    }

    function newflip(){
      this.classList.toggle('flipped');
    }
  
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
      card.addEventListener('click', flipCard);
    });

   
const card = document.querySelectorAll('.cardcarousel');
    card.forEach(function(card){
      card.addEventListener("click",newflip)
    })



    

    



