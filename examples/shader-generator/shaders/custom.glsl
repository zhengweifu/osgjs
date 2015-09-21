void ramp( const in vec3 colorInput, out vec3 colorOutput ) {

    // ramp 0.2
    if ( length(colorInput) < 0.2 ) {
        colorOutput = vec3( 0.1 );
        return;
    }

    if ( length(colorInput) < 0.5 ) {
        colorOutput = vec3( 0.3 );
        return;
    }

    if ( length(colorInput) < 0.9 ) {
        colorOutput = vec3( 0.7 );
        return;
    } else {
        colorOutput = vec3(1.0);
    }

}



void negatif( const in int enable, const in vec3 colorInput, out vec3 colorOutput ) {

    if ( enable == 1 )
        colorOutput = vec3(1.0) - colorInput;
    else
        colorOutput = colorInput;
}


//#ifdef GL_OES_standard_derivatives
#ifdef _SUBSURFACE

// http://madebyevan.com/shaders/curvature/
float computeCurvature( vec3 n, vec3 v ){

    vec3 dx = dFdx(n);
    vec3 dy = dFdy(n);
    vec3 xneg = n - dx;
    vec3 xpos = n + dx;
    vec3 yneg = n - dy;
    vec3 ypos = n + dy;
    float depth = length(v);
    float curvature = (cross(xneg, xpos).y - cross(yneg, ypos).x) * 4.0 / depth;

    return curvature;

}


float CdrfLutSampler(const in float x, const in float y){

    return ( (1.0 - 1.0 / x) + (1.0 - 1.0 /( y*y*y) ) ) * 0.5;

}


void subSurfaceScatter( const in int enable, const in vec3 normal, const in vec4 vertex, const in vec4 sssColor, const in float scale, const in float NdotL, in vec3 colorInput, out vec3 colorOutput ) {

    if ( enable == 0 ){
        colorOutput = colorInput;
        return;
    }

    // Compute curvature
    float tm = NdotL * scale * computeCurvature(normal, vertex.xyz);

    colorOutput = colorInput + tm * sssColor.rgb;

}

#else

  // not enabled if no subsurface
  // #error no GL_OES_standard_derivatives;

#endif //
