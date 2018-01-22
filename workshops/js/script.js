var EXAMPLES = [];
// EXAMPLES = [
// 	{
// 		year: 1234,
// 		exps: list of project objecs
// 	},
// 	...
// ]

var initCounter = 0;

var template = $(`<div class="icon">
			 		<div class="info">
				 		<div class="name"></div>
				 		<!-- <a href="" target="_blank">Talk to me on Slack!</a> -->
				 		<div><span class="time"> </span>at <span class="location"> </span></div>
				 		<div>Presented by: <span class="author"></span></div>
				 		<p class="desc"></p>
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
				$.each(exampleData, function(index, workshop) {
					var temp = $(template).clone();
					$(temp).find('.name').html(workshop.name);
					$(temp).find('.author').html(workshop.author);
					$(temp).find('.time').html(workshop.time);
					$(temp).find('.location').html(workshop.location);
					$(temp).find('.desc').html(workshop.desc);
					// $(temp).find('.slack').attr('href', "https://deltahacks4.slack.com/messages/" + workshop.slack);
					$(html).append(temp);
				});
				return html;
			}
		);
	$('#main').append(yearBlock);
}