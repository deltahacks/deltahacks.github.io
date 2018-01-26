// If more examples/projects are to be added, 
// please add them at the END of exampleData
// If a new year's projects are added,
// add the new year to the TOP of yearData

var yearData =[
	2018
]

var exampleData = [
	{ 
		name: "Yervant Kulbashian", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAVYAAAAJGE2ZDc2NGU2LTkyNTUtNGM1ZC04MjliLWUwMTZjOTQzNmQ2Yg.jpg",
		desc: `<ul> 
					<li> Setting up an environment, best practices, code design</li>
					<li> High level design/concept and mechanism design </li>
					<li> Android/Mobile dev </li> 
			   </ul>`,
		skills: ["android", "solidity", "code design"],
		slack: "U8VB173M4"
	},
	{ 
		name: "Denis Milicevic", 
		imgPath: "images/oraclize.png",
		desc: `Contributed to a number of smart contracts, that cumulatively exceed a million transactions on the Ethereum network, 
		these include the Oraclize infrastructure, along with building the prototype contract the AmIOnTheFork contract was based off. 
		Creator of Oraclize's Proof-of-Identity DApp and E-Wallet, which uses Estonian Digital Citizen smart cards for verification
		 and allows them to use their card as a crypto wallet. Engages in bug bounty hunts, having found bugs in anything from smart contracts 
		 to Ethereum client software.`,
		skills: ["solidity", "react", "nodejs", "python"],
		slack: "U8W66AZ0S"
	},
	{ 
		name: "Audun Bjornerud Mo", 
		imgPath: "",
		desc: `Created the technology behind Xesto and its APIs. <br> Built the API Portal in react-redux with webpack.`,
		skills: ["nodejs", "react-redux"],
		slack: ""
	},	
	{ 
		name: "Pratik Mehta", 
		imgPath: "images/pratik.jpg",
		desc: `Created the technology behind Xesto and its APIs. <br> Built the API Portal in react-redux with webpack.`,
		skills: ["web"],
		slack: "U8XCE1AV6"
	},	
	{ 
		name: "Colin Grey", 
		imgPath: "images/colin.jpg",
		desc: `Business Analysis, Project Management, QA, HTML`,
		skills: ["business analysis", "project management", "QA", "web"],
		slack: ""
	},			
	{ 
		name: "Nermin Jasarevic", 
		imgPath: "",
		desc: ``,
		skills: ["web"],
		slack: ""
	},		
	{ 
		name: "Patrick Carter", 
		imgPath: "images/patrick.jpg",
		desc: `Python, Data Scientist`,
		skills: ["python", "data"],
		slack: ""
	},	
	{ 
		name: "Tomasz Drwięga", 
		imgPath: "images/tomasz.jpg",
		desc: `<ul> 
			<li>Rust - Core developer of Parity Ethereum Client, author of rust-web3 library. 
		Happy to help you build Rust backend services for your dapp (including webservers and REST APIs)</li> 
			<li> React - Long-time frontend developer, can help with any parts of frontend development (including build setup, html, css, 
				Vanilla JavaScript) and building Ethereum dapps with React+Redux stack. 
				Happy to introduce you to Parity's frontend toolchain (oo7) for rapid dapp prototyping and building. </li> 
			<li> I also have some experience with React Native.`,
		skills: ["solidity", "react", "react native", "parity"],
		slack: "U8V9U5UEL"
	},	
	{ 
		name: "Kemal Ahmed", 
		imgPath: "images/kemal.jpg",
		desc: `<ul> 
				 <li> front end developer at AT&T (Polymer.js / HTML / CSS) </li> 
				 <li>  runs own startup (Tornado.py / express.js / vue.js / MongoDB / Couchbase) </li> 
				 <li> came second in ryerson hackathon last year building android app with Firebase</li> 
			   </ul>`,
		skills: ["web", "Firebase"],
		slack: "U8VG27W2V"
	},			
	{ 
		name: "Ming", 
		imgPath: "images/mingyuan_li.png",
		desc: `<ul> 
					<li> Systems Architecture - architecting full stack from choosing backend technologies to middleware message queuing 
					mechanisms, to API design, to frontend technologies
					=>involved in the design and delivery of large scale electronic health information systems at eHealth Ontario during coop term. </ul> 
				<ul> Machine Learning - choosing machine learning algorithms
					=>co-founded Catalytics Inc (https://www.catalyticsinc.com) - currently developing an analytical 
					platform with hospitals to capture and analyze relevant patient information.</ul> 
				<ul> Java, HTML5, CSS3, javascript, jQuery, NodeJS, Android (native Java) </ul> 
			   </ul> `,
		skills: ["system architecture", "machine learning", "web", "NodeJS", "Android"],
		slack: "U8UFHTYP4"
	},		
	{ 
		name: "Ridhwan Chowdhury", 
		imgPath: "images/ridhwan.jpg",
		desc: `<ul> 
				<li> Python - Created a program that calculates a cumulative GPA based off of a students marks inputed into a simple notepad file</li> 
				</ul>`,
		skills: ["python"],
		slack: "U8V4S8Q7Q"
	},		


	{ 
		name: "Jeff Zagorac", 
		imgPath: "",
		desc: `<ul> 
<li>back-end: Java, C#, Kotlin, SQL Server, DB2, Kafka, Corda, SOAP, ReST, XML, JSON, SSL, OAuth2, JWT, Kerberos, WebSphere, Spring Boot, Bluemix, CloudFoundry, Docker: 10+ years experience developing back-end applications for RBC</li>
<li>front-end: HTML/CSS/JavaScript, JQuery, React: developed several employee-facing applications for use in RBC Branches </li>
<li>business areas of experience: Client Profile, Cash Management, Investments, Appointment Booking, Payments/Blockchain</li>
<li>DevOps: Git, SVN, Maven, Gradle, Ant, Jenkins, UCD, TFS, MSBuild, DynaTrace</li>
<li>GNU/Linux: passionate free software advocate and daily Linux user</li>
			   </ul>`,
		skills: ["web", "version control", "react", "kotlin"],
		slack: ""
	},		
	{ 
		name: "Jena Krukowski", 
		imgPath: "https://media.licdn.com/media/p/3/000/05a/225/1d44850.jpg",
		desc: `<ul> 
				<li>Java - created backend API for analytics project </li>
				<li>DB2 - database admin and design work  </li>
				<li>HTML/java - utilized for front-end web development</li>
			   </ul>`,
		skills: ["java", "database", "web"],
		slack: ""
	},		
	{ 
		name: "Nadya Zubkova", 
		imgPath: "https://media.licdn.com/media/p/7/005/014/36e/2301838.jpg",
		desc: `Python, Data Scientist`,
		skills: ["python", "data"],
		slack: ""
	},		
	{ 
		name: "Damian Tran", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAzfAAAAJGRiN2I1MmZmLTM2OTMtNDJlMS1hNDYyLTk4YTljZjQwODRmNQ.jpg",
		desc: `<ul> <li>Android
 Worked on 2 apps using Android camera and microphone APIs
	<ol> 
		<li> app integrating camera API and Google Barcode API, and custom web-scraping code to search pharma info from drug barcode ID in Android Studio
		<li> app implementing camera and microphone APIs for stealthy camera access in React Native
	</ol> 
<li> C/C++
Neural networks, genetic algorithms, and other AI/ML used for discovering cancer therapeutics (Masters Thesis), and for image processing (previous hackathon)
	<ol> 
		<li> Cross-platform GPU acceleration with OpenCL </li> 
		<li> Cross-platform UI engine design with SFML libraries </li> 
</ul> `,
		skills: ["android", "machine learning", "artificial intelligence"],
		slack: "U8UJ96RAR"
	},
	{ 
		name: "Matthew Nero", 
		imgPath: "",
		desc: `HTML/CSS/Javascript/Java`,
		skills: ["web", "java"],
		slack: ""
	},	

	{ 
		name: "Jimmy Wang", 
		imgPath: "",
		desc: `<ul> 
<li>HTML/CSS: Built my own website.</li>
<li>Node.js</li>
<ol>
<li> Knows Express, MongoDB.</li>
<li> Built a web app for caregivers of dementia. Electronic profile. Option to get email notifications.</li>
</ol>
<li>Javascript:  can help with web technologies, DOM, promises, async, JSON</li> 

APIs
<ol> 
<li> If you need help working with an API.</li>
<li> Built a Slack chat game</li>
</ol>
<li>Git</li>
- Can help you get setup. rebase flow, etc.	
</ul> `,
		skills: ["web", "java"],
		slack: ""
	},


	{ 
		name: "Marek Kotewicz", 
		imgPath: "",
		desc: `
		<ul> 
		<li>iOS: Worked as mobile application developer for 2 years</li>
		<li>Blockchain / Ethereum / Bitcoin: Worked for Ethereum Foundation on the first, C++ implementation of Ethereum in 2014. Joined parity at the end of 2015 to create parity-ethereum client in rust. Authored parity-bitcoin - full bitcoin implementation written in rust.</li>
		<li> Rust: Used this cutting edge technology in production since 2015. </li> 

		</ul>`,
		skills: ["parity", "solidity", "rust", "ios"],
		slack: ""
	},	
	{ 
		name: "Rakesh", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAVHAAAAJGQ0ZWQyYmVhLTNlZTQtNGVjMi04MTU1LWRjMjk2ZDBkODYxZQ.jpg",
		desc: `<ul> 
			<li>StackOverflow: Can look things up on StackOverflow and help you figure out how to fix your bugs</li>
			<li>Google: Can also search Google for API docs, tutorials, examples, and best practices to try and help you</li>
				</ul> 
				`,
		skills: [""],
		slack: ""
	},
	{ 
		name: "Khalid Asad", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAUlAAAAJGI3ZWMxYmZiLWNmMTctNDQzZS04YTExLWQ0YjNkMmY2YWZmMQ.jpg",
		desc: `<ul> 
		<li>C/C++/Java/Python: Worked with EmbeddedSystems/Multithreading/SocketProgramming/Scripting and made apps and relevant games.</li>
		<li>SQL/JavaScript/VBA/VB.NET/PowerShell: Experience working with these in a full time role.</li>
		</ul> `,
		skills: ["java", "python", "SQL"],
		slack: ""
	},	
	{ 
		name: "Jennifer Mangaliman", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAsDAAAAJGY2NWQxMzBhLWU0NDUtNGYyOS05MTlkLTg1MzQ1YzIwM2ZmYQ.jpg",
		desc: `
<ul>		
<li>User Experience Design</li>
<li>Business Systems Analysis</li>
<li>Web architectural patterns</li>
<li>Agile Methodology</li>
<li>Project Management</li>
<li>Product Ownership</li>
<li>Scrum Mastering</li>
</ul>`,
		skills: ["user experience, business systems, web architecture"],
		slack: "D8Z79M771"
	},	
	{ 
		name: "Patrick Laskowski", 
		imgPath: "https://media.licdn.com/media/AAMAAgDGAAwAAQAAAAAAAA2DAAAAJGJmYzBjYjkzLTY3ODQtNDQ5Ni04ZDU3LWU5MzI2NjJiYjA2Nw.jpg",
		desc: `<ul>
<li>General knowledge of Windows/Linux - I frequently use both</li>
<li>x86 assembly, C, C++ -  no professional experience but I frequently use these for hobby projects, primarily specializing in very low level code.</li>
<li>Java, Python - Coursework including AI for simple games such as Tic Tac Toe, big data applications, and the design and implementation of data structures and algorithms </li>
<li>OCaml - I held an undergraduate research position over the summer adding features to theorem proof assistant software written in OCaml.</li>
</ul>`,
		skills: ["assembly", "java", "python", "artificial intelligence"],
		slack: "U8UCV5FAR"
	},	

	{ 
		name: "Evan Skeete", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAh5AAAAJDQwYWY0MTBhLTc2NTYtNDMwZS04MzNkLWNiMmExYjNhZmUzOA.jpg",
		desc: `HTML/CSS/Javascript/React - Industry experience in full stack web development`,
		skills: ["web", "react"],
		slack: ""
	},
	{ 
		name: "Zheng Zheng", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAoPAAAAJDYwYjI4MzgxLTc4NTYtNDhhZi1iMDI5LTMzNDhjMGQ0MDNjNg.jpg",
		desc: `
<ul> 
<li>Good at architecture design, and machine learning algorithms (NN, SVM, LR, etc.)</li>
<li>Language: good at Java, PHP, JavaScript, Octave; familiar with C/C++</li>
<li>Database: MySQL, Oracle, DB2</li>
<li>Framework: Hadoop/Hive, XAMPP		</li>
</ul>`,
		skills: ["web", "sql", "hadoop", "machine learning", "architecture design"],
		slack: ""
	},
	{ 
		name: "Yiguo Sun", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAqBAAAAJGZhZGMxZDliLWE3NzAtNGE3YS05YjJkLWVmYmY5OWE4MTE3YQ.jpg",
		desc: `Yiguo is a software developer for clinic trial data management. 
		Yiguo is finishing cross-platform mobile apps development for clinical trial data under online and offline situation. 
		He has developed some apps which predict falls, heart attack and other aging-associated diseases by analyzing bio-sensor data. 
		He has knowledge and experiences with mobile device development languages like C++, Java, QML; machine learning algorithm design 
		tools like Python, Anaconda.`,
		skills: ["java", "machine learning", "algorithm design", "python", "anaconda"],
		slack: ""
	},
	{ 
		name: "Umme Salma Gadriwala", 
		imgPath: "",
		desc: `Java, Python, BASH, GoLang, and a little bit of C.`,
		skills: ["java", "python", "bash", "golang", "c"],
		slack: ""
	},	

	{ 
		name: "Emil Sekerinski", 
		imgPath: "",
		desc: `Python, Java, and in particular object-oriented design, concurrency, compilers, embedded systems.`,
		skills: ["java", "python", "concurrency", "compilers", "embedded systems"],
		slack: "U8U8V5B28"
	},

	{ 
		name: "Mayank Arora", 
		imgPath: "",
		desc: `Android: Created a few apps in Android using Restful Web services and firebase messaging.`,
		skills: ["android", "web", "firebase"],
		slack: ""
	},
	{ 
		name: "Kamaldeep Kaur", 
		imgPath: "",
		desc: `Java, SQL, Unix, HTML/CSS, Hadoop, OOAD, Practical Project Management, Project Scheduling, Android Programming`,
		skills: ["android", "java", "sql", "web", "project management"],
		slack: ""
	},	
	{ 
		name: "Gharnata Khan", 
		imgPath: "",
		desc: `Java/HTML - Developed web/mobile treasure hunting game applications using Google Maps API`,
		skills: ["web", "google maps api"],
		slack: ""
	},
	{ 
		name: "Hussain Subhani", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAgWAAAAJDA0NzNiNzAzLTFiOGMtNGU2Yy05ZDgwLTRhYTlmOTg1MzAxMg.jpg",
		desc: `JWebapps, JS, Angular, Spring`,
		skills: ["web", "angular", "spring"],
		slack: ""
	},	
	{ 
		name: "Afzal Najam (remote)", 
		imgPath: "",
		desc: `Afzal is the Lead Android Developer and main analytics guy at Kiwi Wearables, 
		developing motion recognition algorithms. He's been developing for Android for 4 years, contributing to 
		numerous open source projects along the way.`,
		skills: ["android"],
		slack: "D8Y2MS85R"
	},	
	{ 
		name: "Ocean Cheung", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAjMAAAAJGIyY2E0MmYxLTQyMjQtNGJkOC1iMjk0LTg4NDFlZmVhYTQ0OQ.jpg	",
		desc: `<ul>
<li>iOS / Android: Worked as an iOS / Android developer on separate occasions</li>
<li>Python: Worked as a python developer before as well</li>
</li>`,
		skills: ["android", "ios", "python"],
		slack: ""
	}, 
	{	
		name: "Benjamin Miller", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAUuAAAAJGNiYzgwYzQ4LWY4YTQtNDdlNy1hOGUxLWRlZTZiZmEyNjAwOQ.jpg",
		desc: `<ul><li>Python: Created and maintained automation frameworks written in selenium and python</li></ul>`,
		skills: ["python"],
		slack: "D8XJUAN65"
	},
	{	
		name: "Benjamin Fonooni", 
		imgPath: "https://media.licdn.com/media/p/1/000/254/0b2/05d6ba3.jpg",
		desc: `<ul>
<li>HTML/CSS/JavaScript</li>
<li>Artificial Intelligence/Machine Learning/Deep Learning</li>
<ol><li>10 years of research and development in both academia and industry
<li>PhD in Robotics and Cognitive Science</ol>
</ul>`,
		skills: ["web", "artificial intelligence"],
		slack: ""
	},
	{ 
		name: "Charles Tsang", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAg-AAAAJDg1YjVmMzQ2LTIwNDEtNGRkZC04NDc1LTZiMTU0ZjBlOTc3OA.jpg",
		desc: `Python coding; Java, created an app using android studio. `,
		skills: ["python", "java", "android"],
		slack: ""
	},

	{ 
		name: "Mustafa Haddara", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAAaVAAAAJDI4NDNlOGE5LTUxOTYtNDMwYi05NDk1LWEzOTQ2MWY2OTBkZA.jpg",
		desc: `Currently working as a full stack developer (back end = Java/Hibernate, 
			front end = Javascript/backbone.js) at Vena Solutions, where I am currently leading development on a 
			custom programming language for defining relationships between data in our multidimensional OLAP database. `,
		skills: ["web"],
		slack: "U8Y395E0L"
	},
	{ 
		name: "Aaron Nwabouku", 
		imgPath: "https://media.licdn.com/media/AAIABADGAAwAAQAAAAAAAAz2AAAAJDM2ZTc5Yjc1LWNlOGUtNGY0Zi05NDIzLTE0MDY1YjFlZWU0Yg.jpg",
		desc: `<ul>		
<li>Java/Kotlin Drop Wizard/Spring Boot stack. </li>
<li>Android: Written and published multiple Android applications.</li>
</ul>`,
		skills: ["web" , "android"],
		slack: "U8XHXPKED"
	},	
	{ 
		name: "Dananjay Prabaharan", 
		imgPath: "images/dj.jpg",
		desc: `<ul><li>Knowledge on the Arduino and Front-End Web Development</li></ul>`,
		skills: ["web" , "arduino"],
		slack: "U8UAQJ1C7"
	},
	{ 
		name: "Abhayraj Jain", 
		imgPath: "http://www.abhayraj.net/images/mug.jpg",
		desc: `<ul><li>Hardware, Arduino</li></ul>`,
		skills: ["hardware" , "arduino"],
		slack: "U8TSYBEN8"
	},
	{ 
		name: "Shyam Shah", 
		imgPath: "",
		desc: `<ul><li>Java</li><li>Python</li></ul>`,
		skills: ["java", "python", "general programming"],
		slack: "U8P9E5ZGV"
	},	
	{ 
		name: "Roxanna Wong", 
		imgPath: "https://media.licdn.com/media/p/1/005/048/138/098a5d7.jpg",
		desc: `<ul><li>- General software development - Studied to be a software engineer but working in QA now</li></ul>`,
		skills: ["general software development"],
		slack: ""
	},	
	{ 
		name: "Suraj Vijayakumar", 
		imgPath: "",
		desc: `<ul>
<li>Android (created a simple voice based dating app)</li>
<li>C#</li>
<li>Java</li>
<li>Ruby (worked on a bunch of full-stack enterprise systems)				</li>
</ul>`,
		skills: ["ruby", "java", "c#", "android"],
		slack: ""
	},
	{ 
		name: "Roberto Loja", 
		imgPath: "",
		desc: `<ul>
<li>Android: Created SmartHive, a platform for measuring key beehive metrics remotely via an Android app. Made use of GPS, Google Maps, OAuth2, Firebase database.</li>
<li>iOS: Recreated the above app, natively. </li>
<li>HTML/CSS/Javascript: Developing web apps for 5+ years, including Node/Meteor/Django backends and Angular/React frontends.</li>
<li>Java: 3+ years of experience, including Android development.</li>
<li>Python: Go-to scripting language for as long as I've programmed.</li>
</ul>`,
		skills: ["general software development"],
		slack: ""
	},	
	{ 
		name: "Nalina Channenahalli Karagaih", 
		imgPath: "",
		desc: `<ul><li>Java back end developer. </li></ul>`,
		skills: ["java"],
		slack: ""
	},		
	{ 
		name: "Mohamed Fouda", 
		imgPath: "https://media.licdn.com/media/AAEAAQAAAAAAAA0DAAAAJDg3MTQwNTdhLTNmMjMtNDBkMS1hMjY0LWQ5Y2YwYTVlYzdmNQ.jpg",
		desc: `<ul>		
<li>Product management. Product/experience designer: Know a thing or two about behaviours and users and thinking from their experience, as well as designing an experience for these users.</li>
<li>Problem solving. The engineering way. </li>
<li>How electronics, software, and mechanics work together in a product. I did study Mechatronics engineering after all. </li>
<li>A bit of jack of all trades (master of none!) 		</li>
</ul>`,
		skills: ["java"],
		slack: ""
	},		
	{ 
		name: "Natalie Chin", 
		imgPath: "https://www.softwarehamilton.com/wp-content/uploads/2018/01/nataliechin.jpg",
		desc: `<ul><li>Java</li><li>Python</li><li>Solidity</li></ul>`,
		skills: ["java", "python", "solidity"],
		slack: "D8MQV4JV9"
	}
];
