from node:14

WORKDIR /usr/src/app

copy package.json ./

run npm install

copy . .

expose 3000

cmd ["npm","start"]