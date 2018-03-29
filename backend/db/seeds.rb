# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

daniel = User.create(username: 'Daniel', name: 'Daniel Lee', cohort: '012918', alumni: false )
zahran = User.create(username: 'Zahran', name: 'Zahran Kabir', cohort: '012918', alumni: false )
flatiron = CommunityFridge.create(name: 'flatiron')
pizza = Food.create(type_of_food: 'pizza', in_fridge: true, count: 1, community_fridge_id: flatiron.id)
zahran_mealpal = Mealpal.create(user_id: zahran.id, referral_link: 'mealpal.com/enamulkabir', count: 1)
job1 = Job.create(title: 'Fullstack Dev', description: 'Must know JS', company: "Flatiron", link: "flatiron.com")
bob = User.create(username: "bobthebuilder", name: "Bob Mat", cohort: '060117', alumni: true)
susan = User.create(username: "susanbcoding", name: "Susan Amusin", cohort: "090909", alumni: true)
