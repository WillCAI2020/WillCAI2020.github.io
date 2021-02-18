!function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(p){function n(e,t){this.previewElement=e,this.options=t,this.animationLoaded=!1}return n.scopes=new Array,n.prototype={supportedFormats:["gif","jpeg","jpg","png"],activate:function(){var e=this;0===this.previewElement.width()?setTimeout(function(){e.activate()},100):(e.mode=e.getOption("mode"),e.wrap(),e.addSpinner(),e.addControl(),e.addEvents())},wrap:function(){this.previewElement.addClass("gifplayer-ready"),this.wrapper=this.previewElement.wrap("<div class='gifplayer-wrapper'></div>").parent(),this.wrapper.css("width",this.previewElement.width()),this.wrapper.css("height",this.previewElement.height()),this.previewElement.css("cursor","pointer")},addSpinner:function(){this.spinnerElement=p("<div class = 'spinner'></div>"),this.wrapper.append(this.spinnerElement),this.spinnerElement.hide()},getOption:function(e){var t=this.previewElement.data(e.toLowerCase());return null!=t&&""!=t?t:this.options[e]},addControl:function(){var e=this.getOption("label");this.playElement=p("<ins class='play-gif'>"+e+"</ins>"),this.wrapper.append(this.playElement),this.playElement.css("top",this.previewElement.height()/2-this.playElement.height()/2),this.playElement.css("left",this.previewElement.width()/2-this.playElement.width()/2)},addEvents:function(){var t=this,e=this.getOption("playOn");switch(e){case"click":t.playElement.on("click",function(e){t.previewElement.trigger("click")}),t.previewElement.on("click",function(e){t.getOption("onClick").call(t.previewElement,e),t.loadAnimation(),e.preventDefault(),e.stopPropagation()});break;case"hover":t.previewElement.on("click mouseover",function(e){t.loadAnimation(),e.preventDefault(),e.stopPropagation()});break;case"auto":console.log("auto not implemented yet");break;default:console.log(e+" is not accepted as playOn value.")}},processScope:function(){var e=this.getOption("scope");e&&(n.scopes[e]&&n.scopes[e].stopGif(),n.scopes[e]=this)},loadAnimation:function(){this.processScope(),this.spinnerElement.show(),"gif"==this.mode?this.loadGif():"video"==this.mode&&(this.videoLoaded?this.playVideo():this.loadVideo()),this.getOption("onPlay").call(this.previewElement)},stopGif:function(){this.gifElement.hide(),this.previewElement.show(),this.playElement.show(),this.resetEvents(),this.getOption("onStop").call(this.previewElement)},getFile:function(e){var t=this.getOption(e);if(null!=t&&""!=t)return t;for(replaceString=this.previewElement.attr("src"),i=0;i<this.supportedFormats.length;i++)pattrn=new RegExp(this.supportedFormats[i]+"$","i"),replaceString=replaceString.replace(pattrn,e);return replaceString},loadGif:function(){var t=this;t.playElement.hide(),this.animationLoaded||this.enableAbort();var e=this.getFile("gif"),i=this.previewElement.width(),n=this.previewElement.height();this.gifElement=p("<img class='gp-gif-element' width='"+i+"' height=' "+n+" '/>"),this.getOption("wait")?this.gifElement.on({load:function(){t.animationLoaded=!0,t.resetEvents(),t.previewElement.hide(),t.wrapper.append(t.gifElement),t.spinnerElement.hide(),t.getOption("onLoadComplete").call(t.previewElement)}}):(t.animationLoaded=!0,t.resetEvents(),t.previewElement.hide(),t.wrapper.append(t.gifElement),t.spinnerElement.hide()),this.gifElement.css("cursor","pointer"),this.gifElement.css("position","absolute"),this.gifElement.css("top","0"),this.gifElement.css("left","0"),this.gifElement.attr("src",e),this.gifElement.click(function(e){t.getOption("onClick").call(t.previewElement,e),p(this).remove(),t.stopGif(),e.preventDefault(),e.stopPropagation()}),t.getOption("onLoad").call(t.previewElement)},loadVideo:function(){this.videoLoaded=!0;var e=this.getFile("mp4"),t=this.getFile("webm"),i=this.previewElement.width(),n=this.previewElement.height();this.videoElement=p('<video class="gp-video-element" width="'+i+'px" height="'+n+'" style="margin:0 auto;width:'+i+"px;height:"+n+'px;" autoplay="autoplay" loop="loop" muted="muted" poster="'+this.previewElement.attr("src")+'"><source type="video/mp4" src="'+e+'"><source type="video/webm" src="'+t+'"></video>');var o=this,s=function(){4===o.videoElement[0].readyState?(o.playVideo(),o.animationLoaded=!0):setTimeout(s,100)};this.getOption("wait")?s():this.playVideo(),this.videoElement.on("click",function(){o.videoPaused?o.resumeVideo():o.pauseVideo()})},playVideo:function(){this.spinnerElement.hide(),this.previewElement.hide(),this.playElement.hide(),this.gifLoaded=!0,this.previewElement.hide(),this.wrapper.append(this.videoElement),this.videoPaused=!1,this.videoElement[0].play(),this.getOption("onPlay").call(this.previewElement)},pauseVideo:function(){this.videoPaused=!0,this.videoElement[0].pause(),this.playElement.show(),this.mouseoverEnabled=!1,this.getOption("onStop").call(this.previewElement)},resumeVideo:function(){this.videoPaused=!1,this.videoElement[0].play(),this.playElement.hide(),this.getOption("onPlay").call(this.previewElement)},enableAbort:function(){var t=this;this.previewElement.click(function(e){t.abortLoading(e)}),this.spinnerElement.click(function(e){t.abortLoading(e)})},abortLoading:function(e){this.spinnerElement.hide(),this.playElement.show(),e.preventDefault(),e.stopPropagation(),this.gifElement.off("load").on("load",function(e){e.preventDefault(),e.stopPropagation()}),this.resetEvents(),this.getOption("onStop").call(this.previewElement)},resetEvents:function(){this.previewElement.off("click"),this.previewElement.off("mouseover"),this.playElement.off("click"),this.spinnerElement.off("click"),this.addEvents()}},p.fn.gifplayer=function(t){return/^(play|stop)$/i.test(t)?this.each(function(){if(t=t.toLowerCase(),p(this).hasClass("gifplayer-ready")){var e=new n(p(this),null);switch(e.options={},e.options=p.extend({},p.fn.gifplayer.defaults,e.options),e.wrapper=p(this).parent(),e.spinnerElement=e.wrapper.find(".spinner"),e.playElement=e.wrapper.find(".play-gif"),e.gifElement=e.wrapper.find(".gp-gif-element"),e.videoElement=e.wrapper.find(".gp-video-element"),e.mode=e.getOption("mode"),t){case"play":e.playElement.trigger("click");break;case"stop":e.playElement.is(":visible")||("gif"==e.mode?e.stopGif():"video"==e.mode&&e.videoElement.trigger("click"))}}}):this.each(function(){t=p.extend({},p.fn.gifplayer.defaults,t),new n(p(this),t).activate()})},p.fn.gifplayer.defaults={label:"GIF",playOn:"click",mode:"gif",gif:"",mp4:"",webm:"",wait:!1,scope:!1,onPlay:function(){},onStop:function(){},onClick:function(){},onLoad:function(){},onLoadComplete:function(){}},n});