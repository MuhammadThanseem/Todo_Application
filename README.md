# Todo_Application
Simple NodeJS todo application using mongoAtlas

Run steps

1. Download the project.

2. first install the node module using the command.
       npm install / npm i

3. Then install the mongoose package using the command.
       npm install mongoose

4. Then the server running at port 4000 using the command.
       npm start / node bin/www
       
5. For creation.
          Api- http://localhost:4000/todo/create
          Body - {'todo':'tododata'}

6. For listing data.
          Api - http://localhost:4000/todo/list 
          
7. For delete unnecessary data
           Api - http://localhost:4000/todo/delete/id
 
 8. For update data.
           Api - http://localhost:4000/todo/update/id
           Body - {'todo':'tododata'}
     id will get into the mongoatlas
       
In this application a fully-managed cloud database- mongoAtlas is used.

