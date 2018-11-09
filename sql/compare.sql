# compare different records of sub_version_1 and sub_version_2
# version_id of sub_version_1 comes from version_id of version_1
# version_id of sub_version_2 comes from versionid of version_2
# 2018/11/9 zhangx
 
select 
    diff_1.version_id_1 as version_id,
    diff_1.sub_version_name_1 as sub_version_name
from   
    (select 
        res_1.version_id_1 as version_id_1,
        res_1.sub_version_id_1 as sub_version_id_1,
        res_1.sub_version_name_1 as sub_version_name_1
    from
        (select 
            sub_1.version_id as version_id_1,
            sub_1.sub_version_id as sub_version_id_1,
            sub_1.sub_version_name as sub_version_name_1,
            sub_2.versionid as version_id_2,
            sub_2.sub_version_id as sub_version_id_2,
            sub_2.sub_version_name as sub_version_name_2 
        from 
            sub_version_1 as sub_1 
        left join 
            sub_version_2 as sub_2 
        on 
            (
                sub_1.sub_version_name = sub_2.sub_version_name 
                and sub_1.version_id = sub_2.versionid 
            )
        where 
            sub_1.version_id in (select version_id from version_1)  
        order by 
            sub_1.version_id, 
            sub_1.sub_version_id
        ) as res_1
    where 
        res_1.version_id_2 is null
    order by 
        res_1.version_id_1,
        res_1.sub_version_name_1
    ) as diff_1
    
union

select
    diff_2.version_id_2 as version_id,
    diff_2.sub_version_name_2 as sub_version_name
from
    (select 
        res_2.version_id_2 as version_id_2,
        res_2.sub_version_id_2 as sub_version_2,
        res_2.sub_version_name_2 as sub_version_name_2
    from
        (select 
            sub_2.versionid as version_id_2,
            sub_2.sub_version_id as sub_version_id_2,
            sub_2.sub_version_name as sub_version_name_2,
            sub_1.version_id as version_id_1,
            sub_1.sub_version_id as sub_version_id_1,
            sub_1.sub_version_name as sub_version_name_1
        from 
            sub_version_2 as sub_2 
        left join 
            sub_version_1 as sub_1 
        on 
            (
                sub_1.sub_version_name = sub_2.sub_version_name 
                and sub_1.version_id = sub_2.versionid 
            )
        where 
            sub_2.versionid in (select versionid from version_2)  
        order by 
            sub_2.versionid, 
            sub_2.sub_version_id
        ) as res_2
    where 
        res_2.version_id_1 is null
    order by 
        res_2.version_id_2,
        res_2.sub_version_name_2
    ) as diff_2;