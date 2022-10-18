const app = {

    decompte: null,
    cardbox: null,

    init: function () {
        console.log('init lancé');

        app.addEventListener();
    },

    addEventListener: function() {
        
        // Récupere les items card
        app.cardbox = document.querySelectorAll('.cible');

        for(const items of app.cardbox){
        // Ecouteur sur les items cards
        items.addEventListener('click', app.handleClickCards);
        }

        // Récupere les bouttons 'Start' et 'Stop'
        const startBtn = document.querySelector('.start');
        const stopBtn = document.querySelector('.stop');

        startBtn.addEventListener('click', app.handleStartBtn);
        stopBtn.addEventListener('click', app.handleStopBtn);
    },

    handleClickCards: function(evt) {

        const event = evt.currentTarget; 
        // Cibler le contenu
        contenu1 = event.textContent;
        //console.log(contenu1)
        app.randomCircle();
    },    

    randomCircle: function() {

        
        const nouveauContenu = "X";
        const selectCard = document.querySelectorAll('.cible');
        console.log(selectCard)
        selectCard.innerHTML = nouveauContenu;

    },
    
    handleStartBtn: function() {

        app.handleCountDown();
    },

    handleStopBtn: function () {

        clearInterval(app.decompte = 0);
           
    },

    handleCountDown: function() {

        app.decompte = 5;
        timer = setInterval(() => {

            document.querySelector('#timer').innerHTML = "Temps restant : " + app.decompte;

            if(app.decompte === 0) {
    
                clearInterval(timer);
                
                document.querySelector('#timer').innerHTML = "Vous avez terminé !";
    
            } else {
                app.decompte--;
            }
        }, 1000);
    },
}


document.addEventListener('DOMContentLoaded', app.init);