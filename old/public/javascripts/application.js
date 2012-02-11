function initMenus() {
	$('ul.subsections').hide();
	$.each($('ul.sections'), function(){
		$('#' + this.id + '.expandfirst ul:first').show();
	});
	$('ul.sections li div').click(
		function() {
			var checkElement = $(this).next();
			var parent = this.parentNode.parentNode.id;

			if($('#' + parent).hasClass('noaccordion')) {
				$(this).next().slideToggle('normal');
				return false;
			}
			if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
				if($('#' + parent).hasClass('collapsible')) {
					$('#' + parent + ' ul:visible').slideUp('normal');
				}
				return false;
			}
			if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				$('#' + parent + ' ul:visible').slideUp('normal');
				checkElement.slideDown('normal');
				return false;
			}
		}
	

	);
	$('ul.sections li div.lastly').click(function() {$('ul.sections li div.lastly').removeClass('lastly')});
	$('ul.sections li div.notlast').click(function() {$('ul.sections li div.last').addClass('lastly')});
	


}
$(document).ready(function() {initMenus();});