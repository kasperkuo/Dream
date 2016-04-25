## User Cycles

### User/Sessions API Request Actions

* `fetchCurrentUser`
  0. `GET /api/users` request
  0. `receiveCurrentUser` is the callback function
  0. used to identify and render current user

## Store Listeners

* `Sessions` component listens to `Sessions` store

## Image Cycles

### Images API Request Actions

* `fetchAllImages`
  0. invoked from `ImagesIndex`
  0. `GET /api/images` ajax request
  0. `receiveAllImages` is the callback

*  `uploadImage`
  0. invoked from an upload image button on the `onClick` callback
  0. `POST /api/images` ajax request
  0. `receiveSingleImage` is the callback
  0. takes in image data as its argument, which will include title, description, and albums (optional)

*  `fetchSingleImage`
  0. invoked from `ImageDetail` when attempting to view the selected image
  0. must use `willReceiveProps` to ensure that photo image/details will change when another photo is selected
  0. `POST /api/images/:id` ajax request
  0. `receiveSingleImage` is the callback
  0. will occur in the slideshow portion of the app when scrolling through each individual image

* `updateImage`
  0. invoked from `ImageForm` and `onSubmit` callback
  0. `PATCH /api/imageS/:id` ajax request
  0. `receiveSingleImage` is set as the callback
  0. takes in image data as its argument, which will include title, description, and albums (optional)

* `destroyImage`
  0. invoked from delete image button `onClick`
  0. `DELETE /api/images/:id` is called
  0. `removeImage` is set as the callback


### Store Listeners

* `ImageIndex` component listens to `Image` store
* `ImageDetail` component listens to `Image` store


(is user store necessary?)

## Albums Cycles

### Album API Request Actions

* `fetchAllAlbums`
  0. invoked from `AlbumIndex`
  0. `GET /api/albums` ajax request
  0. `receiveAllAlbums` is the callback

*  `createAlbum`
  0. invoked from an add album button on the `onClick` callback
  0. `POST /api/albums` ajax request
  0. `receiveAlbum` is the callback
  0. takes in image data as its argument, which will album body

* `editAlbum`
  0. invoked from `albumItem` and `onSubmit` callback
  0. `PATCH /api/albums/:id` ajax request
  0. `receiveAlbum` is set as the callback
  0. takes in album params as its argument, which will include album body

* `removeAlbum`
  0. invoked from delete album button `onClick`
  0. `DELETE /api/albums/:id` is called
  0. `removeAlbum` is the callback

### Store Listeners

* `AlbumIndex` component listens to `Album` store
