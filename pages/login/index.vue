<template>
	<view class="content">
		<view class="content-topBar">
			<view class="content-topBar-left">
				<image class="content-topBar-left-img" src="../../static/login/close.png" mode="" />
			</view>
			<view class="content-topBar-right" @click="register">
				注册
			</view>
		</view>
		<form class="content-main" @submit="login">
			<view class="content-main-logo">
				<image class="content-main-logo-img" src="../../static/login/logo1.png" mode=""></image>
			</view>
			<view class="content-main-login">
				<view class="content-main-login-text">
					登录
				</view>
				<view class="content-main-login-p">
					您好，欢迎来到 lights！
				</view>
				<view class="content-main-login-account">
					<input class="content-main-login-account-input" placeholder="请输入账号" type="text" name="name">
				</view>
				<view class="content-main-login-password">
					<input class="content-main-login-password-input" placeholder="请输入密码" type="text" name="password">
				</view>
			</view>
			<view class="content-main-tips">
				<text class="content-main-tips-text">输入用户名或密码错误!</text>
			</view>
			<view class="content-main-button">
				<button class="content-main-button-text" form-type="submit">登录</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			login: function(e) {
				console.log('触发了提交事件', e)
				let params = JSON.stringify(e.detail.value)
				console.log(e.detail.value.name)
				uni.request({
					url: 'http://192.168.31.125:3000/mail',
					method: "POST",
					data: {
						email: e.detail.value.name
					},
					success: (data) => {
						console.log(data)
					}
				})
			},
			register: function() {
				uni.navigateTo({
					url: '../register/index'
				})
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
				align-items: center;
				margin-left: 32px;

				&-img {
					width: 33.74rpx;
					height: 33.74rpx;
				}
			}

			&-right {
				margin-right: 32px;
				width: 36px;
				height: 25px;
				font-family: PingFangSC-Medium;
				font-size: 18px;
				color: #333333;
				letter-spacing: 0;
				font-weight: 600;
			}
		}

		&-main {
			display: flex;
			flex-direction: column;
			margin-top: 256rpx;
			justify-content: center;
			width: auto;

			&-logo {
				display: flex;
				align-items: center;
				justify-content: center;

				&-img {
					width: 96px;
					height: 45.82px;
				}
			}

			&-login {
				display: flex;
				flex-direction: column;
				width: auto;

				&-text {
					margin-top: 54.36rpx;
					font-family: PingFangSC-Medium;
					font-size: 28px;
					color: #272832;
					letter-spacing: 0;
					font-weight: 500;
				}

				&-p {
					margin-top: 14rpx;
					font-family: PingFangSC-Regular;
					font-size: 20px;
					color: rgba(39, 40, 50, 0.50);
					letter-spacing: 0;
					font-weight: 400;
				}

				&-account,
				&-password {
					margin-top: 68rpx;
					display: flex;
					align-items: center;

					&-input {
						padding: 40rpx 0rpx;
						min-width: 318px;
						border-bottom: 1px solid rgba(39, 40, 50, 0.50);
					}
				}

			}

			&-tips {
				display: flex;
				justify-content: left;

				&-text {
					color: red;
					margin-top: 14rpx;
				}
			}

			&-button {
				margin-top: 120rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				&-text {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 260px;
					height: 48px;
					background: #FFE431;
					box-shadow: 0px 25px 16px -18px rgba(255, 228, 49, 0.4);
					border-radius: 24px;
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #272832;
					letter-spacing: 0;
					font-weight: 600;
				}

				uni-button:after {
					border: none;
				}
			}
		}
	}
</style>
