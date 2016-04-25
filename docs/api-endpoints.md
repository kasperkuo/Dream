# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Images

- `GET /api/images`
  -Images index feed (explore)
- `POST /api/images`
- `GET /api/images/:id`
- `PATCH /api/images/:id`
- `DELETE /api/images/:id`

### Albums

- albums will be included in the user profile page
- `GET /api/albums`
- `POST /api/albums`
- `PATCH /api/albums/:id`
- `DELETE /api/albums/:id`
  - remove album specifically
  - removing albums should not delete the images
  - removing image from an album should not delete the image from db
