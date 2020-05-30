$.ajax({
	type: "get",
	url: "//im.zhihuishu.com/live/liveQianDao",
	data: { ev: a(liveCourseId + ";" + userId), recruitId: recruitId },
	dataType: "jsonp",
	jsonp: "callback",
	success: function (json) {
		if (json == "yes") {
			// $(".finish_tishi").removeClass("disNo");
			$(".qiandao-finish").removeClass("disNo");
			console.log("signIn result: " + json);
			// loginUserInfo["signComplete"] = true;
			signFlag = false;
			addSignLog(1);
			} else {
				console.log("sign not complete. ");
				addSignLog(2);
			}
		},
	error: function () {
		console.log("sign error. ");
		addSignLog(2);
	}
});
