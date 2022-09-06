lx = init("getLeave.js");

if (!lx.isResponse()) {
    lx.log("$response不存在，启动方式错误，应以rewrite和mitm方式启动");
    lx.done()
};


var data_new = {
  "data" : {
    "location" : "[\"南校区\"]",
    "studentName" : "陈柏霖",
    "college" : "信息科学与技术学院",
    "approve" : [
      {
        "reason" : "",
        "position" : "信息科学与技术学院",
        "time" : "09.03 18:44",
        "head" : "https://jwoss1.wozaixiaoyuan.com/basicinfo/20210820/12/348815664095440896.jpg",
        "userType" : 4,
        "name" : "张文萃",
        "state" : 2
      },
      {
        "reason" : "",
        "position" : "信息科学与技术学院",
        "time" : "09.03 23:58",
        "head" : "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoQnsZykiaOJtY78ggUxkT2KiaicG35pOTYe5mN2nfxoycW5dkI1a4SIjPMsbibLP3ecAtYvtxickqibUyw/132",
        "userType" : 3,
        "name" : "肖锋",
        "state" : 2
      }
    ],
    "teacher" : "张文萃",
    "tel" : "18128538117",
    "scanHistory" : [],
    "school" : "广东外语外贸大学",
    "userHead" : "https://jwoss1.wozaixiaoyuan.com/basicinfo/20210827/12/351495329503260672.jpg",
    "type" : "实习",
    "state" : 4,
    "imgs" : [
      "https://wzxy-img.oss-cn-beijing.aliyuncs.com/imgs/2022-06-12/广东外语外贸大学/456125619836358656.jpg/s",
      "https://wzxy-img.oss-cn-beijing.aliyuncs.com/imgs/2022-06-12/广东外语外贸大学/456125634331551744.jpg/s",
      "https://wzxy-img.oss-cn-beijing.aliyuncs.com/imgs/2022-06-12/广东外语外贸大学/456125671011061760.jpg/s",
      "https://wzxy-img.oss-cn-beijing.aliyuncs.com/imgs/2022-06-12/广东外语外贸大学/456125680389525504.jpg/s"
    ],
    "number" : "20181003147",
    "studentId" : "86558692270428160",
    "route" : "广东省广州市番禺区创智大厦",
    "phone" : "13533432898",
    "grade" : "计科1802",
    "out" : 1,
    "reason": "外出实习，图1图2为14天打卡，图3为健康码，图4为行程卡",
    "date" : "2022-09-03 18:37",
    "start": "2022-09-04 8:48",
    "end": "2022-09-10 23:48"
  },
  "code" : 0
}



// //自定义设置，根据需要自行更改，不填写则不会更改
// var user = {
//     //指定假期开始时间结束时间 格式 "2021-06-28 10:00"
//     //不指定则默认开始时间为当前 前1小时，结束时间当前 后2小时，不同时间打开会改变
//     "start": "2022-5-02 8:48",
//     "end": "2022-5-08 23:48",
//
//     "state": 2,//假条状态 2应该是假期中
//     "out": 1,//是否离校 1是 0否
//     "studentName": "",//姓名，留空不变
//     "studentId": "",//学生id，留空不变
//     "type": "实习",//请假类型 事假 病假 实习 科研 出差 回家，留空不变
//     "route": "广东省广州市番禺区创智大厦",//外出地点，留空不变
//     "location": "",//校区,销假地点,留空不变，注意格式[\"佛山三水校区\"]
//     "tel": "",//紧急联系电话，留空不变
//     "reason": "外出实习，图1为14天打卡，图2为健康码，图3为行程卡",//请假理由，留空不变
//     "userHead": "",//学生头像，默认随机，留空不变
//
//     //下面这部分似乎不会在页面上显示
//     "date": "",//请假提交时间，，留空不变
//     "school": "",//学校，留空不变
//     "college": "",//学院，留空不变
//     "grade": "",//班级，留空不变
//     "number": "",//学号，留空不变
//     "phone": "",//电话，留空不变
//
//     //下面这两条作用不明，懒得测试
//     "scanHistory": "",//留空不变
//     "imgs": "",//留空不变
//
//     "teacher": "",//老师姓名，留空不变
//     "approve": [
//         {
//             "time": "5.01 21:47",//审批时间，留空随机生成，格式12.21 11:10
//             "state": 2,//审核状态 3拒绝 2通过 1审批中
//             "userType": 4,//老师身份，4为辅导员，3为院级，2为校级
//             "name": "",//老师姓名，留空不变
//             "reason": "",//审批理由，留空不变
//             "position": "",//老师学院，留空不变
//             "head": ""//老师头像，默认随机，留空不变
//         }
//     ],
//     "approve2": [
//         {
//             "time": "5.02 13:35",//审批时间，留空随机生成，格式12.21 11:10
//             "state": 2,//审核状态 3拒绝 2通过 1审批中
//             "userType": 3,//老师身份，4为辅导员，3为院级，2为校级
//             "name": "肖锋",//老师姓名，留空不变
//             "reason": "",//审批理由，留空不变
//             "position": "信息科学与技术学院",//老师学院，留空不变
//             "head": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoQnsZykiaOJtY78ggUxkT2KiaicG35pOTYe5mN2nfxoycW5dkI1a4SIjPMsbibLP3ecAtYvtxickqibUyw/132"//老师头像，默认随机，留空不变
//         }
//     ]
// };

// Date.prototype.format=function(fmt){var o={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S":this.getMilliseconds()};if(/(y+)/.test(fmt)){fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))};for(var k in o){if(new RegExp("("+k+")").test(fmt)){fmt=fmt.replace(RegExp.$1,(RegExp.$1.length==1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)))}};return fmt};
//
// function getFormatTime(time, flag) {
//     if (flag === 1) {
//         return time.format("yyyy-MM-dd hh:mm")
//     } else {
//         return time.format("MM-dd hh:mm")
//     }
// };
//
// //以下生成时间
// var time = new Date();
// time.setMinutes(0, 0, 0);
// if (user["start"] == "" && user["end"] == "") {
//     time.setHours(11);
//     user["start"] = getFormatTime(time, 1);//开始时间
//     time.setHours(11);
//     time.setDate(time.getDate() + 1)
//     user["end"] = getFormatTime(time, 1);//结束时间
// };
// var time = new Date();
// time.setMinutes(0, 0, 0);
// if (user["approve"][0]["time"] == "") {//批假时间 前一天随机时刻
//     // time.setHours(Math.floor(Math.random() * (22 - 9 + 1) + 9), Math.floor(Math.random() * 60));
//     // lx.log(time.getHours());
//     // lx.log((time.getHours() / 24));
//     time.setHours(Math.floor((time.getHours() / 24) * 14) +8, Math.floor((time.getHours() / 24) * 60));
//     time.setDate(time.getDate() - 2);
//     user["approve"][0]["time"] = getFormatTime(time, 2);
// };
// if (user["approve2"][0]["time"] == "") {//批假时间 前一天随机时刻
//     time.setHours(time.getHours() + 2)
//     time.setMinutes(time.getMinutes() + 23)
//     user["approve2"][0]["time"] = getFormatTime(time, 2);
// };

bd = lx.toObj($response.body);

bd = data_new;


// for (x in user) {//读取用户自定义设置
//     if (x != "approve") {
//         if (user[x]) {
//             data[x] = user[x];
//         }
//     }
// };
// for (y in user["approve"][0]) {//读取用户自定义设置
//     if (user["approve"][0][y]) {
//         data["approve"][0][y] = user["approve"][0][y];
//     }
// };
//
// if(data["approve"][1]) {
//     for (y in user["approve2"][0])
//     {//读取用户自定义设置
//         if (user["approve2"][0][y]) {
//             data["approve"][1][y] = user["approve2"][0][y];
//         }
//     }
// }
// else {
//     data["approve"].push(user["approve2"][0])
// }



function init(name){const startTime=new Date().getTime();const isRequest=function(){return"undefined"!==typeof $request};const isResponse=function(){return"undefined"!==typeof $response};const isPost=function(){return"POST"===$request.method};const isGet=function(){return"GET"===$request.method};const isNode=function(){return'undefined'!==typeof module&&!!module.exports};const isQuanX=function(){return'undefined'!==typeof $task};const isSurge=function(){return'undefined'!==typeof $httpClient&&'undefined'===typeof $loon};const isLoon=function(){return'undefined'!==typeof $loon};const toObj=function(str,defaultValue=null){try{return JSON.parse(str)}catch{return defaultValue}};const toStr=function(obj,defaultValue=null){try{return JSON.stringify(obj)}catch{return defaultValue}};const msg=function(title,subtitle='',desc=''){if(isQuanX()){$notify(title,subtitle,desc)}else if(isSurge()||isLoon()){$notification.post(title,subtitle,desc)}};const log=function(...logs){if(logs.length>0){logs=[...logs]};console.log(logs.join("\n"))};const get=async function(opts,callback){if(isSurge()||isLoon()){await $httpClient.get(opts,function(err,res,body){if(!err&&res){res.body=body;res.statusCode=res.status};callback(err,res,body)})}else if(isQuanX()){opts.method="GET";await $task.fetch(opts).then(function(res){const{statusCode:status,statusCode,headers,body}=res;callback(null,{status,statusCode,headers,body},body)},function(err){callback(err)})}};const post=async function(opts,callback=function(){}){if(isSurge()||isLoon()){await $httpClient.post(opts,function(err,res,body){if(!err&&res){res.body=body;res.statusCode=res.status};callback(err,res,body)})}else if(isQuanX()){opts.method="POST";await $task.fetch(opts).then(function(res){const{statusCode:status,statusCode,headers,body}=res;callback(null,{status,statusCode,headers,body},body)},function(err){callback(err)})}};const r=function(key){if(isQuanX()){return $prefs.valueForKey(key)}else if(isSurge()||isLoon()){return $persistentStore.read(key)}};const w=function(val,key){if(isQuanX()){return $prefs.setValueForKey(val,key)}else if(isSurge()||isLoon()){return $persistentStore.write(val,key)}};const wait=function(time){return new Promise(function(resolve){setTimeout(resolve,time)})};const done=function(val={}){const endTime=new Date().getTime();const costTime=(endTime-startTime)/1000;log(name+" 结束运行，耗时："+costTime);if(isQuanX()||isSurge()||isLoon()){$done(val)}};return{msg,log,get,post,done,r,w,wait,toObj,toStr,isLoon,isNode,isQuanX,isSurge,isRequest,isResponse,isPost,isGet};};

lx.done({ body: lx.toStr(bd) });
