var button_adudio = new Audio(
  'https://monoame.com/awi_class/ballsound/click14.wav'
)

var screen_adudio = new Audio(
  'https://monoame.com/awi_class/ballsound/click18.wav'
)

var home_adudio = new Audio(
  'https://monoame.com/awi_class/ballsound/click23.wav'
)

var wiggle_adudio = new Audio(
  'https://monoame.com/awi_class/ballsound/phonevi.mp3'
)

$('.i5').click(function () {
  $('.phone').css('width', '')
  $('.screen').css('height', '')
  $('.phonename').text($(this).text())
  button_adudio.play()
})

$('.i5s').click(function () {
  $('.phone').css('width', '250px')
  $('.screen').css('height', '420px')
  $('.phonename').text($(this).text())
  button_adudio.play()
})

$('.i6').click(function () {
  $('.phone').css('width', '270px')
  $('.screen').css('height', '440px')
  $('.phonename').text($(this).text())
  button_adudio.play()
})

$('.i6s').click(function () {
  $('.phone').css('width', '300px')
  $('.screen').css('height', '480px')
  $('.phonename').text($(this).text())
  button_adudio.play()
})

let page = 0

$('.screen').click(function () {
  page = page + 1
  if (page > 2) {
    page = 0
  }
  $('.pages').css('left', '-' + page * 100 + '%')
  screen_adudio.play()
})

$('.button').click(function () {
  page = 0
  $('.pages').css('left', '-' + page * 100 + '%')
  home_adudio.play()
})

$('.turn').click(function () {
  $('.phone').css('transform', 'rotate(360deg)')
})

let wiggletime = 21
setInterval(function () {
  if (wiggletime <= 20) {
    wiggletime += 1
    if (wiggletime % 2 == 0) {
      $('.phone').css('left', '-30px')
    } else {
      $('.phone').css('left', '30px')
    }
    if (wiggletime == 21) {
      $('.phone').css('left', '0px')
    }
  }
}, 60)

$('.wiggle').click(function () {
  wiggletime = 0
  wiggle_adudio.play()
})
