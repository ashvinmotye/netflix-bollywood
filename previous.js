const previous = [
  "Tuesdays & Fridays",
  "Ajeeb Daastaans",
  "Pagglait",
  "The Girl on the Train",
  "Tribhanga - Tedhi Medhi Crazy",
  "Bombay Rose",
  "Roohi",
  "Ginny Weds Sunny",
  "Raat Akeli Hai",
  "Shimla Mirchi",
  "Gunjan Saxena: The Kargil Girl",
  "Indoo Ki Jawani",
  "Madam Chief Minister",
  "Bulbbul",
  "Class of '83",
  "Serious Men",
  "Choked: Paisa Bolta Hai",
  "Dolly Kitty Aur Woh Chamakte Sitare",
  "Jai Mummy Di",
  "AK vs AK",
  "Love Aaj Kal",
  "Ghost Stories",
  "Torbaaz",
  "Kaali Khuhi",
  "Door Ke Darshan",
  "Guilty",
  "Mrs. Serial Killer",
  "Chaman Bahaar",
  "Maska",
  "Axone",
  "Little Singham: Kaal Ka Badla",
  "Rudra: Secret of the Black Moon",
  "Chippa",
  "Har Kisse Ke Hisse: Kaamyaab",
  "Yeh Ballet",
  "Little Singham: Legend of Dugabakka",
  "What Are the Odds?",
  "Cargo",
  "Ludo",
  "Malang",
  "Fukrey Boyzzz: Space Mein Fukrapanti",
  "Ram Prasad Ki Tehrvi",
  "Drive",
  "Article 15",
  "Badla",
  "The Body",
  "Made in China",
  "Luka Chuppi",
  "Thackeray (Hindi)",
  "Kabir Singh",
  "Panipat - The Great Betrayal",
  "The Sky Is Pink",
  "Motichoor Chaknachoor",
  "Chopsticks",
  "One Day: Justice Delivered",
  "Game Over (Hindi Version)",
  "Bypass Road",
  "The Zoya Factor",
  "Malaal",
  "Romeo Akbar Walter",
  "Ek Ladki Ko Dekha Toh Aisa Laga",
  "Pranaam",
  "House Arrest",
  "Chhota Bheem Kungfu Dhamaka",
  "Bhangra Paa Le",
  "Eeb Allay Ooo!",
  "Motu Patlu in the Game of Zones",
  "Rudra: The Rise of King Pharaoh",
  "Upstarts",
  "Motu Patlu the Superheroes – Super Villains from Mars",
  "Paharganj",
  "Little Singham: Mahabali",
  "Motu Patlu VS Robo Kids",
  "Penalty",
  "Albert Pinto Ko Gussa Kyun Aata Hai?",
  "Little Singham Bandarpur Mein Hu Ha Hu",
  "Shiva: Journey to Plunotaria",
  "Music Teacher",
  "Mere Pyare Prime Minister",
  "Little Singham: Kaal Ki Tabaahi",
  "Saaho",
  "Rakkhosh",
  "Andhadhun",
  "Stree",
  "Is Love Enough? Sir",
  "Baazaar",
  "Sanju",
  "Zero",
  "Lust Stories",
  "Aiyaary",
  "Love Per Square Foot",
  "Parmanu: The Story of Pokhran",
  "Pad Man",
  "Rajma Chawal",
  "Soorma",
  "Mard Ko Dard Nahi Hota",
  "Pihu",
  "Beyond the Clouds",
  "Motu Patlu in the City of Gold",
  "Ascharyachakit!",
  "Motu Patlu Kung Fu Kings 4 The Challenge of Kung Fu Brothers",
  "Bhavesh Joshi Superhero",
  "Soni",
  "Hope Aur Hum",
  "Garbage",
  "Jaoon Kahan Bata Ae Dil",
  "Manto",
  "Motu Patlu Dino Invasion",
  "Halkaa",
  "My Birthday Song",
  "Shiva VS Autobots",
  "Evening Shadows",
  "Brij Mohan Amar Rahe",
  "Bheemayan",
  "Kuchh Bheege Alfaaz",
  "Bombairiya",
  "Chhota Bheem Ka Romani Adventure",
  "Hamid",
  "Ladies First",
  "Super Bheem Bana Vajraveer",
  "Zoo",
  "Samudri Lootere",
  "Period. End of Sentence.",
  "Dragonkala Ka Rahasya",
  "Three and a Half",
  "Life of An Outcast",
  "Antariksha Ke Rakhwale",
  "Naam Shabana",
  "Baahubali 2: The Conclusion (Hindi Version)",
  "Ittefaq",
  "Raees",
  "Mubarakan",
  "Secret Superstar",
  "Toilet: Ek Prem Katha",
  "Bareilly Ki Barfi",
  "Mom",
  "Kaabil",
  "Jagga Jasoos",
  "Judwaa 2",
  "Half Girlfriend",
  "Jab Harry Met Sejal",
  "Baadshaho",
  "Qarib Qarib Singlle",
  "The House Next Door",
  "Ajji",
  "Love and Shukla",
  "Poster Boys",
  "B.A. Pass 2",
  "Motu Patlu in Hong Kong: Kung Fu Kings 3",
  "Lucknow Central",
  "Running Shaadi",
  "Motu Patlu in Dragon's World",
  "Motu Patlu in Octupus World",
  "Shiva: The Secret World Of Vedas City",
  "Rangoon",
  "The Wishing Tree",
  "Candyflip",
  "Bhasmasur",
  "Rocky Handsome",
  "Baaghi",
  "Dangal",
  "Dear Zindagi",
  "TE3N",
  "Mohenjo Daro",
  "Wazir",
  "Fitoor",
  "Pink",
  "Kapoor & Sons",
  "Raman Raghav 2.0",
  "Udta Punjab",
  "Santa Banta Pvt Ltd",
  "The Legend of Michael Mishra",
  "Tu Hai Mera Sunday",
  "Shortcut Safari",
  "Dear Dad",
  "Budhia Singh: Born to Run",
  "Autohead",
  "Project Marathwada",
  "The Violin Player",
  "Force 2",
  "Gabbar Is Back",
  "Drishyam",
  "Dilwale",
  "Baahubali: The Beginning (Hindi Version)",
  "Dil Dhadakne Do",
  "Pyaar Ka Punchnama 2",
  "Tamasha",
  "Phantom",
  "Brothers",
  "Prem Ratan Dhan Payo",
  "ABCD 2",
  "Dharam Sankat Mein",
  "Shaandaar",
  "Bangistan",
  "Guilty",
  "Hunterrr",
  "Haraamkhor",
  "X: Past Is Present",
  "Katti Batti",
  "Motu Patlu: Khazaane Ki Race",
  "Hawaizaada",
  "Time Out",
  "Zubaan",
  "Muzaffarnagar Baaqi Hai",
  "PK",
  "Happy New Year",
  "2 States",
  "Khoobsurat",
  "Queen",
  "Humpty Sharma Ki Dulhania",
  "Motu Patlu: Kung Fu Kings",
  "Hasee Toh Phasee",
  "Raja Natwarlal",
  "Haider",
  "Highway",
  "Mary Kom",
  "Pizza",
  "Bobby Jasoos",
  "Dedh Ishqiya",
  "Mumbai Delhi Mumbai",
  "Motu Patlu: Deep Sea Adventure",
  "Mighty Raju Rio Calling",
  "Court",
  "Gollu aur Pappu",
  "Ungli",
  "Yeh Hai Bakrapur",
  "One by Two",
  "Chal Bhaag",
  "Special 26",
  "Boss",
  "Madras Café",
  "Race 2",
  "Himmatwala",
  "ABCD: Any Body Can Dance",
  "Fukrey",
  "Kai Po Che!",
  "Gori Tere Pyaar Mein",
  "Chashme Baddoor",
  "Nasha",
  "Ghanchakkar",
  "B.A. Pass",
  "Ankhon Dekhi",
  "Inkaar",
  "Saheb Biwi Aur Gangster Returns",
  "Bombay Talkies",
  "Satyagraha",
  "Motu Patlu: Mission Moon",
  "Deewana Main Deewana",
  "Motu Patlu in Wonderland",
  "Liar's Dice",
  "Keymon and Nani in Space Adventure",
  "What the Fish",
  "War Chhod Na Yaar",
  "Oh My God",
  "Rowdy Rathore",
  "Players",
  "Joker",
  "Barfi!",
  "Kahaani",
  "Talaash",
  "Ferrari Ki Sawaari",
  "Aiyyaa",
  "Luv Shuv Tey Chicken Khurana",
  "Ek Main Aur Ekk Tu",
  "Heroine",
  "Chhota Bheem and the Curse of Damyaan",
  "Blood Money",
  "Fatso",
  "Tere Naal Love Ho Gaya",
  "Mumbai Cha Raja",
  "Life Ki Toh Lag Gayi",
  "Bittoo Boss",
  "Singham",
  "Zindagi Na Milegi Dobara",
  "Don 2",
  "Bodyguard",
  "Thank You",
  "Bbuddah Hoga Terra Baap",
  "Game",
  "Chillar Party",
  "No One Killed Jessica",
  "Arjun: The Warrior Prince",
  "Tanu Weds Manu",
  "Zokkomon",
  "7 Khoon Maaf",
  "My Friend Pinto",
  "Shaitan",
  "Michael",
  "Action Replayy",
  "I Am Kalam",
  "I Hate Luv Storys",
  "Raajneeti",
  "Paan Singh Tomar",
  "Tum Milo Toh Sahi",
  "Dhobi Ghat (Mumbai Diaries)",
  "We Are Family",
  "Udaan",
  "Do Dooni Chaar",
  "Break Ke Baad",
  "Karthik Calling Karthik",
  "Chance Pe Dance",
  "Guzaarish",
  "Peepli Live",
  "I Am",
  "That Girl in Yellow Boots",
  "3 Idiots",
  "Dhoondte Reh Jaoge",
  "Ajab Prem Ki Ghazab Kahani",
  "Wake Up Sid",
  "Billu",
  "What's Your Raashee?",
  "Delhi 6",
  "Kurbaan",
  "Agyaat",
  "Do Paise Ki Dhoop Chaar Aane Ki Baarish",
  "Luck by Chance",
  "Well Done Abba",
  "Main aurr Mrs. Khanna",
  "Aagey Se Right",
  "Kisaan",
  "Kaminey",
  "Ishqiya",
  "Dev.D",
  "Golmaal Returns",
  "Jodhaa Akbar",
  "Jaane Tu... Ya Jaane Na",
  "Dostana",
  "Race",
  "Oye Lucky! Lucky Oye!",
  "Kismat Konnection",
  "Fashion",
  "Rock On!!",
  "Mumbai Meri Jaan",
  "Contract",
  "Welcome to Sajjanpur",
  "Aamir",
  "Ugly Aur Pagli",
  "Taare Zameen Par",
  "Om Shanti Om",
  "Welcome",
  "Namastey London",
  "Jab We Met",
  "Guru",
  "Dhan Dhana Dhan Goal",
  "Honeymoon Travels Pvt. Ltd.",
  "Manorama Six Feet Under",
  "Life in a ... Metro",
  "Hattrick",
  "Phir Hera Pheri",
  "Chup Chup Ke",
  "Vivah",
  "Kabhi Alvida Naa Kehna",
  "Don",
  "Rang De Basanti",
  "Anthony Kaun Hai?",
  "Pyaar Ke Side Effects",
  "BluffMaster!",
  "Paheli",
  "Kaal",
  "Main, Meri Patni Aur Woh",
  "Apaharan",
  "Ek Khiladi Ek Haseena",
  "Shabd",
  "The Blue Umbrella",
  "Main Hoon Na",
  "Swades",
  "Lakshya",
  "Yuva",
  "Fida",
  "Black Friday",
  "Chameli",
  "Kal Ho Naa Ho",
  "Gangaajal",
  "Chalte Chalte",
  "Ishq Vishk",
  "Jhankaar Beats",
  "Mumbai Matinee",
  "Hazaaron Khwaishein Aisi",
  "Awara Paagal Deewana",
  "The Legend of Bhagat Singh",
  "Sur: The Melody of Life",
  "Lagaan",
  "Kabhi Khushi Kabhie Gham",
  "Dil Chahta Hai",
  "One 2 Ka 4",
  "Asoka",
  "Phir Bhi Dil Hai Hindustani",
  "Fiza",
  "Hum Saath-Saath Hain",
  "Hello Brother",
  "Mann",
  "Kuch Kuch Hota Hai",
  "Soldier",
  "Dil Se",
  "Duplicate",
  "Qila",
  "Chaahat",
  "English Babu Desi Mem",
  "Ram Jaane",
  "Oh Darling Yeh Hai India",
  "Andaz Apna Apna",
  "Hum Aapke Hain Koun",
  "Kabhi Haan Kabhi Naa",
  "Yaar Gaddar",
  "Aashik Awara",
  "Gumrah",
  "Maya Memsaab",
  "Chamatkar",
  "Shikari",
  "Agneepath",
  "Dil",
  "Mujrim",
  "Aakhri Adaalat",
  "Muqaddar ka Faisla",
  "Jaal",
  "Pyar Ke Do Pal",
  "Sohni Mahiwal",
  "Duniya",
  "Ek Jaan Hain Hum",
  "Disco Dancer",
  "Dostana (1980)",
  "Alibaba Aur 40 Chor",
  "Bandie",
  "Salaakhen",
  "Manoranjan",
  "Khoon Khoon",
  "Elaan",
  "Lal Patthar",
  "Prince",
  "Amrapali",
  "Professor",
  "Singapore",
  "Ujala"
]