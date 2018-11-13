进入docker容器 访问server
	docker-compose exec server /bin/sh

连接docker容器数据库
(1)
	docker-compose exec db /bin/sh
	psql -U postgres
(2)
	psql -U postgres -d postgres -h 127.0.0.1 -p 5433

访问亚马逊服务器
	ssh -i ~/Downloads/wellliving-backend.pem ubuntu@52.80.200.93

访问亚马逊数据库
backend目录下执行
docker-compose exec db /bin/sh
psql -U wellliving -h well-living-db.cpr784qbdugw.rds.cn-north-1.amazonaws.com.cn -d postgres

Git:
git pull 撤销误操作:
1. git reflog
2. git reset --hard HEAD@{n}

取消某次合并:
git merge --abort
git reset --merge

