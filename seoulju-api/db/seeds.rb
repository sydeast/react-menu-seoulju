# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
food = [
    {
category: "Appetizer",
name: "Seasoned Fries",
desc: "Regular or Waffle Cut fries seasoned with special blend of spices and tossed in cornstarch for an extra crispy crunch.",
price: 5,
status: "Available"
    },
    {
        category: "Rice Plates",
name: "Kimchi Fried Rice",
desc: "Homemade fried rice topped with a Sunny side egg. Add pork belly, spam, or shrimp for $3 each.",
price: 11,
status: "Available"
    },
    {
        category: "Soups",
name: "Military Hotpot (Budaejjigae)",
desc: "Ground beef, spam, hotdogs, bacon, tofu, kimchi, vegetables, and ramen noodles in a spicy broth. Includes two (2) bowls of rice upon request. (Feeds 2-3)",
price: 31,
status: "Unavailable"
    }
]

food.each { |f| new_menu_item = Menu.create(
category: f[:category],
name: f[:name],
desc: f[:desc],
price: f[:price],
status: f[:status],

)}