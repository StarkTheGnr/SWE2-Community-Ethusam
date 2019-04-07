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
		//TODO check privacy
		let query = `SELECT * FROM Post WHERE posterid=${PID};`;
		//TODO Use query

		//return post
	}

	VotePost(PID, UID, value)
	{
		//TODO check privacy
		let query = `SELECT * FROM Post WHERE posterid=${PID};`;
		//TODO Use query

		//return post
	}

	CreateComment(PID, UID, body)
	{
		let query = `INSERT INTO Comments VALUES(${PID}, ${UID}, '${body}');`;
		//TODO Use query
	}

	Get20Comments(PID, UID, Index)
	{
		//TODO check privacy
		let query = `SELECT * FROM Comments WHERE postid = ${PID};`;
		//TODO Use query
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

	GetFollowers(UID)
	{
		let query = `SELECT followerid FROM Followers WHERE followedid = ${UID};`;
		//TODO Use query
	}

	GetFollowed(UID)
	{
		let query = `SELECT followedid FROM Followers WHERE followerid = ${UID};`;
		//TODO Use query
	}
}