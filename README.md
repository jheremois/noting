Noting
========

**Here you can save your notes and edit or delete them if you want to, optimized for both mobile and desktop web browsers.**

## Screenshot:

<img src="https://user-images.githubusercontent.com/61896147/98063994-a5412580-1e27-11eb-9dec-67857735bed5.png"/>


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
