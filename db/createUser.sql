create table if not exists users (
    id serial primary key,
    facebook_id int,
    userName varchar(40),
    firstName varchar(40),
    lastName varchar(40),
    img text,
    score int

)
