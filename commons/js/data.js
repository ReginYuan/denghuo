export default {
	friends: function() {
		let friendarr = [{
				id: 1,
				imgurl: 'one.png',
				tip: 2,
				email: "2496943860@qq.com",
				name: '大海',
				time: new Date(),
				news: 'top 哈哈哈哈哈啊哈哈哈哈哈'
			},
			{
				id: 2,
				imgurl: 'two.png',
				tip: 2,
				email: "2496943999@qq.com",
				name: '大海',
				time: new Date(),
				news: 'top 哈哈哈哈哈啊哈哈哈哈哈'
			},
			{
				id: 3,
				imgurl: 'three.png',
				tip: 2,
				email: "1234563860@qq.com",
				name: '大海',
				time: new Date(),
				news: 'top 哈哈哈哈哈啊哈哈哈哈哈'
			},
			{
				id: 4,
				imgurl: 'four.png',
				tip: 2,
				email: "9999993860@qq.com",
				name: '山川',
				time: new Date().getTime(),
				news: 'top 哈哈哈哈哈啊哈哈哈哈哈'
			},
			{
				id: 5,
				imgurl: 'five.png',
				tip: 2,
				email: "29093860@qq.com",
				name: '河流',
				time: new Date(),
				news: 'top 哈哈哈哈哈啊哈哈哈哈哈'
			},
			{
				id: 6,
				imgurl: 'six.png',
				tip: 2,
				email: "596943860@qq.com",
				name: '小溪',
				time: new Date(),
				news: 'top 哈哈哈哈哈啊哈哈哈哈哈'
			}
		]
		return friendarr
	},
	isfriends: function() {
		let isfriendarr = [{
				userid: 1,
				friend: 2
			},
			{
				userid: 2,
				friend: 3
			},
			{
				userid: 3,
				friend: 4
			},
			{
				userid: 4,
				friend: 5
			},
			{
				userid: 5,
				friend: 6
			},
			{
				userid: 6,
				friend: 7
			},
		]
		return isfriendarr
	}
}
