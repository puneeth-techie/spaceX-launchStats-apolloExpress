### Space X Mission Launches Information

> Simple application to view all Space-X mission launches information and the specific launches details. Implemented back-end using [**Node**](https://nodejs.org/en/) and [**GraphQL**](https://graphql.org/), front-end using [**React**](https://reactjs.org/)

## SpaceX API

[**r/SpaceX API Docs**](https://docs.spacexdata.com/#bc65ba60-decf-4289-bb04-4ca9df01b9c1)
[**SpaceX API GitHub**](https://github.com/r-spacex/SpaceX-API/tree/master/docs/v4)

# Usage

### ES Modules in Node

We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error.

You can also install and setup Babel if you would like.

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 4000
API_URL = http://localhost:4000/graphql
```

### Install Dependencies (frontend & backend)

```
npm install
cd client
npm install
```

### Run

```
# Run both frontend (:3000) & backend (:4000)
npm run dev

# Run backend only
npm run server

GraphQL access http://localhost:4000/graphql
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

## License

MIT License

Copyright (c) 2021 Puneeth P Gowda

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
