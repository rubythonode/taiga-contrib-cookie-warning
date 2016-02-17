(function(){var CookieWarningDirective,module,template;template='<cookie-warning>\n    <div class="center">\n        <div class="text">\n            <p class="title">\n                Our site uses cookies, which our Oompa Loompas munch on to keep our site running.\n            </p>\n            <p>\n                Our lawyer, who is one tough cookie, and is himself obsessed with cookies, wants you\n                to know that Taiga uses cookies. He\'s a simple-minded man, and requires obvious\n                announcements like this. So here it is: our cookie policy, which you can read more\n                about by <a target="_blank" href="{{::privacyPolicyUrl }}">clicking here</a> is best\n                summarized by the Cookie Monster himself: "C is for Cookie and Cookie is for me."\n            </p>\n        </div>\n        <a href="" title="close" class="close"><span class="icon icon-delete"></span></a>\n    </div>\n</cookie-warning>',CookieWarningDirective=function($compile,$config){var getCookie,link,setCookie;return setCookie=function(cname,cvalue,exdays){var d,expires;return d=new Date,d.setTime(d.getTime()+24*exdays*60*60*1e3),expires="expires="+d.toUTCString(),document.cookie=cname+"="+cvalue+"; "+expires},getCookie=function(cname){var c,ca,i,len,name;for(name=cname+"=",ca=document.cookie.split(";"),i=0,len=ca.length;len>i;i++){for(c=ca[i];" "===c.charAt(0);)c=c.substring(1);if(-1!==c.indexOf(name))return c.substring(name.length,c.length)}},link=function($scope,$el,$attrs){var cookieMsg;return $scope.privacyPolicyUrl=$config.get("privacyPolicyUrl"),cookieMsg=$compile($(template))($scope),$el.append(cookieMsg),"1"!==getCookie("cookieConsent")&&cookieMsg.show(),$el.find(".close").on("click",function(e){return e.preventDefault(),cookieMsg.fadeOut("fast"),setCookie("cookieConsent",1,730)})},{restrict:"E",link:link}},module=angular.module("cookieWarningPlugin",[]),module.directive("body",["$compile","$tgConfig",CookieWarningDirective])}).call(this);