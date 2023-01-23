
$(function () {
  'use strict'

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder: 'sort-highlight',
    connectWith: '.connectedSortable',
    handle: '.card-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex: 999999,
    receive: function( event, ui ) {
       fetch('/update_status.php', {
        method: 'POST',
        dataType: 'json',
        body: JSON.stringify({
          id: $(ui.item[0]).data('task-id'),
          status: $(ui.item[0].parentElement).data('status')
        })
      })
    }
  })
  $('.connectedSortable .card-header').css('cursor', 'move')

})
