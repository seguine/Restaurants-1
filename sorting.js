$(function() {
    $('#sorting button').click(function() {
        var id = $(this).attr('id');
        var asc = (!$(this).attr('asc')); // switch the order, true if not set

        // set asc="asc" when sorted in ascending order
        $('#sorting button').each(function() {
            $(this).removeAttr('asc');
        });
        if (asc) $(this).attr('asc', 'asc');

        sortResults(id, asc);
    });

    showResults();
});

function sortResults(prop, asc) {
    liste = liste.sort(function(a, b) {
        if (asc) return (a[prop] > b[prop]);
        else return (b[prop] > a[prop]);
    });
    showResults();
}

var render = function showResults () {
  for (var i in liste)
    $('#resultat').append(
      '<table id="individuel"><tr>'
          +'<td id="place">'+'<img src="http://maps.googleapis.com/maps/api/staticmap?center=' + liste[i].geometry.location.lat + ',' + liste[i].geometry.location.lng + '&zoom=14&size=150x150&markers=color:tangerine|size:lrg|label:A|' + liste[i].geometry.location.lat + ',' + liste[i].geometry.location.lng + '&sensor=false" />' +'</td>'
          +'<td id="icon">'+'<img src='+liste[i].icon+' width="64" height="48"/>'+'</td>'
          +'<td id="infos">'+'<h4>'+liste[i].name+'</h4>'+
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
                  liste[i].opening_hours.weekday_text[6]+'</td>'+
              '<td id="rating">'+'<img src="img/star.png" height="35px" /><br/>'+liste[i].rating+'</td>'+
        '</tr></table>');
  };
