// Dummy data for local testing
// NOTE: Once firebase connection is stablished, this dummy data is not used anymore.

const initialBooks = [
  {
    _id: 1,
    title: "The Call Of The Wild",
    author: "Jack London",
    genre: "action",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41JNWeZqnsL._SX336_BO1,204,203,200_.jpg",
    description: `The Call of the Wild is a novel by Jack London published in 1903. The story is set in the Yukon during the 1890s Klondike Gold Rush—a period in which strong sled dogs were in high demand. The novel's central character is a dog named Buck, a domesticated dog living at a ranch in the Santa Clara Valley of California as the story opens. 
    Stolen from his home and sold into service as sled dog in Alaska, he reverts to a wild state. Buck is forced to fight in order to dominate other dogs in a harsh climate.`,
    year: 2020,
    pages: 56,
    publisher: "Unknown",
    rating: 4.5,
    price: 5.99,
    stock: 10,
  },
  {
    _id: 2,
    title: "The Three Musketeers",
    author: "Alexandre Dumas",
    genre: "action",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41TxXqToCCL._SX348_BO1,204,203,200_.jpg",
    description: `The Three Musketeers is a novel by Alexandre Dumas. Set in the 17th century, it recounts the adventures of a young man named d'Artagnan after he leaves home to travel to Paris, to join the Musketeers of the Guard. D'Artagnan is not one of the musketeers of the title; those being his friends Athos, Porthos and Aramis, inseparable friends who live by the motto "all for one, one for all", a motto which is first put forth by d'Artagnan. In genre, The Three Musketeers is primarily a historical novel and adventure.`,
    year: 2014,
    pages: 398,
    rating: 4.4,
    price: 14.99,
    stock: 10,
    publisher: "Unknown",
  },
  {
    _id: 3,
    title: "Life of Pi",
    author: "Yann Martel",
    genre: "action",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51rxEvLljUL._SX322_BO1,204,203,200_.jpg",
    description: `The son of a zookeeper, Pi Patel has an encyclopedic knowledge of animal behavior and a fervent love of stories. When Pi is sixteen, his family emigrates from India to North America aboard a Japanese cargo ship, along with their zoo animals bound for new homes.

    The ship sinks. Pi finds himself alone in a lifeboat, his only companions a hyena, an orangutan, a wounded zebra, and Richard Parker, a 450-pound Bengal tiger. Soon the tiger has dispatched all but Pi, whose fear, knowledge, and cunning allow him to coexist with Richard Parker for 227 days while lost at sea.`,
    year: 2003,
    pages: 326,
    rating: 4.4,
    price: 8.99,
    stock: 5,
    publisher: "Mariner Books",
  },

  {
    _id: 4,
    title: "Me: Elton John",
    author: "Elton John",
    genre: "biographies",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41TJxOmPRjL._SX323_BO1,204,203,200_.jpg",
    description: `Christened Reginald Dwight, he was a shy boy with Buddy Holly glasses who grew up in the London suburb of Pinner and dreamed of becoming a pop star. By the age of twenty-three he was performing his first gig in America, facing an astonished audience in his bright yellow dungarees, a star-spangled T-shirt, and boots with wings. Elton John had arrived and the music world would never be the same again.`,
    year: 2019,
    pages: 384,
    rating: 4.8,
    price: 14.81,
    stock: 2,
    publisher: "Henry Holt and Co.",
  },
  {
    _id: 5,
    title: "Frida: A Biography of Frida Kahlo",
    author: "Hayden Herrera",
    genre: "biographies",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41H1hCKKhvL._SX329_BO1,204,203,200_.jpg",
    description: `Hailed by readers and critics across the country, this engrossing biography of Mexican painter Frida Kahlo reveals a woman of extreme magnetism and originality, an artist whose sensual vibrancy came straight from her own experiences: her childhood near Mexico City during the Mexican Revolution; a devastating accident at age eighteen that left her crippled and unable to bear children; her tempestuous marriage to muralist Diego Rivera and intermittent love affairs with men as diverse as Isamu Noguchi and Leon Trotsky; her association with the Communist Party; her absorption in Mexican folklore and culture; and her dramatic love of spectacle.`,
    year: 2002,
    pages: 528,
    rating: 4.7,
    price: 23.08,
    stock: 5,
    publisher: "Harper Perennial",
  },
  {
    _id: 6,
    title: "I Know Why the Caged Bird Sings",
    author: "Maya Angelou",
    genre: "biographies",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51g6BwZ+evL._SX342_BO1,204,203,200_.jpg",
    description: `Here is a book as joyous and painful, as mysterious and memorable, as childhood itself. I Know Why the Caged Bird Sings captures the longing of lonely children, the brute insult of bigotry, and the wonder of words that can make the world right. Maya Angelou’s debut memoir is a modern American classic beloved worldwide.
 
    Sent by their mother to live with their devout, self-sufficient grandmother in a small Southern town, Maya and her brother, Bailey, endure the ache of abandonment and the prejudice of the local “powhitetrash.”`,
    year: 2009,
    pages: 304,
    rating: 4.8,
    price: 9.41,
    stock: 20,
    publisher: "Random House Trade Paperbacks",
  },

  {
    _id: 7,
    title: "Watchmen",
    author: "Alan Moore",
    genre: "comics",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/410D4H0IqjL._SX318_BO1,204,203,200_.jpg",
    description: `Considered the greatest graphic novel in the history of the medium, the Hugo Award-winning story chronicles the fall from grace of a group of superheroes plagued by all-too-human failings. Along the way, the concept of the superhero is dissected as an unknown assassin stalks the erstwhile heroes.

    This edition of Watchmen, the groundbreaking series from Alan Moore, the award-winning author of V For Vendetta and Batman: The Killing Joke, features art from industry legend Dave Gibbons, with high-quality, recolored pages found in Watchmen: Absolute Edition.`,
    year: 2019,
    pages: 416,
    rating: 4.8,
    price: 12.11,
    stock: 46,
    publisher: "DC Comics",
  },
  {
    _id: 8,
    title: "The Walking Dead",
    author: "Robert Kirkman",
    genre: "comics",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51S12ntkIbL._SX323_BO1,204,203,200_.jpg",
    description:
      "Introducing the first eight volumes of the fan-favorite, New York Times Best Seller series collected into one massive paperback collection! Collects The Walking Dead #1-48. This is the perfect collection for any fan of the Emmy Award-winning television series on AMC: over one thousand pages chronicling the beginning of Robert Kirkman's Eisner Award-winning continuing story of survival horror- from Rick Grimes' waking up alone in a hospital, to him and his family seeking solace on Hershel's farm, and the controversial introduction of Woodbury despot: The Governor. In a world ruled by the dead, we are finally forced to finally start living.",
    year: 2009,
    pages: 1088,
    rating: 4.8,
    price: 29.88,
    stock: 134,
    publisher: "Image Comics",
  },
  {
    _id: 9,
    title: "The Boy, the Mole, the Fox and the Horse",
    author: "Charlie Mackesy",
    genre: "comics",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/418D9yYGB3L._SX369_BO1,204,203,200_.jpg",
    description: `From British illustrator, artist, and author Charlie Mackesy comes a journey for all ages that explores life’s universal lessons, featuring 100 color and black-and-white drawings.

    “What do you want to be when you grow up?” asked the mole.
    
    “Kind,” said the boy.`,
    year: 2019,
    pages: 128,
    rating: 4.9,
    price: 13.88,
    stock: 149,
    publisher: "HarperOne",
  },

  {
    _id: 10,
    title: "The Night Fire",
    author: "Michael Connelly",
    genre: "detective",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41zqZwXZ-WL._SX325_BO1,204,203,200_.jpg",
    description: `Back when Harry Bosch was just a rookie homicide detective, he had an inspiring mentor who taught him to take the work personally and light the fire of relentlessness for every case. Now that mentor, John Jack Thompson, is dead, and his widow gives Bosch a murder book, one that Thompson took with him when he left the LAPD twenty years before -- the unsolved killing of a troubled young man.

    Bosch takes the murder book to Detective Renée Ballard and asks her to help him discover what about this crime lit Thompson's fire all those years ago.`,
    year: 2019,
    pages: 416,
    rating: 4.6,
    price: 14.31,
    stock: 330,
    publisher: "Little, Brown and Company",
  },
  {
    _id: 11,
    title: "The Adventures of Sherlock Holmes",
    author: "Sir Arthur Conan Doyle",
    genre: "detective",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/516dZVA7rQL._SX346_BO1,204,203,200_.jpg",
    description: `The Adventures of Sherlock Holmes is a collection of twelve stories written by Arthur Conan Doyle, featuring his famous detective. Venture back in time to Victorian London to join literature's greatest detective team — the brilliant Sherlock Holmes and his devoted assistant, Dr. Watson — as they investigate a dozen of their best-known cases. Originally published in 1892, this is the first and best collection of stories about the legendary sleuth. It's also the least expensive edition available.`,
    year: 2020,
    pages: 164,
    rating: 4.5,
    price: 7.99,
    stock: 40,
    publisher: "Unknown",
  },
  {
    _id: 12,
    title: "And Then There Were None",
    author: "Agatha Christie",
    genre: "detective",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51MlxNgCsyL._SX308_BO1,204,203,200_.jpg",
    description: `Ten people, each with something to hide and something to fear, are invited to an isolated mansion on Indian Island by a host who, surprisingly, fails to appear. On the island they are cut off from everything but each other and the inescapable shadows of their own past lives. One by one, the guests share the darkest secrets of their wicked pasts. And one by one, they die…

    Which among them is the killer and will any of them survive?`,
    year: 2011,
    pages: 300,
    rating: 4.5,
    price: 7.29,
    stock: 151,
    publisher: "William Morrow",
  },

  {
    _id: 13,
    title: "Theaching With the Hearth in Mind",
    author: "Lorea Martinez",
    genre: "educational",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41o7QrVRPdS._SX331_BO1,204,203,200_.jpg",
    description: `Creating better outcomes for your students sometimes means you have to challenge the odds. Academics and standardized assessments aren’t enough. You need to educate both their hearts and minds.

    Strengthen your students’ resilience, spark their curiosity for learning, and encourage future success in college, career, and beyond. Be the best teacher you can be and infuse social emotional skills into your teaching of any subject.`,
    year: 2021,
    pages: 254,
    publisher: "Unknown",
    rating: 5,
    price: 16.76,
    stock: 11,
  },
  {
    _id: 14,
    title: "Uncommon Sense Teaching",
    author: "B. Oakley PhD & B. Rogowsky EdD",
    genre: "educational",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41Pu79ZA91L._SX331_BO1,204,203,200_.jpg",
    description: `Neuroscientists and cognitive scientists have made enormous strides in understanding the brain and how we learn, but little of that insight has filtered down to the way teachers teach. Uncommon Sense Teaching applies this research to the classroom for teachers, parents, and anyone interested in improving education.
    
    Drawing on research findings as well as the authors' combined decades of experience in the classroom, Uncommon Sense Teaching equips readers with the tools to enhance their teaching, whether they're seasoned professionals or parents trying to offer extra support for their children's education.`,
    year: 2021,
    pages: 336,
    publisher: "TarcherPerigee",
    rating: 4.7,
    price: 16.24,
    stock: 26,
  },
  {
    _id: 15,
    title: "A Mind for Numbers",
    author: "B. Oakley PhD",
    genre: "educational",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41WK-w2fOlL._SX331_BO1,204,203,200_.jpg",
    description: `Whether you are a student struggling to fulfill a math or science requirement, or you are embarking on a career change that requires a new skill set, A Mind for Numbers offers the tools you need to get a better grasp of that intimidating material. Engineering professor Barbara Oakley knows firsthand how it feels to struggle with math. She flunked her way through high school math and science courses, before enlisting in the army immediately after graduation.`,
    year: 2014,
    pages: 336,
    publisher: "TarcherPerigee",
    rating: 4.6,
    price: 13.4,
    stock: 99,
  },

  {
    _id: 16,
    title: "The Water Dancer",
    author: "Ta-Nehisi Coates",
    genre: "fantasy",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51IA60IJysL._SX327_BO1,204,203,200_.jpg",
    description: `Young Hiram Walker was born into bondage. When his mother was sold away, Hiram was robbed of all memory of her—but was gifted with a mysterious power. Years later, when Hiram almost drowns in a river, that same power saves his life. This brush with death births an urgency in Hiram and a daring scheme: to escape from the only home he’s ever known.

    So begins an unexpected journey that takes Hiram from the corrupt grandeur of Virginia’s proud plantations to desperate guerrilla cells in the wilderness, from the coffin of the Deep South to dangerously idealistic movements in the North.`,
    year: 2019,
    pages: 416,
    rating: 4.6,
    price: 13.58,
    stock: 230,
    publisher: "One World",
  },
  {
    _id: 17,
    title: "Circe",
    author: "Madeline Miller",
    genre: "fantasy",
    image: "https://m.media-amazon.com/images/I/51dzuwLmm-L.jpg",
    description: `In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child -- not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power -- the power of witchcraft, which can transform rivals into monsters and menace the gods themselves.

    Threatened, Zeus banishes her to a deserted island, where she hones her occult craft, tames wild beasts and crosses paths with many of the most famous figures in all of mythology, including the Minotaur, Daedalus and his doomed son Icarus, the murderous Medea, and, of course, wily Odysseus.`,
    year: 2018,
    pages: 433,
    rating: 4.6,
    price: 11.99,
    stock: 8,
    publisher: "Little, Brown and Company",
  },
  {
    _id: 18,
    title: "Ninth House",
    author: "Leigh Bardugo",
    genre: "fantasy",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41cUxNtr5-L._SX326_BO1,204,203,200_.jpg",
    description: `Galaxy “Alex” Stern is the most unlikely member of Yale’s freshman class. Raised in the Los Angeles hinterlands by a hippie mom, Alex dropped out of school early and into a world of shady drug-dealer boyfriends, dead-end jobs, and much, much worse. In fact, by age twenty, she is the sole survivor of a horrific, unsolved multiple homicide. Some might say she’s thrown her life away. But at her hospital bed, Alex is offered a second chance: to attend one of the world’s most prestigious universities on a full ride.`,
    year: 2019,
    pages: 480,
    rating: 4.5,
    price: 19.46,
    stock: 110,
    publisher: "Flatiron Books",
  },

  {
    _id: 19,
    title: "John Adams",
    author: "David McCullough",
    genre: "history",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/517oIyvrNDL._SX325_BO1,204,203,200_.jpg",
    description: `In this powerful, epic biography, David McCullough unfolds the adventurous life journey of John Adams, the brilliant, fiercely independent, often irascible, always honest Yankee patriot who spared nothing in his zeal for the American Revolution; who rose to become the second president of the United States and saved the country from blundering into an unnecessary war; who was learned beyond all but a few and regarded by some as “out of his senses”; and whose marriage to the wise and valiant Abigail Adams is one of the moving love stories in American history.`,
    year: 2002,
    pages: 752,
    rating: 4.8,
    price: 11.8,
    stock: 20,
    publisher: "Simon & Schuster",
  },
  {
    _id: 20,
    title: "1776",
    author: "David McCullough",
    genre: "history",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51eGhXmi23L._SX332_BO1,204,203,200_.jpg",
    description: `In this masterful book, David McCullough tells the intensely human story of those who marched with General George Washington in the year of the Declaration of Independence—when the whole American cause was riding on their success, without which all hope for independence would have been dashed and the noble ideals of the Declaration would have amounted to little more than words on paper.

    Based on extensive research in both American and British archives, 1776 is a powerful drama written with extraordinary narrative vitality.`,
    year: 2005,
    pages: 400,
    rating: 4.7,
    price: 8.16,
    stock: 550,
    publisher: "Simon & Schuster",
  },
  {
    _id: 21,
    title: "The Six Wives of Henry VIII",
    author: "Alison Weir",
    genre: "history",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/514CXGVMGML._SX306_BO1,204,203,200_.jpg",
    description: `The tempestuous, bloody, and splendid reign of Henry VIII of England (1509-1547) is one of the most fascinating in all history, not least for his marriage to six extraordinary women. In this accessible work of brilliant scholarship, Alison Weir draws on early biographies, letters, memoirs, account books, and diplomatic reports to bring these women to life. Catherine of Aragon emerges as a staunch though misguided woman of principle; Anne Boleyn, an ambitious adventuress with a penchant for vengeance; Jane Seymour, a strong-minded matriarch in the making...`,
    year: 1991,
    pages: 656,
    rating: 4.6,
    price: 11.69,
    stock: 155,
    publisher: "Grove Press",
  },

  {
    _id: 22,
    title: "Carrie",
    author: "Stephen King",
    genre: "horror",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51dRjo8NJeL._SX296_BO1,204,203,200_.jpg",
    description: `Stephen King's legendary debut, about a teenage outcast and the revenge she enacts on her classmates.
 
    Carrie White may be picked on by her classmates, but she has a gift. She can move things with her mind. Doors lock. Candles fall. This is her power and her problem. Then, an act of kindness, as spontaneous as the vicious taunts of her classmates, offers Carrie a chance to be a normal...until an unexpected cruelty turns her gift into a weapon of horror and destruction that no one will ever forget.`,
    year: 2011,
    pages: 304,
    rating: 4.7,
    price: 5.64,
    stock: 78,
    publisher: "Anchor",
  },
  {
    _id: 23,
    title: "The Haunting of Hill House",
    author: "Shirley Jackson",
    genre: "horror",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Otp57vz+L._SX322_BO1,204,203,200_.jpg",
    description: `First published in 1959, Shirley Jackson's The Haunting of Hill House has been hailed as a perfect work of unnerving terror. It is the story of four seekers who arrive at a notoriously unfriendly pile called Hill House: Dr. Montague, an occult scholar looking for solid evidence of a "haunting"; Theodora, his lighthearted assistant; Eleanor, a friendless, fragile young woman well acquainted with poltergeists; and Luke, the future heir of Hill House. At first, their stay seems destined to be merely a spooky encounter with inexplicable phenomena.`,
    year: 2006,
    pages: 208,
    rating: 4.4,
    price: 10.22,
    stock: 107,
    publisher: "Penguin Classics",
  },
  {
    _id: 24,
    title: "Bird Box",
    author: "Josh Malerman",
    genre: "horror",
    image: "https://m.media-amazon.com/images/I/41sRIihnXzL.jpg",
    description: `Written with the narrative tension of The Road and the exquisite terror of classic Stephen King, Bird Box is a propulsive, edge-of-your-seat horror thriller, set in an apocalyptic near-future world—a masterpiece of suspense from the brilliantly imaginative Josh Malerman.

    Something is out there . . .
    
    Something terrifying that must not be seen. One glimpse and a person is driven to deadly violence. No one knows what it is or where it came from.
    
    Five years after it began, a handful of scattered survivors remain, including Malorie and her two young children.`,
    year: 2014,
    pages: 305,
    rating: 4.5,
    price: 6.99,
    stock: 15,
    publisher: "Ecco",
  },

  {
    _id: 25,
    title: "The Collected Poems",
    author: "Sylvia Plath",
    genre: "poetry",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41xMaMpqAxL._SX328_BO1,204,203,200_.jpg",
    description: `By the time of her death on 11, February 1963, Sylvia Plath had written a large bulk of poetry. To my knowledge, she never scrapped any of her poetic efforts. With one or two exceptions, she brought every piece she worked on to some final form acceptable to her, rejecting at most the odd verse, or a false head or a false tail. Her attitude to her verse was artisan-like: if she couldn’t get a table out of the material, she was quite happy to get a chair, or even a toy. The end product for her was not so much a successful poem, as something that had temporarily exhausted her ingenuity.`,
    year: 2018,
    pages: 384,
    rating: 4.8,
    price: 14.45,
    stock: 75,
    publisher: "Harper Perennial Modern Classics",
  },
  {
    _id: 26,
    title: "The Sun and Her Flowers",
    author: "Rupi Kaur",
    genre: "poetry",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41H7E-gBdvL._SX329_BO1,204,203,200_.jpg",
    description: `Divided into five chapters and illustrated by kaur, the sun and her flowers is a journey of wilting, falling, rooting, rising, and blooming. A celebration of love in all its forms.

    this is the recipe of life
    said my mother
    as she held me in her arms as i wept
    think of those flowers you plant
    in the garden each year
    they will teach you
    that people too
    must wilt
    fall
    root
    rise
    in order to bloom`,
    year: 2017,
    pages: 256,
    rating: 4.8,
    price: 8.75,
    stock: 168,
    publisher: "Andrews McMeel Publishing",
  },
  {
    _id: 27,
    title: "There Are More Beautiful Things Than Beyonce",
    author: "Morgan Parker",
    genre: "poetry",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51YA56ZbkkL._SX322_BO1,204,203,200_.jpg",
    description: `The only thing more beautiful than Beyoncé is God, and God is a black woman sipping rosé and drawing a lavender bath, texting her mom, belly-laughing in the therapist’s office, feeling unloved, being on display, daring to survive. Morgan Parker stands at the intersections of vulnerability and performance, of desire and disgust, of tragedy and excellence. Unrelentingly feminist, tender, ruthless, and sequined, these poems are an altar to the complexities of black American womanhood in an age of non-indictments and deja vu, and a time of wars over bodies and power.`,
    year: 2017,
    pages: 80,
    rating: 4.5,
    price: 8.81,
    stock: 60,
    publisher: "Thin House Books",
  },

  {
    _id: 28,
    title: "Brazen and  the Beast",
    author: "Sarah MacLean",
    genre: "romance",
    image: "https://m.media-amazon.com/images/I/51fiEAOae4L.jpg",
    description: `The Lady’s Plan

    When Lady Henrietta Sedley declares her twenty-ninth year her own, she has plans to inherit her father’s business, to make her own fortune, and to live her own life. But first, she intends to experience a taste of the pleasure she’ll forgo as a confirmed spinster. Everything is going perfectly…until she discovers the most beautiful man she’s ever seen tied up in her carriage and threatening to ruin the Year of Hattie before it’s even begun.
    
    The Bastard’s Proposal
    
    When he wakes in a carriage at Hattie’s feet, Whit, a king of Covent Garden known to all the world as Beast, can’t help but wonder about the strange woman who frees him—especially when he discovers she’s headed for a night of pleasure...`,
    year: 2019,
    pages: 345,
    rating: 4.5,
    price: 6.99,
    stock: 5,
    publisher: "Avon",
  },
  {
    _id: 29,
    title: "Royal Holiday",
    author: "Jasmine Guillory",
    genre: "romance",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51G5bfAReZL._SX329_BO1,204,203,200_.jpg",
    description: `Vivian Forest has been out of the country a grand total of one time, so when she gets the chance to tag along on her daughter Maddie’s work trip to England to style a royal family member, she can’t refuse. She’s excited to spend the holidays taking in the magnificent British sights, but what she doesn’t expect is to become instantly attracted to a certain private secretary, his charming accent, and unyielding formality.

    Malcolm Hudson has worked for the Queen for years and has never given a personal, private tour—until now. He is intrigued by Vivian the moment he meets her and finds himself making excuses just to spend time with her.`,
    year: 2019,
    pages: 304,
    rating: 4.4,
    price: 11.2,
    stock: 100,
    publisher: "Berkley",
  },
  {
    _id: 30,
    title: "The Savior",
    author: "J.R. Ward",
    genre: "romance",
    image: "https://m.media-amazon.com/images/I/41gRgM+T2iL.jpg",
    description: `In the venerable history of the Black Dagger Brotherhood, only one male has ever been expelled—but Murhder’s insanity gave the Brothers no choice. Haunted by visions of a female he could not save, he nonetheless returns to Caldwell on a mission to right the wrong that ruined him. However, he is not prepared for what he must face in his quest for redemption.

    Dr. Sarah Watkins, researcher at a biomedical firm, is struggling with the loss of her fellow scientist fiancé. When the FBI starts asking about his death, she questions what really happened and soon learns the terrible truth: Her firm is conducting inhumane experiments in secret and the man she thought she knew and loved was involved in the torture.
    `,
    year: 2019,
    pages: 497,
    publisher: "Gallery Books",
    rating: 4.8,
    price: 6.45,
    stock: 14,
  },

  {
    _id: 31,
    title: "The Testaments",
    author: "Margareth Atwood",
    genre: "sciFi",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41HQI3QQOcL._SX327_BO1,204,203,200_.jpg",
    description: `More than fifteen years after the events of The Handmaid's Tale, the theocratic regime of the Republic of Gilead maintains its grip on power, but there are signs it is beginning to rot from within. At this crucial moment, the lives of three radically different women converge, with potentially explosive results.
 
    Two have grown up as part of the first generation to come of age in the new order. The testimonies of these two young women are joined by a third: Aunt Lydia.  Her complex past and uncertain future unfold in surprising and pivotal ways.`,
    year: 2019,
    pages: 432,
    publisher: "Nan A. Talese",
    rating: 4.6,
    price: 15.0,
    stock: 211,
  },
  {
    _id: 32,
    title: "The Hunger Games Trilogy",
    author: "Suzanne Collins",
    genre: "sciFi",
    image: "https://m.media-amazon.com/images/I/41nphb8vbPL.jpg",
    description: `The stunning Hunger Games trilogy is complete! The extraordinary, ground breaking New York Times bestsellers The Hunger Games and Catching Fire, along with the third book in The Hunger Games trilogy by Suzanne Collins, Mockingjay, are available for the first time ever in e-book. Stunning, gripping, and powerful.`,
    year: 2011,
    pages: 1187,
    publisher: "Scholastic Inc.",
    rating: 4.8,
    price: 35.99,
    stock: 6,
  },
  {
    _id: 33,
    title: "1984",
    author: "George Orwell",
    genre: "sciFi",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/313uPntDrjL._SX331_BO1,204,203,200_.jpg",
    description: `With extraordinary relevance and renewed popularity, George Orwell’s 1984 takes on new life in this hardcover edition.

    “Orwell saw, to his credit, that the act of falsifying reality is only secondarily a way of changing perceptions. It is, above all, a way of asserting power.”—The New Yorker
     
    In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind. Winston Smith is a man in grave danger for the simple reason that his memory still functions.`,
    year: 2017,
    pages: 304,
    publisher: "Houghton Mifflin Harcourt",
    rating: 4.7,
    price: 6.89,
    stock: 49,
  },

  {
    _id: 34,
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "suspense",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41cSJI7PfHL._SX302_BO1,204,203,200_.jpg",
    description: `On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne’s fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick’s clever and beautiful wife disappears. Husband-of-the-Year Nick isn’t doing himself any favors with cringe-worthy daydreams about the slope and shape of his wife’s head, but passages from Amy's diary reveal the alpha-girl perfectionist could have put anyone dangerously on edge. Under mounting pressure from the police and the media—as well as Amy’s fiercely doting parents—the town golden boy parades an endless series of lies, deceits, and inappropriate behavior. Nick is oddly evasive, and he’s definitely bitter—but is he really a killer? `,
    year: 2014,
    pages: 422,
    publisher: "Crown",
    rating: 4.0,
    price: 8.16,
    stock: 510,
  },
  {
    _id: 35,
    title: "The 19th Christmas",
    author: "J. Patterson & M. Paetro",
    genre: "suspense",
    image: "https://m.media-amazon.com/images/I/41lfpzBf-NL.jpg",
    description: `As the holidays approach, Detective Lindsay Boxer and her friends in the Women's Murder Club have much to celebrate. Crime is down. The medical examiner's office is quiet. Even the courts are showing some Christmas spirit. And the news cycle is so slow that journalist Cindy Thomas is on assignment to tell a story about the true meaning of the season for San Francisco. Then a fearsome criminal known only as "Loman" seizes control of the headlines. Solving crimes never happens on schedule, but as this criminal mastermind unleashes credible threats by the hour, the month of December is upended for the Women's Murder Club. Avoiding tragedy is the only holiday miracle they seek. `,
    year: 2019,
    pages: 263,
    publisher: "Little, Brown and Company",
    rating: 4.7,
    price: 11.99,
    stock: 20,
  },
  {
    _id: 36,
    title: "The Guardians",
    author: "John Grisham",
    genre: "suspense",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/518n8X9DFcL._SX341_BO1,204,203,200_.jpg",
    description: `In the small Florida town of Seabrook, a young lawyer named Keith Russo was shot dead at his desk as he worked late one night. The killer left no clues. There were no witnesses, no one with a motive. But the police soon came to suspect Quincy Miller, a young black man who was once a client of Russo’s. 

    Quincy was tried, convicted, and sent to prison for life. For twenty-two years he languished in prison, maintaining his innocence.  But no one was listening.`,
    year: 2019,
    pages: 384,
    publisher: "Doubleday",
    rating: 4.5,
    price: 21.91,
    stock: 400,
  },
];

export default initialBooks;
