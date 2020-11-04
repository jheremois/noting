Noting
========

**Here you can save your notes and edit or delete them if you want to, optimized for both mobile and desktop web browsers.**

## Screenshot:

<img src="https://user-images.githubusercontent.com/61896147/98065886-e0ddee80-1e2b-11eb-8dfe-5b8e7f5bddfe.png"/>


<img src="https://user-images.githubusercontent.com/61896147/98064115-e6d1d080-1e27-11eb-92cd-6a0712b1070b.png" height='750px'/>

## Setup:

**Install Dependecies:**
```
npm i
```


**Create the table**

```sql
CREATE TABLE notes(
id INT(11) NOT NULL AUTO_INCREMENT,
title TEXT NOT NULL,
content TEXT NOT NULL,
upload_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
```


**Environment Variables required**

`MYSQL_HOST`

`MYSQL_USER`

`MYSQL_PASSWORD`

`MYSQL_DATABASE`

**Start app:**
```
npm run start
```
