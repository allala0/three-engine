/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import {Clock} from 'three';

class Transition{
    constructor(transitionObjects, parameters={}){
        this.isTransition = true;

        this.transitionObjects = Array.isArray(transitionObjects) ? transitionObjects : [transitionObjects];
        this.parameters = parameters;

        this.init();
    }

    init(){
        this.autoplay = this.parameters.autoplay !== undefined ? this.parameters.autoplay : false;
        this.duration = this.parameters.duration !== undefined ? this.parameters.duration : 0.5;
        this.count = this.parameters.count !== undefined ? this.parameters.count : 1;
        this.delay = this.parameters.delay !== undefined ? this.parameters.delay : 0;
        this.forwards = this.parameters.forwards !== undefined ? this.parameters.forwards : true;
        this.callback = this.parameters.callback !== undefined ? this.parameters.callback : null;
        this.callbackEveryIteration = this.parameters.callbackEveryIteration !== undefined ? this.parameters.callbackEveryIteration : null;
        this.callbackEveryUpdate = this.parameters.callbackEveryUpdate !== undefined ? this.parameters.callbackEveryUpdate : null;

        this.function = this.parameters.function;
        this.useFunctionSeparately = this.parameters.useFunctionSeparately;

        for(const transitionObject of this.transitionObjects){
            if(transitionObject.parameters.function === undefined && this.function !== undefined){
                transitionObject.function = this.function;
            }
            if(transitionObject.parameters.useFunctionSeparately === undefined && this.useFunctionSeparately !== undefined){
                transitionObject.useFunctionSeparately = this.useFunctionSeparately;
            }
        }

        this.counter = 0; 
        this.progress = 0;
        this.paused = true;
        this.ended = false;
        this.isPlayRequested = false;

        this.clock = new Clock();

        if(this.autoplay) this.play();

        return this;
    }

    setStartTime(){
        this.startTime = this.clock.getElapsedTime() + this.delay;
    }

    setTransitionObjectValue(transitionObject, value){
        if(!isNaN(transitionObject.object[transitionObject.property])){
            transitionObject.object[transitionObject.property] = value;
        }
        else{
            transitionObject.object[transitionObject.property].copy(value);
        }
    }

    setTransitionObjectsValueFromStartState(){
        for(const transitionObject of this.transitionObjects){
            this.setTransitionObjectValue(transitionObject, transitionObject.keyframesSorted[0].value);
        }
    }

    setTransitionObjectsValueFromEndState(){
        for(const transitionObject of this.transitionObjects){
            this.setTransitionObjectValue(transitionObject, transitionObject.keyframesSorted[transitionObject.keyframesSorted.length - 1].value);
        }
    }    

    setTransitionObjectsValueFromProgress(){
        for(const transitionObject of this.transitionObjects){
            this.setTransitionObjectValue(transitionObject, transitionObject.getCurrentValue(this.progress));
        }
    }

    setTransitionObjectsValue(value){
        for(const transitionObject of this.transitionObjects){
            this.setTransitionObjectValue(transitionObject, value);
        }
    }

    updateStartState(){
        for(const transitionObject of this.transitionObjects){
            if(transitionObject.enableDynamicStartState) transitionObject.keyframesSorted[0].value = transitionObject.object[transitionObject.property].clone();
        }

        return this;
    }

    moveToStartState(){
        this.setTransitionObjectsValueFromStartState();

        return this;
    }

    clone(){
        const transitionObjects = [];
        for(const transitionObject of this.transitionObjects) transitionObjects.push(transitionObject.clone());
        const clone = new Transition(transitionObjects, {...this.parameters});
        clone.progress = this.progress;
        clone.counter = this.counter;
        clone.paused = this.paused;
        clone.ended = this.ended;
        return clone;
    }

    reset(){
        this.progress = 0;
        this.counter = 0;
        this.ended = false;
        this.lastUpdate = null;
        this.delayStart = null;
        this.moveToStartState();

        this.isPlayRequested = !this.paused;

        return this;
    }
    
    skip(){
        this.progress = 1;
        this.setTransitionObjectsValueFromEndState();
        this.counter = this.count;
        this.ended = this.paused = true;
    }

    play(){
        this.paused = false;
        this.isPlayRequested = true;
    }
    
    pause(){
        this.paused = true; 
    }
    
    toggle(){
        if(this.paused) this.play();
        else this.pause();
    }
    
    update(){
        if(this.ended) return;
        if(this.paused) return;
        if(this.isPlayRequested){
            this.isPlayRequested = false;
            if(!this.delayStart) this.delayStart = this.clock.getElapsedTime();
            this.startTime = Math.max(this.delayStart - this.clock.getElapsedTime() + this.delay, 0) + this.clock.getElapsedTime() - this.progress * this.duration;
        }
        if(this.clock.getElapsedTime() < this.startTime) return;
        this.progress = Math.max(Math.min((this.clock.getElapsedTime() - this.startTime) / this.duration, 1), 0);

        if(this.progress >= 1 && !this.ended){
            if(++this.counter < this.count){
                this.setTransitionObjectsValueFromStartState();

                this.startTime = this.clock.getElapsedTime();
                this.progress = 0;
            }
            else{
                if(!this.forwards){
                    this.setTransitionObjectsValueFromStartState();
                }
                else{
                    this.setTransitionObjectsValueFromEndState();
                }
                this.ended = this.paused = true;
            }
            if(this.callbackEveryIteration) this.callbackEveryIteration(this);
            if(this.ended && this.callback) this.callback(this);
        }

        this.setTransitionObjectsValueFromProgress();

        if(this.callbackEveryUpdate) this.callbackEveryUpdate(this);

        this.lastUpdate = this.clock.getElapsedTime();
    }
}

export default Transition;
