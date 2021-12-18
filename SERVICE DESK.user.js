// ==UserScript==
// @name         SERVICE DESK
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Archivo para asignar TSS
// @author       Roberto Molina
// @match        http://win-zfbgu04putd/CAisd/html/popup_frames.html?POPUP_URLIX=0+popupType=1
// @match        http://10.180.251.11/CAisd/html/popup_frames.html?POPUP_URLIX=0+popupType=1
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function(){

        setTimeout(nuevo, 2000);

        function nuevo(){
            var tss = encodeURIComponent($('#scrollbarDiv0 > center > div:nth-child(4) > table > tbody > tr:nth-child(1) > td:nth-child(1) > h2', window.frames[3].document).text().substring(26,40).replace(/(\r\n|\n|\r)/gm, ""));
            var apertura = encodeURIComponent($('#df_3_0', window.frames[3].document).text().substring(1,70).replace(/(\r\n|\n|\r)/gm, ""));
            var asignador = encodeURIComponent($('body > table > tbody > tr > td > table > tbody > tr > td.welcome_banner_login_info > span', window.frames[1].document).text().substring(31,70).replace(/(\r\n|\n|\r)/gm, ""));
            var tfe = encodeURIComponent($('#df_4_3', window.frames[3].document).text().substring(1,70).replace(/(\r\n|\n|\r)/gm, "")+".");
            var cliente = encodeURIComponent($('#df_4_0 > span', window.frames[3].document).text().replace(/(\r\n|\n|\r)/gm, "")+".");
            var servicio = encodeURIComponent($('#df_6_0_ztipo_servicio', window.frames[3].document).text().substring(1,70).replace(/(\r\n|\n|\r)/gm, "")+".");
            var estado = encodeURIComponent($('#df_0_3', window.frames[3].document).text().substring(1,70).replace(/(\r\n|\n|\r)/gm, ""));

            $('#dtltbl0 tr:last', window.frames[3].document).after('<tr valign="TOP"><th align="left" valign="baseline" class="detailro" scope="col" colspan="2"></th><th align="left" valign="baseline" class="detailro" scope="col">Ingeniero de Aprovisionamiento</th><th align="left" valign="baseline" class="detailro" scope="col"></th></tr><tr><td class="detailro" align="right" valign="top" colspan="2"></td><td class="detailro" align="center" valign="top"><select id="ing_apr" name="ing_apr"><option value="0">PERSONAL</option><option value="ALAN VALENCIA">ALAN VALENCIA</option><option value="ALEJANDRO CHAPARRO">ALEJANDRO CHAPARRO</option><option value="ANGELICA BUENDIA">ANGELICA BUENDIA</option><option value="BENJAMIN VELAZQUEZ">BENJAMIN VELAZQUEZ</option><option value="BRYAN BECERRA">BRYAN BECERRA</option><option value="CARLOS CORTES">CARLOS CORTES</option><option value="CHRISTIAN RODRIGUEZ">CHRISTIAN RODRIGUEZ</option><option value="DIEGO SALINAS">DIEGO SALINAS</option><option value="EDGAR SUAREZ">EDGAR SUAREZ</option><option value="GABRIELA GARCIA">GABRIELA GARCIA</option><option value="GERARDO VELAZQUEZ">GERARDO VELAZQUEZ</option><option value="GUSTAVO CRUZ">GUSTAVO CRUZ</option><option value="ISAI MENDOZA">ISAI MENDOZA</option><option value="IVAN HERNANDEZ">IVAN HERNANDEZ</option><option value="JUAN ORTEGA">JUAN ORTEGA</option><option value="RICARDO RODRIGUEZ">RICARDO RODRIGUEZ</option><option value="ROBERTO MOLINA">ROBERTO MOLINA</option></select></td><td class="detailro" align="left" valign="top"><a id="asignar_btn" name="asignar_btn" onCLick="mandar()" class="button enabledattr buttonEnabled" tabindex="100" ondragstart="return false" onmouseover="return ImgBtnMouseOver(0);" onmouseout="window.status = window.defaultStatus;return true;" href="#"><span>Asignar</span></a></td></tr>');
            $('body > script:nth-child(17)', window.frames[3].document).after('<script type="text/javascript">function mandar(){ var e = document.getElementById("ing_apr"); var asignado = e.options[e.selectedIndex].text; var http = new XMLHttpRequest(); var url = "https://docs.google.com/forms/d/1tbCp6o3E06-9SM5jsH2X9pSripZDOUfzfwg18icCH_0/formResponse?entry.1283218979='+tss+'&entry.1458567436='+apertura+'&entry.172711061='+asignador+'&entry.1280572469="+asignado+"&entry.2132353960='+tfe+'&entry.131783960='+cliente+'&entry.2058754769='+servicio+'&entry.879320756='+estado+'&entry.239504508=&entry.2099565669=&submit=Submit"; http.open("POST", url, true); http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); http.onreadystatechange = function(){if(http.readyState == 4) {alert("Se ha asignado satisfactoriamente"); }}; http.send(); }; </script>');
        }
    });
})();