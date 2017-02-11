var render = function() {
  for(i=0;i<180;i++)
    $(".resultat").append(
        '<table id="individuel"><tr>'+
                  '<td id="place">'+'<img src="http://maps.googleapis.com/maps/api/staticmap?center=' + liste[i].geometry.location.lat + ',' + liste[i].geometry.location.lng + '&zoom=12&size=150x150&markers=color:tangerine|size:lrg|label:H|' + liste[i].geometry.location.lat + ',' + liste[i].geometry.location.lng + '&sensor=false" />' + '</td>'+
                  '<td id="icon">'+'<img src='+liste[i].icon+' width="64" height="48"/>'+'</td>'+
                  '<td id="infos">'+'<h4>'+liste[i].name+'</h4>'+
                                  liste[i].address_components[0].long_name+' '+
                                  liste[i].address_components[1].long_name+'<br/>'+
                                  liste[i].address_components[3].long_name+', '+
                                  liste[i].address_components[5].long_name+'<br/>'+
                                  liste[i].address_components[6].long_name+', '+
                                  liste[i].address_components[7].long_name+'<br/>'+
                                  liste[i].formatted_phone_number+'<br/>'+
                                  '<a href="'+liste[i].website+'" target="_blank">'+'Site web'+'</a>'+'</td>'+
                  '<td id="heures">'+liste[i].opening_hours.weekday_text[0]+'<br/>'+
                                  liste[i].opening_hours.weekday_text[1]+'<br/>'+
                                  liste[i].opening_hours.weekday_text[2]+'<br/>'+
                                  liste[i].opening_hours.weekday_text[3]+'<br/>'+
                                  liste[i].opening_hours.weekday_text[4]+'<br/>'+
                                  liste[i].opening_hours.weekday_text[5]+'<br/>'+
                                  liste[i].opening_hours.weekday_text[6]+
                '<td id="rating">'+'<img src="img/star.png" height="35px" /><br/>'+liste[i].rating+'</td>'+
      '</tr></table>');
};





/*latest
'<td id="place">'+'<img src="http://maps.googleapis.com/maps/api/staticmap?center="+liste[i].geometry.southwest.lat+','+liste[i].geometry.southwest.lng+"&zoom=12&size=150x150&markers=color:green|size:mid|label:H|"+liste[i].geometry.southwest.lat+','+liste[i].geometry.southwest.lng+"&sensor=false" />'+'</td>'+
























/*
'<td id="place">'+'<img src='+'http://maps.googleapis.com/maps/api/staticmap?center='+liste[i].geometry.southwest.lat+','+liste[i].geometry.southwest.lng+'&zoom=12&size=150x150&markers=color:green|size:mid|label:H|'+liste[i].geometry.southwest.lat+','+liste[i].geometry.southwest.lng+'&sensor=false''/></td>'+

/*
<img src="
http://maps.googleapis.com/maps/api/staticmap?center=
46.9070919481631
,
0.243929350189987
&zoom=12&size=150x150&markers=color:green|size:mid|label:H|
46.9070919481631
,
0.243929350189987
&sensor=false
"/>





























/*

http://maps.googleapis.com/maps/api/staticmap?center=46.9070919481631,0.243929350189987&zoom=6&size=400x400&markers=color:green|size:mid|label:H|46.9070919481631,0.243929350189987&sensor=false

http://maps.googleapis.com/maps/api/staticmap?center=46.9070919481631,0.243929350189987&zoom=6&size=400x400&markers=color:green|size:mid|label:H|46.9070919481631,0.243929350189987&sensor=false




<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.1831676518586!2d-75.69174798444381!3d45.425808879100536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69704635bc4dae47!2sNovotel+Ottawa!5e0!3m2!1sen!2sus!4v1486848446032" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>

/*                function displayMapAt(lat, lon, zoom) {
                        $("#map")
                                .html(
                                        "<iframe id=\"map_frame\" "
                                                + "width=\"100%\" height=\"600px\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" "
                                                + "src=\"https://www.google.sk/maps?f=q&amp;output=embed&amp;source=s_q&amp;hl=sk&amp;geocode=&amp;q=https:%2F%2Fwww.google.sk%2Fmaps%2Fms%3Fauthuser%3D0%26vps%3D5%26hl%3Dsk%26ie%3DUTF8%26oe%3DUTF8%26msa%3D0%26output%3Dkml%26msid%3D205427380680792264646.0004fe643d107ef29299a&amp;aq=&amp;sll=48.669026,19.699024&amp;sspn=4.418559,10.821533&amp;ie=UTF8&amp;ll="
                                                + lat + "," + lon
                                                + "&amp;spn=0.199154,0.399727&amp;t=m&amp;z="
                                                + zoom + "\"" + "></iframe>");}
                '<iframe src="'+liste[i].url+'"></iframe>'+'</td>'+







/*                '<td id="place">'+'<iframe width="200" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="'+liste[i].url+'"></iframe>'+'</td>'+
*/


/*liste[i].website+'</td>'+*/

/*
'<td id="place">'+'<img src=">'+'http://www.zorrodesign.com/images/karo.png'+'<"/>'+'</td>'+
*/

/*
for (i=0;i<backgroundImage.length;i++) {
    document.write("<img src='" + backgroundImage[i] + "' width="160" height="120"/><span>" + backgroundImage[i] + "</span>");
}*/

/* Better !
var render = function() {
  for(i=0;i<180;i++)
    $(".resultat").append(
        '<table>'+
          '<tr>'+
            '<td id="nom">'+liste[i].name+'</td>'+
            '<td id="adresse">'+liste[i].formatted_address+'</td>'+
            '<td id="tel">'+liste[i].formatted_phone_number+'</td>'+
            '<td id="rating">'+liste[i].rating+'</td>'+
      '</tr></table>');
};
*/

/* First good !
var render = function() {
  for(i=0;i<180;i++)
    $(".resultats").append($(
          "<div>"+"<table>"+"<tr>"+
              "<td>"+liste[i].name+"</td>"+
              "<td>"+liste[i].formatted_address+"</td>"+
              "<td>"+liste[i].formatted_phone_number+"</td>"+
              "</tr>"+"</table>"+"</div>"));
};
*/
