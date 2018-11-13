
select * from 
    (select 
        sub_1.version_id as version_id_1,
        sub_1.sub_version_id as sub_version_id_1,
        sub_1.sub_version_name as sub_version_name_1,
        sub_2.versionid as version_id_2,
        sub_2.sub_version_id as sub_version_id_2,
        sub_2.sub_version_name as sub_version_name_2
    from 
        sub_version_1 as sub_1 
    full join 
        sub_version_2 as sub_2 
    on 
        sub_1.sub_version_name = sub_2.sub_version_name 
        and (sub_1.version_id, sub_2.versionid) in (select version_id, versionid from version_2_version)
    order by 
        sub_1.version_id, 
        sub_1.sub_version_id
    ) as res
where 
    (
        res.version_id_1 is null 
        or res.version_id_2 is null
    );
