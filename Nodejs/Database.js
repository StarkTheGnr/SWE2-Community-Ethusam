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

				//TODO check privacy

				resolve(result);
			});
		});
	}

	VotePost(PID, UID, value)
	{
		return new Promise((resolve, reject) =>
		{
			let query = `SELECT * FROM Post WHERE posterid=${PID};`;
			this.conn.query(query, (err, result) => {
				if(err)
					reject(err);

				//TODO check privacy

				query = `INSERT INTO votes values(${PID}, ${UID}, ${value});`;
				this.conn.query(query, (err2, result2) => {
					if(err2)
						reject(err2);

					resolve(result);
				});
			});
		});
	}

	CreateComment(PID, UID, body)
	{
		return new Promise((resolve, reject) =>
		{
			let query = `INSERT INTO Comments VALUES(${PID}, ${UID}, '${body}');`;
			
			this.conn.query(query, (err, result) => {
					if(err)
						reject(err);

					resolve(result.insertId);
				});
		});
	}

	Get20Comments(PID, UID, Index)
	{
		//TODO check privacy
		return new Promise((resolve, reject) =>
		{
			let query = `SELECT * FROM Comments WHERE postid = ${PID};`;
			
			this.conn.query(query, (err, result) => {
					if(err)
						reject(err);

					resolve(result);
				});
		});
	}

	AddFollower(followerid, followedid)
	{
		return new Promise((resolve, reject) =>
		{
			let query = `INSERT INTO Followers VALUES(${followerid}, ${followedid});`;
			
			this.conn.query(query, (err, result) => {
					if(err)
						reject(err);

					resolve(true);
				});
		});
	}

	RemoveFollower(followerid, followedid)
	{
		return new Promise((resolve, reject) =>
		{
			let query = `DELETE FROM Followers WHERE followerid = ${followerid} and followedid = ${followedid};`;
			
			this.conn.query(query, (err, result) => {
					if(err)
						reject(err);

					resolve(true);
				});
		});
	}

	GetFollowers(UID)
	{
		return new Promise((resolve, reject) =>
		{
			let query = `SELECT followerid FROM Followers WHERE followedid = ${UID};`;
			
			this.conn.query(query, (err, result) => {
					if(err)
						reject(err);

					resolve(result);
				});
		});
	}

	GetFollowed(UID)
	{
		return new Promise((resolve, reject) =>
		{
			let query = `SELECT followedid FROM Followers WHERE followerid = ${UID};`;
			
			this.conn.query(query, (err, result) => {
					if(err)
						reject(err);

					resolve(result);
				});
		});
	}
}