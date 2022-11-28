const stylesheet = /* css */ `
:root{ 
  --DPR: 1;
}

.loadingCircle{
  --size: calc(min(20vh, 20vw) / var(--DPR));
  --border-width: calc(min(2vh, 2vw) / var(--DPR));

  border: 10px solid #777777;
  border-top: 10px solid #fff;
  border-width: var(--border-width);
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  /* padding-top: var(--size); */
  animation: loadingSpin 1s linear infinite;
  position: absolute;
  left: calc(50% - var(--size) / 2 - var(--border-width));
  top: calc(50% - var(--size) / 2 - var(--border-width));
  /* box-sizing: border-box; */
  z-index: 50001;
}

.loadingBar{
  width: 60vw;
  height: 4vw;
  left: calc(50vw - 60vw / 2);
  top: calc(50vh - 4vw / 2);
  position: absolute;
  border: 3px solid white;
  border-width: calc(3px / var(--DPR));
  box-sizing: border-box;
}

.loadingBarProgress{
  background-color: white;
  height: 100%;
}

.loadingScreen{
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background-color: #000;
  z-index: 50000;
}

.hidden{
  display: none;
}

@keyframes loadingSpin{
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
}

*:focus{
  outline: none;
}
  
::-moz-selection{background: rgba(0,0,0,0);}
::selection{background: rgba(0,0,0,0);}
::-webkit-selection{background: rgba(0,0,0,0);}
:not(input){
  -webkit-tap-highlight-color:  rgba(0,0,0,0); 
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
  
::-webkit-scrollbar{
  width: calc(10px / var(--DPR));
  background-color: transparent;
}
::-webkit-scrollbar-track {
  background-color: white;

}
::-webkit-scrollbar-thumb{
  background-color: #aaa;
  border-radius: calc(5px / var(--DPR));
}
::-webkit-scrollbar-thumb:hover{
  background-color: #ccc;
}
  
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
  width: 0;
  height: 0;
  opacity: 0
}
  
input[type=number]{ 
  appearance: textfield;
  margin: 0; 
}

input[type="number"]{
  appearance: none;
}

input[type="number"]:focus, 
input[type="number"]:hover{
  appearance: auto;
}

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button{
  -webkit-appearance: none !important;
}

input[type="number"]{
  -moz-appearance: textfield;
}
`;

export default stylesheet;
