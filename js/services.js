//SEVICES
 angularWebApp.service("cityService", function(){
 	this.city='Bangalore';
 });

angularWebApp.service("countryService", ["$resource", function($resource){
	// var weatherAPI = $resource("https://restcountries.eu/rest/v1/all", {callback: "JSON_CALLBACK"},{get:{method:"JSONP"}});
	
	// this.getCountry = function(){
	// 	return weatherAPI.get({}, someMethod());
	// }
	// var someMethod = function(){
	// 	console.log("successs")
	// }

	this.country=["USA","India","UK","Germany", "Ireland","Wales", "Iceland", "Denmark", "Swiss","Estonia"];

}]);

angularWebApp.service("navigationBarService", function(){
	this.linkData = ["HOME","MD#6","ABOUT MANUEL","HISTORY","CONTACT"];
});


angularWebApp.service("jumbotronService", function(){
	this.header = "Christopher Nolan";
	this.content = 'Towards the end of the 90s directors like Paul Thomas Anderson, the Wachowski Brothers, David Fincher, Darren Aronofsky and others were making films that often got both, critical and commercial acclaim. Of all these, Christopher Nolans has been the swiftest ride to the top. is films now have a cult following and a Nolan movie is one of the most awaited events in world cinema. His last movie, the magnificent sci-fi blockbuster Interstellar, had fans all over the world debating the film and its place in the hierarchy of his body of work. Known for his innovative, twisted and multi-layered narrative technique, Nolan is at (what seems like) the pinnacle of his career. This fan-made video shows exactly what is so good about Nolan and his films. Almost a tribute video, it has shots from all his films strung together, playing to the dramatic music of Hans Zimmer. If you are a fan of Nolans, then you will love this video. And if you arent, then this video might just make you change your mind.'
	// this.content = " He has been influential in popular music and culture for more than five decades. Much of his most celebrated work dates from the 1960s when his songs chronicled social unrest, although Dylan repudiated suggestions from journalists that he was a spokesman for his generation. Nevertheless, early songs such as "Blowin' in the Wind" and "The Times They Are a-Changin'" became anthems for the American civil rights and anti-war movements. After he left his initial base in the American folk music revival, his six-minute single "Like a Rolling Stone" altered the range of popular music in 1965. His mid-1960s recordings, backed by rock musicians, reached the top end of the United States music charts while also attracting denunciation and criticism from others in the folk movement."
});

angularWebApp.service("carouselService", function(){
	this.images = [{url:"resource/JimMorrison.jpg", caption:"Jim Morrison"}, {url:"resource/Bob-Dylan.jpg", caption:"Bob Dylan"}];
});

angularWebApp.service("professionService", function(){
	this.profession = [
		"Musician",
		"Lyricist",
		"Drummer",
		"Bass Guitarist",
		"Lead Guitarist",
		"Manager",
		"Sound Editor",
		"Sound Mixer",
		"Orchestrator",
		"Chores Singer",
		"Singer"
	];
});

angularWebApp.service("formService", function(){
	this.capture = function(input){
		console.log(input);
	}
})