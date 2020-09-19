Noting
========

**Here you can save your notes and edit or delete them if you want to, optimized for both mobile and desktop web browsers.**

## Screenshot:

<img src="https://user-images.githubusercontent.com/61896147/93657658-646d8880-fa02-11ea-9ad9-5a109a3bc8aa.png"/>


<img src="https://user-images.githubusercontent.com/61896147/93657604-0ccf1d00-fa02-11ea-80ff-6373e6859cce.png" height='750px'/>

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
