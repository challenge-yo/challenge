insert into users (facebook_id, user_name, first_name, last_name, image, user_email)
values ($1, $2, $3, $4, $5, $6);
select * from users;