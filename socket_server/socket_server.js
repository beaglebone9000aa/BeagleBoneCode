// Lukker ikke socket ved client disconnect !!!!!
var net = require('net');
var bb = require('/var/lib/cloud9/bonescript');
var delay = 100;
var adc = Array();

var server = net.createServer(function (socket){    
   
   socket.write('Matlab connected...');     
    socket.setNoDelay('true'); 
    
    var tcpTx = function(){  
        adc[0] = parseInt(analogRead(0),10);
        adc[1] = Math.abs((parseInt(analogRead(2),10)-2048)*2);
        adc[2] = Math.abs((parseInt(analogRead(6),10)-2048)*2);
        socket.write(adc.toString()+'\n');
        //console.log(''+adc);
        setTimeout(tcpTx, delay);	
    };     
    setTimeout(tcpTx, delay);  
});
console.log('Socket server ready...');  
server.listen(6969);