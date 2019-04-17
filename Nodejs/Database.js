var mysqli = require('mysqli');

exports.Database =
class Database
{
	constructor()
	{
		//TODO connect to database
		this.conn = new mysqli({
			host: "localhost",
			username: "root",
			password: "root",
			database: "communitydb"
		});

		this.conn.connect((err) => {
			if(err)
				throw err;
		});
	}

	CreatePost(UID, body, privacy, topics)
	{
		return new Promise((resolve, reject) =>
		{
			let query = `INSERT INTO Post VALUES(0, ${UID}, '${body}', '${privacy}');`;
			this.conn.query(query, (err, result) => {
				if(err)
					reject(err);

				let PID = result.insertId;
				for(let i = 0; i < topics.length; i++)
				{
					let joinQ = `INSERT INTO PostTopic VALUES(${PID}, '${topics[i]}');`;
					
					this.conn.query(joinQ, (err2, result2) => {
						if(err2)
							reject(err2);

						resolve(${PID});
					});
				}
			});
		});
		
	}

	GetPost(PID)
	{
		return new Promise((resolve, reject) =>
		{
			let query = `SELECT * FROM Post WHERE postid=${PID};`;
			this.conn.query(query, (err, result) => {
				if(err)
					reject(err);

				//TODO Check Privacy

				resolve(result);
			});
		});
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