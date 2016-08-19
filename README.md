# Portfolio [![wercker status](https://app.wercker.com/status/cd5a782c425b1feb06844dcc701e528c/s/master "wercker status")](https://app.wercker.com/project/bykey/cd5a782c425b1feb06844dcc701e528c)

This project contains a custom portfolio web app built with Golang as the backend and the view layer with ReactJS. This site was built to showcase and learn.

## Specs
* Golang Server based on: [Olebdev Go-Starter-Kit](https://github.com/olebedev/go-starter-kit)
* ReactJS
* React Router
* React Helmet
* Redux
* [MaterializeCss](http://materializecss.com/) framework
* Webpack with hot reload


## Project structure

##### The server's entry point
```
$ tree server
server
├── api.go
├── app.go
├── bindata.go <-- this file is gitignored, it will appear at compile time
├── conf.go
├── data
│   └── templates
│       └── react.html
├── main.go <-- main function declared here
├── react.go
└── utils.go
```

The `./server/` is flat golang package.

##### The client's entry point

It's simple React application

```
$ tree client
client
├── actions.js
├── components
│   ├── app
│   │   ├── favicon.ico
│   │   ├── index.js
│   │   └── styles.css
│   ├── homepage
│   │   ├── index.js
│   │   └── styles.css
│   ├── not-found
│   │   ├── index.js
│   │   └── styles.css
│   └── usage
│       ├── index.js
│       └── styles.css
├── css
│   ├── funcs.js
│   ├── global.css
│   ├── index.js
│   └── vars.js
├── index.js <-- main function declared here
├── reducers.js
├── router
│   ├── index.js
│   ├── routes.js
│   └── toString.js
└── store.js
```


## Install

Install JavaScript dependencies:

```
$ npm i
```

Install Golang dependencies via revision locking tool - [srlt](https://github.com/olebedev/srlt). Make sure that you have srlt installed, environment variable `GO15VENDOREXPERIMENT=1` and _Golang_ >= 1.5.0.

```
$ srlt restore
```

This command will install dependencies into `./vendor/` folder located in root.

## Run development

Start dev server:

```
$ make serve
```

that's it. Open [http://localhost:5001/](http://localhost:5001/)(if you use default port) at your browser. Now you ready to start coding your awesome project.

## Build

Install dependencies and type `NODE_ENV=production make build`. This rule is producing webpack build and regular golang build after that. Result you can find at `$GOPATH/bin`. Note that the binary will be named **as the current project directory**.

## License
MIT
