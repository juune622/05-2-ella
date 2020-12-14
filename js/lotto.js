function onLucky() {
  /**
   * !아무리 머리를 더 굴려봐도 이 이상은 모르겠습니다 반복 막는거는 어렵네요.
   * !6개 숫자는 나오는데 정렬이 안되고 중복 잡는것을 모르겠습니다.
   */
  var lotto = []
  for (var j = 0; j <= 5; j++) {
    var numBers = Math.ceil(Math.random() * 45)
    lotto.push(numBers)


   
      $('.result-wrap').empty();
    $('.result-wrap').append('<div class="number yellow">' + lotto[0] + '</div>',
      '<div class="number red">' + lotto[1] + '</div>',
      '<div class="number grey">' + lotto[2] + '</div>',
      '<div class="number blue">' + lotto[3] + '</div>',
      '<div class="number green">' + lotto[4] + '</div>',
      '<div class="number green">' + lotto[5] + '</div>'
    )








  }
}





$('#btLucky').click(onLucky);

/* var cnt = Math.floor(Math.random()*50);
console.log(cnt) */