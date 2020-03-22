# System Design 


## vertical Scaling 

get more resources when run out, more disk space, more ram etc
Throw money at it

 quad core servers can truly handle 4 requests at the same time, server will spawn multiple threads, give impression of many more requests. 

 ## horizontal scaling 

more, cheaper machines 

using load balancers, and public servers can be now private servers.  

having seperate server for php, javascript, images etc so reduces redundant copied code.

 or 

 DNS Round Robin 

 problems: user variation, user caches (but TTL)