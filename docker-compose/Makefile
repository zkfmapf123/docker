up:
	@docker-compose up

build-up:
	@docker-compose up --build

down:
	@docker-compose down

## 직접 입력
del-none-img:
	@docker rmi $(docker images -f "dangling=true" -q)