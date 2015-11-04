$(function(){$.getJSON("/events",function(e){$("#calendar-month-view").fullCalendar({businessHours:{start:"09:00:00",end:"18:00:00",dow:[1,2,3,4,5]},firstDay:1,slotLabelFormat:["HH : mm"],scrollTime:"09:00:00",minTime:"09:00:00",googleCalendarApiKey:"AIzaSyDOeA5aJ29drd5dSAqv1TW8Dvy2zkYdsdk",eventSources:[{googleCalendarId:"en.japanese#holiday@group.v.calendar.google.com",color:"green"},{googleCalendarId:"en.vietnamese#holiday@group.v.calendar.google.com",color:"blue"}],schedulerLicenseKey:"GPL-My-Project-Is-Open-Source",events:e.my_events,header:{left:"title",center:"month,agendaWeek,agendaDay prevYear,nextYear",right:"today prev,next"}}),$("#calendar-timeline").fullCalendar({height:1400,businessHours:{start:"09:00:00",end:"18:00:00",dow:[1,2,3,4,5]},firstDay:1,resourceAreaWidth:"35%",slotLabelFormat:["HH : mm"],scrollTime:"09:00:00",eventOverlap:!1,defaultView:"timelineDay",events:e.events,resourceGroupField:"shozoku",resourceColumns:[{labelText:"\u5f79\u8077",field:"yakushoku",width:90,render:function(e,a){a.css("background-color","#0070a3")}},{labelText:"\u793e\u54e1\u540d",field:"shain",width:70,render:function(e,a){a.css("background-color","seagreen")}},{labelText:"\u5185\u7dda",field:"linenum",width:25,render:function(e,a){a.css("background-color","#adadad")}},{labelText:"\u72b6\u614b",field:"joutai",width:25,render:function(e,a){a.css("background-color",e.background_color),a.css("color",e.text_color)}},{labelText:"\u4f1d\u8a00",field:"dengon",width:25,render:function(e,a){a.css("background-color","#adadad")}},{labelText:"\u56de\u89a7",field:"kairan",width:25,render:function(e,a){a.css("background-color","#adadad")}}],resources:e.shains}),$("#calendar-month-view").fullCalendar("addEventSource",e.holidays)})}),$(window).on("load",function(){$("#calendar-timeline").fullCalendar("render"),$("#goto-date-input").val(moment().format("YYYY/MM/DD"))}),$(function(){$("#toggle-calendar-goto").click(function(){$("#goto-date-input").data("DateTimePicker").toggle()}),$("#\u958b\u59cb").click(function(){$("#event_\u958b\u59cb").data("DateTimePicker").toggle()}),$("#\u7d42\u4e86").click(function(){$("#event_\u7d42\u4e86").data("DateTimePicker").toggle()})}),$(function(){$("#goto-date-input").datetimepicker({format:"YYYY/MM/DD",widgetPositioning:{horizontal:"left"},showTodayButton:!0,showClear:!0,calendarWeeks:!0,keyBinds:!1,focusOnShow:!1}),$("#event_\u958b\u59cb").datetimepicker({format:"YYYY/MM/DD HH:mm",showClear:!0,showTodayButton:!0,sideBySide:!0,calendarWeeks:!0,toolbarPlacement:"top",keyBinds:!1,focusOnShow:!1}),$("#event_\u7d42\u4e86").datetimepicker({format:"YYYY/MM/DD HH:mm",showTodayButton:!0,showClear:!0,sideBySide:!0,calendarWeeks:!0,toolbarPlacement:"top",keyBinds:!1,focusOnShow:!1}),$("#event_\u958b\u59cb").on("dp.change",function(e){$("#event_\u7d42\u4e86").data("DateTimePicker").minDate(e.date)}),$("#event_\u7d42\u4e86").on("dp.change",function(e){$("#event_\u958b\u59cb").data("DateTimePicker").maxDate(e.date)})}),$(function(){$("#goto-date-button").click(function(){date_input=$("#goto-date-input").val(),date=moment(date_input),$("#calendar-month-view").fullCalendar("gotoDate",date),$("#calendar-timeline").fullCalendar("gotoDate",date)}),$("#search_user").click(function(){$("#select_user_modal").modal("show")}),$("#joutai_search").click(function(){$("#joutai_search_modal").modal("show")}),$("#basho_search").click(function(){$("#basho_search_modal").modal("show")}),$("#koutei_search").click(function(){$("#koutei_search_modal").modal("show")}),$("#shozai_search").click(function(){$("#shozai_search_modal").modal("show")}),$("#job_search").click(function(){$("#job_search_modal").modal("show")}),$("#shujitu").click(function(){start_form_time=$("#event_\u958b\u59cb").val(),end_form_time=$("#event_\u7d42\u4e86").val();var e,a;return""==start_form_time&&""==end_form_time?(e=moment().format("YYYY-MM-DD"),a=e+" 18:00",e+=" 09:00",$("#event_\u958b\u59cb").val(e),void $("#event_\u7d42\u4e86").val(a)):(""!=start_form_time?(e=start_form_time.substring(0,10)+" 09:00",a=start_form_time.substring(0,10)+" 18:00"):(e=end_form_time.substring(0,10)+" 09:00",a=end_form_time.substring(0,10)+" 18:00"),$("#event_\u958b\u59cb").val(e),void $("#event_\u7d42\u4e86").val(a))}),$("#month-view").click(function(){$("#calendar-timeline").hide(),$("#calendar-month-view").show(),$("#calendar-month-view").fullCalendar("render")}),$("#day-view").click(function(){$("#calendar-month-view").hide(),$("#calendar-timeline").show()})}),$(function(){oTable=$("#user_table").DataTable({pagingType:"simple_numbers",oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"}}),oBashoTable=$("#basho_table").DataTable({pagingType:"simple_numbers",oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"}}),oJoutaiTable=$("#joutai_table").DataTable({pagingType:"simple_numbers",oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"}}),oKouteiTable=$("#koutei_table").DataTable({pagingType:"simple_numbers",oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"}}),oShozaiTable=$("#shozai_table").DataTable({pagingType:"simple_numbers",oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"}}),oJobTable=$("#job_table").DataTable({pagingType:"simple_numbers",oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"}}),oEventTable=$("#event_table").DataTable({pagingType:"full_numbers",oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"},aoColumnDefs:[{aTargets:[0],mRender:function(e,a,t){return'<a href="/events/'+e+'/edit">\u8a73\u7d30</a>'}},{aTargets:[1,2],mRender:function(e,a,t){var s=moment(e,"YYYY-MM-DD HH:mm").format("YYYY-MM-DD HH:mm");return"Invalid date"!==s?s:""}},{bSortable:!1,aTargets:[0]},{targets:[0],searchable:!1}],order:[],columnDefs:[{targets:"no-sort",orderable:!1}],autoWidth:!0}),$("#user_table tbody").on("click","tr",function(){var e=oTable.row(this).data();$("#selected_user").val(e[0]),$("#selected_user_name").val(e[1]),$(this).hasClass("selected")?($(this).removeClass("selected"),$(this).removeClass("success")):(oTable.$("tr.selected").removeClass("selected"),oTable.$("tr.success").removeClass("success"),$(this).addClass("selected"),$(this).addClass("success"))}),$("#basho_table tbody").on("click","tr",function(){var e=oBashoTable.row(this).data();$("#event_\u5834\u6240\u30b3\u30fc\u30c9").val(e[0]),$("#basho_name").text(e[1]),$(this).hasClass("selected")?($(this).removeClass("selected"),$(this).removeClass("success")):(oBashoTable.$("tr.selected").removeClass("selected"),oBashoTable.$("tr.success").removeClass("success"),$(this).addClass("selected"),$(this).addClass("success"))}),$("#joutai_table tbody").on("click","tr",function(){var e=oJoutaiTable.row(this).data();$("#event_\u72b6\u614b\u30b3\u30fc\u30c9").val(e[0]),$("#joutai_name").text(e[1]),$(this).hasClass("selected")?($(this).removeClass("selected"),$(this).removeClass("success")):(oJoutaiTable.$("tr.selected").removeClass("selected"),oJoutaiTable.$("tr.success").removeClass("success"),$(this).addClass("selected"),$(this).addClass("success")),"30"==e[0]?($("#event_\u5834\u6240\u30b3\u30fc\u30c9").prop("disabled",!0),$("#event_JOB").prop("disabled",!0),$("#event_\u5de5\u7a0b\u30b3\u30fc\u30c9").prop("disabled",!0),$("#basho_search").prop("disabled",!0),$("#koutei_search").prop("disabled",!0)):($("#event_\u5834\u6240\u30b3\u30fc\u30c9").prop("disabled",!1),$("#event_JOB").prop("disabled",!1),$("#event_\u5de5\u7a0b\u30b3\u30fc\u30c9").prop("disabled",!1),$("#basho_search").prop("disabled",!1),$("#koutei_search").prop("disabled",!1))}),$("#koutei_table tbody").on("click","tr",function(){var e=oKouteiTable.row(this).data();$("#event_\u5de5\u7a0b\u30b3\u30fc\u30c9").val(e[0]),$("#koutei_name").text(e[1]),$(this).hasClass("selected")?($(this).removeClass("selected"),$(this).removeClass("success")):(oKouteiTable.$("tr.selected").removeClass("selected"),oKouteiTable.$("tr.success").removeClass("success"),$(this).addClass("selected"),$(this).addClass("success"))}),$("#shozai_table tbody").on("click","tr",function(){var e=oShozaiTable.row(this).data();$("#event_\u6240\u5728\u30b3\u30fc\u30c9").val(e[0]),$("#shozai_name").text(e[1]),$(this).hasClass("selected")?($(this).removeClass("selected"),$(this).removeClass("success")):(oShozaiTable.$("tr.selected").removeClass("selected"),oShozaiTable.$("tr.success").removeClass("success"),$(this).addClass("selected"),$(this).addClass("success"))}),$("#job_table tbody").on("click","tr",function(){var e=oJobTable.row(this).data();$("#event_JOB").val(e[0]),$("#job_name").text(e[1]),$(this).hasClass("selected")?($(this).removeClass("selected"),$(this).removeClass("success")):(oJobTable.$("tr.selected").removeClass("selected"),oJobTable.$("tr.success").removeClass("success"),$(this).addClass("selected"),$(this).addClass("success"))})}),$(function(){$(document).bind("ajaxError","form#new_kouteimaster",function(e,a,t,s){$(e.data).render_form_errors($.parseJSON(a.responseText))})}),function(e){e.fn.modal_success=function(){this.modal("hide"),this.find('form input[type="text"]').val(""),this.clear_previous_errors()},e.fn.render_form_errors=function(a){$form=this,this.clear_previous_errors(),model=this.data("model"),e.each(a,function(a,t){$input=e('input[name="'+model+"["+a+']"]'),$input.closest(".form-group").addClass("has-error").find(".help-block").html(t.join(" & "))})},e.fn.clear_previous_errors=function(){e(".form-group.has-error",this).each(function(){e(".help-block",e(this)).html(""),e(this).removeClass("has-error")})}}(jQuery),$(function(){$("#event_\u72b6\u614b\u30b3\u30fc\u30c9").keydown(function(e){if(9==e.keyCode&&!e.shiftKey){var a=$("#event_\u72b6\u614b\u30b3\u30fc\u30c9").val();jQuery.ajax({url:"/events/ajax",data:{id:"event_\u72b6\u614b\u30b3\u30fc\u30c9",event_joutai_code:a},type:"POST",success:function(e){$("#joutai_name").text(e.joutai_name),console.log("getAjax joutai_name:"+e.joutai_name)},failure:function(){console.log("event_\u72b6\u614b\u30b3\u30fc\u30c9 keydown Unsuccessful")}})}}),$("#event_\u5834\u6240\u30b3\u30fc\u30c9").keydown(function(e){if(9==e.keyCode&&!e.shiftKey){var a=$("#event_\u5834\u6240\u30b3\u30fc\u30c9").val();jQuery.ajax({url:"/events/ajax",data:{id:"event_\u5834\u6240\u30b3\u30fc\u30c9",event_basho_code:a},type:"POST",success:function(e){$("#basho_name").text(e.basho_name),console.log("getAjax basho_name:"+e.basho_name)},failure:function(){console.log("event_\u5834\u6240\u30b3\u30fc\u30c9 keydown Unsuccessful")}})}}),$("#event_\u5de5\u7a0b\u30b3\u30fc\u30c9").keydown(function(e){if(9==e.keyCode&&!e.shiftKey){var a=$("#event_\u5de5\u7a0b\u30b3\u30fc\u30c9").val();jQuery.ajax({url:"/events/ajax",data:{id:"event_\u5de5\u7a0b\u30b3\u30fc\u30c9",event_koutei_code:a},type:"POST",success:function(e){$("#koutei_name").text(e.koutei_name),console.log("getAjax koutei_name:"+e.koutei_name)},failure:function(){console.log("event_\u5de5\u7a0b\u30b3\u30fc\u30c9 keydown Unsuccessful")}})}}),$("#event_JOB").keydown(function(e){if(9==e.keyCode&&!e.shiftKey){var a=$("#event_JOB").val();jQuery.ajax({url:"/events/ajax",data:{id:"event_job",event_job_code:a},type:"POST",success:function(e){$("#job_name").text(e.job_name),console.log("getAjax job_name:"+e.job_name)},failure:function(){console.log("event_job\u756a\u53f7 keydown Unsuccessful")}})}})}),$(function(){$("input[maxlength]").maxlength(),$("#calendar-month-view").hide(),$("#calendar-timeline").show()});