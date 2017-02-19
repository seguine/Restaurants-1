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
});


function sortResults(prop, asc) {
    liste = liste.sort(function(a, b) {
      //Comparer 2 restaurants basé sur la propriété en suposant que si le restaurant n'a pas la propriété il a une valeur de 0
      moi = 0;
      if (prop in a) moi = a[prop];
      lui = 0;
      if (prop in b) lui = b[prop];
      if (asc) {
        if(moi < lui) return -1;
        if(moi > lui) return 1;
        return 0;
      } else {
        if(moi < lui) return 1;
        if(moi > lui) return -1;
        return 0;
      }
    });
    showC();
}
