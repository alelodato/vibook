
# Vibook - React

## Project description

Vibook is a social media platform. It has been designed for its users to share parties and venues. The application consists of the React app and an API. Welcome to the React front end project section.

[View live website here](https://vibook-557c0bb75197.herokuapp.com/)

![Responsive design](./src/assets/readme/mockup.png)

## Table of Contents

- [Project](<#project>)
    * [Objective](<#objective>)
    * [Site Users Goal](<#site-users-goal>)
    * [Site Owners Goal](<#site-owners-goal>)
    * [Project Management](<#project-management>)
    * [Github Project Board](#github-project-board)
    * [User Stories](<#user-stories>)

- [User Experience (UX)](<#user-experience-ux>)
    * [Wireframes](<#wireframes>)
    * [Site Structure](<#site-structure>)
    * [Design Choices](<#design-choices>)

- [Existing Features](#features)
  * [Navigation](#navigation)
  * [Authentication](#authentication)
  * [Homepage](#homepage)
  * [Feed](#feed)
  * [Profile Page](#profile-page)
  * [Contact](#contact)

- [Technologies Used](<#technologies-used>)
    * [Languages](<#languages>)
    * [Frameworks & Software](<#frameworks--software>)
    * [Libraries](<#libraries>)
* [**Testing**](<#testing>)
    * [Code Validation](<#code-validation>)
    * [Automatic Testing](<#automatic-testing>)
    * [Manual Testing](<#manual-testing>)
    * [Responsiveness Testing](<#responsiveness-testing>)
    * [Lighthouse Testing](<#lighthouse-testing>)
    * [Known Bugs](<#known-bugs>)
- [Deployment](#deployment)
- [Credits](#credits)

# **Project**

## Objective

The objective of this project is to build a content sharing web application for users to share pictures from parties they attend and party venues they visit, as hosts share upcoming event and details about venues. The platform allows users to view, create, edit, delete, and comment posts. The content can be viewed in a logical order,  filtered by category, and searched on by keywords. Users can also follow each other and register their interest in other user's shared content. 

## Site User's Goal

There are primarily two types of users who will be interacting with this platform. Users who host events in the local area, and users who attend events in the local area.

The event hosts can to share the details of upcoming events in the venue's posts, so that other users are informed about the events and the venue hosting them. They can also read people's comments regarding the event, and receive messages from interested users who have questions, by updating the venue's profile with contacts.
Other users on the other hand, can check out parties and other users who attend parties in a specific venue, so that they might want to attend the next event hosted, and get to know more clubs and party venues.

## Site Owner's Goal

As the site owner, i thought it would be a good idea to have a platform where users can share pictures of places and parties for other users who could be interested on know or find out about this kind of events and venues, and for hosts to publicise their clubs.

## Project Management

### Github Project Board

I've been using the kanban board in GitHub to keep track of all the features needed to implement for the front end application, according to the user stories.

* [Project Board](https://github.com/users/alelodato/projects/6/views/1).

* [User Stories](https://github.com/alelodato/vibook/issues?q=is%3Aissue%20state%3Aclosed)

## User stories

| Category  | as      | I want to                      | so that I can                                                                                    | UI components                                |
| --------- | ------- | ------------------------------ | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| auth      | user    | register for an account        | have a personal profile with a picture                                                           | SignUpForm<br>ProfilePage<br>ProfileEditForm |
| auth      | user    | register for an account        | create, like and comment on posts                                                                | Post<br>PostPage<br>Comment                  |
| auth      | user    | register for an account        | follow users                                                                                     | Profile<br>ProfilePage                       |
| posts     | visitor | view a list of posts           | browse the most recent uploads                                                                   | PostsPage                                    |
| posts     | visitor | view an individual post        | see user feedback, i.e. likes and read comments                                                  | Post<br>PostPaget                            |
| posts     | visitor | search a list of posts         | find a post by a specific venue or a title                                                      | PostsPage                                    |
| posts     | visitor | scroll through a list of posts | browse the site more comfortably                                                                 | InfiniteScrollComponent                      |
| posts     | user    | edit and delete my post        | correct or hide any mistakes                                                                     | PostEditForm<br>MoreDropdownMenu             |
| posts     | user    | create a post                  | share my content with others                                                                     | PostCreateForm                               |
| posts     | user    | view liked posts               | go back often to my favourite posts                                                              | PostsPage                                    |
| posts     | user    | view followed users' posts     | keep up with my favourite users' content                                                        | PostsPage                                    |
| likes     | user    | like a post                    | express my interest in someone's shared content                                                   | Post like icon                               |
| likes     | user    | unlike a post                  | express that my interest in someone's shared content has faded away                               | Post (un) like icon                          |
| comments  | user    | create a comment               | share my thoughts on other people's content                                                      | PostPage<br>CommentCreateForm                |
| comments  | user    | edit and delete my comment     | correct or hide any mistakes                                                                     | PostPage<br>Comment<br>MoreDropdownMenu      |
| profiles  | user    | view a profile                 | see a user's recent posts + post, followers, following count data                                | ProfilePage<br>Post                          |
| profiles  | user    | edit a profile                 | update my profile information                                                                    | ProfileEditForm                              |
| followers | user    | follow a profile               | express my interest in someone's content                                                         | Profile follow button                        |
| followers | user    | unfollow a profile             | express that my interest in someone's content has faded away and remove their posts from my feed | Profile (un) follow button                   |
| contact | user   | view messages in my profile page  | I can read messages other users have sent me         | ProfilePage<br>Message
| contact | user   | send a message to another user    | I can ask a question about an event they are hosting or a venue i would like to visit| ProfilePage<br>MessageCreateForm<br>MessageReplyForm

### Database Schema

All the models have been set up in a separate DRF repository. Click [here](https://github.com/alelodato/vibook-api) to view the repository or [here](https://vibook-api-259e45270715.herokuapp.com/) to view the deployed API.

 
[Back to top](<#table-of-contents>)

# **User Experience (UX)**

## Wireframes

The wireframes for the site were created by hand when i was designing the project. The wireframes have been created for desktop and smaller devices as tablets or mobiles. The website layout of the components based on the CI Moments walkthrough tutorial as this seems to me the best layout both for wider desktops as for smaller mobile devices for a content sharing platform so I didn't see much reason to change it or find many areas where I could improve on it.

<details><summary><b>Wireframes</b></summary>

![Desktop Homepage Wireframe](./src/assets/readme/desktop-wireframe.jpg)
![Tablet Homepage Wireframe](./src/assets/readme/tablet-wireframe.jpg)
![Mobile Homepage Wireframe](./src/assets/readme/mobile-wireframe.jpg)

</details><br/>

## Detailed page and component breakdown:

The application has the same components as the CI Moment walkthrough project so i used the component breakdown table related to it: 

![lucidchart](./src/assets/readme/components-breakdown.png)

## Site Structure

Vibook structure is split up in two parts: when the user is logged out and when the user is logged in. Depending on login status different pages are available for the user. When the user is logged out the pages: Home, and Sign In or Up are available from the Navigation Bar menu. When the user is logged in Feed, Signout and Profile Page also become available.

## Design Choices

* ### Color Scheme

When deciding on the colour scheme for my site, I looked at other content sharing platforms such as Facebook, Instagram and Eventbrite for inspiration. All of these use a very neutral color scheme with barely any background colour at all, and then just hints of brand color here and there to let the buttons stand out. In order to follow a similar approach, I chose a very neutral background color and then complimentary orange and black tones for the icons and buttons. 

![Colour Palette](./src/assets/readme/palette.png)

* ### Typography

The main font used for the site is 'Sour Gummy' Sans-Serif. This font is nice and clear to read even though the platform in general is not text-heavy. 

[Sour Gummy Font](https://fonts.google.com/specimen/Sour+Gummy?categoryFilters=Feeling:%2FExpressive%2FHappy)

[Back to top](<#table-of-contents>)

# **Existing Features**

* ## Navigation

The navigation bar is very clean and straight forward. Depending on whether you are logged in or not, different menus are visible for the site user. For tablet and mobile devices, the navigation bar menu turns into a burger dropdown list. 

On accessing the site for the first time, the user is logged out and the following menu items are visible:

* Vibook Logo - On the far left hand side of the navigatin bar is the Vibook brand logo. This is visible throughout the site to all user types and contains a link back to the homepage. The logo is very minimal, just showing a "V" on a red background, and it was made on the [Favicon](https://favicon.io/) website.

* Home - the first menu item, and the initial default start page, is 'Home', where all posts shared among the community are displayed. 

* Authentication - Two icons next to the homepage one, where the user has the options to Signin or Signup which takes them to the respective page. 

![Logged out Navbar](./src/assets/readme/signedout-navbar.png)
![Logged out Navbar Mobile](./src/assets/readme/signedout-navbar-mobile.png)

Once the user logs in, additional links become available to select:

* Feed - Logged in users can access the feed page where they can see posts of other profiles they follow.

* Authentication - The icons within the authentication change once a user has logged in, and now display a link to the user's own profile page or a link to sign out of the site.

* Add Post - Logged in users can access the post creation page to share their own content to the site. 

![Logged in Navbar](./src/assets/readme/signedin-navbar.png)
![Logged in Navbar Mobile](./src/assets/readme/signedin-navbar-mobile.png)

## Authentication

Users who are new to the site, or haven't previously created an account can click on the Signup Menu option on the Navigation Bar to create a user account.  I have used the standard dj-rest/auth/registration user account signup process for this. 

![Sign up](./src/assets/readme/signup-readme.png)

If a user has a Vibook user account, they can click on the Signin menu option in the Navigation Bar to sign into their account.

![Sign in](./src/assets/readme/signin-readme.png)

If the user wishes to sign out, once signed in, the sign out option becomes visible in the Navigation Bar for them to select. 

* ## Homepage

There are four main react components which make up the Home events page. 

1. Popular Profiles Component
2. Users Posts
3. Search and Filter

### Popular Profiles Component

The popular profiles component is a permanent feature across the entire site. It appears at the top of all pages. This component uses a filter to order all site users by followers count from highest to lowest. The users with the highest follower count are determined to be the most popular profiles and the top six are displayed within the popular profiles component. 

If the user isn't logged in, they can see avatar, and the username of the top 6 most popular profiles, and if the user is logged in, they will also see a button enabling them to follow or unfollow the profile. 

![Popular Profiles - logged out](./src/assets/readme/popular-signedout.png)
![Popular Profiles - logged in](./src/assets/readme/popular-signedin.png)

If the follow button is not showing, it is because your own profile has made it to the top 6 most popular profiles list, but you are not allowed to follow yourself. 

Each profile avatar can be clicked on to view the full profile page of that user. 

### Posts

All posts that are created through the Vibook sharing platform are displayed on the Homepage. All events created are requested from the API and they are ordered by the created date starting with the most recently posted and working backwards. 
Each post displays the user who shared it and the date it was shared. The post's owner is on the top left, and the date it was shared on the top right.
Below we find the content itself and at the bottom the like and comment icons and counter,that if cliked allow the user to like or comment the post if it's not the post owner.
By clicking on the event image, the user is taken to the event details page.

![Post](./src/assets/readme/post.png)

### Search and Filter

If the user wants to search for specific post, they can do that through the searchbar.
The user can search all the posts listed by post's title or username who posted it.

![Posts Filter](./src/assets/readme/search.png)

* ## Feed

The feed page looks identical to the homepage, but in this page after all the posts are requested from the API, a filter is used to only show posts by profiles that the currently logged in user is following. For this reason, this page doesn't work and cannot be accessed if the user is not logged in. Equally, if the user isn't following any other profiles, no events will be displayed and a 'No Results found' message will appear instead inside the events posts component. 

![Feed- No Results](./src/assets/readme/feed-nofound.png)

* ## Create a Post

If you are logged in, you are able to share new posts with the community. By clicking on the Add Post menu option in the Navigation Bar, you are taken to the Share a New Post page, where you can submit the post creation form to the API.

All fields are mandatory apart from the post description (which may be understood from the post poster image that is uploaded) and an image must be uploaded for the post to be submitted successfully. Once the form has been submitted successfully, you can see the post published successfully as you are re-directed automatically to the newly created post details page. 

![Create a Post](./src/assets/readme/create-post.png)

* ## Post Detail Page

The post details page, simply shows everything relating to one single post. You can reach this page by clicking on an post image in any of the pages. It doesn't shows the popular profiles component and if you are the owner of the post, from this page you have the option to edit or delete the post by clicking on the three dots that appear next to the post creation date. 

If the user selects Edit, is taken back to the post creation form, but the fields are already pre-populated with the existing information.The desired fields can be edit and the changes saved, which will return to the post detail page where the post updates can be seen.
If the user selects Delete, the post will be removed from all pages and the user redirected back to the previously visited page.

![Post Detail Page](./src/assets/readme/postdetail.png)
![Edit or Delete Menu](./src/assets/readme/editordelete.png)
![Edit a Post](./src/assets/readme/editpost.png)

### Comments and Likes

Below the post details is the comments and likes section. If there are no comments yet, the user will see a message telling them that there are no comments. If there are no likes yet, the likes counter will be on 0. 
If the user is not logged in, they can read any comments that have been posted and see the post's likes counter but they can't post a comment or like a post themselves unless they log in.

![Comments and Likes](./src/assets/readme/comment.png)

* ## Profile Page

Throughout the site, wherever you see profile avatars, albeit in the popular profiles component, or next to posts, comments or reviews that have been published, you can click on the avatar to view the full profile page of that user. In the Navigation Bar, in the authentication dropdown, you can access your own profile page as well.
When a user signs up and creates a new site account, a basic profile is automatically created with a username, password and defauly avatar image. The only information that subsequently gets updated in the profile page is the site usage stats, as follows: 

* Number of posts the user has shared
* Number of profiles they are following
* Number of profiles that are following them

There is a bio container which remain empty until the user goes into their own profile page and clicks on the three dots dropdown to Edit the profile and add their personal details to the page. If they click on the Edit Profile option, they are taken to a new page containing the full profile details form to fill in and submit. This is designed mainly to give event hosts the opportunity to publish additional contact information and social media links but of course all users are welcome to add as much or little personal info as they wish.
In the profile page, the user can see all his shared posts as well.
Once these fields have been filled in, they can be seen by other users in the main profile page stats container.
Each profile also has a follow button inside the stats container so that other users can click it to follow and unfollow the profile as all profiles won't always appear listed in the popular profiles component, to access the follow functionality there.

![Porfile Page](./src/assets/readme/profilepage.png)
![Profile Edit](./src/assets/readme/editprofile.png)

* ## Messages

If a logged in user is viewing his own profile page the messaging component will display his own private message inbox, on the top right of the page below the navbar, replacing the popular profiles section. Other users will not be able to see the messages that have not been sent to them. All messages that have been sent to the profile's owner, are displayed in descending order of when they were sent. Are also displayed the avatar and the username of the sender, the date the message was sent, and the message itself. Each message has a 'reply' button if the user wants to send a reply message back to the sender. 

![Received Messages](./src/assets/readme/messagelist.png)

If a user is viewing someone else's profile, the message component contains a form to write a message and send it to the owner of the profile page you are viewing. 

![Create Message](./src/assets/readme/messageform.png)

Unlike with other forms such as creating an post or comment, where you can see the published content once the form has been posted successfully, the user does not have access to other user's inboxes to check whether the message has been sent successfully or not. For this reason, in the case of the messaging component, I have set up an alert system using Bootstrap alerts, to display a success alert message when a message or a reply message have been sent successfully. This adds to good user experience, and user peace of mind. 

![Message Alert](./src/assets/readme/messagesuccess.png)

Equally, if the user tries to send a blank message, they will see a Bootstrap warning message telling them that they must fill in the message field in order to send the message successfully. 

![Message Alert](./src/assets/readme/messageerror.png)

For the time being, there is no alert system in place to send a notification to a user when they receive a new message, but this is something I would like to look into in future development sprints.

# **Technologies Used - Frontend**

## Languages

* [HTML5](https://en.wikipedia.org/wiki/HTML) - Provides the content and structure for the website.
* [CSS3](https://en.wikipedia.org/wiki/CSS) - Provides the styling for the website.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Provides interactive elements of the website
* [React.js](https://en.wikipedia.org/wiki/React_(software)) - Provides the base for the frontend components

## Frameworks & Software
* [React Bootstrap](https://react-bootstrap.github.io/) - A CSS framework that helps build solid, responsive, mobile-first sites
* [Github](https://github.com/) - Used to host the repository, store the commit history and manage the project board containing user stories and bug reports.
* [Heroku](https://en.wikipedia.org/wiki/Heroku) - A cloud platform that the application is deployed to.
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Used to test site performance.
* [Favicon](https://favicon.io/) - Used to create the favicon and website logo.
* [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to debug and test responsiveness.
* [Cloudinary](https://cloudinary.com/) - A service that hosts image files in the project.
* [HTML Validation](https://validator.w3.org/) - Used to validate HTML code
* [CSS Validation](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code
* [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code

[Back to top](<#table-of-contents>)

# Testing

## Code Validation 

The Vibook site has been passed through the [W3C html Validator](https://validator.w3.org/), the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and the [ESLint Validator](https://eslint.org/docs/latest/use/getting-started#next-steps).

### W3C HTML Validation Results

No errors were found when the deployed Vibook URL was passed through W3C HTML validation checker. Only some lines of info were noted regarding the standard Meta code in the index.html file. 

![W3C HTML Validation](./src/assets/readme/html-validation.png)

### W3C CSS Validation Results

No errors or warnings were found when the deployed Happening URL was passed through the W3C CSS Validation checker.

![W3C CSS Validation](./src/assets/readme/css-validation.png)

### ESLint Validation Results

I installed Eslint to validate the application's React JSX code with the command "npm init @eslint/config@latest"
, and then i ran it to validate the code of the src directory with the command "npx eslint src" and no errors where shown in the terminal.

## Manual Testing

As well as the automatic tests, I carried out the following additional manual tests to check all the user story scenarios:

| Status | **Authentication - User Logged Out**
|:-------:|:--------|
| &check; | Typing 'https://vibook-557c0bb75197.herokuapp.com/feed' url into the browser, the user can not access the feed page. User is redirected Home
| &check; | Typing 'https://vibook-557c0bb75197.herokuapp.com/posts/create' url into the browser, the user is redirected back to the homepage
| &check; | Typing 'https://vibook-557c0bb75197.herokuapp.com/profiles/{id}' url into the browser, the user is redirected back to the homepage
| &check; | Typing 'https://vibook-557c0bb75197.herokuapp.com/profiles/{id}/edit' url into the browser, the user is redirected back to the homepage
| &check; | Desktop and tablet users can see an image next to the sign in form
| &check; | Mobile users can't see an image next to the sign in form
| &check; | Desktop and tablet users can see an image next to the sign up form
| &check; | Mobile users can't see an image next to the sign up form

| Status | **Navigation - User Logged Out**
|:-------:|:--------|
| &check; | Clicking the navbar brand logo loads the home page
| &check; | Clicking the Home button on the nav bar re-loads the home page
| &check; | Clicking the Sign In button on the nav bar loads the sign up page
| &check; | Clicking the Sign Up button on the nav bar loads the sign in page
| &check; | The user can not see the profile page link in the navigation bar profile section dropdown menu
| &check; | The user can not see the sign out link in the navigation bar profile section dropdown menu
| &check; | Users can not see the Feed menu option in the navigation bar
| &check; | Users can not see the 'Add Post' button in the navigation bar
| &check; | Tablet and mobile users can see the navigation bar options in a burger menu dropdown
| &check; | Clicking a link from the navigation bar links automatically closes the burger menu
| &check; | User can not sign in with false credentials - warning message displayed
| &check; | User can not sign in without filling out all the input fields - warning message displayed
| &check; | User can not sign up without filling out all the input fields - warning message displayed
| &check; | User can not sign up if the two password fields don't match - warning message displayed
| &check; | User can not sign up if the username chosen already exists in the database - warning message displayed

| Status | **Homepage - User Logged Out**
|:-------:|:--------|
| &check; | Users can view the Popular Profiles component
| &check; | Users can not view the follow button under each Popular Profile
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Users can view all posts
| &check; | Users can view the comments count
| &check; | Users can view the likes count
| &check; | Clicking on an post image, users are redirected to the selected post detail page
| &check; | Clicking on an post comments count, users are redirected to the selected post detail page
| &check; | Clicking on the likes count, a message is shown to users informing that user needs to be logged in to like a post
| &check; | Clicking on an post owner avatar, users are redirected to the selected profile page
| &check; | Users can search for a particular post by typing in the post title or the username of the post owner

| Status | **Post Detail Page - User Logged Out**
|:-------:|:--------|
| &check; | Users can view the Popular Profiles component
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Desktop and tablet users can view the Top Events component on the right
| &check; | Mobile users can view the Top Events component under the Popular Profiles component.
| &check; | Users can view details of a single post
| &check; | Clicking on an post owner avatar, users are redirected to the selected profile page
| &check; | Clicking on the like icon, users are advised to login to like a post
| &check; | Users can view any published comments posted about this post
| &check; | Users can not see the create comment form

| Status | **Profile Page - User Logged Out**
|:-------:|:--------|
| &check; | Users can view the Popular Profiles component
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Users can view the number of posts the profile owner has shared
| &check; | Users can view the number of followers the selected profile has
| &check; | Users can view the number of other profiles the selected profile is following
| &check; | Users can view the posts which were shareed by the selected profile
| &check; | Clicking on the post image, users are redirected to the selected post detail page

| Status | **Navigation - User Logged In**
|:-------:|:--------|
| &check; | Clicking the navbar brand logo loads the home page
| &check; | Clicking the Home button on the nav bar re-loads the home page
| &check; | User can't see the sign in button in the navigation bar profile section dropdown menu
| &check; | User can't see the sign up button in the navigation bar profile section dropdown menu
| &check; | The user can see the profile page link in the navigation bar profile section dropdown menu
| &check; | The user can see the sign out link in the navigation bar profile section dropdown menu
| &check; | Users can see the Feed menu option in the navigation bar
| &check; | Users can see the 'Add Post' button in the navigation bar
| &check; | Tablet and mobile users can see the navigation bar options in a burger menu dropdown
| &check; | Clicking a link from the navigation bar links automatically closes the burger menu
| &check; | User can view their avatar image next to the profile page link

| Status | **Homepage - User Logged In**
|:-------:|:--------|
| &check; | Users can view the Popular Profiles component
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Users can view the follow button under each Popular Profile
| &check; | Clicking on a popular profile follow button, users can become a follower of the selected profile
| &check; | Users can view all pots shared to the site - title, description, date, and image
| &check; | Users can view the comments count
| &check; | Clicking on a post image, users are redirected to the selected post detail page
| &check; | Clicking on a post comments count, users are redirected to the selected post detail page
| &check; | Clicking on a post owner avatar, users are redirected to the selected profile page
| &check; | Users can search for a particular post by typing in the post title or the post owner's username

| Status | **Add Post Page - User Logged In**
|:-------:|:--------|
| &check; | Users can view the empty form to create a new post
| &check; | Users can upload an image into the form
| &check; | Users can change an uploaded image
| &check; | Users can't submit the form without an image - warning message displayed
| &check; | Users can't submit the form without filling out the post title field - warning message displayed

| Status | **Feed - User Logged In**
|:-------:|:--------|
| &check; | Users can view the Popular Profiles component
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Users can view the follow button under each Popular Profile
| &check; | Clicking on a popular profile follow button, users can become a follower of the selected profile
| &check; | Clicking on a top post title, users are redirected to the selected post detail page
| &check; | Users can view all posts shared by profiles they follow - title, description, date and image
| &check; | Users can view the comments count
| &check; | Users can view the likes count
| &check; | Users can like posts
| &check; | Clicking on a post image, users are redirected to the selected post detail page
| &check; | Clicking on a post comments count, users are redirected to the selected post detail page
| &check; | Clicking on a post owner avatar, users are redirected to the selected profile page
| &check; | Users can search for a particular post by typing in the post title or the post owner's username

| Status | **Post Detail Page - User Logged In**
|:-------:|:--------|
| &check; | Users can view the Popular Profiles component
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Users can view details of a single postt - title, description, date and image
| &check; | Users can view the likes count
| &check; | Users can view the comments count
| &check; | Clicking on an post owner avatar, users are redirected to the selected profile page
| &check; | Clicking on the like icon, likes count goes up and down on a toggle
| &check; | Users can view any published comments posted about this post
| &check; | Users can view the create comment form
| &check; | Users can type into the comment form and submit a comment to the post
| &check; | On submitting a comment, the comment count increases by 1
| &check; | If the logged in user is the owner of a published comment, they can see the three dots edit/delete menu next to it
| &check; | User can edit their own comments via the three dots edit/delete menu
| &check; | User can delete their own comments via the three dots edit/delete menu
| &check; | On clicking delete comment, user is presented with a modal popup to confirm the deletion request
| &check; | On deleting a comment, the comment count decreases by 1
| &check; | If the logged in user is the owner of the post, they can see the three dots edit/delete menu next to the created_at date
| &check; | User can edit their own posts via the three dots edit/delete menu
| &check; | On clicking edit post, user is redirected to the edit posts page
| &check; | User can delete their own posts via the three dots edit/delete menu
| &check; | On clicking delete post, user is presented with a modal popup to confirm the deletion request

| Status | **Edit Post Page - User Logged In**
|:-------:|:--------|
| &check; | Users can view the post form pre-populated with the current post details
| &check; | Users can upload an image into the form
| &check; | Users can change an uploaded image
| &check; | Users can't submit the form without an image - warning message displayed
| &check; | Users can't submit the form without filling out the post title field - warning message displayed

| Status | **Profile Page - User Logged In**
|:-------:|:--------|
| &check; | Users can view the Popular Profiles component
| &check; | Clicking on a popular profile avatar, users are redirected to the selected profile page
| &check; | Users can view the number of posts the profile owner has shared
| &check; | Users can view the number of followers the selected profile has
| &check; | Users can view the number of other profiles the selected profile is following
| &check; | Users can view the posts which were posted by the selected profile
| &check; | Clicking on the post image, users are redirected to the selected post detail page
| &check; | Clicking on a post comments count, users are redirected to the selected post detail page
| &check; | Clicking on a url in the contact details section will open the web page in a new browser tab.
| &check; | If the user is viewing their own profile page, they can see the three dots edit profile menu next to the profile stats
| &check; | Users can edit their own profile page via the three dots edit/delete menu
| &check; | On clicking edit profile, user is redirected to the edit profile page
| &check; | User can edit their own username via the three dots edit profile menu
| &check; | User can edit their own password via the three dots edit profile menu
| &check; | Users receive a success alert message when a reply has been successfully sent to another user

| Status | **Edit Profile Page - User Logged In**
|:-------:|:--------|
| &check; | Users can view the profile form pre-populated with the current profile details
| &check; | Users can upload an avatar image into the form
| &check; | Users can change the uploaded image
| &check; | Users must submit a valid URL into the URL fields - warning message displayed

## Responsiveness Testing

The responsive design tests were carried out manually throughout the build using Google Chrome Dev Tools. I based the main design around a desktop view, as this is primarily a browser based platform, although I have added responsive design for tablet and mobile devices as well. 

### Browser Compatibility 

Happening was tested on the following browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

## Lighthouse Testing

Google Lighthouse in Chrome Developer Tools was used to test the application within the areas of *Performance*, *Accessibility*, *Best Practices* and *SEO*. The testing showed the following:

![Lighthouse Homepage Result](./src/assets/readme/lighthouse-testing.png)

## Known Bugs

When i tested the application on mobile devices i coudn't sign in and the page was redirecting me to the google search page on chrome and safari.
This is a known issue with React projects, particularly when we have the separate front and backends,there are some issues with login on mobile and/or iPhones, even though the application work well and there are no bugs when running it on desktop.

[Back to top](<#table-of-contents>)

# Deployment

### Deployment to Heroku

Once you have created a new vsCode or gitpod workspace and set up the new project, you are ready to deploy to Heroku. 

1. In your heroku account, select Create New App, and give it a unique name related to your project. 
2. Select a region corresponding to where you live and click 'Create App'.
3. Head into the 'Deploy' tab select GitHub as the 'deployment method', find your project repository and click 'Connect'.
4. Click 'Deploy branch' to trigger Heroku to start building the application. 
5. Once you see the message saying 'build succeeded' you can click 'Open App' to see your application in the browser. 

### Connect React Frontend to the API backend

Once you have set up the workspace and done a basic deploy to Heroku, you can connect the react workspace to your API, in order to send data to the API

1. In the Heroku dashboard, go into the API application settings
2. In 'Settings' add a new Config Var called 'CLIENT_ORIGIN' and set that to the URL for your deployed React application. In my case, this would be [https://vibook-557c0bb75197.herokuapp.com/](https://vibook-557c0bb75197.herokuapp.com/).
3. Then add another Config Var called 'CLIENT_ORIGIN_DEV' and enter the URL of your Gitpod preview link, remembering to remove the trailing slash at the end. Gitpod occasionally changes this URL so keep an eye on it, as you are working on your project. 
4. Go back into your frontend vsCode or Gitpod workspace, and install the Axios library using the command 'npm install axios'.
5. Create a folder called 'API' and inside it create a file called 'axiosDefaults'.
6. import axios at the top of the file
7. Define your baseURL which is the unique URL of your deployed API project. In my case this would be [https://vibook-api-259e45270715.herokuapp.com/](https://vibook-api-259e45270715.herokuapp.com/)
8. Set the content-type header to multi-part/form-data as the API will need to deal with images as well as text in it's requests.
9. In order to avoid any CORS issues, set withCredentials to True.
10. Import this file into App.js to be used across all pages

### Fork this Project Repository

It is possible to make an independent copy of a GitHub Repository by forking the GitHub account. The copy can then be viewed and it is also possible to make changes in the copy without affecting the original repository. To fork the repository, follow these steps:

1. After logging in to GitHub, locate the repository. On the top right side of the page there is a 'Fork' button. Click on the button to create a copy of the original repository.

### Clone this Project Repository

A Git clone creates a linked copy of the project that will continue to synchronize with the original repository. In order to create a clone, you can click on the 'Code' button inside the selected repository and then select the 'Clone' option from the dropdown list.

# Credit

For this project i want to thank the Code Institute tutoring team for helping me with debugging, fixing issues in my project and always giving precious advices to help me improve my coding and use of best practices.

[Back to top](<#table-of-contents>)

---