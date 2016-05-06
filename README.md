[Dream live][heroku]

[heroku]: https://dream-capstone.herokuapp.com/

## Overview

Dream is an art-based full stack web application inspired by Flickr that provides users an area to showcase their artwork.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.

## Features

### Diverse Art Types

![Landing Page](./docs/screenshots/landing-page.png?raw=true "Landing-Page")

Dream provides the capabilities of viewing three different types of artwork--digital, traditional, and photography. These styles are portrayed in the landing page, which is organized into three tabs on the `ExploreNavBar` component. The `ImageIndex` component serves as the backbone to the landing page. When clicking on the tabs, one of three different methods will occur:

```  
  changeDigital: function(e) {
    this.setState({
      images: ImageStore.getDigital(),
      selected: "digital"
     });
  },

  changeTraditional: function(e) {
    this.setState({
      images: ImageStore.getTraditional(),
      selected: "traditional"
    });
  },

  changePhotography: function(e) {
    this.setState({
      images: ImageStore.getPhotography(),
      selected: "photography"
    });
  }
```

  The `ImageIndex` asks the `ImageStore` for the filtered list of images and renders them in the form of `ImageIndexItem` components. `ImageIndex`'s state also changes, which subsequently re-renders the `ExploreNavBar`.

### Clean Image Showcasing

![Landing Page](./docs/screenshots/image-show.png?raw=true "Image-Show")

The image show page is easily and readily accessible by all users and contains a clean and simple interface. Every image in the landing, user profile, and album pages are all `ImageIndexItem`s. `ImageIndexItem` possess an important `onClick` property that triggers a route redirect to the image's show page. This is displayed below:

```
  var ImageIndexItem = React.createClass({
    showImage: function() {
      HashHistory.push('/images/' + this.props.photo.id);
    },

    render: function() {
      return (
        <li className="image" onClick={this.showImage}>
          <img src={this.props.photo.image_url}/>
        </li>
      );
    }
  });
```

 This display is detailed by the `ImageDetail` component. `ImageDetail` is highly responsive to the current user and the image's uploader, acquired by `SessionStore.currentUser()` and `this.state.image.user_id` respectively. Specific user options, such as delete and edit, are only available to users that have uploaded the image. `ImageDetail` also provides the user with comprehensive navigational tools.

### Image Editing

Users are able to edit their image title, description, and image type if they are the uploader. By clicking on the edit button, users are redirected to the `EditForm` through the `/images/:imageId/edit` path. `EditForm` is consistently listening to `ImageStore`, which allows it to use `ImageStore.find(this.props.params.imageId)` to obtain the current image data and pre-fill the form.

### Image Uploading

Image uploading is another feature that is available to registered users. This feature utilizes a Cloudinary widget that sends images to a cloud storage. Once uploaded, the `ImageForm` and the `UploadButton` components process each image. The `ImageForm` feature has a form that allows user to fill in data and a list of thumbnails. This form is unique for each photo and changes every time via the `updateFormDetails()` a different thumbnail is clicked. The state of each form is preserved by registering `this.currentImage` and saving its current details through `saveInformation()`.


### User Profiles

![Landing Page](./docs/screenshots/user-profile.png?raw=true "User-Profile")

Users given their own profile page that displays their images and albums and is handled by the `UserDetail` component. This page can be accessed through the `NavBar` or the `ImageDetail`. It contains its own nav bar that allows users to view their images, albums, or profile edit form. Rendering the images and albums are dependent on the user's `has_many: images` and `has_many: albums` associations.

### Albums

All albums resides in each user profile page. Users are able to create albums and view them individually. Each album possesses a `user_id` property that associates itself with its creator. Conversely, a user is connected with the album with its `albums` association.

### Dependencies

Other dependencies used for the project include:
- BCrypt for hashing and password-salting to provide a secure authentication system
- Cloudinary for image uploading and processing
- React Masonry for organized and responsive image galleries

## Future Implementations
- Tags
- Search feature that can filter results via tags and user names
- A more interactive album create and update page that allows users to either upload new images or select images from their collection
- Commenting
- User profile photos
- Following users
- Image likes system
- Account activation via email
- Integration of multiple client sessions
