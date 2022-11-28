/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

class Asset{
    constructor(path, loader, loadCallback=null, parameters={}){
        this.isAsset = true;

        this.path = path;
        this.loader = loader;
        this.loadCallback = loadCallback;
        this.parameters = parameters;

        this.data = null;
        this.failedToLoad = false;

        loader.load(
            path, 
            data => {
                this.data = data; if(this.loadCallback) this.loadCallback(data);
            },
            undefined, 
            err => this.failedToLoad = true
        );
    }

    get loaded(){
        return this.data !== null;
    }
}

export default Asset;
