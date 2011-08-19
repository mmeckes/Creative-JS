

var audio = new Audio();

audio.src = audio.canPlayType('audio/mp4') ? 'sound.mp4' :
            audio.canPlayType('audio/ogg') ? 'sound.ogg' :
            audio.canPlayType('audio/wav') ? 'sound.wav' :
            'someotherformatihavenoidea.umm';
            
            

also worth pointing out..

audio.currentSrc // what file its using
audio.src  // what file your markup told it to use
            


audio.canPlayType(somemimetype) // returns 'probably' if you added codec info
                                // returns 'maybe' if it recognizes the mimetype and likes it
                                // returns ''  to indicate no supprt
                                
                                
                see also the source of Modernizr for audio codecs and testing.
                
