<template>
	<view class="content">
		<view class="content-topBar">
			<view class="content-topBar-left">
				<image class="content-topBar-left-img" @click="goLogin" src="../../static/login/back.png" mode="" />
			</view>
			<view class="content-topBar-right">
				<image class="content-topBar-left-img" src="../../static/login/close.png" mode="" />
			</view>
		</view>
		<form class="content-main" @submit="register">
			<view class="content-main-logo">
				<image class="content-main-logo-img" src="../../static/login/logo1.png" mode=""></image>
			</view>
			<view class="content-main-login">
				<view class="content-main-login-text">
					注册
				</view>
				<view class="content-main-login-account">
					<input class="content-main-login-account-input" @input="handleNameChange" name="user"
						placeholder="请取个名字" type="text">
					<image class="content-main-login-account-img" v-if="userShow==='show'"
						src="../../static/login/right1.png" mode="" />
					<text class="content-main-login-account-text" v-else-if="userShow==='occupy'">名字占用</text>
				</view>
				<view class="content-main-login-email">
					<input class="content-main-login-email-input" @input="handleEmailChange" placeholder="请输入邮箱"
						type="text" name="email" mode="widthFix">
					<image class="content-main-login-email-img" v-if="emailShow==='show'"
						src="../../static/login/right1.png" mode="widthFix" />
					<text class="content-main-login-email-text" v-else-if="emailShow==='invalid'">邮箱无效</text>
					<text class="content-main-login-email-text" v-else-if="emailShow==='occupy'">邮箱占用</text>
				</view>
				<view class="content-main-login-password">
					<input class="content-main-login-password-input" @input="handlePwdChange" :type="passwordType"
						name="pwd" mode="widthFix" placeholder="这里请输入密码">
					<image class="content-main-login-password-img" @click="handleEyeChange" v-if="passwordShow"
						src="../../static/login/look.png" mode="">
					</image>
					<image class="content-main-login-password-img" @click="handleEyeChange" v-else
						src="../../static/login/biyan.png" mode="">
					</image>
				</view>
			</view>
			<view class="content-main-button">
				<button :class="registerCorrect?'content-main-button-textColor':'content-main-button-text'"
					form-type="submit">注册</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userShow: '',
				userCorrect: false,
				passwordShow: '',
				passwordCorrect: false,
				emailShow: '',
				emailCorrect: false,
				passwordType: 'text',
				registerCorrect: false
			}
		},
		methods: {
			handleNameChange: function(e) {
				var user = e.detail.value
				if (user !== '' && user !== 'aaaaaa') {
					this.userShow = 'show'
					this.userCorrect = true
				} else if (user === 'aaaaaa') {
					this.userShow = 'occupy'
					this.userCorrect = false
				}
				this.registerChange()
			},
			handleEmailChange: function(e) {
				var email = e.detail.value
				var emailLength = email.length > 0
				var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
				var isok = reg.test(e.detail.value);
				if (emailLength && email !== '' && isok) {
					this.emailShow = 'show'
					this.emailCorrect = true
				} else if (!emailLength || email !== 'aaaaa') {
					this.emailShow = 'invalid'
					this.emailCorrect = false
				} else if (email === 'aaaaa') {
					this.emailShow = 'occupy'
					this.emailCorrect = false
				}
				this.registerChange()
			},
			handlePwdChange: function(e) {
				var pwd = e.detail.value
				if (pwd !== '' && pwd.length > 0) {
					this.passwordCorrect = true
				} else {
					this.passwordCorrect = false
				}
				this.registerChange()
			},
			handleEyeChange: function() {
				this.passwordShow = !this.passwordShow
				if (this.passwordShow) {
					this.passwordType = 'text'
				} else {
					this.passwordType = 'password'
				}
			},
			goLogin: function() {
				uni.navigateTo({
					url: '../login/index'
				})
			},
			registerChange: function() {
				// debugger
				if (this.userCorrect && this.passwordCorrect && this.emailCorrect) {
					this.registerCorrect = true
				} else {
					this.registerCorrect = false
				}
			},
			register: function(e) {
				console.log('触发了提交事件', e)
				let params = JSON.stringify(e.detail.value)
				uni.request({
					url: 'http://192.168.31.125:3000/register/add',
					method: "POST",
					data: {
						user: e.detail.value.user,
						email: e.detail.value.email,
						pwd:e.detail.value.pwd
					},
					success: (data) => {
						console.log(data)
					}
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
				margin-left: 24px;

				&-img {
					width: 24px;
					height: 24px;
				}
			}

			&-right {
				margin-right: 24rpx;
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

				&-account,
				&-email,
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

				&-account {
					position: relative;

					&-text {
						position: absolute;
						margin-left: 79%;
						color: red;
					}

					&-img {
						position: absolute;
						margin-left: 93%;
						width: 21px;
						height: 16px;
					}
				}

				&-email {
					position: relative;

					&-text {
						position: absolute;
						margin-left: 79%;
						color: red;
					}

					&-img {
						position: absolute;
						margin-left: 93%;
						width: 21px;
						height: 16px;
					}
				}

				&-password {
					position: relative;

					&-img {
						position: absolute;
						margin-left: 93%;
						width: 21px;
						height: 15px;
					}
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
					background: rgba(39, 40, 50, 0.20);
					box-shadow: 0px 25px 16px -18px rgba(39, 40, 50, 0.20);
					border-radius: 24px;
					font-family: PingFangSC-Medium;
					font-size: 16px;
					color: #ffffff;
					letter-spacing: 0;
					font-weight: 600;
				}

				&-textColor {
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
