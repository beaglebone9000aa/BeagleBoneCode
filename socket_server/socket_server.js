// Lukker ikke socket ved client disconnect !!!!!
var net = require('net');
var bb = require('/var/lib/cloud9/bonescript');
var delay = 100;
var adc = Array();
var counter = 1;

var server = net.createServer(function (socket){    
   
    socket.write('Matlab connected...');     
    socket.setNoDelay('true'); 
    
    var tcpTx = function(){  
        adc[0] = parseInt(analogRead(0),10);
        adc[1] = parseInt(analogRead(1),10);
        //adc[2] = Math.abs((parseInt(analogRead(0),10)-2048)*2);
        //adc[3] = Math.abs((parseInt(analogRead(1),10)-2048)*2);
        try{
			socket.write(adc.toString()+'\n');
		} catch (err) {
			console.log("!!! Connection number '",counter,"' closed !!!")
			counter++;
			socket.end();
			return;
		}
		//socket.write(adc + '\n');
        //console.log(''+adc);
		setTimeout(tcpTx, delay);	
    };     
	setTimeout(tcpTx, delay);
});
console.log('Socket server ready...');  
server.listen(6969);
