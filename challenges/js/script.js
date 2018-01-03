var EXAMPLES = [];
// EXAMPLES = [
// 	{
// 		year: 1234,
// 		exps: list of project objecs
// 	},
// 	...
// ]

var initCounter = 0;

$(document).ready(function() {
	genProjs();
	sidebarGen();
	mainGen()
	// setHeight();
});

// EVENT HANDLERS
// icon/sidebar listing click event
$(document).on('click', '.proj-li', function(event) {
	event.preventDefault();
	event.stopPropagation();
	console.log(event.target)
	$('.year-li.current').removeClass('current');
	$('.proj-li.current').removeClass('current');
	$(this).addClass('current');
	$('#main').hide();
	indivProjGen(event.target);
	$('#project').show();
});

// sidebar listing year click event
$(document).on('click', '.year-li', function(event) {
	event.preventDefault();
	var curYear = parseInt($(event.target).attr('year'));
	$('.year-li.current').removeClass('current');
	$('.proj-li.current').removeClass('current');
	$(this).addClass('current');
	mainGen(curYear);
});

// 
$(document).on('click', '.icon .picture, icon .picture img, .icon .name', function(event) {
	event.stopPropagation();
	var id = $(event.target).parents('.proj-li').attr('id');
	console.log(id);
	$("#sidebar #"+id).click();
});

$(document).on('click', '.backToMain', function(event) {
	event.preventDefault();
	$('#project').hide();
	$('#main').show();
});

// make #sidebar and #main the same height
function setHeight() {
	$('#sidebar, #main').css('height', '');
	var sideHei = $('#sidebar').innerHeight();
	var mainHei = $('#main').innerHeight();
	var maxHei = Math.max(sideHei, mainHei);
	$('#sidebar, #main').innerHeight(maxHei);
}

// make an array of year objects, which contains
// the year digits and the objects that belong to
// that year
function genProjs() {
	// go through the years
	$.each(yearData, function(index, yearDig) {
		var obj = {
			year: yearDig,
			exps: []
		}
		EXAMPLES.push(obj);
	});
	// go through the gloss examples
	$.each(exampleData, function(index, exp) {
		// match the years from EXAMPLE
		$.each(EXAMPLES, function(index, obj) {
			if (exp.year == obj.year) {
				// apparently obj is passed by reference
				obj.exps.push(exp);
			}
		});
	});
}

// Generate the sidebar navigation
function sidebarGen() {
	// go through the EXAMPLES list
	$.each(EXAMPLES, function(index, yearOfExp) {
		var list = $('<div></div>')
						.append($('<p></p>')
							.attr('year', yearOfExp.year)
							.addClass('year-li year')
							.append(yearOfExp.year)
						)
						.append(
							function() {
								var list = $('<ul></ul>');
								$.each(yearOfExp.exps, function(index, exp) {
									$(list)
										.append($('<li></li>')
												.append(exp.name.replace(/_/g, ' '))
												.attr('id', exp.name)
												.addClass('proj-li')
												.attr({
													id: exp.name,
													year: exp.year
												})
										)
								});
								console.log(list)
								return list;
							}
						);
		console.log(list);
		$('#sidebar').append(list);
	});
}

// generate the main gallery icons
function mainGen(curYear) {
	curYear = typeof curYear !== 'undefined' ? curYear : 0;
	// clean up #main and hide it for the fadein effect later on
	$('#main').html('');
	$('#main').hide();
	var yearBlock;
	// go through the EXAMPLES list
	if (curYear == 0) {
		$.each(EXAMPLES, function(index, yearOfExp) {
			yearBlock = projIconGen(yearOfExp);
		});
	}else{
		var result = $.grep(EXAMPLES, function(e) {
				return e.year == curYear;
			});
		result = result[0];
		yearBlock = projIconGen(result);
	}
	if (initCounter == 0) {
		$('#main').show();
		initCounter ++;
	}else{
		$('#main').fadeIn();
	}
}

function projIconGen(yearOfExp) {
	var yearBlock = $('<div></div>')
							.append(
								function() {
									// generate each icon
									var html = $('<div></div>');
									$.each(yearOfExp.exps, function(index, exp) {
										var icon = $('<div></div>')
														.attr({
															id: exp.name,
															year: exp.year
														})
														.addClass('icon proj-li')
														.append($('<div></div>')
															.addClass('picture')
															.append($('<img src="" alt="" />')
																.attr({
																	src: exp.imgPath,
																	alt: exp.name
																})
															)
														)
														.append($('<div></div>')
															.addClass('name')
															.append(exp.name.replace(/_/g, ' '))
														)
										$(html).append(icon);
									});
									return html;
								}
							);
	$('#main').append(yearBlock);
}

function indivProjGen(target) {
	// setHeight();
	var curYear = parseInt($(target).attr('year'));
	var curExp = $(target).attr('id');
	// console.log(curYear + '  ' + curExp);
	// match the year first
	var result = $.grep(EXAMPLES, function(e) {
		return e.year == curYear;
	});
	// get the first and only result
	result = result[0];
	console.log(result);
	// them match the example project
	var proj = $.grep(result.exps, function(e) {
		return e.name == curExp;
	});
	// get the first and only result
	proj = proj[0];
	// console.log(proj);
	// appending project data
	$('#project').find('.name h2').html(proj.name.replace(/_/g, ' '));
	$('#project').find('.author p').html(function(){
		var string = 'By ';
		$.each(proj.author, function(index, auth) {
			string += auth;
			if(index != proj.author.length - 1){
				string += ', '
			}
		});
		return string;
	});
	$('#project').find('.desc').html(proj.desc);
}