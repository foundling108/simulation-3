update users
set (username, password) = $2
where user_id = $1;