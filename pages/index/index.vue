<template>
	<view class="content">
		<view class="content-top-bar">
			<view class="content-top-bar-left">
				<image src="../../static/index/q.png" mode="widthFix"></image>
			</view>
			<view class="content-top-bar-center">
				<image src="../../static/index/火@2x.png" mode="widthFix"></image>
			</view>
			<view class="content-top-bar-right">
				<view class="content-top-bar-right-search">
					<image src="../../static/index/search.png" mode="widthFix"></image>
				</view>
				<view class="content-top-bar-right-add">
					<image src="../../static/index/add group@2x.png" mode="widthFix"></image>
				</view>
			</view>
		</view>

		<view class="content-main">
			<view class="content-main-friends">
				<view class="content-main-friends-list">
					<view class="content-main-friends-list-l content-main-friends-list-bg">
						<text class="content-main-friends-list-l-text">1</text>
						<image src="../../static/index/add.png" class="content-main-friends-list-l-img" mode="widthFix">
						</image>
					</view>
					<view class="content-main-friends-list-r">
						<view class="content-main-friends-list-r-top">
							<view class="content-main-friends-list-r-top-name">
								好友申请
							</view>
							<view class="content-main-friends-list-r-top-time">
								12:30
							</view>
						</view>
						<view class="content-main-friends-list-r-content">
							茫茫人海，相聚便是缘
						</view>
					</view>
				</view>
			</view>
			<view class="content-main-friends">
				<view class="content-main-friends-list" v-for="(item, index) in friends" :key="index">
					<view class="content-main-friends-list-l">
						<text class="content-main-friends-list-l-text">{{item.tip}}</text>
						<image :src="`../../static/index/${item.imgurl}`" class="content-main-friends-list-l-img"
							mode="widthFix">
						</image>
					</view>
					<view class="content-main-friends-list-r">
						<view class="content-main-friends-list-r-top">
							<view class="content-main-friends-list-r-top-name">
								{{item.name}}
							</view>
							<view class="content-main-friends-list-r-top-time">
								{{changeTime(item.time)}}
							</view>
						</view>
						<view class="content-main-friends-list-r-content">
							{{item.news}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import data from "@/commons/js/data.js"
	import {
		filterdate
	} from "@/commons/js/myfun.js"
	export default {
		data() {
			return {
				friends: []
			}
		},
		onLoad() {
			this.getFriends()
		},
		methods: {
			changeTime: function(date) {
				return filterdate(date)
			},
			getFriends: function() {
				this.friends = data.friends()
				console.log(this.friends)
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

		&-top-bar {
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
				margin-left: 32rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				image {
					width: 68rpx;
					height: 68rpx;
					border-radius: 16rpx;
				}
			}

			&-center {
				display: flex;
				align-items: center;
				justify-content: center;
				padding-left: 40rpx;

				image {
					width: 88rpx;
					height: 42rpx;
				}
			}

			&-right {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				&-search {
					display: flex;
					justify-content: center;
					align-items: center;
					margin-right: 40rpx;

					image {
						width: 52rpx;
						height: 52rpx;
					}

				}

				&-add {
					display: flex;
					margin-right: 32rpx;
					justify-content: center;
					align-items: center;

					image {
						width: 48rpx;
						height: 48rpx;
					}
				}
			}
		}

		&-main {
			margin-top: 100rpx;
			width: 100%;

			&-friends {
				display: flex;
				flex-direction: column;

				&-list {
					display: flex;
					flex-direction: row;
					align-items: center;
					padding: 10rpx 32rpx;

					&-bg {
						width: 48px;
						height: 48px;
						background: #FFE431;
						border-radius: 12px;

						image {
							width: 27.7px;
							height: 28.2px;
						}
					}

					&-l {
						position: relative;
						display: flex;
						align-items: center;
						justify-content: center;

						&-text {
							position: absolute;
							margin-left: 60rpx;
							margin-bottom: 80rpx;
							display: flex;
							justify-content: center;
							align-items: center;
							z-index: 10;
							font-family: PingFangSC-Regular;
							font-size: 24rpx;
							color: #FFFFFF;
							letter-spacing: -0.82rpx;
							font-weight: 400;
							min-width: 36rpx;
							height: 36rpx;
							background: #FF5D5B;
							border-radius: 18rpx;
						}

						&-img {
							width: 48px;
							height: 48px;
							border-radius: 12px;
						}
					}

					&-r {
						display: flex;
						flex-direction: column;
						margin-left: 32rpx;
						flex-grow: 1;

						&-top {
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;

							&-time {
								margin-right: 5rpx;
								font-family: PingFangSC-Regular;
								font-size: 24rpx;
								color: rgba(39, 40, 50, 0.40);
								letter-spacing: -0.82px;
								font-weight: 400;
							}

							&-name {
								width: 140rpx;
								height: 50rpx;
								line-height: 50rpx;
								font-family: PingFangSC-Regular;
								font-size: 36rpx;
								color: #272832;
								letter-spacing: -0.62px;
								font-weight: 400;
							}
						}

						&-content {
							max-width: 542rpx;
							height: 40rpx;
							font-family: PingFangSC-Regular;
							font-size: 28rpx;
							color: rgba(39, 40, 50, 0.60);
							letter-spacing: -0.96rpx;
							font-weight: 400;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
		}


	}
</style>
