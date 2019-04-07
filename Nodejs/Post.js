var db = require("./Database.js");

exports.Post = 
class Post
{
	constructor(PID, UID, body, privacy, topics)
	{
		this.PID = PID;
		this.UID = UID;
		this.body = body;
		this.privacy = privacy;
		this.topics = topics;
	}

	reply(UID, body)
	{
		var CID = db.ReplyToPost(this.PID, UID, body);

		return CID;
	}

	rate(UID, vote)
	{
		var error = db.RatePost(this.PID, UID, vote);
	}
};