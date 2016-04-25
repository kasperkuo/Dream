# Schema Information

## Images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
album_id    | integer   | not null, foreign key (references albums), indexed
image_url   | string    | not null, default: false
date_taken  | date      | not null
file_name   | string    | not null
image_type  | string    | not null

## Albums
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null, indexed, unique
user_id         | integer   | not null, indexed
title           | text      | not null
description     | text      | not null


## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
