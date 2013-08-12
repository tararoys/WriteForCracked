App = Ember.Application.create({});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Router.map(function() {
  this.resource('articles', function(){
		this.resource('article', {path: ":article_id"});
	});
	this.resource('about');
});

App.ArticlesRoute = Ember.Route.extend({
	model: function (){
	 return	App.Article.find();	
	}
});

App.Article = DS.Model.extend({
	title: DS.attr('string')	
});

App.Article.FIXTURES = [{
		id: 1,
		title: "Creepy Clone Armies Capable of Untold Havoc"	
	},{
		id: 2,
		title: "Weirdest things ever used as ink."
		
	}
];

/*
App.FactoidController = Ember.ObjectController.extend({
	isEditing: false,
	edit: function(){
		this.set('isEditing', true);
	
	},
	doneEditing: function(){
		this.set('isEditing', false);
	}
});

App.Factoid = DS.Model.extend({
	article: DS.belongsTo('App.Article'),
	title: DS.attr('string'),
  author: DS.attr('string'),
  intro: DS.attr('string'),
  extended: DS.attr('string'),
  publishedAt: DS.attr('date'),
	quote: DS.attr('string'),
	source: DS.attr('string')
});


App.Factoid.FIXTURES = [{
  id: 1,
  title: "Cheetahs",
  author: "TroyLynn",
  publishedAt: new Date('08-11-2013'),
  intro: "Cheetahs are indeed a noble animal, if not for the reasons you think.  Like egyptian pharaohs and European nobility, Cheetahs got in the habit of screwing their siblings…so much so that most cheetahs nowadays are more closely related than human identical twins.  Why?  Many scientists theorize that there was a population bottleneck about 10,000 years ago.",
  extended: "The only thing more horrific than the family orgy that is cheetah sex is how the researchers figured out how closely related they actually were.  Back in the ancient 80s, they didn't have things like DNA sequencing, supercomputers, or all the science-fiction-age techology we have today.  So they cut big hunks of skin out of the cheetah's backs and grafted them onto other cheetahs to see how long it would take them to be rejected.  Apparently this is a good method of determining how closely related critters are, because it takes immune systems of closely related critters longer to reject the bloody wad of foreign tissue.\n Except the cheetahs never rejected the skin.  It was clear.  The cheetahs were all clones of one another. In short, every cheetah is closer than a kissing cousin…but don't snicker, because their inbred asses make them the fastest land creatures on the planet.  By the time you start laughing about they're redneck origins, your neck will be red because they've torn out your throat.",
	quote: "Dr. O'Brien, who is considered the world's authority on molecular studies of exotic cats and other endangered animals, was the principal author on the first and most spectacular report alerting the world to the cheetah's genetic plight, a paper that appeared in the journal Science almost 10 years ago.\n He performed experiments demonstrating, for example, that when skin from one cheetah is grafted onto another, it takes an extraordinarily long time for the immune system of the transplant recipient to reject the added flesh -- strong evidence that cheetahs are practically clones of one another.",
  source: "http://www.nytimes.com/1992/11/10/science/cheetahs-appear-vigorous-despite-inbreeding.html?pagewanted=all&src=pm"
}, {
  id: 2,
  title: "The Parley Letter",
  author: "d2h",
  publishedAt: new Date('12-24-2012'),
  intro: "My [appearance on the Ruby Rogues podcast](http://rubyrogues.com/056-rr-david-heinemeier-hansson/) recently came up for discussion again on the private Parley mailing list.",
  extended: "A long list of topics were raised and I took a time to ramble at large about all of them at once. Apologies for not taking the time to be more succinct, but at least each topic has a header so you can skip stuff you don't care about.\n\n### Maintainability\n\nIt's simply not true to say that I don't care about maintainability. I still work on the oldest Rails app in the world.",
	quote: " Poke",
	source: "No such critter" 
}];

Ember.Handlebars.registerBoundHelper('date', function(date){
	return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper('markdown', function(input){
	return new Ember.Handlebars.SafeString(showdown.makeHtml(input)); 
});	
*/
