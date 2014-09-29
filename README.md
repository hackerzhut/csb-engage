# csbApp Candidate Exercise


## Demo

A demo of the application can be found [here](http://csbengage.herokuapp.com/)


## csbApp Uses

- [grunt](https://www.npmjs.org/package/grunt)
- [bower](http://bower.io/)
- [angular.js](https://angularjs.org/)

## Setup

To install all the dependencies

```
	git clone git://github.com/hackerzhut/csb-engage.git
	cd csb-engage
	bower install	
```

## Running   

```
grunt serve

```

## Testing

To run jshint and/or tests

```
grunt test

```

## Deployment

To deploy to heroku do the following while creating the app

```
heroku create --stack cedar --buildpack https://github.com/pearkes/heroku-buildpack-static

```
## License

[The MIT License](http://opensource.org/licenses/MIT)