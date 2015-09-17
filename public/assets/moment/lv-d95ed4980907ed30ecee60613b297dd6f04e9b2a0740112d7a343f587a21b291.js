//! moment.js locale configuration
//! locale : latvian (lv)
//! author : Kristaps Karlsons : https://github.com/skakri
//! author : Jānis Elmeris : https://github.com/JanisE
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("../moment")):"function"==typeof define&&define.amd?define(["moment"],n):n(e.moment)}(this,function(e){"use strict";function n(e,n,s){return s?n%10===1&&11!==n?e[2]:e[3]:n%10===1&&11!==n?e[0]:e[1]}function s(e,s,t){return e+" "+n(i[t],e,s)}function t(e,s,t){return n(i[t],e,s)}function _(e,n){return n?"da\u017eas sekundes":"da\u017e\u0101m sekund\u0113m"}var i={m:"min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),mm:"min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),h:"stundas_stund\u0101m_stunda_stundas".split("_"),hh:"stundas_stund\u0101m_stunda_stundas".split("_"),d:"dienas_dien\u0101m_diena_dienas".split("_"),dd:"dienas_dien\u0101m_diena_dienas".split("_"),M:"m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),MM:"m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")},d=e.defineLocale("lv",{months:"janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),weekdays:"sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, LT",LLLL:"YYYY. [gada] D. MMMM, dddd, LT"},calendar:{sameDay:"[\u0160odien pulksten] LT",nextDay:"[R\u012bt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"p\u0113c %s",past:"pirms %s",s:_,m:t,mm:s,h:t,hh:s,d:t,dd:s,M:t,MM:s,y:t,yy:s},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return d});