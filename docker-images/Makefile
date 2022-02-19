run-container: 
	@docker run -d --name dev-server -p 3000:3000 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app node:1
del-contaienr:
	@docker stop dev-server
	@docker rm `docker ps -a -q`