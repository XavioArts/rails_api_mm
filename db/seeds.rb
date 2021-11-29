# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

prev_total = Monster.all.size

Monster.destroy_all

puts "Cleared database. Removed #{prev_total} entries"

Monster.create(
    name: "Ancient Blue Dragon",
    life: 481,
    cr: 23.0,
    mon_type: "Dragon",
)

Monster.create(
    name: "Beholder",
    life: 180,
    cr: 13.5,
    mon_type: "Aberration",
)

Monster.create(
    name: "Ghost",
    life: 45,
    cr: 4.0,
    mon_type: "Undead",
)

Monster.create(
    name: "Goblin",
    life: 7,
    cr: 0.25,
    mon_type: "Goblinoid",
)

puts "seeded #{Monster.all.size} monsters into the manual"