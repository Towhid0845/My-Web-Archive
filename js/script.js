
// function copy(id) {
//   let quoteText = document.querySelector(id);

//   let text = quoteText.textContent;
//   navigator.clipboard.writeText(`${text}`);
//   alert("HTML & CSS copied");
// }


function copy(id) {
  let quoteText = document.querySelector(id);

  let text = quoteText.textContent;

  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  alert("Code Copied");
}


// button

$(".btn_6").click(function () {
  $(this).addClass("active").delay(300).queue(function (next) {
    $(this).removeClass("active");
    next();
  });
});



// scroll to top js
var btn = $(".scroll-to-top");

$(window).scroll(function () {
  btn.toggleClass("show", $(window).scrollTop() > 300);
});

btn.click(function (e) {
  e.preventDefault();
  if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
    $("html").animate({
      scrollTop: 0,
    },
      800
    );
  } else {
    $("html, body").animate({
      scrollTop: 0,
    },
      0
    );
  }
});