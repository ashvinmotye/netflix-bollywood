const movies = [
  "Mimi",
  "Ajeeb Daastaans",
  "Sardar Ka Grandson",
  "The Girl on the Train",
  "Pagglait",
  "Tuesdays & Fridays",
  "Tribhanga - Tedhi Medhi Crazy",
  "99 Songs",
  "Little Singham Future mein Satakli",
  "Ahaan",
  "Bombay Rose",
  "Milestone",
  "Haseen Dillruba",
  "Roohi",
  "Ginny Weds Sunny",
  "Raat Akeli Hai",
  "Malang",
  "Gunjan Saxena: The Kargil Girl",
  "Class of '83",
  "Indoo Ki Jawani",
  "Mrs. Serial Killer",
  "Love Aaj Kal",
  "Shimla Mirchi",
  "Madam Chief Minister",
  "AK vs AK",
  "Serious Men",
  "Door Ke Darshan",
  "Torbaaz",
  "Bulbbul",
  "Dolly Kitty Aur Woh Chamakte Sitare",
  "Jai Mummy Di",
  "Choked: Paisa Bolta Hai",
  "Guilty",
  "Ghost Stories",
  "Chaman Bahaar",
  "Har Kisse Ke Hisse: Kaamyaab",
  "Time to Dance",
  "Chippa",
  "Cargo",
  "Kaali Khuhi",
  "Axone",
  "Little Singham: Kaal Ka Badla",
  "Maska",
  "What Are the Odds?",
  "Little Singham: Legend of Dugabakka",
  "Ludo",
  "Rudra: Secret of the Black Moon",
  "Yeh Ballet",
  "Fukrey Boyzzz: Space Mein Fukrapanti",
  "Saaho",
  "Badla",
  "Drive",
  "Romeo Akbar Walter",
  "The Body",
  "Kabir Singh",
  "One Day: Justice Delivered",
  "Motichoor Chaknachoor",
  "Bypass Road",
  "Luka Chuppi",
  "Game Over (Hindi Version)",
  "Made in China",
  "Article 15",
  "House Arrest",
  "Pranaam",
  "Panipat - The Great Betrayal",
  "Ram Prasad Ki Tehrvi",
  "Ek Ladki Ko Dekha Toh Aisa Laga",
  "The Sky Is Pink",
  "Chopsticks",
  "Malaal",
  "Thackeray (Hindi)",
  "Bhangra Paa Le",
  "The Zoya Factor",
  "Chhota Bheem Kungfu Dhamaka",
  "Penalty",
  "Little Singham: Mahabali",
  "Upstarts",
  "Chhota Bheem Ka Roosi Romanch",
  "Little Singham: Kaal Ki Tabaahi",
  "Motu Patlu VS Robo Kids",
  "Mere Pyare Prime Minister",
  "Paharganj",
  "Eeb Allay Ooo!",
  "Albert Pinto Ko Gussa Kyun Aata Hai?",
  "Motu Patlu in the Game of Zones",
  "Rakkhosh",
  "Music Teacher",
  "Motu Patlu the Superheroes – Super Villains from Mars",
  "Shiva: Journey to Plunotaria",
  "Rudra: The Rise of King Pharaoh",
  "Aiyaary",
  "Andhadhun",
  "Stree",
  "Baazaar",
  "Parmanu: The Story of Pokhran",
  "Love Per Square Foot",
  "Sanju",
  "Pad Man",
  "Lust Stories",
  "Is Love Enough? Sir",
  "Rajma Chawal",
  "Zero",
  "Soorma",
  "Mard Ko Dard Nahi Hota",
  "Bhavesh Joshi Superhero",
  "My Birthday Song",
  "Manto",
  "Pihu",
  "Bombairiya",
  "Soni",
  "Garbage",
  "Kuchh Bheege Alfaaz",
  "Ascharyachakit!",
  "Hope Aur Hum",
  "Brij Mohan Amar Rahe",
  "Beyond the Clouds",
  "Evening Shadows",
  "Halkaa",
  "Motu Patlu Kung Fu Kings 4 The Challenge of Kung Fu Brothers",
  "Hamid",
  "Motu Patlu in the City of Gold",
  "Jaoon Kahan Bata Ae Dil",
  "Ladies First",
  "Shiva VS Autobots",
  "Motu Patlu Dino Invasion",
  "Zoo",
  "Tottaa Pataaka Item Maal",
  "Three and a Half",
  "Life of An Outcast",
  "Period. End of Sentence.",
  "Bareilly Ki Barfi",
  "Naam Shabana",
  "Ittefaq",
  "Baahubali 2: The Conclusion (Hindi Version)",
  "Raees",
  "Mubarakan",
  "Jab Harry Met Sejal",
  "Judwaa 2",
  "Toilet: Ek Prem Katha",
  "Mom",
  "Baadshaho",
  "Qarib Qarib Singlle",
  "Half Girlfriend",
  "Secret Superstar",
  "Lucknow Central",
  "Jagga Jasoos",
  "B.A. Pass 2",
  "Ajji",
  "The House Next Door",
  "Poster Boys",
  "Love and Shukla",
  "Running Shaadi",
  "Rangoon",
  "Motu Patlu in Hong Kong: Kung Fu Kings 3",
  "Shiva: The Secret World Of Vedas City",
  "Motu Patlu in Octupus World",
  "Motu Patlu in Dragon's World",
  "The Wishing Tree",
  "Bhasmasur",
  "Candyflip",
  "Rocky Handsome",
  "Baaghi",
  "Wazir",
  "TE3N",
  "Dangal",
  "Raman Raghav 2.0",
  "Pink",
  "Kapoor & Sons",
  "Dear Zindagi",
  "Fitoor",
  "Udta Punjab",
  "Mohenjo Daro",
  "Santa Banta Pvt Ltd",
  "Budhia Singh: Born to Run",
  "Tu Hai Mera Sunday",
  "Shortcut Safari",
  "Project Marathwada",
  "Force 2",
  "Autohead",
  "The Violin Player",
  "Gabbar Is Back",
  "Drishyam",
  "Dilwale",
  "Phantom",
  "Dil Dhadakne Do",
  "Tamasha",
  "Baahubali: The Beginning (Hindi Version)",
  "Pyaar Ka Punchnama 2",
  "Shaandaar",
  "Brothers",
  "Dharam Sankat Mein",
  "Prem Ratan Dhan Payo",
  "ABCD 2",
  "Guilty",
  "Bangistan",
  "Hunterrr",
  "Katti Batti",
  "Hawaizaada",
  "Haraamkhor",
  "X: Past Is Present",
  "Chhota Bheem in African Safari",
  "Chhota Bheem - Dinosaur World",
  "Muzaffarnagar Baaqi Hai",
  "Time Out",
  "PK",
  "Happy New Year",
  "Ungli",
  "Khoobsurat",
  "Raja Natwarlal",
  "Hasee Toh Phasee",
  "Queen",
  "Humpty Sharma Ki Dulhania",
  "2 States",
  "Bobby Jasoos",
  "Haider",
  "Highway",
  "Pizza",
  "Mary Kom",
  "Chal Bhaag",
  "Mumbai Delhi Mumbai",
  "Dedh Ishqiya",
  "Motu Patlu: Deep Sea Adventure",
  "Chhota Bheem: Dus Pe Dus",
  "Mighty Raju Rio Calling",
  "Yeh Hai Bakrapur",
  "Gollu aur Pappu",
  "One by Two",
  "Court",
  "Chennai Express",
  "Race 2",
  "Boss",
  "Special 26",
  "Fukrey",
  "Madras Café",
  "ABCD: Any Body Can Dance",
  "Himmatwala",
  "Gori Tere Pyaar Mein",
  "Saheb Biwi Aur Gangster Returns",
  "Ghanchakkar",
  "Chashme Baddoor",
  "Kai Po Che!",
  "Satyagraha",
  "Nasha",
  "Deewana Main Deewana",
  "Ankhon Dekhi",
  "Inkaar",
  "What the Fish",
  "Motu Patlu in Wonderland",
  "Chhota Bheem and the Incan Adventure",
  "Chhota Bheem aur Krishna vs Zimbara",
  "Chhota Bheem and The ShiNobi Secret",
  "Chhota Bheem - Neeli Pahaadi",
  "Liar's Dice",
  "Motu Patlu: Mission Moon",
  "Chhota Bheem And The Crown of Valhalla",
  "Bombay Talkies",
  "Chhota Bheem And The Broken Amulet",
  "Keymon and Nani in Space Adventure",
  "Oh My God",
  "Players",
  "Department",
  "Rowdy Rathore",
  "Kahaani",
  "Joker",
  "Talaash",
  "Barfi!",
  "Blood Money",
  "Ek Main Aur Ekk Tu",
  "Heroine",
  "Luv Shuv Tey Chicken Khurana",
  "Chhota Bheem and the Curse of Damyaan",
  "Aiyyaa",
  "Ferrari Ki Sawaari",
  "Chhota Bheem: The Rise of Kirmada",
  "Chhota Bheem Aur Hanuman",
  "Life Ki Toh Lag Gayi",
  "Tere Naal Love Ho Gaya",
  "Chhota Bheem: Dholakpur to Kathmandu",
  "Fatso",
  "Mumbai Cha Raja",
  "Singham",
  "Zindagi Na Milegi Dobara",
  "Don 2",
  "Thank You",
  "Bodyguard",
  "Game",
  "Bbuddah Hoga Terra Baap",
  "Tanu Weds Manu",
  "7 Khoon Maaf",
  "No One Killed Jessica",
  "Chillar Party",
  "Arjun: The Warrior Prince",
  "Shaitan",
  "Chhota Bheem: Master of Shaolin",
  "My Friend Pinto",
  "Michael",
  "Chhota Bheem & Krishna: Mayanagari",
  "Zokkomon",
  "Chhota Bheem: Journey to Petra",
  "I Hate Luv Storys",
  "Action Replayy",
  "Raajneeti",
  "Paan Singh Tomar",
  "Do Dooni Chaar",
  "Udaan",
  "We Are Family",
  "Break Ke Baad",
  "Chance Pe Dance",
  "Karthik Calling Karthik",
  "Tum Milo Toh Sahi",
  "Guzaarish",
  "Dhobi Ghat (Mumbai Diaries)",
  "I Am Kalam",
  "Chhota Bheem & Krishna: Pataliputra- City of the Dead",
  "Peepli Live",
  "That Girl in Yellow Boots",
  "Chhota Bheem: Bheem vs Aliens",
  "Dhoondte Reh Jaoge",
  "3 Idiots",
  "Ajab Prem Ki Ghazab Kahani",
  "Kaminey",
  "Billu",
  "Wake Up Sid",
  "Kisaan",
  "Kurbaan",
  "Main aurr Mrs. Khanna",
  "Dev.D",
  "Well Done Abba",
  "Aagey Se Right",
  "Ishqiya",
  "What's Your Raashee?",
  "Chhota Bheem aur Krishna",
  "Luck by Chance",
  "Delhi 6",
  "Agyaat",
  "Do Paise Ki Dhoop Chaar Aane Ki Baarish",
  "Chhota Bheem & Ganesh",
  "Golmaal Returns",
  "Race",
  "Jodhaa Akbar",
  "Jaane Tu... Ya Jaane Na",
  "Kismat Konnection",
  "Dostana",
  "Oye Lucky! Lucky Oye!",
  "Rock On!!",
  "Mumbai Meri Jaan",
  "Aamir",
  "Fashion",
  "Welcome to Sajjanpur",
  "Ugly Aur Pagli",
  "Om Shanti Om",
  "Namastey London",
  "Taare Zameen Par",
  "Guru",
  "Jab We Met",
  "Dhan Dhana Dhan Goal",
  "Manorama Six Feet Under",
  "Life in a ... Metro",
  "Hattrick",
  "Honeymoon Travels Pvt. Ltd.",
  "Welcome",
  "Chup Chup Ke",
  "Don",
  "Anthony Kaun Hai?",
  "Kabhi Alvida Naa Kehna",
  "Vivah",
  "Taxi No. 9211",
  "Rang De Basanti",
  "Phir Hera Pheri",
  "Pyaar Ke Side Effects",
  "BluffMaster!",
  "Apaharan",
  "Kaal",
  "Paheli",
  "Main, Meri Patni Aur Woh",
  "Shabd",
  "Ek Khiladi Ek Haseena",
  "The Blue Umbrella",
  "Main Hoon Na",
  "Lakshya",
  "Swades",
  "Fida",
  "Black Friday",
  "Yuva",
  "Chameli",
  "Kal Ho Naa Ho",
  "Gangaajal",
  "Chalte Chalte",
  "Ishq Vishk",
  "Mumbai Matinee",
  "Jhankaar Beats",
  "Hazaaron Khwaishein Aisi",
  "Awara Paagal Deewana",
  "The Legend of Bhagat Singh",
  "Sur: The Melody of Life",
  "Kabhi Khushi Kabhie Gham",
  "Dil Chahta Hai",
  "Lagaan",
  "One 2 Ka 4",
  "Asoka",
  "Phir Bhi Dil Hai Hindustani",
  "Fiza",
  "Mann",
  "Hello Brother",
  "Hum Saath-Saath Hain",
  "Kuch Kuch Hota Hai",
  "Duplicate",
  "Dil Se",
  "Qila",
  "Soldier",
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
  "Duniya",
  "Sohni Mahiwal",
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