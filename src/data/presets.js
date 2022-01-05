'use strict';

export const PRESET1 = {
  name: 'Robe of Bread Summoning',
  winningText: '',
  background: '',
  removeWinning: false,
  prizes: [
    // use defaults - freq: 4, bg: auto, text: #222, hide: false, fontMod: 1
    {
      name: 'Sourdough roll',
      extra: 'Sourdough roll glistening with freshly applied butter and a garnish of parsley.',
      fontMod: 1.4
    },
    {
      name: 'Braided loaf',
      extra:
        'Braided loaf filled with minced and roasted fruits. Apple filled braids are particular popular in colder weather',
      fontMod: 1.4
    },
    {
      name: 'Very dense loaf',
      extra: 'A very dense loaf of yellow-looking bread cooked with yolks of owlbear eggs, very filling.',
      fontMod: 1.4
    },
    {
      name: 'Party Pretzel',
      extra: 'A two meter long twisted salty pretzel with a thin core of brown mustard. Feeds up to 12.',
      fontMod: 1.4
    },
    { name: 'Hamburger bun', extra: 'A sesame seed hamburger bun', fontMod: 1.4 },
    { name: 'Cheesy breadstick', extra: 'A cheesy breadstick.', fontMod: 1.4 },
    {
      name: 'Danish',
      extra: 'A danish (strawberry, lemon, snozzbery, cheese, etc. Choose new each time.)',
      fontMod: 1.4
    },
    { name: 'Pumpernickle', extra: 'A small loaf of warm pumpernickle', fontMod: 1.4 },
    {
      name: 'Barkskin biscuit',
      extra: 'Barkskin biscuit that has a tough, almost woody, exterior, often soaked in milk or tea to soften.',
      fontMod: 1.4
    },
    { name: 'Cinnamon raisin', extra: 'A small loaf of cinnamon raisin bread.', fontMod: 1.4 },
    {
      name: 'Fairy',
      extra:
        'Fairy bread - half slice of whitebread cut in the diagonal spred gererously with butter and covered in rainbow sprinkles. Make a DC 10 Constitution save, on success, you gain 1d4 to initiative rolls for 8 hours, on fail you immediately vomit.',
      fontMod: 1.4
    },
    {
      name: 'Dwarven ale',
      extra:
        'Dwarven ale bread is a very dense but flavorful bread made from ales and stouts (generally of dwarven make). Despite being baked, the potency of the drinks used in its making can still provide the eater a slight buzz when consumed. Often used as a desert by dwarves.',
      fontMod: 1.4
    },
    {
      name: 'Jötnbrød',
      extra:
        'Jötnbrød (YERT-n-breh), a boule of dark rye bread enriched with bone meal, resulting in a beefy, slightly crunchy bread. A large handful is equivalent to a trail ration, but produces horrid constipation.',
      fontMod: 1.4
    },
    {
      name: 'Sawyers flat',
      extra:
        'Sawyers flat, a horrid, matzo-like crispbread cut with maple (best), birch (ehhh), or pine (oh gods) sawdust. Often eaten by unskilled laborers, or during famine/drought.',
      fontMod: 1.4
    },
    {
      name: 'Exotic',
      extra: 'A greenish, fist-sized loaf of bread that uses a flour made from exotic, far away seeds.',
      fontMod: 1.4
    },
    {
      name: 'Raisin',
      extra: 'Raisin dotted sweetened bread rolled into spirals and heavily glazed. Topped with pistachios.',
      fontMod: 1.4
    },
    {
      name: 'Red-ish Podling',
      extra: 'Small redish roll baked from a dried powered radish root instead of wheat. A Podling speciality.',
      fontMod: 1.4
    },
    {
      name: 'Bag-el',
      extra: 'Bagel (asiago, whole wheat, multigrain, blueberry, cherry, goodberry, etc. Choose new each time.)',
      fontMod: 1.4
    },
    { name: 'Baguette', extra: 'A foot long baguette baked with whole garlic cloves.', fontMod: 1.4 },
    {
      name: 'Pepperloaf',
      extra:
        'Pepperloaf. A loaf of bread made with flour cut with ground pepper seeds and with minced pepper mixed into the dough. A delicacy among dragonborns.',
      fontMod: 1.4
    },
    {
      name: 'Cornbread',
      extra: 'Fresh cornbread and butter served with a side of honey, maple syrup, and/or fruit jam/jelly.',
      fontMod: 1.4
    },
    { name: 'Wholewheat', extra: 'A slice of toasted wholewheat bread', fontMod: 1.4 },
    {
      name: 'Kobold loaf',
      extra: 'Kobold loaf - delacacy among kobolds bread baked with mushrooms and cocaroaches.',
      fontMod: 1.4
    },
    { name: 'Focaccia', extra: 'A focaccia bread with asiago cheese', fontMod: 1.4 },
    { name: 'Cinnamon roll', extra: 'A hot and delicious cinnamon roll.', fontMod: 1.4 },
    { name: 'Hot cross bun', extra: 'A hot cross bun.', fontMod: 1.4 },
    { name: 'Brown', extra: 'A loaf of brown bread topped with whole oats.', fontMod: 1.4 },
    { name: 'Tortilla', extra: 'A burrito-sized flour tortilla', fontMod: 1.4 },
    {
      name: 'Bowlcap',
      extra:
        'Bowlcap a type of round, dense bread roll made to be crusty on one side but soft and steamed on the other. Typically eaten by laborers, the soft side is usually pressed down over the rim of a wooden bowl to act as a lid, containing and preserving the contents, until mealtime.',
      fontMod: 1.4
    },
    {
      name: 'Flower',
      extra: 'Flower bread is made from various types of powdered flowers giving it light floral taste and aroma.',
      fontMod: 1.4
    },
    { name: 'Honey', extra: 'Honey bread, bread but with honey.', fontMod: 1.4 },
    { name: 'Soft Pretzel', extra: 'A salted soft pretzel', fontMod: 1.4 },
    {
      name: 'Plum loaf',
      extra:
        'Plum loaf. A sweet whitebread cooked from a sheet of dough sprinkled with chunks of plums and then rolled up.',
      fontMod: 1.4
    },
    {
      name: 'Goodberry biscuit',
      extra:
        'Goodberry biscuit, made with the eponymous berries, grants 5hp when consumed, can be divided among five people, but cannot be admininstered to the unconscious.',
      fontMod: 1.4
    },
    { name: 'Marbled rye', extra: 'Marbled rye bread', fontMod: 1.4 },
    { name: 'Spider', extra: "Spider bread that was baked by drow. Don't ask. (Seriously)", fontMod: 1.4 },
    { name: 'Croutons', extra: 'A handful of croutons', fontMod: 1.4 },
    { name: 'Black rye', extra: 'Tiny dense black rye roll that is studded with cloves', fontMod: 1.4 },
    { name: 'Hard', extra: 'Fist-sized cup of hard bread, usually filled with stew.', fontMod: 1.4 },
    {
      name: "Ship's biscuit",
      extra: "A Ship's biscuit, barely edible but capable of lasting years at sea",
      fontMod: 1.4
    },
    {
      name: "Traveler's biscuit",
      extra:
        "A traveler's biscuit - similar, to ship's biscuit, but more palatable due to the addition of lard and salt, and with a shelf life of only a year.",
      fontMod: 1.4
    },
    {
      name: "Monkey's tail",
      extra:
        "Monkey's tail is a coil of thin pretzel-like bread that is boiled in soda ash, topped with salt and pepper, and then baked.",
      fontMod: 1.4
    },
    {
      name: 'Cassava ball',
      extra: 'Cassava ball - A cheesy bread roll whose crisp crust gives way to a tender, lightly sour interior.',
      fontMod: 1.4
    },
    { name: 'Dinner roll', extra: 'A dinner roll.', fontMod: 1.4 },
    {
      name: 'Snowpiercer special',
      extra: 'loaf of whitebread rich in protien because it is made with a meal made of ground dried maggots.',
      fontMod: 1.4
    },
    {
      name: 'Mutton',
      extra:
        'Mutton-bread, a double-fist-sized roll of steamed bread, that is filled with minced mutton spiced with plenty of pepper. The mutton is cooked inside the bread, so its juices leak out when bitten into.',
      fontMod: 1.4
    },
    { name: 'Rhubarb roll', extra: 'Small crunchy rhubarb roll', fontMod: 1.4 },
    {
      name: 'Red roll',
      extra:
        "A Red roll made with pig's blood instead of water, and stuffed with boiled pig stomach or intestine. Very nourishing, but smelly.",
      fontMod: 1.4
    },
    {
      name: 'Golden pear',
      extra:
        'Golden pear bread, shiny and egg enriched, contains a generous filling of wine-stewed pears, cinnamon, and brown sugar.',
      fontMod: 1.4
    },
    {
      name: "Peasant's breakfast",
      extra: "Peasant's breakfast, a barely-leavened flatbread that is split and stuffed with a chopped boiled egg",
      fontMod: 1.4
    },
    {
      name: 'Sticky finger',
      extra: 'A finger-sized roll of brown bread drizzled with blackstrap molasses or watered-down maple syrup.',
      fontMod: 1.4
    },
    {
      name: 'Damper bread ',
      extra: "Damper bread - It's a simple blend of water, flour and salt that can be cooked directly in the ashes.",
      fontMod: 1.4
    },
    {
      name: 'Caraway',
      extra: 'Fragrant caraway seed bun with a golden brown top glistening with butter.',
      fontMod: 1.4
    },
    {
      name: 'Salt-roll',
      extra:
        'Salt-roll a small round roll of chewy brown bread, topped with a truly alarming amount of flaky sea salt.',
      fontMod: 1.4
    },
    {
      name: 'Nut breads',
      extra: 'Nut breads, sweet or savory, baked with whatever nuts are locally grown.',
      fontMod: 1.4
    },
    { name: 'Naan', extra: 'A naan', fontMod: 1.4 },
    {
      name: 'Mushroom',
      extra:
        'Mushroom bread, sometimes with unexpected medicinal properties.(roll 1d20 on a 20, full heal, on a 19, heal 1d4)',
      fontMod: 1.4
    },
    { name: 'Frosted roll', extra: 'Tiny frosted roll full of spices, nuts, or fruits.', fontMod: 1.4 },
    {
      name: 'Bread boss',
      extra: 'A bread creation formed in the shape of a fantastical beast, castle, or scene',
      fontMod: 1.4
    },
    { name: 'Scone', extra: 'A scone stuffed with Bacon, sharp cheese, green onion, and hot pepper.', fontMod: 1.4 },
    {
      name: 'Chicken Bread',
      extra: "Chicken Bread, it's got the chicken baked in! So its great for those on the go.",
      fontMod: 1.4
    },
    {
      name: 'Almond croissant',
      extra: 'Almond croissant sliced in half and filled with dark chocolate spread.',
      fontMod: 1.4
    },
    {
      name: "Siren's Tack",
      extra:
        "Siren's Tack, a dry and dense bread, that is as hard as a brick. When eaten alone, this hardtack is basically a rock that sits in your gut. They are surprisingly filling, but a bit hard to keep down. It’s traditional to boil them in broth (to soften and flavor it) and serve under fish and gravy in port towns.",
      fontMod: 1.4
    },
    {
      name: 'Fastball',
      extra: 'A tight ball made of a loaf of whitebread with the crusts removed mashed together.',
      fontMod: 1.4
    },
    {
      name: 'Lifeleaf',
      extra:
        'Lifeleaf Wafer are small disks of flour, water, salt and finely chopped lifeleaf that are baked till hard. Naturally restorative, unnaturally salty. (heals 1 hp)',
      fontMod: 1.4
    },
    {
      name: 'Dumpling',
      extra: 'A hot, freshly boiled dumpling that smells as if it were cooked in a lamb stew. (you take 1 fire damage)',
      fontMod: 1.4
    },
    { name: 'Weaved', extra: 'A twist of bread interweaving dark pumpernickle and wheat breads.', fontMod: 1.4 },
    {
      name: 'Faeriebread',
      extra:
        'Faeriebread. A miniscule roll sprinked with faerie dust. When eaten, roll a d4 to see the effect (fly, greater invisibilty, blink, polymorph into a rabbit. The effects wear off after 1 hour.',
      fontMod: 1.4
    },
    { name: 'Dwarvish baguette', extra: 'Dwarvish baguette. Short and stout like its namesake.', fontMod: 1.4 },
    {
      name: "Snedrick's special",
      extra:
        'Snogsbane bread. Cooked with leaves of snogsbane, gnomes make this bread to help them quit smoking snogsbane. Bitter but energizing.',
      fontMod: 2
    },
    {
      name: 'Lembas',
      extra: 'Lembas bread. Broken into small bites, this small flatbread can feed up to 30.',
      fontMod: 1.4
    },
    {
      name: 'Twice baked',
      extra: "Twice baked traveler's bread provides a tough but crisp foodstuff that is perfect for trail rations.",
      fontMod: 1.4
    },
    {
      name: 'Amaranth biscuits',
      extra: 'Amaranth biscuits yield a subtle nutty flavor that goes well with many spreads.',
      fontMod: 1.4
    },
    { name: 'Oat loaf', extra: 'A loaf of oat bread', fontMod: 1.4 },
    {
      name: 'Goodberry',
      extra:
        'Goodberry Biscuit - light, flaky, buttery biscuit infused with goodberry juice and drenched in a sweet sugary glaze. (heals 2 hp)',
      fontMod: 1.4
    },
    {
      name: 'Bolani',
      extra:
        "Elven Bolani, a common snack for elven miners - After rolling out the yeast-leavened dough into a thin sheet, the elf bakers layer bolani with a generous filling of potatoes, lentils, fresh herbs and scallions add bright flavor to the chewy, comforting dish, which gets a crispy crust when it's fried in shimmering-hot oil.",
      fontMod: 1.4
    },
    { name: 'Fantasy PopTart', extra: 'A small roll with a piece of apricot in the center.', fontMod: 1.4 },
    { name: 'Spicy', extra: 'A jalapeño loaf with melted cheddar on top.', fontMod: 1.4 },
    {
      name: "Dragon's Blood",
      extra:
        "A Fist-Sized dragon's blood roll When eaten, it adds 1 elemental damage to all attacks you make, and provides resistance to the dragon's element. Roll 1d8 to determine the element. The effect fades after 1 hour.",
      fontMod: 1.4
    },
    { name: 'Soda', extra: 'A Loaf of soda bread.', fontMod: 1.4 },
    {
      name: 'Turtle',
      extra:
        'Turtle bread, a round loaf that is baked at extremely high heat so that it is hard on the outside, and super soft on the inside.',
      fontMod: 1.4
    },
    {
      name: 'Fruity Sourdough',
      extra: 'A small loaf of sourdough bread with pineapple chunks mixed into it.',
      fontMod: 1.4
    },
    { name: 'Brioche', extra: 'The most perfectly cooked Brioche roll you have ever had.', fontMod: 1.4 },
    { name: 'Garlic Bread', extra: 'A perfectly toasted half-loaf of garlic bread.', fontMod: 3 },
    {
      name: 'Stone',
      extra:
        'Stone bread is perfect for adventurers as it will never go stale due to it already rock hard. It can double up as a rather effective improvised weapon. Mage by goliaths',
      fontMod: 1.4
    },
    {
      name: 'Black moss',
      extra:
        'Black moss breadstick, a jet-black appearance belies an earthy almost charcoal-like flavor that transitions to a mocha aftertaste.',
      fontMod: 1.4
    },
    {
      name: 'Owlbear Claws',
      extra:
        'Owlbear Claws are delicious semi-circular loaves of bread made with honey and fig. They are a foot across with large ‘claws’ cut out on one side. Will feed a party of five.',
      fontMod: 1.4
    },
    {
      name: 'Swirl bun',
      extra:
        'A chocolate and hazelnut swirled bun with magical blue sugar (that sparkles) sprinkled on top of them. When consumed you can change your eye colour for a minute.',
      fontMod: 1.4
    },
    { name: 'Crumbly biscuit', extra: 'A crumbly biscuit made with bear fat.', fontMod: 1.4 },
    {
      name: 'Prism dough',
      extra:
        'Prism dough is a bread that is risen to look like a triangular based prism. It tastes sweeter at the top of the spire and sourer nearer the base.',
      fontMod: 1.4
    },
    {
      name: 'Chiploaf',
      extra: 'Chiploaf - A loaf of soft white bread encased in which is a whole chipmonk. A goblin delicacy',
      fontMod: 1.4
    },
    {
      name: 'Troll Rolls',
      extra: 'Troll Rolls are warm basil rolls, jarred with melted honey butter and sugared flesh. (No toll required)',
      fontMod: 1.4
    },
    {
      name: 'Sporebread',
      extra:
        'A thick slice of sporebread smeared lightly with fire lichen paste. Made from bluestalk spores ground to a nutritious, bland flour. A staple of Duregar diets.',
      fontMod: 1.4
    },
    { name: 'Seastar roll', extra: 'Seastar roll. A small dinner roll baked with minced sea star.', fontMod: 1.4 },
    {
      name: "Tinker's",
      extra:
        "A loaf Tinker's bread. A speciality of tinker gnomes, itsa small whitebread baked with a gear, sprocket, or screw inside. (DC 15 Dex save or take 1 slashing or piercing damage eating it.)",
      fontMod: 1.4
    },
    {
      name: 'Seedloaf',
      extra:
        'Seedloaf - a whole wheat bread with a wide variatey of seeds baked in. A Kenku speciality. The quality of a seed loaf can be appraised by the number of seed types. The best are packed with seeds to the point where there is just enough dough for the loaf to hold together.',
      fontMod: 1.4
    },
    {
      name: 'Gradiation',
      extra:
        'Bread of gradiation - Made by drabongorn monks from a pizza-like dough, they stretch one side very thin, and leave a large mound of dough on one side. This results in a one bread that all degrees of cooked from burnt to raw. They contelmpate the many factets of humanoid nature as they slowly consume this bread, as part of their meditions.',
      fontMod: 1.4
    },
    { name: 'Pita', extra: 'A pita pocket', fontMod: 1.4 },
    {
      name: 'Glowroll',
      extra:
        'A gnomish glowroll. Cooked with a paste made from glowing mushrooms, it is offputting to look at, but very filling. An aquired taste.',
      fontMod: 1.4
    },
    {
      name: 'English muffin',
      extra:
        'Buttered english muffin, best served warm to ensure that the butter soaks into the soft and spongy crust.',
      fontMod: 1.4
    }
  ]
};

export const PRESET2 = {
  name: 'Wheel of RIP Carl the Pugapegicorn',
  winningText: '',
  background: '',
  removeWinning: false,
  prizes: [
    { name: 'Roll twice', extra: 'Roll twice on this table, ignoring this result on subsequent rolls.', fontMod: 1.4 },
    { name: 'Truesight', extra: 'For the next minute, you gain truesight out to a distance of 60ft.', fontMod: 1.4 },
    {
      name: 'Height',
      extra:
        'Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.',
      fontMod: 1.4
    },
    {
      name: 'Deep',
      extra:
        'Your eyes go black and you begin to chant in Deep Speech. Anything fluent would recognize the chant as a summoning spell.',
      fontMod: 1.4
    },
    {
      name: 'Teleport',
      extra: 'You teleport up to 60 feet to an unoccupied space of your choice that you can see.',
      fontMod: 1.4
    },
    { name: 'London', extra: 'You cast Fog Cloud centered on yourself.', fontMod: 1.4 },
    {
      name: 'Age is just a number',
      extra:
        'Roll a d20. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger. If the roll is even, you get older.',
      fontMod: 1.4
    },
    {
      name: "Emperor's Planar clothes",
      extra:
        "Any weapons, armour, and items you're wearing or carrying is teleporting to the Astral Plane for 1 minute.",
      fontMod: 1.4
    },
    {
      name: 'Dancing by myself',
      extra:
        'Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.',
      fontMod: 1.4
    },
    {
      name: 'WHAGARBL-',
      extra: 'A portal opens within 60ft of you to the Elemental Plane of Water for 1 minute.',
      fontMod: 1.4
    },
    {
      name: 'Irish glow',
      extra:
        'You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.',
      fontMod: 1.4
    },
    {
      name: 'RAIN FIRE',
      extra: 'It begins to rain droplets of fire in a 60ft radius centered on you for 30 seconds.',
      fontMod: 1.4
    },
    {
      name: 'One pill makes you larger...',
      extra: 'Your size increases by one size category for the next minute.',
      fontMod: 1.4
    },
    { name: 'Mute button', extra: 'You are unable to speak for the next hour.', fontMod: 1.4 },
    { name: 'Mood music', extra: 'You are surrounded by faint, ethereal music for the next minute.', fontMod: 1.4 },
    {
      name: 'Extra life',
      extra: 'If you die within the next minute you come back to life as if by the reincarnate spell.',
      fontMod: 1.4
    },
    {
      name: 'Haunted',
      extra:
        'Until the next sunrise, the last creature you killed appears as a ghost and follows you around. Everyone can see and hear it, but it will only interact with you.',
      fontMod: 1.4
    },
    { name: 'Advantage', extra: 'You have advantage on your next ability check.', fontMod: 1.4 },
    {
      name: 'Darkness',
      extra: 'For the next minute, magical darkness fills a 60 foot sphere centered on you.',
      fontMod: 1.4
    },
    {
      name: 'Day after Chipotle',
      extra: 'A portal opens within 60ft of you to the Elemental Plane of Fire for 1 minute.',
      fontMod: 1.4
    },
    {
      name: 'Making it rain',
      extra: '1d100 gold coins rain down in a 30ft radius. Anyone caught in the radius takes 1d10 points of damage.',
      fontMod: 1.4
    },
    {
      name: 'Outer Dialogue',
      extra: 'You helplessly speak your thoughts to others for the next minute.',
      fontMod: 1.4
    },
    {
      name: 'Quake',
      extra:
        'The earth rumbles and cracks around you. Everyone in a 60ft radius of you must make a DC 15 Dex save or be knocked prone.',
      fontMod: 1.4
    },
    { name: 'Tired', extra: 'You gain 1 point of Exhaustion.', fontMod: 1.4 },
    { name: 'Door. Just a door.', extra: 'A door appears in front of you. It is locked.', fontMod: 1.4 },
    { name: 'Mirror Mirror', extra: 'You cast Mirror Image on yourself.', fontMod: 1.4 },
    {
      name: 'Ajna',
      extra:
        'An eye appears on your forehead and gives you advantage on Perception checks based on sight for 1 minute.',
      fontMod: 1.4
    },
    { name: 'Podcaster', extra: 'You cast Hideous Laughter on yourself.', fontMod: 1.4 },
    { name: 'Heal', extra: 'You regain 1d20 HP.', fontMod: 1.4 },
    {
      name: 'Minecraft',
      extra: 'A portal opens within 60ft of you to the Elemental Plane of Earth for 1 minute.',
      fontMod: 1.4
    },
    {
      name: 'Firestarter',
      extra: "For the next minute, any flammable object you touch that isn't being worn or carried bursts into flames.",
      fontMod: 1.4
    },
    { name: 'Anti-nerf', extra: 'You gain a +3 to all attack and damage rolls for the next hour.', fontMod: 1.4 },
    { name: 'Sprout', extra: '2d20 Trees grow out of the ground, all around you.', fontMod: 1.4 },
    {
      name: 'Teen wolf',
      extra: 'You turn into a werewolf for the next minute. You retain control of yourself.',
      fontMod: 1.4
    },
    {
      name: 'Horny',
      extra: 'You permanently grow a pair of small horns on your forehead. Remove Curse will remove them.',
      fontMod: 1.4
    },
    { name: 'Theodore Rex', extra: 'A tyrannosaurus rex appears within 20ft of you. It loves you.', fontMod: 1.4 },
    { name: 'Drought', extra: 'You evaporate any water within 1 mile of you.', fontMod: 1.4 },
    {
      name: 'Omen',
      extra: 'In 16 seconds there will be an eclipse for exactly 49 seconds. You know this.',
      fontMod: 1.4
    },
    { name: 'Run, Barry, Run', extra: 'Your speed is doubled for the next 24 hours.', fontMod: 1.4 },
    {
      name: 'Breezy',
      extra: 'A portal opens within 60ft of you to the Elemental Plane of Air for 1 minute.',
      fontMod: 1.4
    },
    { name: 'Do Little', extra: 'You can only speak to animals for 24 hours.', fontMod: 1.4 },
    { name: 'Success', extra: 'Your next ability check or saving throw is a critical success.', fontMod: 1.4 },
    { name: 'Inception', extra: 'Gravity reverses in 30ft radius for 10 seconds.', fontMod: 1.4 },
    { name: 'Striking', extra: 'You have advantage on your next attack roll.', fontMod: 1.4 },
    {
      name: '...and one pill makes you small',
      extra: 'Your size decreases by one size category for the next minute.',
      fontMod: 1.4
    },
    { name: 'Treebeard', extra: 'A treant appears within 60ft of you for 1 hour.', fontMod: 1.4 },
    { name: 'Shake your tailfeather', extra: 'You gain a 5ft prehensile tail for 12 hours.', fontMod: 1.4 },
    { name: 'Unfair', extra: 'You have disadvantage on your next saving throw.', fontMod: 1.4 },
    { name: 'Wet Blanket', extra: 'An anti-magic field appears in a 60ft radius, centered on you.', fontMod: 1.4 },
    {
      name: 'Ice-clops',
      extra: 'Your eyes appear as swirling globes of water, and you gain resistance to cold damage for 1 hour.',
      fontMod: 1.4
    },
    {
      name: 'Mind reader',
      extra: "You gain telepathy and can read any creature's thoughts within 60ft for the next minute.",
      fontMod: 1.4
    },
    {
      name: 'Anxiety',
      extra: 'You are suddenly aware of the position of every living creature within 1 mile.',
      fontMod: 1.4
    },
    { name: 'Redbull', extra: 'You gain the ability to fly, which lasts for 1 hour.', fontMod: 1.4 },
    {
      name: 'Heath Flirts pt. 1',
      extra: 'You fall in love with the next humanoid you see for 1 minute.',
      fontMod: 1.4
    },
    { name: 'Shoulda picked Mercy', extra: 'All allies within 30ft of you gain 2d10 HP.', fontMod: 1.4 },
    { name: 'Heath Flirts pt. 2', extra: 'You are terrified of the next humanoid you see for 1 minute.', fontMod: 1.4 },
    {
      name: 'Highschool',
      extra:
        "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
      fontMod: 1.4
    },
    { name: 'Unable', extra: 'You have disadvantage on your next ability check.', fontMod: 1.4 },
    { name: 'Get Fixed', extra: 'You regain 3d20 HP.', fontMod: 1.4 },
    {
      name: 'Donald Blake',
      extra: 'Your voice booms like thunder, and you gain resistance to lightning and thunder damage for 1 hour.',
      fontMod: 1.4
    },
    { name: '2020', extra: 'You gain 3 points of Exhaustion.', fontMod: 1.4 },
    { name: 'Burning (Wo)man', extra: 'You cast Faerie Fire on yourself.', fontMod: 1.4 },
    { name: 'Polygraph', extra: 'For the next minute you can tell if anyone is lying.', fontMod: 1.4 },
    {
      name: 'Open relationship',
      extra:
        "You cast Polymorph on yourself. If you fail the saving throw, you turn into an Awakened Shrub for the spell's duration.",
      fontMod: 1.4
    },
    {
      name: '5 hour energy',
      extra: 'You regain all spell slots and ability uses but gain 2 points of Exhaustion.',
      fontMod: 1.4
    },
    { name: 'Invincible', extra: 'You gain immunity to all damage for 1 minute.', fontMod: 1.4 },
    { name: 'Twister', extra: 'You cast Whirlwind centered on a point you choose within 120ft.', fontMod: 1.4 },
    {
      name: 'Pound of Lead',
      extra: 'You gain the effects of the Feather Fall spell for the next 24 hours.',
      fontMod: 1.4
    },
    { name: 'Charlie', extra: 'A unicorn appears within 60ft of you for 1 hour.', fontMod: 1.4 },
    {
      name: 'Moisturize me',
      extra:
        'Your skin appears coarse and sandy, and you gain resistance to piercing, slashing, and bludgeoning damage for 1 hour.',
      fontMod: 1.4
    },
    { name: 'Blunderbuss', extra: 'All allies within 30ft of you lose 2d10 HP.', fontMod: 1.4 },
    { name: 'Rage', extra: 'You feel compelled to attack the nearest creature, once.', fontMod: 1.4 },
    { name: 'Adderall', extra: 'You gain proficiency in every skill for the next hour.', fontMod: 1.4 },
    { name: 'Medusa', extra: 'A creature you choose within 30ft turns to stone for 1 minute.', fontMod: 1.4 },
    { name: 'Finals', extra: "You don't require food, water, or sleep for the next 48 hours.", fontMod: 1.4 },
    { name: '(Dis)Advantageous', extra: 'You have disadvantage on your next attack roll.', fontMod: 1.4 },
    { name: 'Devil Dinosaur', extra: 'A tyrannosaurus rex appears within 20ft of you. It hates you.', fontMod: 1.4 },
    { name: 'Wallflower', extra: 'You can only speak to plants for 24 hours.', fontMod: 1.4 },
    { name: 'Action-oriented', extra: 'You take one additional action immediately.', fontMod: 1.4 },
    {
      name: 'Endeavor',
      extra: 'Your hair appears like fire, and you gain resistance to fire damage for 1 hour.',
      fontMod: 1.4
    },
    { name: 'Saving grace', extra: 'You have advantage on your next saving throw.', fontMod: 1.4 },
    { name: 'Talking toilet', extra: 'The next inanimate object you touch gains sentience.', fontMod: 1.4 },
    { name: 'Medium', extra: 'You can speak to the dead for 1 minute.', fontMod: 1.4 },
    { name: 'Blunder', extra: 'Your next ability check or saving throw is a critical failure.', fontMod: 1.4 },
    {
      name: 'CHANGE PLACES',
      extra: 'You teleport up to 3 creatures within 30ft of you to an unoccupied space within 30ft of you.',
      fontMod: 1.4
    },
    { name: 'Dyejob', extra: 'Your hair and eyes change to a colour chosen by you.', fontMod: 1.4 },
    { name: 'Power nap', extra: 'You gain the advantage of a short rest.', fontMod: 1.4 },
    { name: 'Resilient', extra: 'You gain resistance to all damage for 1 minute.', fontMod: 1.4 },
    { name: 'Large Med Pack', extra: 'You regain 5d20 HP.', fontMod: 1.4 },
    { name: 'Sensitive', extra: 'You gain vulnerability to all damage for 1 minute.', fontMod: 1.4 },
    { name: 'Tastes like chicken', extra: 'A phoenix appears within 60ft of you for 1 minute.', fontMod: 1.4 },
    { name: 'Flashbang', extra: 'You are blinded and deafened for the next hour.', fontMod: 1.4 },
    { name: 'Very very frightening', extra: 'A storm giant appears within 60ft of you for 1 minute.', fontMod: 1.4 },
    {
      name: 'Clockstoppers',
      extra: 'Time stops around you for 1 minute. Any creature you touch becomes un-stopped.',
      fontMod: 1.4
    },
    {
      name: 'Portal to Jersey',
      extra: 'A portal opens within 60ft of you to Diabolis, the Plane of Devils, for 1 minute.',
      fontMod: 1.4
    },
    { name: 'Noodle arms', extra: 'You gain a -3 to all attack and damage rolls for the next hour.', fontMod: 1.4 },
    {
      name: 'God-awful Portals',
      extra: 'A portal opens within 60ft of you to Exaltus, the Plane of Celestials, for 1 minute.',
      fontMod: 1.4
    },
    { name: '2020+2021', extra: 'You gain 5 points of Exhaustion.', fontMod: 1.4 },
    {
      name: 'Hi, Gladys!',
      extra: 'A portal opens within 60ft of you to Obsidious, the Plane of Demons, for 1 minute.',
      fontMod: 1.4
    },
    {
      name: 'Wishful thinking',
      extra: 'You gain 1 use of the Wish spell, which must be cast within the next 24 hours.',
      fontMod: 1.4
    }
  ]
};

export const DEFAULT_PRESETS = [PRESET1, PRESET2];
