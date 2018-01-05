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
			<li> Option 1: Pick up a bike at a hub nearby, bring it to destination, walk to destination (duration 10 mins, cost $0)</li> 
			<li> Option 2: Walk to a out-of-hub bike, bring to a destination hub, walk to destination (duration 15 mins, credit 75 cents) </li> 
			<li> Option 3: Pick bike up at a hub, ride to destination, park at front door at any rack (duration 7 mins, $1 cost) </li> 

		</ul> 

		Given such options, the user picks the the option based on time and cost, and the app reserves the bike, 
		provides walking directions to the bike, riding directions to the locking area, and final walking directions to your destination. `

	},
	{ 
		videPath: "",
		name: "Olive Us Care", 
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
		name: "Sleep_Apnea__Diagnosis_-_App_Dev", 
		author: ["Om Bhatt"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/sleepsoft.png", 
		desc: `Currently, many Canadians wait a long time to book a night at a sleep clinic 
		to diagnose sleep-related problems such as sleep apnea. Much of the information gained through these sleep 
		tests can be done easily at home using technology on your phone, with minimal external hardware (a simple microphone, for ex). 
		Track a person’s breathing as they sleep with a microphone (up to 8 hours), analyze the data for snoring, 
		breathing rate and long pauses in breathing which could indicate sleep apnea, and then provide analysis such as:<br><br> 

		<ul> 
			<li> Snoring (yes/no) and duration of snoring; Breathing rate; Pauses in breathing (apneic spells) and other relevant metrics </li> 
			<li> Some basic hardware may be provided by Major League Hacking, but participants may require a microphone, or some way to create their own way of recording data accurately</li> 
			<li> Bonus point if smart phone accelerometer is incorporated (ie: phone attached to person with armband) to assess for movement during sleep </li> 
			<li> Analysis can be in real-time or post-hoc </li> 

		</ul> 

		<br> `		

	}, 	

	{ 
		videPath: "",
		name: "Sleep_Apnea_Diagnosis_-_REM_Sleep_Hardware_Challenge", 
		author: ["Om Bhattt"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/sleephard.png", 
		desc: `Currently, many Canadians wait a long time to book a night at a sleep clinic to diagnose 
		sleep-related problems such as sleep apnea. Much of the information gained through these sleep tests can be done easily at 
		home using technology on your phone, with minimal external hardware (a simple EMG sensor, for ex). Eye movements, 
		in particular, can be used to detect when a patient has entered REM sleep, which is the most restful sleep and also the time 
		for memory formation. Eye movements can be picked up by an EMG sensor, such as the "Myoware" or the Muse headband. <br><br> 

		<ul> 
			<li> Develop a system (with Muse or Myoware) to collect data of a person moving their eyes and 
			then develop an algorithm to figure out whether a person's 
			eyes are moving or not using machine learning techniques  </li> 
			<li> OR develop any other system to determine if a patient is in REM sleep or not </li> 
		</ul> `
	},
	{ 
		videPath: "",
		name: "Athlete_Interface_For_Sprint_Canoe/Kayak", 
		author: ["Stephen Tullis"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/kayak.png", 
		desc: `Sprint canoe and kayak are Olympic Sports that Canada traditionally does well in. However, there is currently very little technology 
		in the sport. My group has developed instrumental paddles to measure blade forces and orientation, 
		currently used in research. The objective is to provide 
		real time data such as: <br> <br> 

		<ul> 
			<li> Boatspeed</li> 
			<li> Stroke rate </li> 
			<li> Time profiles: propulsive force, efficiency </li> 
			<li> Stroke average: total force, propulsive force, efficiency  </li> 
		</ul> `
	},

	{ 
		videPath: "",
		name: "Pocket_Size_Mobile_Personal_Amplifier", 
		author: ["Anick Lamarche"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/amp.png", 
		desc: `A <b> pocket sized mobile personal amplifier </b> where you can amplify your voice where you go, so it is extremely useful 
		for presentations, teaching, and talking over lots of noise. <br><br> 

		Some important criteria: 
		<ul> 
			<li> Only amplification of the voice (ie: only amplifying your voice and not the noise around you) </li> 
			<li> Noise cancellation built in </li> 
			<li> Cosmetically appealing </li> 
			<li> Versatile and multiplatform </li> 
		</ul> `
	},

	{ 
		videPath: "",
		name: "Health_Care_GPS_For_Youth", 
		author: ["Anick Lamarche"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/healthcaregps.png", 
		desc: `A fun and safe environment that helps youth track health related resources, appointments, short term and long term care plans. 

		Important Criteria: 
		<ul> 
			<li> Needs to be appealing to youth</li> 
			<li> Simple and intuitive </li> 
			<li> Encrypted (as it will hold private information such as prescriptions and passport-like information such as medical history and allergies)</li> 
		</ul> `
	}, 
	{ 
		videPath: "",
		name: "Voice_Analyzer", 
		author: ["Anick Lamarche"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/voiceuse.png", 
		desc: `Personal device that indicates patterns of voice, measures of timings on voice (like Spire/FitBit/BellaBeat Apps), loudness and lets individuals know that they have reached 
		their goals and/or their limits.  Currently, voice dosimeters are extremely complicated and not easily worn. 
		`
	}, 
	{ 
		videPath: "",
		name: "Virtual_World_Game", 
		author: ["Anick Lamarche"], 
		year: 2018, 
		filePath: "", 
		imgPath: "images/2018/game.png", 
		desc: ` Virtual World Game like minecraft, which patients will need to accomplish tasks to motivate compliance to therapeutic exercises while also making it fun. <br><br> 

		Important Criteria: 
		<ul> 
			<li> Needs to be interactive </li> 
			<li> Record voice </li> 
			<li> Accept voice commands and offer rewards </li> 
			<li> May be adapted by clinicians to set goals/task thresholds </li> 
			<li> May be adapted to various age groups, but focus for kids </li> 
		</ul> 
		`
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
