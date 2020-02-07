.PHONY: test all init build

all: build

test:
	node ./src/show-devices.js
	
init:
	git submodules update --recursive --init
	npm install -g rimraf

build:
	npm run prepublishOnly 
	npm install --build-from-source
	node ./src/show-devices.js

