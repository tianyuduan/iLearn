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


Servers: 

the first golden rule for scalability: every server contains exactly the same codebase and does not store any user-related data, like sessions or profile pictures, on local disc or memory. 

Sessions need to be stored in a centralized data store which is accessible to all your application servers. It can be an external database or an external persistent cache, like Redis. An external persistent cache will have better performance than an external database. By external I mean that the data store does not reside on the application servers.

you can now create an image file from one of these servers (AWS calls this AMI - Amazon Machine Image.) Use this AMI as a “super-clone” that all your new instances are based upon. Whenever you start a new instance/clone, just do an initial deployment of your latest code and you are ready!

Database: 

Path #1 is to stick with MySQL and keep the “beast” running. Hire a database administrator (DBA,) tell him to do master-slave replication (read from slaves, write to master) and upgrade your master server by adding RAM, RAM and more RAM. In some months, your DBA will come up with words like “sharding”, “denormalization” and “SQL tuning” and will look worried about the necessary overtime during the next weeks. At that point every new action to keep your database running will be more expensive and time consuming than the previous one. You might have been better off if you had chosen Path #2 while your dataset was still small and easy to migrate.

Path #2 means to denormalize right from the beginning and include no more Joins in any database query. You can stay with MySQL, and use it like a NoSQL database, or you can switch to a better and easier to scale NoSQL database like MongoDB or CouchDB. Joins will now need to be done in your application code. The sooner you do this step the less code you will have to change in the future. But even if you successfully switch to the latest and greatest NoSQL database and let your app do the dataset-joins, soon your database requests will again be slower and slower. You will need to introduce a cache.

Cache: 
 A cache is a simple key-value store and it should reside as a buffering layer between your application and your data storage. 

 #1 - Cached Database Queries
That’s still the most commonly used caching pattern. Whenever you do a query to your database, you store the result dataset in cache. A hashed version of your query is the cache key. The next time you run the query, you first check if it is already in the cache. The next time you run the query, you check at first the cache if there is already a result. This pattern has several issues. The main issue is the expiration. It is hard to delete a cached result when you cache a complex query (who has not?). When one piece of data changes (for example a table cell) you need to delete all cached queries who may include that table cell. You get the point?

#2 - Cached Objects
That’s my strong recommendation and I always prefer this pattern. In general, see your data as an object like you already do in your code (classes, instances, etc.). Let your class assemble a dataset from your database and then store the complete instance of the class or the assembed dataset in the cache. Sounds theoretical, I know, but just look how you normally code. You have, for example, a class called “Product” which has a property called “data”. It is an array containing prices, texts, pictures, and customer reviews of your product. The property “data” is filled by several methods in the class doing several database requests which are hard to cache, since many things relate to each other. Now, do the following: when your class has finished the “assembling” of the data array, directly store the data array, or better yet the complete instance of the class, in the cache! This allows you to easily get rid of the object whenever something did change and makes the overall operation of your code faster and more logical.

caching also makes asychonchrous processing possible

Asynch: 
 turn dynamic content into static content.  Pages of a website, maybe built with a massive framework or CMS, are pre-rendered and locally stored as static HTML files on every change. Often these computing tasks are done on a regular basis, maybe by a script which is called every hour by a cronjob. This pre-computing of overall general data can extremely improve websites and web apps and makes them very scalable and performant.


 Time consuming tasks should defintely be done asychronously with workers, and ping the user when done. 


