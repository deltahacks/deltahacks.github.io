// If more examples/projects are to be added, 
// please add them at the END of exampleData
// If a new year's projects are added,
// add the new year to the TOP of yearData

var yearData =[
	2018
]

var exampleData = [
	{ 
		videPath: "",
		name: "Hamilton_Bike_Share", 
		author: ["McMaster ITE Student Chapter"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/Hamilton_Bike_Share.png", 
		desc: `An app that allows better tracking of SOBI Bikes that are used by residents all over Hamilton. 
		When a user enters desired destination, the app knows the user’s location and figures out the closest bike and/or hub. 
		The app presents the user with a variety of options: 

		<ul> 
			<li> Option 1: Pick up a bike at a hub nearby, bring it to destination, walk to destination (duration 10 mins, cost $0)
			<li> Option 2: Walk to a out-of-hub bike, bring to a destination hub, walk to destination (duration 15 mins, credit 75 cents) 
			<li> Option 3: Pick bike up at a hub, ride to destination, park at front door at any rack (duration 7 mins, $1 cost) 

		</ul> 

		Given such options, the user picks the the option based on time and cost, and the app reserves the bike, 
		provides walking directions to the bike, riding directions to the locking area, and final walking directions to your destination. `

	},
	{ 
		videPath: "",
		name: "Home_Care", 
		author: ["Olive Us Care"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/Home_Care.png", 
		desc: `A scheduling app that would allow volunteers and families to login to book, coordinate, 
		accept/decline and remind of visits up to 10 hours per month.  <br> <br> 

		This app would allow the client families and volunteers to directly communicate via login, 
		while protecting both the volunteers and clients personal contact info (email and phone #). `

	}, 

	{ 
		videPath: "",
		name: "Green_Venture", 
		author: ["Green Venture"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/Green_Venture.png", 
		desc: `Green Venture currently runs guided education programs of EcoHouse, 
		a converted 1850’s farmhouse. 
		The EcoHouse features displays on environmental themes, as well as historical information on the site. 
		We are looking for an app to combine these elements into a single tour. `

	}, 


	{ 
		videPath: "",
		name: "Sleep_Apnea__Diagnosis_-_Software", 
		author: ["Om Batt"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/sleepsoft.png", 
		desc: `Currently, many Canadians wait a long time to book a night at a sleep clinic to diagnose sleep-related 
		problems such as sleep apnea. 
		Much of the information gained through these sleep tests can be done easily at home using technology on your phone, or external hardware. 

		Track a person’s breathing as they sleep with a microphone (up to 8h), 
		analyze the data for breathing rate/pauses in breathing/snoring and then provide
		analysis such as: <br><br> 

		<ul> 
			<li> Analysis can be in real-time or post-hoc </li> 
			<li> Some basic hardware may be provided by Major League Hacking, but participants may require a microphone, or some way to create their own way of recording data accurately </li> 
			<li> Bonus point if smart phone accelerometer is incorporated (ie: phone attached to person with armband) 
		</ul> 

		<br> `		

	}, 	

	{ 
		videPath: "",
		name: "Sleep_Apnea_Diagnosis_-_Hardware", 
		author: ["Om Batt"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/sleephard.png", 
		desc: `Currently, many Canadians wait a long time to book a night at a sleep clinic to diagnose sleep-related 
		problems such as sleep apnea. 
		Much of the information gained through these sleep tests can be done easily at home using external hardware. <br><br>

		Track a person’s breathing and eye movements using Myoware/Muse technologies as patients sleep with a microphone (up to 8h), 
		analyze the data for breathing rate/pauses in breathing/snoring and then provide
		analysis such as: <br><br> 

		<ul> 
			<li> Analysis should be done post-hoc, so app should be able to store ~8h of data  
			<li> May require more hardware such as a bluetooth-enabled microcontroller, Muse/Myoware, and batteries
			<li> Some of this hardware may be provided by MLH
		</ul> `
	}



]
// New example format:
//	{
//		vid eoPath: url to youtube video or a image,
//		name: 		name of the project,
//		author: 	the author(s),
// 		year: 		2013
//	}
// Moreover, the sample picture of each example is named
// EXACTLY the same as the name of the example, with png format
// and is put under 'images' folder.
// The pictures are all squares, i.e., the width and height are
// the same, and should be bigger than 200px * 200px for better
// performance on various devices.