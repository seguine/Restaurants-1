var showC = function() {
  for(var i in liste){
        var htmlstr = '<table id="individuel"><tr>'+
            '<td id="place">'+'<img src="http://maps.googleapis.com/maps/api/staticmap?center=' + liste[i].geometry.location.lat + ',' +
            liste[i].geometry.location.lng + '&zoom=14&size=150x150&markers=color:tangerine|size:lrg|label:A|' + liste[i].geometry.location.lat +
            ',' + liste[i].geometry.location.lng + '&sensor=false" />' + '</td>'+
            '<td id="icon">'+'<img src='+liste[i].icon+' width="64" height="48"/>'+'</td>'+
            '<td id="infos">test'+'<h4>'+liste[i].name+'</h4>'+
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
            '<td id="rating">'+'<img src="img/star.png" height="35px" /><br/>'+liste[i].rating+'</td></tr>'+
            '<tr id="author">'+
            '<h4'+liste[i].reviews.author_name[1]+'</h4>'+
            '<td id="comment_time">'+new Date(liste[i].reviews.time[1])+'</td>'+
            '<tr id="comment_text"><h4>Commentaire</h4><br/>'+liste[i].reviews.text[1]+'</tr>'+
            '<tr id="visit"><h4>Visite</h4><br/>'+liste[i].reviews.relative_time_description[1]+'</tr>'
            '</table>';
//loop pour afficher les commentaires de chaque établissement. Les champs ne sont pas reconnu...
            for (var j in liste[i].reviews){
                htmlstr += '<table id="comment"><tr id="author">'+
                '<h4'+liste[i].reviews.author_name[j]+'</h4>'+
                '<td id="comment_time">'+new Date(liste[i].reviews.time[j])+'</td>'+
                '<tr id="comment_text"><h4>Commentaire</h4><br/>'+liste[i].reviews.text[j]+'</tr>'+
                '<tr id="visit"><h4>Visite</h4><br/>'+liste[i].reviews.relative_time_description[j]+'</tr>';
              }
          $(".resultat").append(htmlstr);
          }
};
