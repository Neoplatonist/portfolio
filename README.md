# Portfolio [![wercker status](https://app.wercker.com/status/cd5a782c425b1feb06844dcc701e528c/s/master "wercker status")](https://app.wercker.com/project/bykey/cd5a782c425b1feb06844dcc701e528c)

This project contains my custom portfolio web app built with Golang as the backend and the view layer with ReactJS. This site was built for educational purposes and to showcase my portfolio.

## Specs
* Golang Server based on: [Olebdev Go-Starter-Kit](https://github.com/olebedev/go-starter-kit)
* Golang HTTP framework [Echo v1](https://github.com/labstack/echo)
* ReactJS
* React Router
* React Helmet
* Redux
* Webpack with hot reload
* ESLint
* [MaterializeCss](http://materializecss.com/) framework


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
│   ├── static <-- static images, js libraries, css libraries, and fonts go here. To Use: example.com/static/your/content
│   │   ├── css
│   │   ├── fonts
│   │   ├── images
│   │   └── js
│   └── templates
│       └── react.html
├── main.go <-- main function declared here
├── react.go
└── utils.go
```

The `./server/` is flat golang package.

##### The client's entry point

```
$ tree client
client
├── actions.js
├── components
│   ├── about
│   │   ├── index.js
│   │   └── styles.css
│   ├── app
│   │   ├── index.js
│   │   └── styles.css
│   ├── homepage
│   │   ├── index.js
│   │   └── styles.css
│   ├── layouts
│   │   └── nav
│   │       ├── index.js
│   │       └── styles.css
│   ├── not-found
│   │   ├── index.js
│   │   └── styles.css
│   ├── projects
│   │   ├── wiki-viewer
│   │   │   ├── live
│   │   │   │   ├── components
│   │   │   │   │   ├── footer.js
│   │   │   │   │   └── header.js
│   │   │   │   ├── index.js
│   │   │   │   └── styles.css
│   │   │   ├── index.js
│   │   │   └── styles.css
│   │   ├── quote-generator
│   │   │   ├── live
│   │   │   │   ├── index.js
│   │   │   │   └── styles.css
│   │   │   ├── index.js
│   │   │   └── styles.css
│   │   ├── index.js
│   │   └── styles.css
│   └── usage
│       ├── index.js
│       └── styles.css
├── css
│   ├── global.css
│   └── index.js
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
