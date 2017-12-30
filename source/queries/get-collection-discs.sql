select *
from collections c
inner join discs d on d.collection_id = c.id
where c.id = ?;
