<template>
	<view class="content">
		<view class="content-topBar">
			<view class="content-topBar-left">
				<input class="content-topBar-left-input" placeholder="搜索用户/群" @input="search"
					selection-start="color:#aaa;font-size:400" type="search">
				<img class="content-topBar-left-search" src="../../static/search/search.png" alt="搜索">
			</view>
			<view class="content-topBar-right">
				<text class="content-topBar-right-text">取消</text>
			</view>
		</view>
		<view class="content-main">
			<view class="content-main-user">
				<view class="content-main-user-title">
					用户
				</view>
				<view class="content-main-user-list">
					<view class="content-main-user-list-item" v-for="(item,index) in userarr" :key="index">
						<view class="content-main-user-list-item-content">
							<img class="content-main-user-list-item-content-img"
								:src="`../../static/index/${item.imgurl}`">
							<view class="content-main-user-list-item-content-text">
								<text class="content-main-user-list-item-content-text-name" v-html="item.name"></text>
								<text class="content-main-user-list-item-content-text-email" v-html="item.email"></text>
							</view>

						</view>
						<view class="content-main-user-list-item-message" v-if="item.news">
							<text>发消息</text>
						</view>
						<view class="content-main-user-list-item-friend" v-else>
							<text>加好友</text>
						</view>
					</view>
				</view>
			</view>
			<view class="content-main-group">
				<view class="content-main-group-title">
					群组
				</view>
				<view class="content-main-group-list">
					<view class="content-main-group-list-item">
						<view class="content-main-group-list-item-content">
							<img class="content-main-group-list-item-content-img" src="../../static/index/one.png">
							<text class="content-main-group-list-item-content-name">开发实力</text>
						</view>
						<view class="content-main-group-list-item-message">
							<text>发消息</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import data from '../../commons/js/data.js'
	export default {
		data() {
			return {
				userarr: []
			}
		},
		methods: {
			//获取关键词
			search: function(e) {
				this.userarr = []
				var searchValue = e.detail.value
				if (searchValue.length > 0) {
					this.searchUser(searchValue)
				}
			},
			//匹配对应的好友
			searchUser: function(e) {
				let arr = data.friends()
				let exp = eval('/' + e + '/g')
				console.log(arr)
				for (let i = 0; i < arr.length; i++) {
					console.log(arr[i].name.search(e))
					if (arr[i].name.search(e) != -1 || arr[i].email.search(e) != -1) {
						this.isFriend(arr[i])
						arr[i].name = arr[i].name.replace(exp, "<span style='color:#4AAAFF;'>" + e + "</span>")
						arr[i].email = arr[i].email.replace(exp, "<span style='color:#4AAAFF;'>" + e + "</span>")
						this.userarr.push(arr[i])

					}
				}
			},
			isFriend: function(e) {
				let tip = 0;
				let arr = data.isfriends()
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].friend === e.id) {
						tip = 1
					}
				}
				e.tip = tip
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding-top: var(--status-bar-height);
		padding-bottom: 66rpx;

		&-topBar {
			position: fixed;
			top: 0;
			left: 0;
			display: flex;
			flex-direction: row;
			box-sizing: border-box;
			height: 88rpx;
			width: 100%;
			align-items: center;
			justify-content: space-between;
			background-color: $uni-bg-color;
			border-bottom: 2rpx solid $uni-border-color;
			padding-top: var(--status-bar-height);
			z-index: 100;

			&-left {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: 16px;
				position: relative;
				width: 90%;

				&-input {
					position: absolute;
					width: 100%;
					height: 30px;
					background: #F3F4F6;
					border-radius: 5px;
					padding-left: 10px;
				}

				&-search {
					margin-left: 92%;
					position: absolute;
					width: 20px;
					height: 20px;
				}
			}

			&-right {
				width: 10%;
				padding: 12px 16px;
				display: flex;
				justify-content: center;
				align-items: center;

				&-text {
					width: 28px;
					height: 20px;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #272832;
					letter-spacing: -0.48px;
					font-weight: 400;
				}
			}
		}

		&-main {
			display: flex;
			flex-direction: column;
			margin-top: 80px;
			justify-content: center;
			width: 100%;

			&-user,
			&-group {
				display: flex;
				flex-direction: column;
				width: 100%;

				&-title {
					width: 43px;
					height: 30px;
					font-family: PingFangSC-Semibold;
					font-size: 22px;
					color: #272832;
					letter-spacing: -0.75px;
					font-weight: 600;
					margin-left: 16px;
				}

				&-list {
					margin-top: 10px;
					display: flex;
					flex-direction: column;
					width: 100%;

					:last-child {
						margin-bottom: 0px;
					}

					&-item {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: space-between;
						padding: 0px 16px;
						margin-bottom: 20px;


						&-content {
							display: flex;
							flex-direction: row;
							align-items: center;

							&-img {
								width: 40px;
								height: 40px;
								border-radius: 10px;
							}


							&-text {
								display: flex;
								flex-direction: column;

								&-name {
									margin-left: 16px;
									font-family: PingFangSC-Regular;
									font-size: 15px;
									color: #272832;
									letter-spacing: -0.62px;
									font-weight: 400;
								}

								&-email {
									margin-left: 16px;
									font-family: PingFangSC-Regular;
									font-size: 10px;
									color: #272832;
									letter-spacing: -0.62px;
									font-weight: 500;
								}
							}
						}

						&-message {
							display: flex;
							align-items: center;
							justify-content: center;
							padding: 4px 13px;
							width: 60px;
							height: 24px;
							background: #FFE431;
							font-family: PingFangSC-Regular;
							font-size: 12px;
							color: #272832;
							letter-spacing: -0.41px;
							font-weight: 400;
							border-radius: 15px;
						}

						&-friend {
							display: flex;
							align-items: center;
							justify-content: center;
							padding: 4px 13px;
							width: 60px;
							height: 24px;
							border-radius: 15px;
							font-family: PingFangSC-Regular;
							font-size: 12px;
							color: #4AAAFF;
							background: rgba(74, 170, 255, 0.10);
							border-radius: 15px;
							font-weight: 400;
						}

					}

				}
			}

			&-group {
				margin-top: 30px;
			}
		}
	}
</style>
