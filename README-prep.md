[Heroku link][heroku]

[heroku]: https://dream-capstone.herokuapp.com/

##Minimum Viable Product

Dream is a web application inspired by Flickr that will be built using Ruby on Rails and React.js. It contains photo hosting capabilities; however, it is more geared towards showcasing artwork and possesses the capacity to filter by specific art styles, including photography, traditional, and digital. By the end of Week 9, this will satisfy the following criteria:

- [x] New account creation, login, and guest/demo login
- [ ] the Minimally necessary features for a Flickr-inspired site
  - [x] photos and artwork uploading, displaying, editing, and deleting capabilities
  - [ ] an explore feed that has the options to display all artwork, or organize by specific art-styles (photography, traditional, and digital)
  - [ ] contains a user page that contains their profile information and all of their photos
- [ ] CSS styling that is aesthetically appealing


##Product Goals and Priorities

Dream will allow users to do the following:

- [x] Create an account (MVP)
- [x] Sign in / Sign out with the option of having a Guest/Demo (MVP)
- [ ] Upload, view, edit, delete photos/artwork that come with title, descriptions, and upload dates (MVP)
- [ ] Create a user profile page that displays their photos
- [ ] Provide an explore page that showcases photos/artwork from all users (MVP)
- [ ] Organize photos into an album (expected feature, but not MVP)
- [ ] Apply detailed styling to all pages
- [ ] Provide other features for users, such as tagging photos, creating albums, dragging photo to upload feature, providing camera roll organized by upload date, searching photos

## Design Docs

* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md


## Implementation Timeline

### Phase 1: Backend setup and User Authentication/Profile (1 day)

**Objective** Working rails project that has authentication capabilities

- [x] create a new project with Postgres and development gems
- [x] create a `User` model with proper validations that handles sign up
- [x] authentication
- [x] creating sessions controller that handles sign in features
- [x] user's profile page has cover photo and profile photo with their name and join date
- [x] create home page that viewers that aren't logged in go to with simple styling
- [x] blank landing page after signing in (which will be the explore page that shows all images and photos)
- [x] create demo login

### Phase 2: Images Model, API, and basic APIUtil (1.5 days)

**Objective:** Images can be uploaded, saved, edited, and destroyed through the API.

- [ ] create `Image` model
- [ ] seed the database with a small amount of images
- [ ] CRUD API for images (`ImagesController`)
- [ ] jBuilder views for images
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.
- [ ] organize landing page (explore) with simple styling that displays all photos
- [ ] images will be able to be tagged a certain type on creation
  - [ ] for base level, will provide drawing, digital, and photo options for types of art

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Images can be uploaded, saved, editeed, and destroyed with user interface.

- [ ] set up the flux loop with skeleton files (actions, constants, apiutils, stores, and components)
- [ ] set up the react router
- [ ] implement the image store
- [ ] implement each image component and building out the flux loop
  - [ ] `ImageIndex`
  - [ ] `ImageIndexItem`
  - [ ] `ImageForm`
- [ ] be able to save images to the DB upon creation and editing


### Phase 4: Styling of Images (1 day)

**Objective:** Existing pages (explore, sign in, sign up) will be styled completely

- [ ] create a style/layout
- [ ] position elements properly
- [ ] explore play will be divided into 3 categories based on the type of images (photos, drawings, digital art) to create an aesthetically clean/organized views

### Phase 5: Albums (2 days)

**Objective:** Albums belong to users and contain many images

- [ ] create `Album` model
- [ ] build out API, Flux loop, and components for:
  - [ ] Album CRUD
  - [ ] Album create will have title, description
  - [ ] albums can be seen by non-logged in users, but only currently logged users that match album owners can make changes
- [ ] add option for each individual current ImageIndexItem to be added to a photo
- [ ] when logged in, it gives button that creates an album
- [ ] creating an album includes title, description, date created
  - [ ] has a cover photo
  - [ ] has drag and drop capabilities from previous images
  - [ ] adding images uses same form as the create/uploadImage form



### Phase 6: Complex Styling, seeding, and extra time for previous phases (2.5 days)

- [ ] Get feedback on UI and site functionality/speed from others
- [ ] Perhaps get users to use site by creating account, uploading photos, and commenting
- [ ] Pagination and infinite scroll for the explore and user profile pages
- [ ] Create layouts that resize based on the browser size

### Bonus Features (TBD)
- [ ] Add search capability in create album to look up your photos by title
- [ ] Add search capabilities that look up photos by title or tags and users by username
- [ ] Add a drag/drop capability when uploading photos
