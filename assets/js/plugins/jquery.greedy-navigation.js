/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
* Refs are refreshed on each update so Turbo body/masthead swaps stay valid.
*/

var $nav, $btn, $vlinks, $vlinks_persist_tail, $hlinks;
var breaks = [];

function refreshNavRefs() {
  $nav = $('#site-nav');
  $btn = $('#site-nav > button');
  $vlinks = $('#site-nav .visible-links');
  $vlinks_persist_tail = $vlinks.children("*.persist.tail");
  $hlinks = $('#site-nav .hidden-links');
}

function resetGreedyNav() {
  breaks = [];
  refreshNavRefs();
  if ($hlinks && $hlinks.length) {
    // Put any leftover hidden items back before measuring
    $hlinks.children().appendTo($vlinks);
    $btn.addClass('hidden').removeClass('close');
    $hlinks.addClass('hidden');
  }
  updateNav();
}

function updateNav() {
  refreshNavRefs();
  if (!$nav.length || !$vlinks.length) {
    return;
  }

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

      // Show the dropdown btn
      $btn.removeClass("hidden");
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

$(document).on('click', '#site-nav > button', function () {
  refreshNavRefs();
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

refreshNavRefs();
updateNav();
