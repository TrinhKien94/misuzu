$(function(){oTable=$("#jobmaster").DataTable({pagingType:"full_numbers",oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"},aoColumnDefs:[{bSortable:!1,aTargets:[6,7,8]},{targets:[6,7,8],width:"15px"}],columnDefs:[{targets:"no-sort",orderable:!1}]})}),$(function(){$("#jobmaster_\u958b\u59cb\u65e5").datetimepicker({format:"YYYY/MM/DD",showTodayButton:!0}),$("#jobmaster_\u7d42\u4e86\u65e5").datetimepicker({format:"YYYY/MM/DD",showTodayButton:!0}),$("#jobmaster_\u958b\u59cb\u65e5").on("dp.change",function(a){$("#jobmaster_\u7d42\u4e86\u65e5").data("DateTimePicker").minDate(a.date)}),$("#jobmaster_\u7d42\u4e86\u65e5").on("dp.change",function(a){$("#jobmaster_\u958b\u59cb\u65e5").data("DateTimePicker").maxDate(a.date)})});