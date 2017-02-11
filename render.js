var render = function() {
  for(i=0;i<180;i++)
    $(".resultat").append(
        '<table id="individuel"><tr>'+
                '<td id="place">'+'<h4>'+liste[i].name+'</h4>'+
                            liste[i].address_components[0].long_name+' '+
                            liste[i].address_components[1].long_name+'<br/>'+
                            liste[i].address_components[3].long_name+', '+
                            liste[i].address_components[5].long_name+'<br/>'+
                            liste[i].address_components[6].long_name+', '+
                            liste[i].address_components[7].long_name+'</td>'+
                '<td id="contact">'+liste[i].formatted_phone_number+'<br/>'+
                            liste[i].website+'</td>'+
                '<td id="rating">'+liste[i].rating+'</td>'+
      '</tr></table>');
};

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
