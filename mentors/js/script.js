var EXAMPLES = [];
// EXAMPLES = [
// 	{
// 		year: 1234,
// 		exps: list of project objecs
// 	},
// 	...
// ]

var initCounter = 0;
var slackUrl = 'https://deltahacks4.slack.com/messages/'

var template = $(`<div class="icon">
			 		<div class="picture">
			 		</div>
			 		<div class="info">
				 		<p><span class="name"></span>
				 			<a class="slack" href="" target="_blank">Talk to me on Slack!</a>
				 		</p>
				 		<p class="desc"></p>
				 		<p>Skills: <span class="skills"></span </p>
			 		</div>
			 	</div>`);

$(document).ready(function() {
	projIconGen();
});

function projIconGen() {
	var yearBlock = $('<div></div>')
		.append(
			function() {
				// generate each icon
				var html = $('<div></div>');
				$.each(exampleData, function(index, mentor) {
					var temp = $(template).clone();
					if (mentor.imgPath == "") {
						$(temp).find('.picture').css('background-image', "url(images/default.png)");
					}else {
						$(temp).find('.picture').css('background-image', "url("+mentor.imgPath+")");
					}
					$(temp).find('img').attr('alt', mentor.name);
					$(temp).find('.name').html(mentor.name);
					$(temp).find('.desc').html(mentor.desc);
					$(temp).find('.skills').append(mentor.skills.join(", "));
					if (mentor.slack.length < 1) {
						$(temp).find('.slack').remove();
					}else {
						$(temp).find('.slack').attr('href', slackUrl + mentor.slack);
					}
					$(html).append(temp);
				});
				return html;
			}
		);
	$('#main').append(yearBlock);
}