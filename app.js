var items = {
  list : []
};

function renderList (items, element) {
  var itemList = items.list.map(function (item) { 
    return '<li>' +
        '<span class="shopping-item">' + item + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>'+
          '</button>' +
        '</div>' +
      '</li>';
    });
element.html(itemList);

};

function addItem (items, item) {
  items.list.push(item);
}


$('#js-shopping-list-form').submit(function(event){
  event.preventDefault();
  addItem(items, $('#shopping-list-entry').val());
  renderList(items, $('.shopping-list'));
});

// function checkUncheck (item) {
//   item.closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
// }

$(document.body).on('click', '.shopping-item-toggle', function(event){
    event.preventDefault();
    $(this)
    .closest('li')
    .find('.shopping-item')
    .toggleClass('shopping-item__checked');
});

// $('.shopping-item-delete').on('click', function deleteItem (item) {
//     event.preventDefault();
//     $(this)
//       .closest('li')
//       .remove();
// });

$(document.body).on('click', '.shopping-item-delete', function (event) {
    event.preventDefault();
    $(this)
      .closest('li')
      .remove();
    var itemToRemove = items.list
      .indexOf($(this)
          .closest('li')
          .find('.shopping-item')
          .text());
    delete items.list[itemToRemove];
});

$(document).ready