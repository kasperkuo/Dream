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
  "http://img10.deviantart.net/3b73/i/2013/361/c/3/infinite_dreams_by_rhads-d5eywh4.jpg",
  "http://orig12.deviantart.net/2dc4/f/2012/151/b/6/very_secret_garden___by_megatruh-d51qr2f.jpg",
  "http://pre01.deviantart.net/0066/th/pre/f/2012/163/3/b/weightless_and_horizontal___by_megatruh-d537h4a.jpg",
  "http://orig11.deviantart.net/d6db/f/2011/225/7/8/firdous_e_bareen___by_megatruh-d46e5uf.jpg",
  "http://orig07.deviantart.net/d432/f/2012/325/f/e/illuminate_my_heart__by_megatruh-d5lqf10.jpg",
  "http://orig06.deviantart.net/5d4f/f/2013/193/9/6/sailing_home_by_megatruh-d6d7ryd.jpg",
  "http://orig06.deviantart.net/0d99/f/2010/282/3/f/up___by_megatruh-d30dsjy.png",
  "http://orig09.deviantart.net/ba3d/f/2013/128/4/f/flood___by_megatruh-d64jk09.jpg",
  "http://orig13.deviantart.net/eade/f/2013/039/b/f/the_world_is_new___by_megatruh-d5uar1y.jpg",
  "http://orig02.deviantart.net/2d2c/f/2012/311/0/f/deserere___by_megatruh-d5k9246.jpg",
  "http://orig09.deviantart.net/74db/f/2014/046/3/e/quiet_calamity_by_megatruh-d76k76f.jpg",
  "http://orig13.deviantart.net/bb4b/f/2015/312/1/f/1f50891b645f6f0435dd8dce5120514f-d9fydcs.jpg",
  "http://orig02.deviantart.net/9f56/f/2015/073/b/c/bc85aab5186cdeae4076abdef5afafad-d8lr3th.jpg"
]

IMAGE_TITLE = [
  "Sky for Dreamers",
  "Nature Salvation",
  "Beautiful World",
  "Great Migration",
  "Endless Journey",
  "Blue Planet",
  "Somewhere Near, But Far In Time",
  "Stairway to the Sky",
  "Phantasmagoria",
  "Berangkat.",
  "Infinite Dreams",
  "Very Secret Garden",
  "Weightless and Horizontal",
  "Firdous e Bareen",
  "Illuminate my Heart",
  "Sailing Home",
  "Up",
  "Flood",
  "The World Is New",
  "Deserere",
  "Quiet Calamity",
  "Cloud Regatta",
  "Moment"
]



IMAGE_URLS.length.times do |i|
  Image.create!(
    image_url: IMAGE_URLS[i],
    user_id: 1,
    image_type: "digital",
    title: IMAGE_TITLE[i])
end

User.create!(
  name: "Guest",
  email: "guest@example.com",
  password: "password"
)

User.create!(
  name: "Kasper Kuo",
  email: "kasper@example.com",
  password: "password"
)
