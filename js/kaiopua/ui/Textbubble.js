(function(e){function s(a){a=a||{};a.options=$.extend(!0,{},b.options,a.options);d.Instance.call(this,a);$("body").append(this.$element);this.$scroller=this.$inner.closest(this.$inner.parentsUntil(this.$element).filter(function(){return $(this).css("overflow")==="auto"}));this.$scrollerChild=this.$scroller.children().has(this.$inner);this.$element.remove();this.$close=this.$element.find(this.options.close);this.$status=this.$element.find(this.options.status);this.$statusInner=this.$element.find(this.options.statusInner);
this.messages=[]}function t(a){if(typeof a!=="undefined"){if(a=e.to_array(a),this.messages!==a||typeof this.messageParts==="undefined"||typeof this.messageParts.shown!=="undefined"){this.messages=a;this.messageParts=void 0;a=this.options.oneStarted;typeof a==="function"&&(delete this.options.oneStarted,a());if(typeof this.options.oneStarted==="function")this.options.oneStarted();this.content_advance()}}else return b.Instance.prototype.supr.content.call(this);return this}function u(){c.call(this);
this.messageParts=v.call(this,this.messageParts||this.messages);e.dom_fade({element:$().add(this.$inner).add(this.$status),duration:this.messageParts.shown.length>0?this.options.animateDuration:0,callback:$.proxy(function(){this.content_show()},this)});return this}function w(){var a=$(),m;this.messageParts.showing.length>0&&(a=a.add(this.$inner),b.Instance.prototype.supr.content.call(this,this.messageParts.showing));this.$status.off(".textbubbleStatus");if(this.options.disableAdvanceByUser!==!0)if(a=
a.add(this.$status),this.messageParts.hidden.length>0||this.messageParts.messages.length>0)this.$status.on("tap.textbubbleStatus",$.proxy(this.content_advance,this));else this.$status.on("tap.textbubbleStatus",$.proxy(function(){var a=this.options.oneEnded;typeof a==="function"&&(delete this.options.oneEnded,a());if(typeof this.options.onEnded==="function")this.options.onEnded()},this));e.dom_fade({element:a,opacity:1,duration:this.messageParts.shown.length>0||this.options.animateAlways===!0?this.options.animateDuration:
0,callback:$.proxy(function(){c.call(this);this.contentAdvancedTimeoutId=requestTimeout($.proxy(function(){c.call(this);m=this.options.oneAdvanced;typeof m==="function"&&(delete this.options.oneAdvanced,m());if(typeof this.options.onAdvanced==="function")this.options.onAdvanced();if(this.options.autoAdvance===!0&&(this.messageParts.hidden.length>0||this.messageParts.messages.length>0))this.contentAutoAdvanceTimeoutId=requestTimeout($.proxy(this.content_advance,this),Math.max(this.options.delayAdvanceMin,
6E4/this.options.wpm*this.messageParts.numWords))},this),this.options.delayAdvanced)},this)})}function v(a){var b,d,h,c,g,f,n,o,p=0,j="",i,q,k="",l="",r;e.is_array(a)?a={showing:"",shown:"",hidden:"",messages:a.slice(0)}:a.shown=a.showing;h=a.messages;for(b=a.hidden;b.length===0&&h.length>0;)b=h.shift(),typeof b==="function"&&(b=b());if(b.length>0){this.$element.placeholdme().appendTo("body");h=a.showing.length>0?a.showing:this.$inner.html();this.$inner.html("");k=this.$scrollerChild.width();c=b.split(/\s* \s*/);
i=j=c[0];for(b=1,d=c.length;b<d;b++)n=f,f=g,g=c[b],r===!0?l+=" "+g:(j+=" "+g,this.$inner.html(j),this.$scrollerChild.width()!==k?(typeof n==="string"&&(o=n.search(/\n|([^\r\n.!?]+([.!?]+|\n))/gi)),o!==-1||b===d-1?(l=f+" "+g,i=q):l=g,r=!0):(q=i,i=j,p++));k=$.trim(i);this.$inner.html(h);this.$element.placeholdme("revert");a.showing=k;a.hidden=l;a.numWords=p}return a}function c(){if(typeof this.contentAdvancedTimeoutId!=="undefined")clearRequestTimeout(this.contentAdvancedTimeoutId),this.contentAdvancedTimeoutId=
void 0;if(typeof this.contentAutoAdvanceTimeoutId!=="undefined")clearRequestTimeout(this.contentAutoAdvanceTimeoutId),this.contentAutoAdvanceTimeoutId=void 0}function f(){c.call(this);this.$close.off(".textbubbleClose");this.$status.off(".textbubbleStatus")}function x(){b.Instance.prototype.supr.show.apply(this,arguments);f.call(this);this.$close.on("tap.textbubbleClose",$.proxy(this.remove,this));this.content(this.messages)}function y(){f.call(this);return b.Instance.prototype.supr.hide.apply(this,
arguments)}function z(){f.call(this);return b.Instance.prototype.supr.remove.apply(this,arguments)}e.shared=e.shared||{};var b={},d;e.asset_register("js/kaiopua/ui/Textbubble.js",{data:b,requirements:["js/kaiopua/ui/Popover.js","js/kaiopua/utils/MathHelper.js"],callbacksOnReqs:function(a){d=a;b.options={placement:"topleft",template:'<div class="textbubble"><div class="textbubble-arrow"></div><div class="textbubble-inner"><div class="textbubble-content"><div class="textbubble-content-inner"></div></div></div><div class="textbubble-status"><div class="textbubble-status-inner">...</div></div><div class="textbubble-close"><div class="textbubble-close-inner">&times;</div></div></div>',
inner:".textbubble-content-inner",close:".textbubble-close",status:".textbubble-status",statusInner:".textbubble-status-inner",animate:!0,animateDuration:250,wpm:100,autoAdvance:!1,disableAdvanceByUser:!1,delayAdvanceMin:1E3,delayAdvanced:0};b.Instance=s;b.Instance.prototype=new d.Instance;b.Instance.prototype.constructor=b.Instance;b.Instance.prototype.supr=d.Instance.prototype;b.Instance.prototype.content=t;b.Instance.prototype.content_advance=u;b.Instance.prototype.content_show=w;b.Instance.prototype.show=
x;b.Instance.prototype.hide=y;b.Instance.prototype.remove=z},wait:!0})})(KAIOPUA);
