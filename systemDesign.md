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

 problems: user variation, user caches (but TTL )

 problem: multiple servers, where is the session token stored? requiring session token on each server? 

 enter: RAID
 RAID0 - performance, write to disk twice as fast (striping)
 RAID1 is mirrored, write to disk is done as the same twice to two disks
 RAID 10 is 4 drives, combination of 0 and 1. 

 RAID 5 and RAID 6 in the middle ground.

 hardware load balancers are insanely expensive.

 can configure load balancers to handle cookies where they could point to the correct backend server. 

 memcached -> stores whatever u want in ram. Select * from users is expensive, so you can store a table with indexes to users. 
 can use in a a way where if RAM space is running out, only cache the most frequent users

 Multiple Masters -> Slave 

 Load balancers bought in pairs (active-active) simliar to master-master DBs

 resistance, redundancy, scalability 

 ssl - at  load balancers 

 firewall only certain things are passed thru. TCP, SSL