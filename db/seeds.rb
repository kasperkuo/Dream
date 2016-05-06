# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

IMAGE_URLS = [
  "https://img14.deviantart.net/8b4a/i/2013/214/7/d/sky_for_dreamers_by_rhads-d6gbpqu.jpg",
  "https://img03.deviantart.net/cfd8/i/2014/291/e/7/nature_salvation_by_rhads-d83ai0z.jpg",
  "https://img04.deviantart.net/04cf/i/2014/137/1/9/beautiful_world_by_rhads-d7iotc1.jpg",
  "https://img12.deviantart.net/c1ad/i/2015/140/d/f/great_migration_by_rhads-d8u3g5q.jpg",
  "https://pre05.deviantart.net/9a63/th/pre/i/2012/308/b/c/endless_journey_by_rhads-d5jyend.jpg",
  "https://pre09.deviantart.net/396e/th/pre/f/2013/112/4/9/blue_planet_by_yuumei-d62mn5b.jpg",
  "https://pre08.deviantart.net/871e/th/pre/f/2012/029/f/7/somewhere_near__but_far_in_time__by_megatruh-d4nz3s5.jpg",
  "https://orig02.deviantart.net/b722/f/2012/247/1/6/stairway_to_the_sky___by_megatruh-d5dj2ik.jpg",
  "https://orig07.deviantart.net/bf94/f/2011/202/7/8/phantasmagoria___by_megatruh-d4172as.jpg",
  "https://pre00.deviantart.net/8738/th/pre/f/2011/058/7/f/berangkat__by_megatruh-d3aivav.jpg",
  "https://img10.deviantart.net/3b73/i/2013/361/c/3/infinite_dreams_by_rhads-d5eywh4.jpg",
  "https://orig12.deviantart.net/2dc4/f/2012/151/b/6/very_secret_garden___by_megatruh-d51qr2f.jpg",
  "https://pre01.deviantart.net/0066/th/pre/f/2012/163/3/b/weightless_and_horizontal___by_megatruh-d537h4a.jpg",
  "https://orig11.deviantart.net/d6db/f/2011/225/7/8/firdous_e_bareen___by_megatruh-d46e5uf.jpg",
  "https://orig07.deviantart.net/d432/f/2012/325/f/e/illuminate_my_heart__by_megatruh-d5lqf10.jpg",
  "https://orig06.deviantart.net/5d4f/f/2013/193/9/6/sailing_home_by_megatruh-d6d7ryd.jpg",
  "https://orig06.deviantart.net/0d99/f/2010/282/3/f/up___by_megatruh-d30dsjy.png",
  "https://orig09.deviantart.net/ba3d/f/2013/128/4/f/flood___by_megatruh-d64jk09.jpg",
  "https://orig13.deviantart.net/eade/f/2013/039/b/f/the_world_is_new___by_megatruh-d5uar1y.jpg",
  "https://orig02.deviantart.net/2d2c/f/2012/311/0/f/deserere___by_megatruh-d5k9246.jpg",
  "https://orig09.deviantart.net/74db/f/2014/046/3/e/quiet_calamity_by_megatruh-d76k76f.jpg",
  "https://orig13.deviantart.net/bb4b/f/2015/312/1/f/1f50891b645f6f0435dd8dce5120514f-d9fydcs.jpg",
  "https://orig02.deviantart.net/9f56/f/2015/073/b/c/bc85aab5186cdeae4076abdef5afafad-d8lr3th.jpg",
  "https://orig08.deviantart.net/c8c1/f/2015/345/6/6/the_heavens_and_us__with_video_tutorial_link__by_yuumei-d9jrqmp.jpg"
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
  "Moment",
  "The Heavens and Us"
]

ALBUM_IMAGE_URLS = [
  "https://images.unsplash.com/photo-1461468611824-46457c0e11fd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=a035cc63ca5112addcce8399c7cd432a",
  "https://66.media.tumblr.com/tumblr_md6vw2FJ321qgn6feo1_500.jpg",
  "https://67.media.tumblr.com/cb0055e777f41739333a47989a1397f0/tumblr_nsgnji0GHO1qz62xqo1_500.jpg",
  "https://67.media.tumblr.com/934bf8628824f369d6766d7d9bb6301f/tumblr_n2um3mqwID1qz62xqo1_500.jpg",
  "https://66.media.tumblr.com/41fc4028562f91979d0bf5166b61c97c/tumblr_mmax68Dflh1rgo217o1_500.jpg",
  "https://66.media.tumblr.com/09b73f2ee5139d5c5b911c7b2c737550/tumblr_mwu1o9QJ3Z1sulnzno1_500.jpg",
  "https://65.media.tumblr.com/8ba0bc5dc2adab77c6a2d7e12bee22b4/tumblr_mqx68uZNkw1rcnu4ao1_500.jpg",
  "https://66.media.tumblr.com/c6f25548535d48726ab46ec6a09667b6/tumblr_mk2oor3uZa1qggs6ao1_500.jpg",
  "https://66.media.tumblr.com/tumblr_lvtevhCKPz1qdxchuo1_500.jpg",
  "https://66.media.tumblr.com/adee4d13d9673d0b1fb74f3e4da32765/tumblr_mrx3axMGaB1rnlb7lo1_r1_400.jpg",
  "https://66.media.tumblr.com/081cb9c6b4fc1a7ecbd5aa3b6d5e8c5d/tumblr_mkclglFgWz1rwe56eo1_500.jpg",
  "https://66.media.tumblr.com/tumblr_max0psVRDI1rsbqe6o1_500.jpg",
  "https://66.media.tumblr.com/4eb575978cbd3061dfb4e88d7ad3d968/tumblr_meqq6uPL3T1r302kmo1_500.jpg",
  "https://66.media.tumblr.com/8a41d1bec958cb8c6d5969f0a10f961f/tumblr_mffpodAoaF1qhu7x0o1_500.jpg",
  "https://66.media.tumblr.com/009e3b0980951a7312a3f990e385b35d/tumblr_mj4qe1rgqN1r4p7vto1_500.jpg",
  "https://67.media.tumblr.com/tumblr_m8la2eSbmN1qik7xgo1_500.jpg",
  "https://67.media.tumblr.com/5a209aae934a6f6fe996fcd48f7e5bc5/tumblr_mgvotsX6UD1s1aez7o1_500.jpg",
  "https://67.media.tumblr.com/3a287dd8ad33b0da56ed18fdacdcbfd0/tumblr_mijqrblOAq1rtbxrwo1_500.jpg",
  "https://66.media.tumblr.com/08109daf6a6f3cff6e3874f4dfa77049/tumblr_mg9m8abL7g1rpe0jco1_500.jpg",
  "https://66.media.tumblr.com/43d2742a6917ac13fd856e016273102b/tumblr_mfswzlVygD1qiucwio1_500.jpg",
  "https://66.media.tumblr.com/babfc79880065d92216009fa429afa6c/tumblr_meymuzxbWy1rpc1rco1_500.png"
]

ALBUM_IMAGE_TITLES = [
  "Serenity",
  "Pride",
  "Horizon",
  "Leave the Planet",
  "La Fantasie",
  "Recover",
  "Silence",
  "Dream",
  "Venice Beach",
  "Venezia",
  "Atlantis",
  "Day Dream",
  "Float",
  "Paris",
  "Curiosity",
  "Waiting",
  "Eye of the Predator",
  "Magic Forest",
  "Moment of Happiness",
  "Waterfall",
  "A Day of Happiness"
]

GUEST_ALBUM_IMAGES = [
  "https://images.unsplash.com/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=060404b95bb482ecb25161f0e4b69560",
  "http://66.media.tumblr.com/aab27dc4215fff6854affa647b4fc5e9/tumblr_n3qp7rc66H1rr7g6fo1_500.jpg",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450",
  "https://2.bp.blogspot.com/-Y6r8Dpt-Xsk/UZ36z0Ulj2I/AAAAAAAABmo/5INQ5dE_Q1M/s1600/pink-gradient-sky.jpg",
  "https://67.media.tumblr.com/tumblr_m7ux2g8Q8a1qzclx7o1_500.jpg",
  "https://65.media.tumblr.com/60c6f79be62af89327d35d24e4153a3b/tumblr_mevpmrTHAA1rj304co1_500.jpg",
  "https://67.media.tumblr.com/tumblr_ma9dpcXign1qf84kuo1_500.jpg",
  "https://66.media.tumblr.com/a429ed533ebea722804dfc53f4f0fb7f/tumblr_mf8l88moO81qaatj7o1_500.jpg",
  "https://images.unsplash.com/photo-1460364157752-926555421a7e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=0fe3f0d99130ab847ace35f6abe06ac6",
  "https://65.media.tumblr.com/133ef07714577016785ef9b0199ff5bf/tumblr_msg2owBM621qmkgojo1_500.jpg",
  "https://66.media.tumblr.com/ac865b95e2f59e5223ba674904f8a268/tumblr_mhbqpqLGzO1r5h04to1_500.jpg",
  "https://66.media.tumblr.com/d400e91fc8edb176535257b8ca45d2d4/tumblr_mpu917gc6H1raflu8o1_500.jpg",
  "https://67.media.tumblr.com/1e824081868848eb5954a8ddbd581fcd/tumblr_mf010pvLjl1r34qiso1_500.jpg",
  "https://66.media.tumblr.com/cb50f3b10bffc0e1dd074498cc2eafa9/tumblr_mlmfnyL8ib1qcz4s2o1_500.jpg",
  "https://66.media.tumblr.com/tumblr_mau03a8A6X1rd5j8mo1_500.jpg",
  "https://67.media.tumblr.com/9cd8b90515d1888da16abd2e7f22a2ee/tumblr_meslwoNxbM1rs8i79o1_500.png",
  "https://66.media.tumblr.com/80b91c1d3278fc54493f48cfe53d788b/tumblr_mfg15gSWnC1r2s1lro1_500.jpg",
  "https://67.media.tumblr.com/tumblr_ma3d6wfBGt1qez43mo1_500.jpg",
  "https://65.media.tumblr.com/tumblr_mc5sqjsXjM1r2cjjao1_500.jpg",
  "https://66.media.tumblr.com/tumblr_mcdfdbjjYZ1r95y9ro1_500.png",
  "https://images.unsplash.com/photo-1430713976611-6c0b558c239e?crop=entropy&dpr=2&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450"
]

GUEST_ALBUM_TITLES = [
  "Forever",
  "Tranquility",
  "Wonder",
  "Pink Sky Boutique",
  "I Found Heaven in my Dreams",
  "Snow Leopard",
  "A New World",
  "Milky Way Path",
  "",
  "Focus",
  "Gentle",
  "White Tiger",
  "Happiest Place on Earth",
  "",
  "",
  "Warmth",
  "Adventure",
  "",
  "",
  "Good Night",
  ""
]

TRADITIONAL_URLS = [
  "https://66.media.tumblr.com/68e3474fa34ad2eee142eb9cd0732e94/tumblr_n37n63Hyla1rnxcz2o1_500.jpg",
  "https://67.media.tumblr.com/705ec0e2411b2f7b5b64b026236c8a44/tumblr_n0kx1fCqWr1t8svzpo1_500.jpg",
  "https://67.media.tumblr.com/tumblr_mdfzxf3JkM1qegbl1o1_500.jpg",
  "https://65.media.tumblr.com/tumblr_m358b5KlZr1rs0d62o1_500.jpg",
  "https://66.media.tumblr.com/tumblr_lrj99xQgZs1qe8vh5o1_500.jpg",
  "https://saimg-a.akamaihd.net/saatchi/519729/art/1962552/1083319-7.jpg",
  "https://saimg-a.akamaihd.net/saatchi/519729/art/1980965/1099025-7.jpg",
  "https://s-media-cache-ak0.pinimg.com/736x/58/8d/d0/588dd0255b767cbb24d72991d2be646c.jpg",
  "https://pre11.deviantart.net/b7b8/th/pre/f/2013/270/0/2/purity__sold__by_mekhz-d68m9xx.jpg",
  "https://s-media-cache-ak0.pinimg.com/564x/d2/f5/25/d2f5257d9d822424ffeb9b32cf069485.jpg"
]

TRADITIONAL_TITLES = [
  "",
  "",
  "",
  "",
  "",
  "In Your Arms",
  "The Sunshine Was More Transient",
  "Marionette",
  "puRity",
  "Howling Wolf"
]

TRADITIONAL_DESCRIPTION = [
  "",
  "",
  "",
  "",
  "",
  "by Sara Riches",
  "by Sara Riches",
  "by Sere Rivers",
  "by Mekhz",
  "source: https://www.flickr.com/photos/241730/"
]


ALBUM_IMAGE_URLS.length.times do |i|
  Image.create!(
    image_url: ALBUM_IMAGE_URLS[i],
    user_id: 2,
    image_type: "Photography",
    title: ALBUM_IMAGE_TITLES[i],
    album_id: 2
  )
end

GUEST_ALBUM_IMAGES.length.times do |i|
  Image.create!(
    image_url: GUEST_ALBUM_IMAGES[i],
    user_id: 3,
    image_type: "Photography",
    title: GUEST_ALBUM_TITLES[i],
    album_id: 3
  )
end

IMAGE_URLS.length.times do |i|
  Image.create!(
    image_url: IMAGE_URLS[i],
    user_id: 1,
    image_type: "Digital",
    title: IMAGE_TITLE[i],
    album_id: 1
  )
end

TRADITIONAL_URLS.length.times do |i|
  Image.create!(
    image_url: TRADITIONAL_URLS[i],
    user_id: 1,
    image_type: "Traditional",
    title: TRADITIONAL_TITLES[i],
    description: TRADITIONAL_DESCRIPTION[i]
  )
end

User.create!(
  name: "Kasper Kuo",
  email: "kasper@example.com",
  password: "password"
)

User.create!(
  name: "Shaghig",
  email: "shaghig@example.com",
  password: "password"
)

User.create!(
  name: "Guest",
  email: "guest@example.com",
  password: "password"
)

Album.create!(
  title: "Imagine",
  cover_photo_url: "https://orig08.deviantart.net/c8c1/f/2015/345/6/6/the_heavens_and_us__with_video_tutorial_link__by_yuumei-d9jrqmp.jpg",
  user_id: 1
)

Album.create!(
  title: "Serenity",
  cover_photo_url: "https://images.unsplash.com/photo-1461468611824-46457c0e11fd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=a035cc63ca5112addcce8399c7cd432a",
  user_id: 2
)

Album.create!(
  title: "Forever",
  cover_photo_url: "https://images.unsplash.com/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=060404b95bb482ecb25161f0e4b69560",
  user_id: 3
)
