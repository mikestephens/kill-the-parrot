$('td').each(function(){ 
  if($(this).text().includes('parrot')){
    var form = $(this).parents('tr').find('form');
    $.post(form.attr('action'), form.serialize());
  }
});
