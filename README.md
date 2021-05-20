# templete-express
Rest CRUD API for a simple application using Node. js, Express and MySQL use Heroku

## Install 
1. run git clone https://github.com/Jerd22/templete-express.git
2. run cd templete-express 
3. run npm install
4. run copy .env.example .env

### heroku create app 
 1. run heroku login -i
 2. run heroku create <appname> 
 3. run git init 
 4. run heroku git:remote -a <appname>  
    - create add-ons : ClearDB MySQL 
        heroku on web select Setting on Tabbar menu then clink Reveal Config Vars Look 
        your link : mysql://<USER>:<PASSWORD>@<HOST>/<DB>?reconnect=true

    - edit file .env 
        HOST = <USER>
        USER = <PASSWORD>
        PASSWORD = <HOST>
        DB = <DB> 

    run Tack test and Open Browser http://localhost:8080/  

 5. run git add .
 6. run git commit -am "make it better" 
 7. run git push heroku main 
 8.  open https://<appname>.herokuapp.com/ 


