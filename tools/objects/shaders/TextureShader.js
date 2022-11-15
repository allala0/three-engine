/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

function TextureShader(texture){
    return {
        isTextureShader: true,
        uniforms: {
            repeatX: {value: 1},
            repeatY: {value: 1},
            uTexture: {value: texture},
            tDiffuse: {value: null},
            uTextureAspect: {value: texture.source.data.width / texture.source.data.height},
            uCameraAspect: {value: 1},
            x: {value: 0},
            y: {value: 0},
            hidden: {value: false}
        },

        vertexShader: /* glsl */ `
            varying vec2 vUv;
            void main(){
                vUv = uv;
                vec4 mvPosition = modelViewMatrix * vec4(position.x, position.y, position.z, 1.0);
                gl_Position = projectionMatrix * mvPosition;
            }`,
    
        fragmentShader: /* glsl */ `
            #define USE_MAP
            
            uniform sampler2D uTexture;
            uniform sampler2D tDiffuse;
            
            uniform bool hidden;

            uniform float x;
            uniform float y;

            uniform float repeatX;
            uniform float repeatY;

            uniform float uTextureAspect;
            uniform float uCameraAspect;
            
            varying vec2 vUv;	
            
            void main(){
                float uTextureAspectFinal = uTextureAspect / repeatX * repeatY;

                float sizeMultiplier = 1.;

                if(uCameraAspect < uTextureAspectFinal){
                    sizeMultiplier =  uTextureAspectFinal / uCameraAspect;
                }

                vec2 coords = vec2(vUv.x * uCameraAspect / uTextureAspectFinal * sizeMultiplier, vUv.y * sizeMultiplier);

                if(sizeMultiplier == 1.){
                    coords.x += (1. - uCameraAspect / uTextureAspectFinal * sizeMultiplier) / 2.;
                }
                else{
                    coords.y += (1. - sizeMultiplier) / 2.;
                }

                vec2 coordsFinal = vec2((coords.x + x) / repeatX, 1. - (-coords.y + 1. + y) / repeatY);

                vec4 backPixel  = texture2D(tDiffuse, vUv);
                vec4 frontPixel = texture2D(uTexture, coordsFinal);

                if(hidden || coords.x < 0. || coords.x > 1. || coords.y < 0. || coords.y > 1.){
                    frontPixel.a = 0.;
                }

                gl_FragColor = vec4(mix(backPixel.rgb, frontPixel.rgb, frontPixel.a), 1.0);
            }`
    };
}

export default TextureShader;
