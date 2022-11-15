/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

class TransitionChain{
    constructor(transitions, parameters={}){
        this.transitions = transitions;
        this.currentIndex = 0;

        this.loop = parameters.loop !== undefined ? parameters.loop : false;
        this.autoplay = parameters.autoplay !== undefined ? parameters.autoplay : false;

        this.paused = true;

        if(this.autoplay) this.play();
    }

    play(){
        this.paused = false;
        const currentTransition = this.transitions[this.currentIndex];
        if(currentTransition) currentTransition.play();

        return this;
    }

    pause(){
        this.paused = true;

        return this;
    }

    toggle(){
        if(this.paused) this.play();
        else this.pause();

        return this;
    }

    get ended(){
        return this.transitions.reduce((ended, transition) => transition.ended && ended, true);
    }

    reset(){
        this.currentIndex = 0;
        for(const transition of [...this.transitions].reverse()){
            transition.reset();
        }

        return this;
    }

    skip(){
        for(const transition of this.transitions){
            transition.skip();
        }

        return this;
    }
    
    update(){
        if(this.ended && this.loop && !this.paused) this.reset().play();
        if(this.paused) return;
        if(this.ended) return;
        const currentTransition = this.transitions[this.currentIndex];
        currentTransition.update();
        if(currentTransition.ended){
            const nextTransition = this.transitions[++this.currentIndex];
            if(nextTransition !== undefined){
                nextTransition.updateStartState().play();
            }
        }
    }
}

export default TransitionChain;