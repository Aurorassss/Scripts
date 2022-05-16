lx = init("getLeave.js");

if (!lx.isResponse()) {
    lx.log("$response不存在，启动方式错误，应以rewrite和mitm方式启动");
    lx.done()
};

var user = {
    "state": 2,
    "out": 1,
    "studentName": "",
    "studentId": "",
    "type": "实习",
    "route": "广东省广州市番禺区创智大厦",
    "location": "",
    "tel": "",
    "reason": "外出实习，图1为14天打卡，图2为健康码，图3为行程卡",
    "userHead": "",
    "start": "2022-5-16 8:48",
    "end": "2022-5-22 23:48",
    "date": "",
    "school": "",
    "college": "",
    "grade": "",
    "number": "",
    "phone": "",
    "scanHistory": "",
    "imgs": "",
    
    "teacher": "",
    "approve": [
        {
            "time": "5.15 19:47",
            "state": 2,
            "userType": 4,
            "name": "",
            "reason": "",
            "position": "",
            "head": ""
        }
    ],
    "approve2": [
        {
            "time": "5.15 22:35",
            "state": 2,
            "userType": 3,
            "name": "肖锋",
            "reason": "",
            "position": "信息科学与技术学院",
            "head": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoQnsZykiaOJtY78ggUxkT2KiaicG35pOTYe5mN2nfxoycW5dkI1a4SIjPMsbibLP3ecAtYvtxickqibUyw/132"//老师头像，默认随机，留空不变
        }
    ]
};

Date.prototype.format=function(fmt){var o={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S":this.getMilliseconds()};if(/(y+)/.test(fmt)){fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))};for(var k in o){if(new RegExp("("+k+")").test(fmt)){fmt=fmt.replace(RegExp.$1,(RegExp.$1.length==1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)))}};return fmt};

function getFormatTime(time, flag) {
    if (flag === 1) {
        return time.format("yyyy-MM-dd hh:mm")
    } else {
        return time.format("MM-dd hh:mm")
    }
};

var time = new Date();
time.setMinutes(0, 0, 0);
if (user["start"] == "" && user["end"] == "") {
    time.setHours(11);
    user["start"] = getFormatTime(time, 1);
    time.setHours(11);
    time.setDate(time.getDate() + 1)
    user["end"] = getFormatTime(time, 1);
};
var time = new Date();
time.setMinutes(0, 0, 0);
if (user["approve"][0]["time"] == "") {
    // time.setHours(Math.floor(Math.random() * (22 - 9 + 1) + 9), Math.floor(Math.random() * 60));
    // lx.log(time.getHours());
    // lx.log((time.getHours() / 24));
    time.setHours(Math.floor((time.getHours() / 24) * 14) +8, Math.floor((time.getHours() / 24) * 60));
    time.setDate(time.getDate() - 2);
    user["approve"][0]["time"] = getFormatTime(time, 2);
};
if (user["approve2"][0]["time"] == "") {
    time.setHours(time.getHours() + 2)
    time.setMinutes(time.getMinutes() + 23)
    user["approve2"][0]["time"] = getFormatTime(time, 2);
};

bd = lx.toObj($response.body);
data = bd["data"];

for (x in user) {//读取用户自定义设置
    if (x != "approve") {
        if (user[x]) {
            data[x] = user[x];
        }
    }
};
for (y in user["approve"][0]) {//读取用户自定义设置
    if (user["approve"][0][y]) {
        data["approve"][0][y] = user["approve"][0][y];
    }
};

if(data["approve"][1]) {
    for (y in user["approve2"][0])
    {//读取用户自定义设置
        if (user["approve2"][0][y]) {
            data["approve"][1][y] = user["approve2"][0][y];
        }
    }
}
else {
    data["approve"].push(user["approve2"][0])
}



function init(name){const startTime=new Date().getTime();const isRequest=function(){return"undefined"!==typeof $request};const isResponse=function(){return"undefined"!==typeof $response};const isPost=function(){return"POST"===$request.method};const isGet=function(){return"GET"===$request.method};const isNode=function(){return'undefined'!==typeof module&&!!module.exports};const isQuanX=function(){return'undefined'!==typeof $task};const isSurge=function(){return'undefined'!==typeof $httpClient&&'undefined'===typeof $loon};const isLoon=function(){return'undefined'!==typeof $loon};const toObj=function(str,defaultValue=null){try{return JSON.parse(str)}catch{return defaultValue}};const toStr=function(obj,defaultValue=null){try{return JSON.stringify(obj)}catch{return defaultValue}};const msg=function(title,subtitle='',desc=''){if(isQuanX()){$notify(title,subtitle,desc)}else if(isSurge()||isLoon()){$notification.post(title,subtitle,desc)}};const log=function(...logs){if(logs.length>0){logs=[...logs]};console.log(logs.join("\n"))};const get=async function(opts,callback){if(isSurge()||isLoon()){await $httpClient.get(opts,function(err,res,body){if(!err&&res){res.body=body;res.statusCode=res.status};callback(err,res,body)})}else if(isQuanX()){opts.method="GET";await $task.fetch(opts).then(function(res){const{statusCode:status,statusCode,headers,body}=res;callback(null,{status,statusCode,headers,body},body)},function(err){callback(err)})}};const post=async function(opts,callback=function(){}){if(isSurge()||isLoon()){await $httpClient.post(opts,function(err,res,body){if(!err&&res){res.body=body;res.statusCode=res.status};callback(err,res,body)})}else if(isQuanX()){opts.method="POST";await $task.fetch(opts).then(function(res){const{statusCode:status,statusCode,headers,body}=res;callback(null,{status,statusCode,headers,body},body)},function(err){callback(err)})}};const r=function(key){if(isQuanX()){return $prefs.valueForKey(key)}else if(isSurge()||isLoon()){return $persistentStore.read(key)}};const w=function(val,key){if(isQuanX()){return $prefs.setValueForKey(val,key)}else if(isSurge()||isLoon()){return $persistentStore.write(val,key)}};const wait=function(time){return new Promise(function(resolve){setTimeout(resolve,time)})};const done=function(val={}){const endTime=new Date().getTime();const costTime=(endTime-startTime)/1000;log(name+" 结束运行，耗时："+costTime);if(isQuanX()||isSurge()||isLoon()){$done(val)}};return{msg,log,get,post,done,r,w,wait,toObj,toStr,isLoon,isNode,isQuanX,isSurge,isRequest,isResponse,isPost,isGet};};

lx.done({ body: lx.toStr(bd) });
