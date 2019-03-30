const mysql = require('mysql2');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '1234qwer',
	database: 'BBS'
});

const promisePool = pool.promise();

const object = {
	async userLogin (email, password) {
		const param = [email, password];
	    const sql = 'select * from user where email=? and password=?';
	    const [rows, fields] = await promisePool.query(sql, param);
    	return rows;
	},

	async getUserByUsername (username) {
		const sql = 'select * from user where username=?';
		const [rows, fields] = await promisePool.query(sql,username);
		return rows;
	},

	async getUserByEmail (email) {
		const sql = "select * from user where email=?";
		const [rows, fields] = await promisePool.query(sql, email);
		return rows;
	},

	async addUserData (data) {
		const sql = "insert into user(username, email, password) values(?, ?, ?)";
		const [rows, fields] = await promisePool.query(sql, data);
	},

	async getUsernameByEmail (email) {
		const sql = "select * from user where email=?";
		const [rows, fields] = await promisePool.query(sql, email);
		return rows;
	},

	async getUserById (id) {
		const sql = 'select * from user where id=?';
		const [rows, fields] = await promisePool.query(sql, id);
		return rows;
	},

	async getUserByUsername (data) {
		const sql = 'select * from user where username=?';
		const [rows, fields] = await promisePool.query(sql, data);
		return rows;
	},

	async addTopicToDatabase (data) {
		const sql = "insert into topic(title, topic_type, article, topic_image_path, post_man) values(?, ?, ?, ?, ?)";
		const [rows, fields] = await promisePool.query(sql, data);
    	console.log('数据存入数据库成功');
	},

	async listAllTopicFromBBS () {
		const sql = "select * from topic order by id desc";
		const [rows, fields] = await promisePool.query(sql);
		return rows;
	},

	async getTopicFromBBSById (id) {
		const sql = "select * from topic where id=?";
		const [rows, fields] = await promisePool.query(sql, id);
		return rows;
	},

	async addChildBBS (child_bbs) {
		const sql = "insert into child_BBS(child_bbs) values(?)";
		const [rows, fields] = await promisePool.query(sql, child_bbs);
		return rows;
	},

	async listChildBBS () {
		const sql = "select child_bbs from child_BBS";
		const [rows, fields] = await promisePool.query(sql);
		return rows;
	},

	async listChildBBSAll () {
		const sql = "select * from child_BBS";
		const [rows, fields] = await promisePool.query(sql);
		return rows;
	},

	async listTopicByTopicType (topicType) {
		const sql = "select * from topic where topic_type=? ";
		const [rows, fields] = await promisePool.query(sql, topicType);
		return rows;
	},

	async listTopicByPostMan (username) {
		const sql = "select * from topic where post_man=?";
		const [rows, fields] = await promisePool.query(sql, username);
		return rows;
	},

	async updateTopicImagePathByPostMan (data) {
		const sql = "update topic set topic_image_path=? where post_man=?";
		const [rows, fields] = await promisePool.query(sql, data);
		console.log('更新成功');
	},

	async deleteChildBoardById (id) {
		const sql = "delete from child_BBS where id=?";
		const [rows, fields] = await promisePool.query(sql, id);
	},

	async deleteTopicById (id) {
		const sql = "delete from topic where id=?";
		const [rows, fields] = await promisePool.query(sql, id);
	},

	async setStarTopic (id) {
		const sql = "update topic set star=1 where id=?";
		const [rows, fields] = await promisePool.query(sql, id);
	},

	async listStarTopic () {
		const sql = "select * from topic where star=1";
		const [rows, fields] = await promisePool.query(sql);
		return rows;
	},

	async reduceStarTopic (id) {
		const sql = "update topic set star=0 where id=?";
		const [rows, fields] = await promisePool.query(sql, id);
	},

	async listTopTopic () {
		const sql = "select * from topic where top=1";
		const [rows, fields] = await promisePool.query(sql);
		return rows;
	},

	async setTopTopic (id) {
		const sql = "update topic set top=1 where id=?";
		const [rows, fields] = await promisePool.query(sql, id);
	},

	async reduceTopTopic (id) {
		const sql = "update topic set top=0 where id=?";
		const [rows, fields] = await promisePool.query(sql, id);
	},

	async setProfile (data) {
		const sql = "update user set nickname=?,birthday=?,gender=?,bio=? where id=?";
		const [rows, fields] = await promisePool.query(sql, data);
	},

	async setConnection (data) {
		const sql = "update user set telephone=?,email=?,qq=?,wechat=? where id=?";
		const [rows, fields] = await promisePool.query(sql, data);
	},

	async resetPassword (data) {
		const sql = "update user set password=? where id=?";
		const [rows, fields] = await promisePool.query(sql, data)
	},

	async resetPicture (data) {
		const sql = "update user set picpath=? where id=?";
		const [rows, fields] = await promisePool.query(sql, data);
	}
};

module.exports = object;



