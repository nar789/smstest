;(function(){
	module.exports=function(_g){

		var app = _g.app;
		var http = _g.http;

		const accountSid = 'AC25aa605311c6569cd98f2e4070f70201'; // Your Account SID from www.twilio.com/console
		const authToken = 'df133fe476cb78e6418aeeee0653d5d9'; // Your Auth Token from www.twilio.com/console

		const twilio = require('twilio');
		const client = new twilio(accountSid, authToken);

		function route(){

			app.get('/sms',function(req,res){
				const text = req.query.text;
				client.messages
				.create({body: text, from: '+13236132241', to: '+821036906736'})
				.then(message => console.log(message.sid));
				res.send(text);
			});

			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			//1. enetry point
			app.listen(1124,function(){
			  
			  console.log('sms Server listen on *:1124');
			});
		}

		var publicReturn = {
			route:route,
		}
		return publicReturn;
	}

})();



