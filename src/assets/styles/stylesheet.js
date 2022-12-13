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
  animation: loadingSpin 1s linear infinite;
  position: absolute;
  left: calc(50% - var(--size) / 2 - var(--border-width));
  top: calc(50% - var(--size) / 2 - var(--border-width));
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
`;

export default stylesheet;
