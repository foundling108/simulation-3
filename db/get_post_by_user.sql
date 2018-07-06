select *
from posts
where author_id in (
    select *
    from users
    where user_id = $1
)