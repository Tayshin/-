Title         : JS定时器工作原理
Logo          : True

[TITLE]

setTimeout(func,delay);
setInterval(func,delay);

#JavaScript是单线程的，会强迫异步事件排队进行；

#setTimeout是在delay后，将func加入事件队列；
#setInteval在delay后检查队列中是否有func，如果还有就不加入事件队列了。
#一个定时器如果被阻塞，那么会被延迟到下一个可执行点。

也就是说如果setInterval的回调函数执行时间大于延迟delay的话，函数会一个接一个的执行而没有间隔。

