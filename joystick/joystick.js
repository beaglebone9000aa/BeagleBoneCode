var bb = require('/var/lib/cloud9/bonescript');

var ledPins =  [bone.P9_27,bone.P9_25,bone.P9_23,bone.P9_15,bone.P9_42,
                bone.P8_39,bone.P8_41,bone.P8_43,bone.P8_45,bone.P8_46];
var adc = Array();
var adcmax, sampletime = 25;

setup = function() {
	for(var i=0;i<ledPins.length;i++)
		 pinMode(ledPins[i], OUTPUT);
};
var joystick_sample = function(){ 
    adc[0] = parseInt(analogRead(0),10);
    adc[1] = Math.abs((parseInt(analogRead(2),10)-2048)*2);
    adc[2] = Math.abs((parseInt(analogRead(6),10)-2048)*2);
    
    adcmax = 0;    
    for(var i=0;i<adc.length;i++)
        if(adc[i]>adcmax)
	        adcmax = adc[i];
    for(var i=0;i<10;i++){
        if(adcmax>((i+1)*380))
            digitalWrite(ledPins[i], HIGH);
        else
            digitalWrite(ledPins[i], LOW);
    }
    console.log(adcmax);   
    setTimeout(joystick_sample, sampletime);
};
setTimeout(joystick_sample, sampletime);
bb.run();