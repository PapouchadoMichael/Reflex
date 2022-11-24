const app = {

    decompte: null,
    cardbox: null,
    compteurPoints: null,
    hasardItem: null,
    record: null,

    init: function () {
        console.log('init v5');

        nbPoints = document.querySelector('.container');
        divPoints = document.createElement('div');
        divPoints.classList.add('points');
        nbPoints.append(divPoints);

        app.addAllEventListener();
        // var t = 0;
		// setInterval(function(){
		// 	document.getElementById('cpt').innerHTML = ++t;
		// },10);
    },

    addAllEventListener: function() {
        
        // Récupere les items card
        app.cardbox = document.querySelectorAll('.cible');

        for(const items of app.cardbox){
        // Ecouteur sur les items cards
        items.addEventListener('click', app.handleClickRemoveCards);
        }

        // Récupere les bouttons 'Start' et 'Stop'
        const startBtn = document.querySelector('.start');
        const stopBtn = document.querySelector('.stop');

        startBtn.addEventListener('click', app.handleStartBtn);
        stopBtn.addEventListener('click', app.handleStopBtn);
    },

    handleClickRemoveCards: function(evt) {

        const event = evt.currentTarget; 
        // Cibler le contenu
        let contenu1 = event.textContent;

        displayPoints = document.querySelector('.points');
        //console.log(app.init.divPoints)
        
        console.log('temps restant ' + app.decompte)
        
        if(app.decompte >= 0 && app.decompte != null) { 
            
            if(event.textContent === "X") {

                app.compteurPoints++;
                displayPoints.textContent = "Nombre de points : " + app.compteurPoints + " pts";

                event.textContent = " ";
                app.randomCircle();

            }
        } 
    },    
    
    randomCircle: function() {
        
        let randNumber = Math.floor(Math.random() * 8) + 1; 
        //console.log(contenu1)
        app.hasardItem = document.getElementById(randNumber);
        app.hasardItem.textContent = "X";
        
        
        //console.log(hasardItem)
        //TODO Ajouter un contenu aléatoire dans une balise 'div'

        //TODO changer 'la cible' aleatoirement jusqu'a ce que le temps soit écouler   
        //TODO Tant que le contenu n'a pas été cliquer il ne disparrait pas  -- classList dans math.random ?
        //TODO lorsque le contenu est cliqué le contenu disparait -- classList dans math.random ?

    },
    
    handleStartBtn: function() {

        app.compteurPoints = " ";

        if (app.decompte == 0 || app.decompte == null) {

            app.handleCountDown();
            app.randomCircle();
        } 
        
    },

    handleStopBtn: function () {
        
        clearInterval(app.decompte = 0);
           
    },

    chronoAVirgule(x) {
        return Number.parseFloat(x).toFixed(2);
    },

    handleCountDown: function() {

        app.decompte = 50;
        
        timer = setInterval(() => {
            
            let newDecompte = Math.floor(app.decompte)
            console.log(app.decompte)

            document.querySelector('#timer').textContent = "Temps restant : " + (newDecompte/10).toFixed(2);

            if(app.decompte <= 0) {
                app.hasardItem.textContent = " ";
                clearInterval(timer);
                
                document.querySelector('#timer').textContent = "Vous avez terminé !";
                
                app.record = document.querySelector('.record').textContent = "Votre record est de " + app.compteurPoints + " points";

            } else {
                app.decompte --;
            }
        }, 100);
    },
}


document.addEventListener('DOMContentLoaded', app.init);