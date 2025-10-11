
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
				'scrollBar': true,
			});
		});

$(document).on('hidden.bs.modal', function () {
  $('body').removeClass('modal-open');
  $('body').css({
    overflow: 'visible',
    paddingRight: '0px'
  });
  $('html').css('overflow', 'visible');
});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

// tooltips
const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
	(el) => new bootstrap.Tooltip(el)
  );