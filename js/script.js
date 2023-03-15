

const { createApp } = Vue;

createApp({
  data() {
    return {
        slides : [
                   {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],

        imageIndex: 0,
        activeInterval: true,
    }
  },

  methods: {
    next() {
        if (this.imageIndex < this.slides.length - 1) {
            this.imageIndex++;
          } else {
            this.imageIndex = 0;
          }        
    },
    prev() {
        if (this.imageIndex == 0) {
            this.imageIndex = this.slides.length - 1;
          } else {
            this.imageIndex--;
          }        
    },
    changeImageIndex(value){
        this.imageIndex = value;
    },
    stopTimer(){
        if(this.activeInterval == true){
            this.activeInterval = false;
            clearInterval(interval);
        }
    },

    startTimer(){
        if(this.activeInterval == false){
            interval = setInterval(() => {
                this.next();
                this.activeInterval = true;
            }, 1000);
        }
    }
},
beforeMount() {
    if(this.activeInterval == true) {
        interval = setInterval(() => {
            this.next();
        }, 1000);
    }
},

}).mount('#app')