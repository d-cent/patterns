These generated patterns can be viewed at http://d-cent.github.io/patterns/.

## Installation Instructions
These work on Linux and Mac.
- Clone this repo locally.
- Change to repo directory in terminal
- Install Grunt for this repo with: npm install grunt-cli (or install globally with sudo npm install grunt-cli -g)
- Edit files locally in repo /source with text editor. 
- Editing CSS: Go to source/assets/src folder and you find instructions from readme.md
 - Chrome Inspect-funcion is preferable for planning changes. You can change parameters on the fly to see what works.
 - For mac, Textwrangler has a disk browser that makes editing multiple files intuitive.
- Generate with scripts in core/scripts/
- Make the changes to 'master' branch. You can normally 'git push' and everyone will get your changes. 
- When you want to publish your changes to the Github Pages (http://d-cent.github.io/patterns/), say: 
`git push master:gh-pages` Which means push my local master to origin's gh-pages. This helps us avoid the need to merge the different branches.

## Design Principles
Design principles are used as basis for making design choices when developing the service.
### API first
We build application interfaces first, and user experience based on that. This enables multi-channel user experience and machine-to-machine use cases. In d-cent, this is especially important for decentralisation and distribution of data between nodes.
### Mobile first
We use responsive user interfaces, and make sure users can use devices they prefer. Start the layout design with the most essential design with small devices and minimal cognitive load to the user. This is because already world population primarily accesses the digital world through their mobile devices.
### Minimalistic technical user experience
Only one user story for each user benefit. We want to avoid cognitive load and leave the space and user's time for user-created content.
### Positive
Positive service rewards the user, excites to try new things and encourages to explore more with a safe experience. User is happy to return to a service that greets and thanks the user.
### Communal
A service that is built to be a communal tool and means for influencing enables users to share content and communicate. Versatile interactive service creates positive experiences of influencing for users.
### Equality and inclusiveness
To a common service, all are equally welcome. Appropriately concise and visual service makes even harder issues understandable. Following the inclusiveness principle means recognizing and supporting the intrinsic value of all human beings by creating and sustaining conditions that foster equity, empowerment, awareness and competence at the personal, group and organizational levels.
### Ease of use
When the user experience is minimal and straightforward, without extra clicks, classifications or phases, solutions become clearer and more intuitive. See  https://www.gov.uk/designprinciples
### Technical accessibility
When solution follows a holistic approach in semantics and logic, both user navigation and future development is more efficient. See http://www.w3.org/QA/Tips/ and http://www.w3.org/TR/WCAG20/. Simply put, there should be a s much contrast in the colors as is feasible, and the fonts should be as big as they can be.
### Helpfulness
When user is more interested in his/her cause than in the legal or technical processes involved, they must be offered additional information, examples, help and user eloquent interaction. Exact instructions decrease uncertainty, steer the user to constructive behavioral patterns and create positive feedback.
### Interactive
Instructions and functionalities imply clearly and concretely, what are the benefits, consequences and ramifications of user actions. I.e. From participation it is communicated when the results will be available and that after verifying an account with stronger authentication, there will be opportunity for more robust functionalities like voting.
### Simple
When designing functionalities, the simplest functionality is built first, to create and validate the core benefit that the functionality or user story is to produce. Additional functionalities should only be added based on metrics or concrete findings from user experience study and observation.

## Patterns needed to complete DemocracyOS milestones

See https://github.com/d-cent/democracyos/milestones

###Guanyem/Ganemos commissions citizen feedback

* Group page
* Create new article => Create any item
* Comments that agree or disagree
  * Down votes?
* Enable voting

###Decisions API user story

* Profile page
  * Subscribe to keywords
* Create group
  * Define activity filter
  * Invite members
* Answer questions on a form

###Public hearing in Helsinki city user story

* Create group
  * Fill project URL

###Bartering coop map use case

* Create article with bartering-specific metadata
* View AS on a map
  * Distance filter
  * Keyword/category filter

###Better Reykjavik town hall feedback user story

* Show voting results when votes are numeric 1–5 values

