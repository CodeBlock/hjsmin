Function.prototype.inherits=function(superConstructor){function CreatePrototype(){};CreatePrototype.prototype=superConstructor.prototype;this.prototype=new CreatePrototype();this.prototype.constructor=this;this.superConstructor=superConstructor;this.prototype.callSuper=function(){var caller=arguments.callee.caller,caller=arguments[0],args=new Array();for(var i=1;i<arguments.length;i++)args.push(arguments[i]);var currentConstructor=this.constructor,methodName=null;while(methodName==null&&currentConstructor!=null){if(caller===currentConstructor)return currentConstructor.superConstructor.apply(this,args);methodName=figureMethodName(currentConstructor.prototype,caller);currentConstructor=currentConstructor.superConstructor};if(!methodName)throw new Error("Could not find method: "+methodName+".");if(!currentConstructor)throw new Error("Prototype does not have an ancestor: "+currentConstructor+".");return currentConstructor.prototype[methodName].apply(this,args)}}
function figureMethodName(prototype,method){for(var key in prototype)if(prototype.hasOwnProperty(key)&&prototype[key]===method)return key;return null}
function Animal(name){if(!name)throw new Error('Must specify an animal name');this.name=name};Animal.prototype.toString=function(){return'My name is '+this.name}
function Pet(owner,name){this.owner=owner;this.callSuper(arguments.callee,name)};Pet.inherits(Animal);Pet.prototype.toString=function(){return this.callSuper(arguments.callee)+"\nMy owner is "+this.owner}
function Cat(owner,name){this.callSuper(arguments.callee,owner,name)};Cat.inherits(Pet);Cat.prototype.toString=function(){return this.callSuper(arguments.callee)+'\nI eat mice'};var cat=new Cat('charlie','oba');print(cat.toString())