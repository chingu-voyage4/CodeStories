# Team bears-25 : Project - CodeStories

* A platform for coders/developers to share their story, experience, motivation, tutorials, hacks, etc along the coding journey.
* Mockup - https://xd.adobe.com/spec/06611bd8-a40b-476e-b091-6ced92a67373/
* [Demo](https://codestories-v1.herokuapp.com/)

## Tech stack

* Backend: Node
* Database: Mongodb
* Middleware Framework: Express
* Frontend: Vue

## Client User Stories

#### As a Guest User I can:

* See a landing page with:
  - > Navbar containing:
      - a button to navigate to stories page
      - a search bar to search stories
      - Login & signup
  - > Few stories and a link to navigate to stories page
  - > Footer with Links to:
     - About page
     - Terms / Privacy page
     - Team
     - Github Repo
     - Contact (form)

* Stories page where I can:
  - > Browse through the stories list through different tabs - Hot, Newest, Most viewed, Tag labels, etc
  - > Search for stories in the search box
  - > Use advanced filter to Search by tags, author, etc
* I can read and share a story on Twitter, facebook, Slack and copy link to story to paste anywhere else. 
* View an authors' public profile consisting of
  - > Their avatar and short bio
  - > List of stories written by them
* Create an account (signup) or signin to an existing account through:
  - > Username & password
  - > Using Google 
  - > Github
  - > Twitter

#### As a logged in User, I can:

In addition to all the above (Guest user cases)
* Navbar button changes from Login/signup to button to create a New Post and link to go to my profile.
* Bookmark (Save) stories to read later
* Upvote (Kudos points) stories that I like
* Create new story
* Edit and delete my stories
* Create, edit and delete drafts
* Comment on stories
* Edit & delete my comments
* Edit and update my profile details - 
  - > Profile picture, 
  - > short bio, 
  - > links to other social media, portfolio, etc 
  - > See list of stories written by me
  - > See list of my drafts
  - > See my read history
  - > See statistics of my posts
  - > See my bookmarks

## Development side

### Git workflow

* Git workflow for this project is based on [this](https://medium.com/@francesco.agnoletto/how-to-not-f-up-your-local-files-with-git-part-1-e0756c88fd3c) series, important points are summarized here for ease of reference.

* `master` branch - production branch - when everything is tested and works, update this branch
* `development` branch - It is a base for all the other branches - You do not code here, you send pull requests here to be checked by other members of your team and merged. The team members have to check your code and then merge to development.
* All other branches are of the format - `Type/short-description` - see below for more info

### Branches where coding is done 

* 4 basic types of branches followed by `/small-description`:

| Branch type | Purpose | Example
| ----------- | ------- | -------|
| `bug` | Bugfixes | "bug/fixed-all-caps"
| `feature` | for developing new features | "feature/giant-duck-modal"
| `refactor` | code refactoring | "refactor/add-prop-types"
| `style` | design/css stuff | "style/everything-is-black"

### Guidelines to push individual branches into the development branch

* For details refer to [this](https://medium.com/@francesco.agnoletto/how-to-not-f-up-your-local-files-with-git-part-2-fc4e243be02a) article.
* The development branch is always clean since the pull requests are reviewed and merged here. Thus `git pull` can be used without worrying about side effects. 
`$ git checkout development`
* Thus, keeping the development branch updated frequently will be helpful to reduce the number of merge conflicts in the new branches created.
`$ git pull` - update your local development branch from the remote branch 
* Once development branch is updated, switch to the working branch and merge.
`$ git checkout fix/my-branch`
`$ git merge development`

### Guidelines for posting issues

* Issues are the ways to check blockers in the project.
* All newly added issues and pull requests will automatically be added to the Blocks column in the Project board.
* All reopened issues and pull requests will be added to In-progress column.

### Format for posting issues

* The following information should be entered by the individual that report's the issue:

**_Issue Description & Expected Outcome:_** Description of what occurred and what the desired outcome should have been.

**_Symptoms:_** Summary of the symptoms including screenshots and logs, if available.

**_Steps to Recreate:_** List of steps the Developer can follow to recreate the problem. This should include not only navigation steps, but also data values that are to be entered.

**_Resolution:_** When the issue is resolved the Developer is responsible for describing how the issue was resolved along with any supplemental information that may be useful to other Developers if the issue should reoccur in the future:

### Issue Labelling - 
Follow the table given [here](https://github.com/Chingu-cohorts/pmrok/wiki/Getting-Started:-Issue-Reporting-and-Tracking#the-importance-of-labels).

## Team

* [Pankajashree](https://github.com/pankaja-shree)
* [Ramesh syangtan](https://github.com/rameshsyn)
* [Ipaye Alameen](https://github.com/Ipaye)
* [Harshil Agrawal](https://github.com/harshil1712)








