let ready;
ready = function() {

  /*
  *
  *
  * Navigation
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

  /*
  *
  *
  * Sidebar Collapse
  *
  *
  * */
  // let nav_collapse = $('#collapse-aside');
  // let sidebar = $('.sidebar');
  // let main = $('.main, .navbar');
  //
  // nav_collapse.on('click', function(){
  //
  //   $(this).addClass('hidden-aside');
  //   sidebar.removeClass('d-sm-block').addClass('d-none');
  //   main.removeClass('col-md-10').addClass('col-md-12');
  //
  //
  //   return false;
  // })
  let nav_collapse = $('#collapse-aside');
  let sidebar = $('.sidebar');
  let main = $('.main, .navbar');

  $(nav_collapse).on('click', function () {
    main.toggleClass('col-md-12');
    sidebar.toggleClass('hidden');
    return false;
  });



};
$(document).on('turbolinks:load', ready);

