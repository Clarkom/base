$(document).ready(function(){

  /*
  *
  *
  * Bootstrap Collapse
  *
  *
  * */
  let selector = $('.nav-item > ul');

  selector.on('show.bs.collapse', function(){
    selector.collapse('hide');
  });
  selector.on('shown.bs.collapse', function () {
    $(this).parent().addClass('active-list')
  });
  selector.on('hidden.bs.collapse', function () {
    $(this).parent().removeClass('active-list')
  });

});

