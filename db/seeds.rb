# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

IMAGE_URLS = [
  "http://img14.deviantart.net/8b4a/i/2013/214/7/d/sky_for_dreamers_by_rhads-d6gbpqu.jpg",
  "http://img03.deviantart.net/cfd8/i/2014/291/e/7/nature_salvation_by_rhads-d83ai0z.jpg",
  "http://img04.deviantart.net/04cf/i/2014/137/1/9/beautiful_world_by_rhads-d7iotc1.jpg",
  "http://img12.deviantart.net/c1ad/i/2015/140/d/f/great_migration_by_rhads-d8u3g5q.jpg",
  "http://pre05.deviantart.net/9a63/th/pre/i/2012/308/b/c/endless_journey_by_rhads-d5jyend.jpg",
  "http://pre09.deviantart.net/396e/th/pre/f/2013/112/4/9/blue_planet_by_yuumei-d62mn5b.jpg",
  "http://pre08.deviantart.net/871e/th/pre/f/2012/029/f/7/somewhere_near__but_far_in_time__by_megatruh-d4nz3s5.jpg",
  "http://orig02.deviantart.net/b722/f/2012/247/1/6/stairway_to_the_sky___by_megatruh-d5dj2ik.jpg",
  "http://orig07.deviantart.net/bf94/f/2011/202/7/8/phantasmagoria___by_megatruh-d4172as.jpg",
  "http://pre00.deviantart.net/8738/th/pre/f/2011/058/7/f/berangkat__by_megatruh-d3aivav.jpg",
  "http://img10.deviantart.net/3b73/i/2013/361/c/3/infinite_dreams_by_rhads-d5eywh4.jpg"
]

IMAGE_URLS.length.times do |i|
  Image.create!(
    title: "hi",
    description: "hi",
    user_id: 1,
    album_id: 1,
    image_url: IMAGE_URLS[i],
    image_type: "digital")
end

User.create!(
  username: "guest",
  email: "guest@example.com",
  password: "password"
)

User.create!(
  username: "hi",
  email: "hi@example.com",
  password: "password"
)
