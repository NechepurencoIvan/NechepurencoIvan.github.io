$(function() {
    $('#build-table').click(function() {
        var my_table = $('<table border="1">');
        for (var i = 0; i < $('#numrows').val(); ++i) {
            var row = $('<tr>');
            for (var j = 0; j < $('#numcols').val(); ++j) {
                row.append($('<td>').text(i + ', ' + j));
            }
            my_table.append(row);
        }
        $('#my-table').append(my_table);
    });
    var list = $('<ul>');
    $('#root').append(list);
    var point = $('<li>');
    list.append(point);
    var text = $('<span>').text("Сделать задание #3 по web-программированию");
    point.append(text)
});