const Twitch = require("tmi.js");
const client = new Twitch.Client({
	options: { debug: true },
	connections: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: "Povery",
		password: process.env.PASSWORD
	},
	channels: [ "BuzzReview" ]
});

client.connect();

client.on("message", function(channel, tags, message, self) {
	if (self) return undefined;

	if (message.toLowerCase() === "!hello") {
		client.say(channel, "Welcome to the Twitch chat.");
	};
});
