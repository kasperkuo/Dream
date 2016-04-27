# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Image.create!(
  title: "hi",
  description: "hi",
  user_id: 1,
  album_id: 1,
  image_url: "http://img14.deviantart.net/8b4a/i/2013/214/7/d/sky_for_dreamers_by_rhads-d6gbpqu.jpg",
  image_type: "digital")
