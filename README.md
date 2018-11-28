# booring-cep :shipit:
This is a sample aplication who use Typescript + Jest for consult a CEP API

## Architecture :house:

```
-- build -> This folder only appears when you transpile your project. Here you have everthing whe are on source folder, but transpiled
-- coverage -> This folder only appears when you run tests, {npm test}. Here you have everthing about your code coverage
-- node_modules -> This folders only appears when you execute {npm install}. Here you have all dependencies for your project
-- source -> Her your main project directory, on this folder you have anything about your logic
|-----> source/helpers -> On this sub directory you have your helpers functions, to be called on route or on your tests
-- gulpfile.js -> On this file you have the gulpconfig, gulptasks. To Transpile TS, Watch and etc...
-- jest.config.js -> On this file you have all configs for jest, like code coverage, mock types and etc...
-- package.json -> On this file you have your dependencies list, and everyone node configs.
```

## Workflow :swimmer:

1. First thing you have to done are clone this repository.
2. Execute into to the cloned folder in a your preferred CLI this command:
```
npm install
```
3. Now execute this command:
```
npm install -g gulp-cli
```
4. Now execute this command:
```
gulp transpile
```
5. Now execute this command:
```
npm start
```
