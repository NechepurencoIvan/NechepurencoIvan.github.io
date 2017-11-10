$(function() {

    var list = $('<ul>');
    $('#root').append(list);
    var point = $('<li>');
    list.append(point);
    var txt = $('<span>').text("Сделать задание #3 по web-программированию");
    point.append(txt)
    var button1 = $('<button>')
    point.append(button1.text("Удалить"));
    button1.click(function() {
	point.detach()
    })
});