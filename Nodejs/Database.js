exports.Database =
class Database
{
	constructor()
	{
		//TODO connect to database
	}

	CreatePost(PID, UID, body, privacy, topics)
	{
		let query = `INSERT INTO Post VALUES(${PID}, ${UID}, '${body}', '${privacy}');`;
		//TODO Use query

		for(let i = 0; i < topics.length; i++)
		{
			let joinQ = `INSERT INTO PostTopic VALUES(${PID}, '${topics[i]}');`;
			//TODO Use query
		}

		return true;
	}

	GetPost(PID)
	{
		let query = `SELECT * FROM Post WHERE posterid=${PID};`;
		//TODO Use query

		//return post
	}

	AddFollower(followerid, followedid)
	{
		let query = `INSERT INTO Followers VALUES(${followerid}, ${followedid});`;
		//TODO Use query
	}

	RemoveFollower(followerid, followedid)
	{
		let query = `DELETE FROM Followers WHERE followerid = ${followerid} and followedid = ${followedid};`;
		//TODO Use query
	}
}