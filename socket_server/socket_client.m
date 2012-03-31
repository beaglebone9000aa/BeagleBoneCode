%% Beaglebone matlab interface test
clear,clc
t = tcpip('192.168.100.107',6969);
fopen(t)

figure(1)
data = zeros(50,4);
for i=1:1000
    %datain = strcat(num2str(randi(1000)),',',num2str(randi(1000)),',',num2str(randi(1000)));
    datain = fgets(t);    
    data = [data(2:end,:) ; str2num(datain)]
    plot(data);   
    ylim([0 4096]);
    pause(1/1000);
end
fclose(t)

