(function() {
	'use strict';

	function addTweetButton($session) {
			var $title = $session.find('h3'),
			$date = $title.find('.date'),
			title = $title[0].firstChild.data,
			hastag = $session.data('hashtag') || '#JSSophia',

			button = '<a href="https://twitter.com/share" class="twitter-share-button" data-via="JSSophia" ' +
				'data-lang="fr" data-size="large" data-count="none">Tweeter</a>',
			$button = $(button);
		
		$button.attr('data-text', 'Prochaine session: ' + hastag + ' le ' + $date.text() + ' -> jssophia.github.com');
		$title.after($button);
	}

	function addMeetupButton($session) {
		var $title = $session.find('h3'),
			meetup = $session.data('meetup'),
			
			button = '<a href="http://www.meetup.com/FranceJS/events/' + meetup + '/" class="mu-rsvp-btn">Meetup</a>',
			$button = $(button);

		$button.attr('data-event',  meetup);
		$title.after($button);
	}

	$(function() {

		var $sessions = $('#sessions'),
			$nextSession = $sessions.find('article').first();

		addTweetButton($nextSession);
		// addMeetupButton($nextSession);
	});


})();

