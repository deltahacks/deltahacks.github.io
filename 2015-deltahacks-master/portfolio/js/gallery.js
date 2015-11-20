// append one example into the specified markup
function appendExample(example, whereToAppend){
	var icon = $('<div></div>')
					.addClass('example')
					.attr('id', example.name)
					.append($('<div></div>')
						.addClass('picture')
						.append($('<img />')
							.attr({
								src: example.imgPath,
								alt: example.name
							})
						)
					)
					.append($('<div></div>')
						.addClass('info')
						.append($('<p></p>')
							.addClass('name')
							.append(example.name.replace(/_/g, ' '))
						)
						.append($('<p></p>')
							.addClass('author')
							.append(function(){
								var string = "";
								$.each(example.author, function(index, auth) {
									string += '> ' + auth;
									if (index != example.author.length-1)
										string += "<br/>";
								});
								return string;
							})
						)
						.append($('<span></span>')
							.addClass('video')
							.append($('<a></a>')
								.attr({
									rel: 'prettyPhoto',
									href: example.videoPath
								})
								.html('&nbsp')
							)
						)
					)
	$(whereToAppend).append(icon);
}
// resize various markup and font size whenever the windoes is resized
function resize() {
	var containerWidth = parseFloat($(".container").width());
	var containerHeight = containerWidth / 16 * 9;
	var exampleWidth = parseFloat($(".example").width());
	var infoPadding = parseFloat($(".info").css("padding-top"));
	var infoWidth = parseFloat(exampleWidth) * (1-infoPadding/100);
	var arrowSize = containerHeight * 0.12
	var fontSize = arrowSize * 0.25
	var scrollHeight = (containerHeight + arrowSize)/2;
	var scrollPadding = containerHeight - scrollHeight;
	$("html").css({"font-size": fontSize})
	$(".container").height(containerHeight)
	$(".example").height(exampleWidth);
	$(".scroll").css({height: scrollHeight, "padding-top": scrollPadding, "font-size": arrowSize});

	if($(".example").width() < $(".example").height()) {
		$(".example").height($(".example").width());
	}
}

$(document).ready(function(){
	//append all examples to html
	var countExample = 0;
	var pageCount = 0;
	var presentPageNum = 0
	// output all the examples into html page
	for(var i=0; i<exampleData.length; i++){
		//if maximum of 6 examples is reached, cerate aother container
		if(countExample % 6 == 0){
			$(".container").append("<div class=\"subcontainer page" + (countExample/6) + "\"></div>");
			pageCount = countExample/6;
		}
		//copy the example object
		var example = exampleData[i];
		appendExample(example, ".page" + String(pageCount));
		// console.log(example)
		countExample ++;
	}
	// add credit
	// $(".container").append("<span class=\"contributor\">Buit by \
	// 	<a href=\"https://github.com/AlicJ\">Zichen Jiang</a>,\
	// 	 <a href=\"https://github.com/VCL1995\">Chang Liu</a></span>");
	$('.container').append($('<span></span>')
						.addClass('contributor')
						.append('Created by')
						.append($('<a></a>')
							.attr('href', 'http://zichenjiang.me/')
							.append(' Alic Jiang ')
						)
						.append('and')
						.append($('<a></a>')
							.attr('href', 'https://github.com/VCL1995')
							.append(' Chang Liu ')
						)
					)
	// assign dimentison to various markups
	resize();
	//hide other pages(subcontainers)
	for(i=1; i<=pageCount; i++){
		$(".page"+i).hide();
	}
	// prettyPhoto- pop up video
	$("a[rel^='prettyPhoto']").prettyPhoto({
		default_width: 720,
		default_height: 544,
		theme: 'pp_default',
		social_tools: " "
	});


	// STARTING HEAR ARE ALL JQUERY EVENT HANDLERS
	//next page button
	$(".right").click(function(){
		$(".page"+presentPageNum).hide()
		if(presentPageNum<pageCount){
			presentPageNum ++;
		}else{
			presentPageNum = 0;
		}
		$(".page"+presentPageNum).fadeIn();
	})
	//previous page button
	$(".left").click(function(){
		$(".page"+presentPageNum).hide();

		if(presentPageNum!=0){
			presentPageNum --;
		}else{
			presentPageNum = pageCount;
		}

		$(".page"+presentPageNum).fadeIn();
	})
	// individual example icon on click effect
	$(".example").click(function(){
		var exampleId = "#" + $(this).attr('id');
		var infoDisplayStatus = $(exampleId + " .info").css("display");
		if(infoDisplayStatus == "none"){
			$(exampleId + " .info").fadeIn("fast");
		}else{
			$(exampleId + " .info").fadeOut("fast");
		}
	})
	// individual exmaple icon hover effect
	// $(".example").hover(
	// 	function() {
	// 		var exampleId = "#" + $(this).attr('id');
	// 		$(exampleId + " .info").fadeIn("fast");
	// 	}, function() {
	// 		var exampleId = "#" + $(this).attr('id');
	// 		$(exampleId + " .info").fadeOut("fast");
	// 	}
	// )
	// page button hover effect
	$(".scroll").hover(
		function(){
			$(this).fadeTo("fast", 0.6);
		},function(){
			$(this).fadeTo("fast", 1);
		}
	)
	// resize most markups, including padding and font size for some
	// whenever the width of the window is changed
	$(window).bind("resize", function(){
		resize()
	})
})
