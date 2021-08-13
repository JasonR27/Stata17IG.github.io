let stataTheme = true

function darkmode() {
  if (stataTheme) {
    $(function () {
      $('body').removeClass('StataTheme')
      $('body').addClass('dark')
      $('#navbar').removeClass('navMenuColors')
      $('#navbar').addClass('navMenuColorsDarkTheme')
      $('#titles').removeClass('mainSectionTitles')
      $('#titles').addClass('mainSectionTitlesDarkTheme')
      $('.main-section').css({"border-left":"50px ridge silver"})
      $('.main-section').css({"border-bottom":"50px ridge silver"})
      $('.main-section').css({"border-right":"50px ridge silver"})
      $('.main-section').css({"border-top-right":"50px ridge silver"})
      $('.main-section').css({"border-top-left":"50px ridge silver"})
    })
    stataTheme = !stataTheme
  } else {
    $(function () {
      $('body').removeClass('dark')
      $('body').addClass('StataTheme')
      $('#navbar').removeClass('navMenuColorsDarkTheme')
      $('#navbar').addClass('navMenuColors')
      $('#titles').removeClass('mainSectionTitlesDarkTheme')
      $('#titles').addClass('mainSectionTitles')
      $('.main-section').css({"border-left":"50px ridge #172bb9"})
      $('.main-section').css({"border-bottom":"50px ridge #172bb9"})
      $('.main-section').css({"border-right":"50px ridge #172bb9"})
      $('.main-section').css({"border-top-right":"50px ridge #172bb9"})
      $('.main-section').css({"border-top-left":"50px ridge #172bb9"})
    })
    stataTheme = !stataTheme
  }
}
  
// border-left: 50px ridge $primaryBorder;
//   border-bottom: 50px ridge $primaryBorder;
//   border-right: 50px ridge $primaryBorder;
//   border-top-right-radius: 150px 150px;
//   border-top-left-radius: 150px 150px;