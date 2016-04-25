# Phase 4: Allow Complex Styling in Notes (1 day)

## Rails
### Models
  * Album

### Controllers
  * AlbumsController (create, new, edit, delete)

### Views
  * albums/index.json.jbuilder
  * albums/show.json.jbuilder
  * albums/formpartial.json.jbuilder
  * albums/new.json.jbuilder
  * albums/edit.json.jbuilder

## Flux
### Views (React Components)
  -AlbumIndex
  -AlbumIndexItem
### Stores
  -Albums

### Actions
  * ApiActions.receiveAllAlbums -> triggered by ApiUtil
  * ApiActions.receiveSingleAlbum
  * ApiActions.deleteAlbum
  * AlbumActions.fetchAllAlbums -> triggers ApiUtil
  * AlbumActions.fetchSingleAlbum
  * AlbumActions.createAlbum
  * AlbumActions.editAlbum
  * AlbumActions.destroyAlbum

### ApiUtil
  * ApiUtil.fetchAllAlbums
  * ApiUtil.fetchSingleAlbum
  * ApiUtil.createAlbum
  * ApiUtil.editAlbum
  * ApiUtil.destroyAlbum


## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
