export function filterdate(val) {
	let old = new Date(val)
	let now = new Date()
	//获取具体的old事件
	let d = old.getTime()
	let h = old.getHours()
	let m = old.getMinutes()
	let Y = old.getFullYear()
	let M = old.getMonth()+1
	let D = old.getDate()-2
	//获取具体的now事件
	let nd = old.getTime()
	let nh = old.getHours()
	let nm = old.getMinutes()
	let nY = old.getFullYear()
	let nM = old.getMonth()
	let nD = old.getDate()
	//当天时间
	if (D === nD && Y === nY && M === nM) {
		if (h < 10) {
			h = '0' + h
		}
		if (m < 10) {
			m = '0' + m
		}
		return h + ':' + m
		//前天时间
	} else if (D + 1 === nD && Y === nY && M === nM) {
		if (h < 10) {
			h = '0' + h
		}
		if (m < 10) {
			m = '0' + m
		}
		return '前天' + h + ':' + m
	} else {
		//大于两天
		return Y + '/' + M + '/' + D
	}
}
