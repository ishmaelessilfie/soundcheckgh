import {Route} from './Route.js.'

export  class Router{
	constructor(){
		this.mode ='history'
		this.routes =[]
		this.root = '/'
	}

	get root(){
		return this._root
	}
	set root(val){
		this._root = val
	}

	get mode(){
		return this._mode
	}
    set mode(val){
    	this._mode = (val =='history' && window.history.pushState) ? 'history' : 'hash'
    }

    get routes(){
    	return this._routes
    }
    set routes(val){
    	this._routes = val
    }

    add(routes){
    	this.routes.push(new Route(route.name, route.path, route.handler))
    	return this
    }

    navigate(route){
    	route = route ? route : ''
    	this.match(route)
    }
    match(route){
    	for(var i=0; i < this.routes.length; i++){
    		let paramNames = []
    		let 
    	}
    }
}