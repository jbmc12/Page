const AUDIO = new Audio('Audio/N3-BoM.wav');
            AUDIO.play();
            AUDIO.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);