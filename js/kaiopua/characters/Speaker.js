(function(c){function e(a){a=a||{};a.name=typeof a.name==="string"&&a.name.length>0?a.name:"Speaker";a.options=$.extend(!0,{},b.options,a.options);a.physics=$.extend({},b.options.physics,a.physics);d.Instance.call(this,a)}c.shared=c.shared||{};var b={},d;c.asset_register("js/kaiopua/characters/Speaker.js",{data:b,requirements:["js/kaiopua/characters/Character.js"],callbacksOnReqs:function(a){d=a;b.options={interactive:!0,physics:{bodyType:"box",movementOffsetPct:0,gravityOffsetPct:0},stats:{invincible:!0},
animation:{options:{idle:{startDelay:!0,loopDelayPct:1,loopDelayRandom:!0,loopChance:0.2}}},dialogues:{greeting:{responses:[{message:"Nice to meet you!",next:"name"},{message:"Hi!",next:"unsaid"},{message:"Hey friend!",next:"random"}],randomable:!1},name:{responses:{message:function(){return(Math.random()>0.5?"I'm ":"My name is ")+this.name+"."},next:"presenting"},randomable:!1},presenting:"I'm presenting at oGS 2013.",about:"I <3 web and gaming!",fun:"oGS 2013 or bust!",goodbye:{responses:["See ya!",
"Cheers!","Bye!"],random:!0,randomable:!1}}};b.Instance=e;b.Instance.prototype=new d.Instance;b.Instance.prototype.constructor=b.Instance},wait:!0})})(KAIOPUA);
