/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

let interacted = false;
['mousedown', 'touchstart'].forEach(eventName => document.body.addEventListener(eventName, event => interacted = true));

class Sound{
    constructor(path, parameters={}){
        this.isSound = true;

        this.soundElement = document.createElement('audio');
        this.source = document.createElement('source');
        this.soundElement.appendChild(this.source);
        this.source.src = path;
        this.source.type = 'audio/mpeg';

        if(parameters.volume !== undefined) this.soundElement.volume = parameters.volume;
        if(parameters.loop !== undefined) this.soundElement.loop = parameters.loop;
        if(parameters.startTime !== undefined) this.soundElement.currentTime = parameters.startTime;
        if(parameters.muted !== undefined) this.soundElement.muted = parameters.muted;
        if(parameters.speed !== undefined) this.soundElement.playbackRate = parameters.speed;
        if(parameters.preload !== undefined) this.soundElement.preload = parameters.preload;
        this.autoplay = parameters.autoplay !== undefined ? parameters.autoplay : false;
    }

    play(){
        if(interacted) this.soundElement.play();
        else this.autoplay = true;
    }

    pause(){
        this.soundElement.pause();
    }

    reset(){
        this.soundElement.currentTime = 0;
    }

    update(){
        if(!interacted) return;
        if(this.autoplay){
            this.autoplay = false;
            this.play();
        }
    }

    get paused(){
        return this.soundElement.paused;
    }

    get ended(){
        return this.soundElement.ended;
    }

    get volume(){
        return this.soundElement.volume;
    }

    set volume(value){
        this.soundElement.volume = Math.min(Math.max(value, 0), 1);
    }

    get loop(){
        return this.soundElement.loop;
    }

    set loop(value){
        this.soundElement.loop = value;
    }

    get currentTime(){
        return this.soundElement.currentTime;
    }

    get duration(){
        return this.soundElement.duration;
    }

    get muted(){
        return this.soundElement.muted;
    }

    set muted(value){
        this.soundElement.muted = value;
    }

    get speed(){
        return this.soundElement.playbackRate;
    }

    set speed(value){
        this.soundElement.playbackRate = value;
    }

    get preload(){
        return this.soundElement.preload;
    }

    set preload(value){
        this.soundElement.preload = value;
    }
}

export default Sound;