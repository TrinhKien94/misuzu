/*!
 * FullCalendar v2.4.0 Google Calendar Plugin
 * Docs & License: http://fullcalendar.io/
 * (c) 2015 Adam Shaw
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function t(t,s,d,o,u){function _(n,a){var i=a||[{message:n}];(t.googleCalendarError||e.noop).apply(u,i),(u.options.googleCalendarError||e.noop).apply(u,i),r.warn.apply(null,[n].concat(a||[]))}var m,l,c=a+"/"+encodeURIComponent(t.googleCalendarId)+"/events?callback=?",f=t.googleCalendarApiKey||u.options.googleCalendarApiKey,p=t.success;return f?(s.hasZone()||(s=s.clone().utc().add(-1,"day")),d.hasZone()||(d=d.clone().utc().add(1,"day")),o&&"local"!=o&&(l=o.replace(" ","_")),m=e.extend({},t.data||{},{key:f,timeMin:s.format(),timeMax:d.format(),timeZone:l,singleEvents:!0,maxResults:9999}),e.extend({},t,{googleCalendarId:null,url:c,data:m,startParam:!1,endParam:!1,timezoneParam:!1,success:function(t){var a,r,s=[];if(t.error)_("Google Calendar API: "+t.error.message,t.error.errors);else if(t.items&&(e.each(t.items,function(e,t){var a=t.htmlLink;l&&(a=n(a,"ctz="+l)),s.push({id:t.id,title:t.summary,start:t.start.dateTime||t.start.date,end:t.end.dateTime||t.end.date,url:a,location:t.location,description:t.description})}),a=[s].concat(Array.prototype.slice.call(arguments,1)),r=i(p,this,a),e.isArray(r)))return r;return s}})):(_("Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"),{})}function n(e,t){return e.replace(/(\?.*?)?(#|$)/,function(e,n,a){return(n?n+"&":"?")+t+a})}var a="https://www.googleapis.com/calendar/v3/calendars",r=e.fullCalendar,i=r.applyAll;r.sourceNormalizers.push(function(e){var t,n=e.googleCalendarId,a=e.url;!n&&a&&(/^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(a)?n=a:((t=/^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(a))||(t=/^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(a)))&&(n=decodeURIComponent(t[1])),n&&(e.googleCalendarId=n)),n&&(null==e.editable&&(e.editable=!1),e.url=n)}),r.sourceFetchers.push(function(e,n,a,r){return e.googleCalendarId?t(e,n,a,r,this):void 0})});