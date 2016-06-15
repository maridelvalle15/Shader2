vec4 HSVtoRGB( float h, float s, float v ){
   int i;
   float f, p, q, t;
   vec4 RGB;
   
   h = 360*h;
   /*if( s == 0 ) {
      // achromatic (grey)
      RGB = vec3(v,v,v);
      return RGB
   }*/
   
   h /= 60;         // sector 0 to 5
   i = int(floor( h ));
   f = h - i;         // factorial part of h
   p = v * ( 1 - s );
   q = v * ( 1 - s * f );
   t = v * ( 1 - s * ( 1 - f ) );
   
   switch( i ) {
      case 0:
         RGB.x = v;
         RGB.y = t;
         RGB.z = p;
         break;
      case 1:
         RGB.x = q;
         RGB.y = v;
         RGB.z = p;
         break;
      case 2:
         RGB.x = p;
         RGB.y = v;
         RGB.z = t;
         break;
      case 3:
         RGB.x = p;
         RGB.y = q;
         RGB.z = v;
         break;
      case 4:
         RGB.x = t;
         RGB.y = p;
         RGB.z = v;
         break;
      default:      // case 5:
         RGB.x = v;
         RGB.y = p;
         RGB.z = q;
         break;
   }
   
   RGB.w = 1.0;
   return RGB;
   
}

//Spirograph Curves
float LCM(float R,float rv){
	float i=0;
	float cm=1.0;
	if (fmod(R,rv)==0){
		cm = 1;
	}
	else{
		i=1;
		while (fmod(R*i,rv)!=0){
			i=i+1;
		}
		cm = i;
	}
	return cm;
}

float calcspiro(float R,float rv, float b, float a){
	float rho;
	rho = (sqrt((R-rv)*(R-rv)+b*b+2*(R-rv)*b*cos((1+R/rv)*a)));
	return rho;
} // calcspiro()

vec4 spirofield(float R=10, float rv=5, float b=2.5, float hoff=0.0,
				float freq=1.0, float calctype=0, float f=1.0){
	float i;
	float theta;
	float rho;
	float nrev;
	float a;
	float rsp;
	float ss;
	float tt;

	ss=s-0.5;
	tt=t-0.5;
	theta=atan(tt,ss);
	theta += 3.1415;
	rho = 2*sqrt(ss*ss+tt*tt);
	if ((rho>((R-rv+b)/R))||(rho<((R-rv-b)/R))){
		
	}
}


void main(void) {


	gl_FragColor = HSVtoRGB(0.0,1.0,1.0);
}