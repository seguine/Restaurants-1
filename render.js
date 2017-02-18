          var showC = function showComments () {
            //Réinitilise l'élèment résultat
            $('#resultat').empty();
            for (var i in liste){
              //déclare une variable string
                var str = '<table id="individuel"><tr>'
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
                  '</tr></table>';

                  $('#resultat').append(str);

                  for (var j in liste[i].reviews){
                    //cette opération permet de formater l'heure du commentaire
                    var heure;
                    var date = new Date(liste[i].reviews[j].time);
                    if (date.getMinutes()<10){
                      heure = date.getHours()+":"+"0"+date.getMinutes();
                    } else {
                      heure = date.getHours()+":"+date.getMinutes();
                    }

                      var comstr = '<table class="comment"><tr>'+
                      '<td id ="auteur"><h4>'+liste[i].reviews[j].author_name+'</h4></td>'+
                      '<td id="comment_time">'+ heure + '</td></tr>'+
                      '<tr><td id="comment_text"><h4>Commentaire</h4>'+liste[i].reviews[j].text+'</td></tr>'+
                      '<tr><td id="visit"><h4>Visite</h4>'+liste[i].reviews[j].relative_time_description+'</td>'+
                      '</tr></table>';

                      $('#resultat').append(comstr);
                    }
                }
            };

var showComments = function showHide() {
                var x = document.getElementsByClassName('comment'),i;
                for (i in x){
                  if (x[i].style.display === 'none') {
                      x[i].style.display = 'block';
                  } else {
                      x[i].style.display = 'none';
                  }
                }
            }
