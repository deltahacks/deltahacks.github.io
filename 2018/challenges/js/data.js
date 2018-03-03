// If more examples/projects are to be added, 
// please add them at the END of exampleData
// If a new year's projects are added,
// add the new year to the TOP of yearData

var yearData =[
	2018
]

var exampleData = [
	{ 
		name: "Hamilton_Bike_Share", 
		author: "McMaster ITE Student Chapter", 
		year: 2018, 
		imgPath: "images/2018/Hamilton_Bike_Share.png", 
		slack: "C8P49J9DJ",
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
		name: "Olive_Us_Care", 
		author: "Olive Us Care", 
		year: 2018, 
		imgPath: "images/2018/Home_Care.png",  
		slack: "C8SJSDMG8",
		desc: `A scheduling app that would allow volunteers and families to login to book, coordinate, 
		accept/decline and remind of visits up to 10 hours per month.

		This app would allow the client families and volunteers to directly communicate via login, 
		while protecting both the volunteers and clients personal contact info (email and phone #). `

	}, 	
	{ 
		name: "Green_Venture", 
		author: "Green Venture", 
		year: 2018, 
		imgPath: "images/2018/Green_Venture.png",  
		slack: "C8UD9TT8D",
		desc: `Green Venture currently runs guided education programs of EcoHouse, 
		a converted 1850’s farmhouse. 
		The EcoHouse features displays on environmental themes, as well as historical information on the site. 
		We are looking for an app to combine these elements into a single tour. `

	}, 


	{ 
		name: "Sleep_Apnea__Diagnosis_-_App_Dev", 
		author: "Om Bhatt", 
		year: 2018, 
		imgPath: "images/2018/sleepsoft.png",  
		slack: "C8P12H9FD",
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
		name: "Sleep_Apnea_Diagnosis_-_REM_Sleep_Hardware_Challenge", 
		author: "Om Bhatt", 
		year: 2018, 
		imgPath: "images/2018/sleephard.png",  
		slack: "C8P12H9FD",
		desc: `Currently, many Canadians wait a long time to book a night at a sleep clinic to diagnose 
		sleep-related problems such as sleep apnea. Much of the information gained through these sleep tests can be done easily at 
		home using technology on your phone, with minimal external hardware (a simple EMG sensor, for ex). Eye movements, 
		in particular, can be used to detect when a patient has entered REM sleep, which is the most restful sleep and also the time 
		for memory formation. Eye movements can be picked up by an EMG sensor, such as the "Myoware" or the Muse headband. <br><br> 

		<ul> 
			<li> Develop a system (with Muse or Myoware) to collect data of a person moving their eyes and 
			then develop an algorithm to figure out whether a persons'' 
			eyes are moving or not using machine learning techniques  </li> 
			<li> OR develop any other system to determine if a patient is in REM sleep or not </li> 
		</ul> `
	},
	{ 
		name: "Athlete_Interface_For_Sprint_Canoe", 
		author: "Stephen Tullis", 
		year: 2018, 
		imgPath: "images/2018/kayak.png",  
		slack: "C8P12JYQ3",
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
		name: "Pocket_Size_Mobile_Personal_Amplifier", 
		author: "Anick Lamarche", 
		year: 2018, 
		imgPath: "images/2018/amp.png",  
		slack: "",
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
		name: "Health_Care_GPS_For_Youth", 
		author: "Anick Lamarche", 
		year: 2018, 
		imgPath: "images/2018/healthcaregps.png",  
		slack: "",
		desc: `A fun and safe environment that helps youth track health related resources, appointments, short term and long term care plans. 

		Important Criteria: 
		<ul> 
			<li> Needs to be appealing to youth</li> 
			<li> Simple and intuitive </li> 
			<li> Encrypted (as it will hold private information such as prescriptions and passport-like information such as medical history and allergies)</li> 
		</ul> `
	}, 
	{ 
		name: "Voice_Analyzer", 
		author: "Anick Lamarche", 
		year: 2018, 
		imgPath: "images/2018/voiceuse.png",  
		slack: "",
		desc: `Personal device that indicates patterns of voice, measures of timings on voice (like Spire/FitBit/BellaBeat Apps), loudness and lets individuals know that they have reached 
		their goals and/or their limits.  Currently, voice dosimeters are extremely complicated and not easily worn. 
		`
	}, 
	{ 
		name: "Virtual_World_Game", 
		author: "Anick Lamarche", 
		year: 2018, 
		imgPath: "images/2018/game.png",  
		slack: "",
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
	},
	{ 
		videoPath: "", 
		name: "Do_I_Have_This_Disease", 
		author: "Dr. David Chan", 
		year: 2018, 
		imgPath: "images/2018/iphoneclipart.png",  
		slack: "",
		desc: ` A consumer facing scientific calculator to calculate the probability of having a disease. 
		This project takes from an existing library of risk calculators (know2act.org by McMaster University) to 
		turn them into a consumer friendly App similar to an award winning iOS App called SnapDx Clinical (by SnapDx.co) which is 
		designed for physicians.`
	},
	{ 
		videoPath: "", 
		name: "Preventing_Roadkill", 
		author: "Sai Sudheer Guptha Gannavarapu", 
		year: 2018, 
		imgPath: "images/2018/duck.jpg",  
		slack: "",
		desc: `An app that can detect small objects near a car, and provide information and/or warnings to drivers based on potential 
		objects. This app would aim to reduce animal deaths (such as ducks, snakes, and puppies) due to cars.`
	},
	{ 
		videoPath: "", 
		name: "Alzheimers_Disease", 
		author: "Sai Sudheer Guptha Gannavarapu", 
		year: 2018, 
		imgPath: "images/2018/medication.jpg",  
		slack: "",
		desc: `The old aged people and patients who are suffering from Alzheimers disease 
		have to take a lot of medications and they used to forget what to take on when.
		This app reminds them at a particular time, what medication to take to ensure timely treatment plan.`
	}		



]