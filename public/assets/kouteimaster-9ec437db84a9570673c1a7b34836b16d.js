$(function(){oTable=$("#kouteimaster").DataTable({pagingType:"full_numbers",oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"},aoColumnDefs:[{bSortable:!1,aTargets:[3,4,5]},{targets:[3,4,5],width:"15px"}],columnDefs:[{targets:"no-sort",orderable:!1}]}),$("#kouteimaster tbody").on("click","tr",function(){$(this).hasClass("selected")?($(this).removeClass("selected"),$(this).removeClass("success")):(oTable.$("tr.selected").removeClass("selected"),oTable.$("tr.success").removeClass("success"),$(this).addClass("selected"),$(this).addClass("success"))}),oShozokuTable=$("#shozoku_search_table").DataTable({pagingType:"full_numbers",oLanguage:{sUrl:"../../assets/resource/dataTable_ja.txt"}}),$("#shozoku_search_table tbody").on("click","tr",function(){var e=oShozokuTable.row(this).data();$("#kouteimaster_\u6240\u5c5e\u30b3\u30fc\u30c9").val(e[0]),$("#shozoku_name").text(e[1]),$(this).hasClass("selected")?($(this).removeClass("selected"),$(this).removeClass("success")):(oShozokuTable.$("tr.selected").removeClass("selected"),oShozokuTable.$("tr.success").removeClass("success"),$(this).addClass("selected"),$(this).addClass("success"))})}),$(function(){$(document).bind("ajaxError","form#new_kouteimaster",function(e,s,o,t){$(e.data).render_form_errors($.parseJSON(s.responseText))})}),function(e){e.fn.modal_success=function(){this.modal("hide"),this.find('form input[type="text"]').val(""),this.clear_previous_errors()},e.fn.render_form_errors=function(s){$form=this,this.clear_previous_errors(),model=this.data("model"),e.each(s,function(s,o){$input=e('input[name="'+model+"["+s+']"]'),$input.closest(".form-group").addClass("has-error").find(".help-block").html(o.join(" & "))})},e.fn.clear_previous_errors=function(){e(".form-group.has-error",this).each(function(){e(".help-block",e(this)).html(""),e(this).removeClass("has-error")})}}(jQuery),$(function(){$("#shozoku_search").click(function(){$("#select_shozoku_modal").modal("show")})}),$(function(){$("#kouteimaster_\u6240\u5c5e\u30b3\u30fc\u30c9").keydown(function(e){if(9==e.keyCode&&!e.shiftKey){var s=$("#kouteimaster_\u6240\u5c5e\u30b3\u30fc\u30c9").val();jQuery.ajax({url:"/kouteimasters/ajax",data:{id:"kouteimaster_\u6240\u5c5e\u30b3\u30fc\u30c9",kouteimaster_shozoku_code:s},type:"POST",success:function(e){$("#shozoku_name").text(e.shozoku_name),console.log("getAjax kouteimaster_\u6240\u5c5e\u30b3\u30fc\u30c9:"+e.shozoku_name)},failure:function(){console.log("kouteimaster_\u6240\u5c5e\u30b3\u30fc\u30c9 keydown Unsuccessful")}})}})}),$(function(){$("input[maxlength]").maxlength()});