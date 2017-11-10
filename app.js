$(function() {
    var list = $('<ul>');
    $('#root').append(list);
    var point = $('<li>');
    list.append(point);
    var txt = $('<span>').text("Сделать задание #3 по web-программированию");
    point.append(txt);
    var button1 = $('<button>');
    point.append(button1.text("Удалить"));
    button1.click(function() {
	$(this).parent().detach();
    });
    var input1 = $('<input id="add_task_input">');
    var button2 = $('<button id="add_task">');
    $('#root').append(input1);
    $('#root').append(button2.text("aaa"));
    button2.click(function() {
        point = $('<li>');
        list.append(point);
        txt = $('<span>').text(document.getElementById("add_task_input").text);
        point.append(txt);
        button1 = $('<button>');
        point.append(button1.text("Удалить"));
        button1.click(function() {
	    $(this).parent().detach();
        });	
    });
   
});