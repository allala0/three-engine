/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

class TransitionObject{
    constructor(object, property, keyframes, parameters={}){
        this.object = object;
        this.property = property;
        this.keyframes = keyframes;
        this.parameters = parameters;

        this.function = parameters.function !== undefined ? parameters.function : x => x;
        this.useFunctionSeparately = parameters.useFunctionSeparately !== undefined ? parameters.useFunctionSeparately : false;
        this.enableDynamicStartState = parameters.enableDynamicStartState !== undefined ? parameters.enableDynamicStartState : true;

        if(this.keyframes[0] === undefined) this.keyframes[0] = this.object[this.property].clone();

        this.sortKeyframes();

        if(this.keyframes[1] === undefined){
            if(this.keyframesSorted.length > 0) this.keyframes[1] = this.keyframesSorted[this.keyframesSorted.length - 1].value;
            else this.keyframes[1] = this.object[this.property].clone();
            this.sortKeyframes();
        }
    }

    sortKeyframes(){
        this.keyframesSorted = [];
        for(const [progress, value] of Object.entries(this.keyframes)){
            this.keyframesSorted.push({progress: progress, value: value});
        }
        this.keyframesSorted.sort((a, b) => a.progress - b.progress);
    }

    getCurrentStartKeyframe(progress){
        let startKeyframe = this.keyframesSorted[0];
        for(const keyframe of this.keyframesSorted){
            if(keyframe.progress > progress) break;
            startKeyframe = keyframe;
        }
        return startKeyframe;
    }

    getCurrentEndKeyframe(progress){
        for(const keyframe of this.keyframesSorted){
            if(keyframe.progress > progress) return keyframe;
        }
        return this.keyframesSorted[this.keyframesSorted.length - 1];
    }

    getCurrentKeyframeProgress(progress){
        const startKeyframeProgress = this.getCurrentStartKeyframe(progress).progress;
        const endtKeyframeProgress = this.getCurrentEndKeyframe(progress).progress;
        const up = (progress - startKeyframeProgress);
        const down = (endtKeyframeProgress - startKeyframeProgress);
        return  up / (down === 0 ? 1 : down);
    }

    getCurrentValue(progress){
        const progressCalculated = this.useFunctionSeparately ? progress : this.function(progress);
        const progressCurrent = this.getCurrentKeyframeProgress(progressCalculated);
        const moveAmount = this.useFunctionSeparately ? this.function(progressCurrent) : progressCurrent;
        const value = this.getCurrentStartKeyframe(progressCalculated).value.moveTo(this.getCurrentEndKeyframe(progressCalculated).value, moveAmount);
        return value;
    }

    clone(){
        return new TransitionObject(this.object, this.property, this.keyframes, this.parameters);
    }
}

export default TransitionObject;