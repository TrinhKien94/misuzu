!function(t){"use strict";t.fn.extend({maxlength:function(e,a){function s(t){var a=t.val();a=a.replace(new RegExp("\r?\n","g"),"\n");var s=0;return s=e.utf8?n(t.val()):t.val().length}function n(t){for(var e=0,a=0;a<t.length;a++){var s=t.charCodeAt(a);128>s?e++:e+=s>127&&2048>s?2:3}return e}function o(t,a,n){var o=!0;return!e.alwaysShow&&n-s(t)>a&&(o=!1),o}function r(t,e){var a=e-s(t);return a}function i(t){t.css({display:"block"})}function l(t){t.css({display:"none"})}function h(t,a){var s="";return e.message?s=e.message.replace("%charsTyped%",a).replace("%charsRemaining%",t-a).replace("%charsTotal%",t):(e.preText&&(s+=e.preText),s+=e.showCharsTyped?a:t-a,e.showMaxLength&&(s+=e.separator+t),e.postText&&(s+=e.postText)),s}function c(t,a,s,n){n.html(h(s,s-t)),t>0?o(a,e.threshold,s)?i(n.removeClass(e.limitReachedClass).addClass(e.warningClass)):l(n):i(n.removeClass(e.warningClass).addClass(e.limitReachedClass))}function p(e){var a=e[0];return t.extend({},"function"==typeof a.getBoundingClientRect?a.getBoundingClientRect():{width:a.offsetWidth,height:a.offsetHeight},e.offset())}function f(t,a){var s=p(t),n=t.outerWidth(),o=a.outerWidth(),r=a.width(),i=a.height();switch(e.placement){case"bottom":a.css({top:s.top+s.height,left:s.left+s.width/2-r/2});break;case"top":a.css({top:s.top-i,left:s.left+s.width/2-r/2});break;case"left":a.css({top:s.top+s.height/2-i/2,left:s.left-r});break;case"right":a.css({top:s.top+s.height/2-i/2,left:s.left+s.width});break;case"bottom-right":a.css({top:s.top+s.height,left:s.left+s.width});break;case"top-right":a.css({top:s.top-i,left:s.left+n});break;case"top-left":a.css({top:s.top-i,left:s.left-o});break;case"bottom-left":a.css({top:s.top+t.outerHeight(),left:s.left-o});break;case"centered-right":a.css({top:s.top+i/2,left:s.left+n-o-3})}}function u(t){return t.attr("maxlength")||t.attr("size")}var d=t("body"),g={alwaysShow:!1,threshold:10,warningClass:"label label-success",limitReachedClass:"label label-important",separator:" / ",preText:"",postText:"",showMaxLength:!0,placement:"bottom",showCharsTyped:!0,validate:!1,utf8:!1};return t.isFunction(e)&&!a&&(a=e,e={}),e=t.extend(g,e),this.each(function(){var a,s,n=t(this);t(window).resize(function(){s&&f(n,s)}),n.focus(function(){var e=h(a,"0");a=u(n),s||(s=t('<span class="bootstrap-maxlength"></span>').css({display:"none",position:"absolute",whiteSpace:"nowrap",zIndex:1099}).html(e)),n.is("textarea")&&(n.data("maxlenghtsizex",n.outerWidth()),n.data("maxlenghtsizey",n.outerHeight()),n.mouseup(function(){(n.outerWidth()!==n.data("maxlenghtsizex")||n.outerHeight()!==n.data("maxlenghtsizey"))&&f(n,s),n.data("maxlenghtsizex",n.outerWidth()),n.data("maxlenghtsizey",n.outerHeight())})),d.append(s);var o=r(n,u(n));c(o,n,a,s),f(n,s)}),n.blur(function(){s.remove()}),n.keyup(function(){var t=r(n,u(n)),o=!0;return e.validate&&0>t?o=!1:c(t,n,a,s),o})})}})}(jQuery);