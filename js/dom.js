var colors = ['red',
  'orange',
  'green',
  'blue',
  'darkmagenta',
  'deepskyblue',
  'darkseagreen',
  'fuchsia',
  'navy',
  'saddlebrown'
]


function onCreateBox() {
  var cnt = Number($('input[name="cnt"]').val());
  for (var i = 0; i < cnt; i++) {
    color = Math.floor(Math.random() * 10);
  
    $('.wrapper').append("<div class='number"+colors[color]+"'></div>")
  }
}

function onResetBox() {
  $('.wrapper').empty();
}












$('#btCreate').click(onCreateBox);
$('#btReset').click(onResetBox);