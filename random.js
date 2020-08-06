var chance=require('chance').Chance()
var Discord=require('discord.js')
var bot=new Discord.Client()
var prefix='.'
bot.login('token');

function stringtobool(string) {
	if (string === 'true') {
		return true
	} else return false
}

function random(args, cmd){
try {
	switch (cmd) {
		//Basics
		case 'bool':
		if (args[0]) {
			return chance.bool({likelihood: args[0]})
		} else return chance.bool()
		case 'falsy':
		if (args[0]) {
			return chance.falsy({pool: args})
		} return chance.falsy();
		case 'character':
		if (args[0]) {
			return chance.character({pool: args[0]})
		} else return chance.character()
		case 'floating':
		if (args[0] && args[1]) {
			return chance.floating({min: args[0], max: args[1]})
		} else return chance.floating()
		case 'integer':
		if (args[0] && args[1]) {
			return chance.integer({min: args[0], max: args[1]})
		} else return chance.integer()
		case 'letter':
		if (args[0]) {
			return chance.letter({casing: args[0]})
		} return chance.letter()
		case 'natural':
		if (args[0] && args[1]) {
			return chance.natural({ min: args[0], max: args[1] })
		} else return chance.natural()
		case 'prime':
		if (args[0] && args[1]) {
			return chance.prime({ min: args[0], max: args[1] })
		} else return chance.prime()
		case 'string':
		if (args[0]) {
			if (args[1]) {
			return chance.string({ length: args[1] })
		} else return chance.string({ pool: args[0] })
		} else return chance.string()
		//Text
		//Person
		//Thing
		case 'animal':
		if (args[0]) {
			return chance.animal({type: args[0]})
		} else return chance.animal()
	}
} catch {
	return 'Incorrect arguments'
}
}

bot.on('message', async msg => {
if (!msg.content.startsWith(prefix) || msg.author.bot) return
	var args = msg.content.slice(prefix.length).trim().split(' ').filter(item => item !== '')
	var cmd = args.shift().toLowerCase()

	var result = random(args, cmd)
	if (result.isNaN) {
	msg.reply('Incorrect arguments')
	} else msg.reply(result)

	//Text
	if (cmd === 'paragraph') msg.reply(chance.paragraph())
	if (cmd === 'sentence') msg.reply(chance.sentence())
	if (cmd === 'word') msg.reply(chance.word())
	//Person
	if (cmd === 'age') msg.reply(chance.age())
	if (cmd === 'birthday') msg.reply(chance.birthday())
	if (cmd === 'cf') msg.reply(chance.cf())
	if (cmd === 'cpf') msg.reply(chance.cpf())
	if (cmd === 'first') msg.reply(chance.first())
	if (cmd === 'gender') msg.reply(chance.gender())
	if (cmd === 'last') msg.reply(chance.last())
	if (cmd === 'name') msg.reply(chance.name())
	if (cmd === 'prefix') msg.reply(chance.prefix())
	if (cmd === 'ssn') msg.reply(chance.ssn())
	if (cmd === 'suffix') msg.reply(chance.suffix())
	//Mobile
	if (cmd === 'android_id') msg.reply(chance.android_id())
	if (cmd === 'apple_token') msg.reply(chance.apple_token())
	if (cmd === 'bb_pin') msg.reply(chance.bb_pin())
	if (cmd === 'wp7_anid') msg.reply(chance.wp7_anid())
	if (cmd === 'wp8_anid2') msg.reply(chance.wp8_anid2())
	if (cmd === 'wp8_anid2') msg.reply(chance.wp8_anid2())
	//Web
	if (cmd === 'avatar') msg.reply(chance.avatar())
	if (cmd === 'color') msg.reply(chance.color())
	if (cmd === 'company') msg.reply(chance.company())
	if (cmd === 'domain') msg.reply(chance.domain())
	if (cmd === 'email') msg.reply(chance.email())
	if (cmd === 'fbid') msg.reply(chance.fbid())
	if (cmd === 'google_analytics') msg.reply(chance.google_analytics())
	if (cmd === 'hashtag') msg.reply(chance.hashtag())
	if (cmd === 'ip') msg.reply(chance.ip())
	if (cmd === 'ipv6') msg.reply(chance.ipv6())
	if (cmd === 'klout') msg.reply(chance.klout())
	if (cmd === 'profession') msg.reply(chance.profession())
	if (cmd === 'tld') msg.reply(chance.tld())
	if (cmd === 'twitter') msg.reply(chance.twitter())
	if (cmd === 'url') msg.reply(chance.url())
	//Location
	if (cmd === 'address') msg.reply(chance.address())
	if (cmd === 'altitude') msg.reply(chance.altitude())
	if (cmd === 'areacode') msg.reply(chance.areacode())
	if (cmd === 'city') msg.reply(chance.city())
	if (cmd === 'coordinates') msg.reply(chance.coordinates())
	if (cmd === 'country') msg.reply(chance.country())
	if (cmd === 'depth') msg.reply(chance.depth())
	if (cmd === 'geohash') msg.reply(chance.geohash())
	if (cmd === 'latitude') msg.reply(chance.latitude())
	if (cmd === 'locale') msg.reply(chance.locale())
	if (cmd === 'longitude') msg.reply(chance.longitude())
	if (cmd === 'phone') msg.reply(chance.phone())
	if (cmd === 'postal') msg.reply(chance.postal())
	if (cmd === 'postcode') msg.reply(chance.postcode())
	if (cmd === 'province') msg.reply(chance.province())
	if (cmd === 'state') msg.reply(chance.state())
	if (cmd === 'street') msg.reply(chance.street())
	if (cmd === 'zip') msg.reply(chance.zip())
	//Time
	if (cmd === 'ampm') msg.reply(chance.ampm())
	if (cmd === 'date') msg.reply(chance.date())
	if (cmd === 'hammertime') msg.reply(chance.hammertime())
	if (cmd === 'hour') msg.reply(chance.hour())
	if (cmd === 'millisecond') msg.reply(chance.millisecond())
	if (cmd === 'minute') msg.reply(chance.minute())
	if (cmd === 'month') msg.reply(chance.month())
	if (cmd === 'second') msg.reply(chance.second())
	if (cmd === 'timestamp') msg.reply(chance.timestamp())
	if (cmd === 'timezone') msg.reply(chance.timezone())
	if (cmd === 'weekday') msg.reply(chance.weekday())
	if (cmd === 'year') msg.reply(chance.year())
	//Finance
	if (cmd === 'cc') msg.reply(chance.cc())
	if (cmd === 'cc_type') msg.reply(chance.cc_type())
	if (cmd === 'currency') msg.reply(chance.currency())
	if (cmd === 'currency_pair') msg.reply(chance.currency_pair())
	if (cmd === 'dollar') msg.reply(chance.dollar())
	if (cmd === 'euro') msg.reply(chance.euro())
	if (cmd === 'exp') msg.reply(chance.exp())
	if (cmd === 'exp_month') msg.reply(chance.exp_month())
	if (cmd === 'exp_year') msg.reply(chance.exp_year())
	//Helpers
	if (cmd === 'capitalize') msg.reply(chance.capitalize(args[0]))
	if (cmd === 'pad') msg.reply(chance.pad(Number(args[0]), Number(args[1])))
	if (cmd === 'pickone') msg.reply(chance.pickone(args))
	if (cmd === 'pickset') msg.reply(chance.pickset(args, Number(args[args.length-1])))
	if (cmd === 'shuffle') msg.reply(chance.shuffle(array))
	//Miscellaneous
	if (cmd === 'coin') msg.reply(chance.coin())
	if (cmd === 'dice') msg.reply(chance.d10()) //*
	if (cmd === 'guid') msg.reply(chance.guid())
	if (cmd === 'hash') msg.reply(chance.hash())
	if (cmd === 'normal') msg.reply(chance.normal())
	if (cmd === 'radio') msg.reply(chance.radio())
	if (cmd === 'tv') msg.reply(chance.tv())
	if (cmd === 'ping') msg.reply(bot.ws.ping+'ms')
});
