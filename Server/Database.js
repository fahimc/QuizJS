var Datastore = require('nedb')
exports.Database={
	db:null,
	testIndex:0,
	init:function(){
		this.db = new Datastore({ filename: './Server/_database.db' ,autoload:true});
		this.db.loadDatabase(function (err) {    
		});
		this.db.remove({  }, { multi: true}, function (err, numRemoved) {
		});
		
		this.test();
		
	},
	add:function(item,callback){
		this.db.insert(item, function (err, newDoc) {
			if (err) { 
				throw err; 
			}
			if(callback)callback();
		});

	},
	get:function(total,callback){
		this.db.find({}, function (err, results) {
			console.log(results.length);
			var count=0;
			var selected = {};
			var collection = [];
			while(count<total){
				var a = Math.floor(Math.random()*((results.length-1)-0+1)+0);
				var id = results[a]._id;
				if(selected[id] == undefined){
					var item = results[a];
					delete item.answers;
					collection.push(item);
					selected[id]=true;
					count++;
				}

			}
			callback(collection);	
		});
	},
	size : function(obj) {
		var size = 0, key;
		for (key in obj) {
			if (obj.hasOwnProperty(key)) size++;
		}
		return size;
	},
	test:function(){
		if(this.testIndex>=20)return;
		var data={
			title:'sample question '+this.testIndex,
			options:[],
			level:1,
			type:'standard',
			answers:[0,2]
		};
		for(var a=0;a<Math.random();a++){
			data.options.push("item "+a);
		}
		this.testIndex++;
		this.add(data,this.test.bind(this));
	}

};
