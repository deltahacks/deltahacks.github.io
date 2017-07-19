# DELTAHACKS 4 WEBSITE

### Installation and Startup
The DH4 website consists of a react web app. To start off make sure you have node package manager installed on your machine and then run

	npm install
	
Once it's done installing packages run

    npm start

You should now have a local development server on localhost:3000. Here you can edit files, save them, and then reload your browser to see the updated results. Currently SASS, a css processor, is being used for styling and ES6 guides are being used to create the DH4 site. 

### Folder Breakdown

/public contains the index.html file that gets built and minified.
/src contains the actual react app and css (*EDIT THIS*)
/src/img contains all the images used
/src/fonts contains all the fonts used
/src/App.scss contains all the styling via tags and classNames (*Don't use ids*)
/src/App.css gets rebuilt on every change so your changes to that will be replaced with the SASS file
/src/App.jsx contains the entire app for now and will get updated when there is more content to contain different components.

### Publishing

    npm run deploy 
    
Creates a minified project that is able to run packages without a server and places the files in a gh-pages branch. You can than copy those files and overwrite the current index.html in the main master branch folder which will update the deltahacks.com page. 

User / Organization pages live in a specially named repository called username.github.io, and publish from the master branch. They can be browsed at http://username.github.io.

Project pages can be part of any repository, and are published from the special gh-pages branch. They can be browsed at http://username.github.io/project-name.

Thus, our final minified project needs to be stored on the master branch.

### Cleanup 

The DH2 and DH3 folders have been archived in 2016 and 2017 respectively. They can be transferred to a new branch afterwards to clean up the master.

    Life is a scam,
    Be the better scammer
    - Surinder Gill
