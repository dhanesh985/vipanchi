(function(){
"use strict";
/* ================= data ================= */
const MELAS=["Kanakangi","Ratnangi","Ganamurti","Vanaspati","Manavati","Tanarupi","Senavati","Hanumatodi","Dhenuka","Natakapriya","Kokilapriya","Rupavati","Gayakapriya","Vakulabharanam","Mayamalavagowla","Chakravakam","Suryakantam","Hatakambari","Jhankaradhwani","Natabhairavi","Keeravani","Kharaharapriya","Gourimanohari","Varunapriya","Mararanjani","Charukesi","Sarasangi","Harikambhoji","Dheerasankarabharanam","Naganandini","Yagapriya","Ragavardhini","Gangeyabhushani","Vagadheeswari","Shulini","Chalanata","Salagam","Jalarnavam","Jhalavarali","Navaneetam","Pavani","Raghupriya","Gavambodhi","Bhavapriya","Shubhapantuvarali","Shadvidamargini","Suvarnangi","Divyamani","Dhavalambari","Namanarayani","Kamavardhini","Ramapriya","Gamanashrama","Vishwambari","Shamalangi","Shanmukhapriya","Simhendramadhyamam","Hemavati","Dharmavati","Neetimati","Kantamani","Rishabhapriya","Latangi","Vachaspati","Mechakalyani","Chitrambari","Sucharitra","Jyotiswarupini","Dhatuvardhani","Nasikabhushani","Kosalam","Rasikapriya"];
const ALIAS={8:"Todi",29:"Shankarabharanam",45:"Subhapantuvarali",51:"Pantuvarali",65:"Kalyani"};
/* Koteeswara Iyer's kriti in each of the 72 melakartas (Kanda Gana Amudham) */
const KOTI=["Kanakaangaka","Tharunam Ithe","Maamathura","Daasa Nesa","Nija Bhakthi","Va Velava","Vandarul","Kalitheera","Karunai Kadale","Irangatha","Sugha Vazhvadainthu","Naalaguthe","Naadha Nilai","Nambinen","Naan En Seiven","Kaanakankodi","Kanjam Konjum","Aalalaghatha","Varam Thaarum","Ambhoruha","Velava","Kanpaaraiya","Paarai","Srungara Kumara","Maalaginen","Neethan Appa","Malaiyathe","Neeye Ghathi","Enai Aalaiya","Naayen","Sambu Sathasiva","Kalankathe","Ninai Maname","Nathaanu","Paramugha","Eddaya Gathi","Gaanamutham","Kanaka Mayura","Anaatha Rakshaka","Saami Ithe","Anjathe","Sadhanantha","Viraivaagave","Sethiru Velan","Velane","Andharanga Bakthi","Igapara","Appa Murugaiyane","Kaarunya","Een Maname","Ka Murugaiyya","Saami Satha","Ihame Sukham Tarum","Paramanandha","Kandha","Sugame Sugam","Unnaiyallal","Manathe","Kandha Bakatha","Mohanakara","Naadha Sugam","Ghana Naya","Kai Kooda Venume","Igapara Sooga","Sadha Nanathame","Saama Ghana Lola","Velu Mayilume","Ghanamutha Bhanam","Sooka Kara","Thantharul","Ka Guha","Arul Seiya"];
const CHAKRAS=[["Indu","the moon (one)"],["Netra","the eyes (two)"],["Agni","the three sacred fires"],["Veda","the four Vedas"],["Bana","the five arrows of Kama"],["Rutu","the six seasons"],["Rishi","the seven sages"],["Vasu","the eight Vasus"],["Brahma","the nine Brahmas"],["Disi","the ten directions"],["Rudra","the eleven Rudras"],["Aditya","the twelve Adityas"]];
const PAIRS=[[1,1],[1,2],[1,3],[2,2],[2,3],[3,3]];
const POS={S:0,R1:1,R2:2,R3:3,G1:2,G2:3,G3:4,M1:5,M2:6,P:7,D1:8,D2:9,D3:10,N1:9,N2:10,N3:11};
const STRIP=[["S"],["R1"],["R2","G1"],["R3","G2"],["G3"],["M1"],["M2"],["P"],["D1"],["D2","N1"],["D3","N2"],["N3"]];
const SWNAMES=[["Shadja","S"],["Shuddha Rishabha","R1"],["Chatusruti Rishabha / Shuddha Gandhara","R2 · G1"],["Shatsruti Rishabha / Sadharana Gandhara","R3 · G2"],["Antara Gandhara","G3"],["Shuddha Madhyama","M1"],["Prati Madhyama","M2"],["Panchama","P"],["Shuddha Dhaivata","D1"],["Chatusruti Dhaivata / Shuddha Nishada","D2 · N1"],["Shatsruti Dhaivata / Kaisiki Nishada","D3 · N2"],["Kakali Nishada","N3"]];
const T="Tyagaraja", MD="Muthuswami Dikshitar", PSI="Patnam Subramania Iyer", ST="Swathi Thirunal";
/* other well-known compositions in the melakarta itself */
const MCOMP={
 8:[["Koluvamaregada",T],["Kaddanuvariki",T]], 9:[["Teliyaleru Rama",T]],
 15:[["Tulasidalamulache",T],["Meru Samana",T],["Deva Deva Kalayami Te",ST]],
 16:[["Sugunamule",T],["Jalajakshi (varnam)",PSI]], 20:[["Sri Valli Devasenapate","Papanasam Sivan"]],
 21:[["Kaligiyunte",T]], 22:[["Chakkani Raja",T],["Rama Nee Samanamevaru",T]], 23:[["Guruleka",T]],
 26:[["Adamodi Galade",T],["Kripaya Palaya Shaure",ST]], 27:[["Jaya Jaya Padmanabha Murare",ST]],
 28:[["Dinamani Vamsa",T],["Rama Nannu Brovara",T]], 29:[["Swara Raga Sudha",T],["Enduku Peddala",T]],
 34:[["Kamala Nayana Jagadeeswara",ST+" (tune by M. Balamuralikrishna)"]], 45:[["Ennaalu Urake",T]],
 51:[["Sambho Mahadeva",T],["Raghuvara Nannu",T],["Sarasaksha Paripalaya",ST]],
 56:[["Saravana Bhava","Papanasam Sivan"],["Marivere Dikkevarayya Rama",PSI]],
 63:[["Marivere Dikkevaru",PSI]], 64:[["Kanta Joodumi",T],["Ennaadu Nee Kripa",PSI]],
 65:[["Nidhi Chala Sukhama",T],["Etavunara",T]]
};
const JTYPES=[
 {key:"varja",name:"Varja",html:"<p>A varja raga leaves out one or more swaras going up, coming down, or both. Five notes is <b>audava</b>, six is <b>shadava</b>, seven is <b>sampurna</b>, so a raga can be described as audava–audava, shadava–sampurna and so on.</p>"},
 {key:"vakra",name:"Vakra",html:"<p>A vakra raga does not climb or descend in a straight line. Somewhere in its scale the melody turns back on itself before moving on, as in Sri raga's descent that loops R G R.</p>"},
 {key:"upanga",name:"Upanga",html:"<p>An upanga raga uses only the notes of its parent melakarta. It may drop notes or reorder them, but it never brings in a swara from outside.</p>"},
 {key:"bhashanga",name:"Bhashanga",html:"<p>A bhashanga raga borrows an <b>anya swara</b>, a note that is not in its parent scale, and uses it in particular phrases. The borrowed note is often what gives the raga its colour.</p>"}
];
/* well-known janyas, grouped by type on the map */
const CURATED=[
 {name:"Mohanam",p:28,t:"varja",aro:"S R2 G3 P D2 Ṡ",ava:"Ṡ D2 P G3 R2 S",why:"Drops Ma and Ni both ways, so it is audava–audava.",c:[["Nanu Palimpa",T]]},
 {name:"Hamsadhwani",p:29,t:"varja",aro:"S R2 G3 P N3 Ṡ",ava:"Ṡ N3 P G3 R2 S",why:"Drops Ma and Dha both ways.",c:[["Vatapi Ganapatim",MD]]},
 {name:"Hindolam",p:20,t:"varja",aro:"S G2 M1 D1 N2 Ṡ",ava:"Ṡ N2 D1 M1 G2 S",why:"Drops Ri and Pa both ways.",c:[["Samaja Vara Gamana",T]]},
 {name:"Abhogi",p:22,t:"varja",aro:"S R2 G2 M1 D2 Ṡ",ava:"Ṡ D2 M1 G2 R2 S",why:"Drops Pa and Ni both ways.",c:[["Manasu Nilpa",T],["Evari Bodhana (varnam)",PSI]]},
 {name:"Madhyamavati",p:22,t:"varja",aro:"S R2 M1 P N2 Ṡ",ava:"Ṡ N2 P M1 R2 S",why:"Drops Ga and Dha both ways.",c:[["Rama Katha Sudha",T]]},
 {name:"Sriranjani",p:22,t:"varja",aro:"S R2 G2 M1 D2 N2 Ṡ",ava:"Ṡ N2 D2 M1 G2 R2 S",why:"Drops only Pa, so it is shadava–shadava.",c:[["Sogasuga Mridanga Talamu",T]]},
 {name:"Revati",p:2,t:"varja",aro:"S R1 M1 P N2 Ṡ",ava:"Ṡ N2 P M1 R1 S",why:"Drops Ga and Dha both ways. A child of the second melakarta that became popular.",c:[["Bho Shambho","Swami Dayananda Saraswati"]]},
 {name:"Nata",p:36,t:"varja",aro:"S R3 G3 M1 P D3 N3 Ṡ",ava:"Ṡ N3 P M1 R3 S",why:"All seven going up, five coming down (sampurna–audava).",c:[["Jagadananda Karaka (Pancharatna)",T]]},
 {name:"Dhanyasi",p:8,t:"varja",aro:"S G2 M1 P N2 Ṡ",ava:"Ṡ N2 D1 P M1 G2 R1 S",why:"Skips Ri and Dha going up, uses all seven coming down (audava–sampurna).",c:[["Sangeeta Jnanamu",T]]},
 {name:"Malayamarutam",p:16,t:"varja",aro:"S R1 G3 P D2 N2 Ṡ",ava:"Ṡ N2 D2 P G3 R1 S",why:"Leaves out Ma in both directions (shadava–shadava).",c:[["Manasa Etulortune",T],["Janmam Enduku",PSI]]},
 {name:"Kalyana Vasantam",p:21,t:"varja",aro:"S G2 M1 D1 N3 Ṡ",ava:"Ṡ N3 D1 P M1 G2 R2 S",why:"Skips Ri and Pa going up, full coming down.",c:[["Nadaloludai",T]]},
 {name:"Hamsanadam",p:60,t:"varja",aro:"S R2 M2 P N3 Ṡ",ava:"Ṡ N3 P M2 R2 S",why:"Drops Ga and Dha both ways.",c:[["Bantureeti Koluvu",T]]},
 {name:"Saraswati",p:64,t:"varja",aro:"S R2 M2 P D2 Ṡ",ava:"Ṡ N2 D2 P M2 G3 R2 S",why:"Skips Ga and Ni going up, full coming down.",c:[["Anuragamuleni",T]]},
 {name:"Mohanakalyani",p:65,t:"varja",aro:"S R2 G3 P D2 Ṡ",ava:"Ṡ N3 D2 P M2 G3 R2 S",why:"Climbs like Mohanam and descends like Kalyani.",c:[["Bhuvaneshwariya","Harikesanallur Muthiah Bhagavatar"]]},
 {name:"Amritavarshini",p:66,t:"varja",aro:"S G3 M2 P N3 Ṡ",ava:"Ṡ N3 P M2 G3 S",why:"Drops Ri and Dha both ways.",c:[["Anandamritakarshini",MD]]},
 {name:"Sri",p:22,t:"vakra",aro:"S R2 M1 P N2 Ṡ",ava:"Ṡ N2 P M1 R2 G2 R2 S",why:"The descent turns back at R G R before reaching Sa.",c:[["Endaro Mahanubhavulu (Pancharatna)",T]]},
 {name:"Gowla",p:15,t:"vakra",aro:"S R1 M1 P N3 Ṡ",ava:"Ṡ N3 P M1 R1 G3 M1 R1 S",why:"The descent loops through R G M R.",c:[["Dudukugala (Pancharatna)",T]]},
 {name:"Varali",p:39,t:"vakra",aro:"S G1 R1 G1 M2 P D1 N3 Ṡ",ava:"Ṡ N3 D1 P M2 G1 R1 S",why:"The ascent opens with the zig-zag G R G.",c:[["Kanakana Ruchira (Pancharatna)",T],["Mamava Meenakshi",MD]]},
 {name:"Begada",p:29,t:"vakra",aro:"S G3 R2 G3 M1 P D2 P Ṡ",ava:"Ṡ N3 D2 P M1 G3 R2 S",why:"The ascent steps G R G and turns again at D P.",c:[["Nadopasana",T]]},
 {name:"Purvikalyani",p:53,t:"vakra",aro:"S R1 G3 M2 P D2 P Ṡ",ava:"Ṡ N3 D2 P M2 G3 R1 S",why:"The ascent turns back at D P before upper Sa. Dikshitar called it Gamakakriya.",c:[["Gnanamosaga Rada",T],["Meenakshi Me Mudam (as Gamakakriya)",MD]]},
 {name:"Vasantha",p:17,t:"vakra",aro:"S M1 G3 M1 D2 N3 Ṡ",ava:"Ṡ N3 D2 M1 G3 R1 S",why:"Climbs M G M, skipping Ri and Pa, and skips Pa coming down.",c:[["Sitamma Mayamma",T]]},
 {name:"Arabhi",p:29,t:"upanga",aro:"S R2 M1 P D2 Ṡ",ava:"Ṡ N3 D2 P M1 G3 R2 S",why:"Uses only Shankarabharanam's notes, skipping Ga and Ni on the way up.",c:[["Sadhinchene (Pancharatna)",T],["Pahi Parvata Nandini",ST]]},
 {name:"Saveri",p:15,t:"upanga",aro:"S R1 M1 P D1 Ṡ",ava:"Ṡ N3 D1 P M1 G3 R1 S",why:"Uses only Mayamalavagowla's notes, skipping Ga and Ni on the way up.",c:[["Sankari Sankuru","Syama Sastri"]]},
 {name:"Malahari",p:15,t:"upanga",aro:"S R1 M1 P D1 Ṡ",ava:"Ṡ D1 P M1 G3 R1 S",why:"Only Mayamalavagowla's notes, without Ni at all. Usually the first raga a student sings geethams in.",c:[["Sri Gananatha (geetham)","Purandara Dasa"]]},
 {name:"Kambhoji",p:28,t:"bhashanga",aro:"S R2 G3 M1 P D2 Ṡ",ava:"Ṡ N2 D2 P M1 G3 R2 S",anya:["N3"],why:"The parent has Kaisiki Ni (N2), but some phrases touch Kakali Ni (N3), a note from outside.",c:[["O Rangasayee",T]]},
 {name:"Bhairavi",p:20,t:"bhashanga",aro:"S R2 G2 M1 P D2 N2 Ṡ",ava:"Ṡ N2 D1 P M1 G2 R2 S",anya:["D2"],why:"The parent has Shuddha Dha (D1), but the ascent uses Chatusruti Dha (D2).",c:[["Viriboni (ata tala varnam)","Pacchimiriam Adiyappa"]]},
 {name:"Khamas",p:28,t:"bhashanga",aro:"S M1 G3 M1 P D2 N2 Ṡ",ava:"Ṡ N2 D2 P M1 G3 R2 S",anya:["N3"],why:"Kakali Ni (N3) appears as a foreign note in certain phrases.",c:[["Sujana Jeevana",T]]}
];
/* Dikshitar-school (asampurna) ragas, each with a Dikshitar kriti: [mela, name, arohana, avarohana, kriti] */
const ASAM=[
 [1,"Kanakambari","S R1 M1 P D1 Ṡ","Ṡ N1 D1 P M1 G1 R1 S","Kanakambari Karunyamrita Lahari"],
 [2,"Phenadyuti","S R1 M1 P D1 P N2 Ṡ","Ṡ N2 D1 P M1 G1 R1 S","Sri Dakshinamurtim Isham"],
 [3,"Ganasamavarali","S R1 M1 P D1 N3 Ṡ","Ṡ N3 D1 P M1 G1 R1 S","Brihadeeswaro Rakshatu Mam"],
 [4,"Bhanumati","S R1 M1 P D2 N2 Ṡ","Ṡ N2 D2 P M1 G1 R1 S","Brihadamba Madamba Jayati"],
 [5,"Manoranjani","S R1 M1 P D2 N3 Ṡ","Ṡ N3 D2 P M1 G1 R1 S","Balambike Pahi"],
 [6,"Tanukeerti","S R1 M1 P N3 Ṡ","Ṡ N3 D3 N3 P M1 G1 R1 S","Chidambara Nataraja Murtim"],
 [7,"Senagrani","S R1 G2 R1 M1 G2 M1 P N1 D1 Ṡ","Ṡ N1 D1 P M1 G2 M1 G2 R1 S","Jnanambike Palaya Mam"],
 [9,"Dhunibhinnashadjam","S R1 G2 M1 P D1 N3 Ṡ","Ṡ N3 D1 P M1 G2 R1 S","Chidambareswaram Chintayami (listed as Bhinnashadjam)"],
 [10,"Natabharanam","S G2 M1 P N2 D2 N2 Ṡ","Ṡ N2 D2 N2 P N2 P M1 G2 R1 S","Viswanatham Bhajeham"],
 [11,"Kokilaravam","S R1 M1 P M1 P D2 N3 Ṡ","Ṡ N3 D2 P M1 G2 R1 S","Kodanda Ramam Anisam Bhajami"],
 [12,"Rupavati (Dikshitar)","S R1 M1 P Ṡ","Ṡ N3 D3 N3 P M1 G2 S","Sri Krishnam Bhajare"],
 [13,"Geyahejjujji","S R1 M1 G3 M1 P D1 Ṡ","Ṡ N1 D1 P M1 G3 R1 S","Ramachandra Bhaktam"],
 [14,"Vativasantabhairavi","S R1 G3 M1 P D1 N2 Ṡ","Ṡ N2 D1 M1 G3 M1 P M1 G3 R1 S","Prasanna Venkateswaram"],
 [16,"Toyavegavahini","S R1 G3 M1 P D2 N2 Ṡ","Ṡ N2 D2 P M1 G3 R1 S","Veena Pustaka Dharinim"],
 [18,"Jayashuddhamalavi","S R1 G3 M1 P N3 Ṡ","Ṡ N3 D3 N3 P M1 G3 R1 S","Naraharim Ashrayami"],
 [19,"Jhankarabhramari","S R2 G2 M1 P D1 N1 D1 P D1 Ṡ","Ṡ N1 D1 P M1 G2 R2 G2 R2 S","Himachala Kumarim Bhaje"],
 [20,"Nariritigaula","S G2 R2 G2 M1 N2 D1 M1 N2 Ṡ","Ṡ N2 D1 M1 G2 M1 P M1 G2 R2 S","Nilotpalambam Bhajare"],
 [21,"Kiranavali","S R2 M1 P D1 P D1 N3 Ṡ","Ṡ N3 P D1 P M1 P G2 R2 S","Panchabhuta Kiranavalim"],
 [23,"Gaurivelavali","S R2 G2 S R2 M1 P D2 Ṡ","Ṡ N3 D2 P M1 G2 R2 S","Kaumari Gaurivelavali"],
 [24,"Viravasantam","S R2 M1 P N3 D3 N3 Ṡ","Ṡ N3 P M1 R2 G2 S","Vira Vasanta Tyagaraja"],
 [25,"Sharavati","S M1 G3 M1 P D1 N1 D1 Ṡ","Ṡ N1 D1 P M1 G3 R2 S","Sharavati Tata Vasini"],
 [26,"Tarangini","S R2 G3 P D1 N2 D1 P D1 Ṡ","Ṡ D1 P G3 R2 S R2 G3 M1 G3 R2 S","Maye Tvam Yahi"],
 [27,"Saurasena","S R2 G3 M1 P D1 N3 Ṡ","Ṡ N3 D1 P M1 G3 R2 G3 S","Saurasenesham Vallisham"],
 [30,"Nagabharanam","S R2 G3 M1 P N3 D3 N3 Ṡ","Ṡ N3 P M1 G3 M1 R2 S","Nagabharanam Nagajabharanam"],
 [31,"Kalavati","S R3 G3 M1 P D1 N1 D1 P D1 Ṡ","Ṡ N1 D1 P M1 R3 G3 M1 R3 S","Kalavati Kamalasana Yuvati"],
 [32,"Ragachudamani","S M1 R3 G3 M1 P N2 Ṡ","Ṡ N2 D1 P M1 R3 S","Swetaganapatim Vande"],
 [33,"Gangatarangini","S R3 G3 M1 P D1 N3 Ṡ","Ṡ N3 P D1 M1 G3 M1 R3 S","Varadaraja Avava"],
 [34,"Bhogachayanata","S R3 G3 M1 P N2 Ṡ","Ṡ N2 D2 N2 P Ṡ N2 P M1 R3 S","Bhogacchaya Nataka Priye"],
 [35,"Shailadeshakshi","S M1 G3 P D2 Ṡ","Ṡ N3 D2 Ṡ N3 P M1 R3 S","Sri Sulinim Srita Palinim"],
 [37,"Saugandhini","S G1 R1 G1 M2 P D1 Ṡ","Ṡ N1 D1 P M2 G1 R1 S","Kamakoti Peetha Vasini"],
 [38,"Jaganmohanam","S R1 G1 M2 P D1 N2 Ṡ","Ṡ N2 D1 P M2 G1 R1 S","Sri Vidya Rajagopalam"],
 [40,"Nabhomani","S G1 R1 M2 P D2 P N2 Ṡ","Ṡ N2 D2 P M2 G1 R1 S","Nabhomani Chandragni Nayanam"],
 [41,"Kumbhini","S G1 R1 G1 M2 P N3 D2 N3 Ṡ","Ṡ N3 D2 P M2 G1 R1 S","Satchidanandamaya"],
 [42,"Ravikriya","S G1 R1 G1 M2 P N3 D3 N3 Ṡ","Ṡ N3 P M2 G1 R1 S","Himagiri Kumari Iswari"],
 [43,"Girvani","S R1 G2 M2 P D1 N1 D1 P D1 Ṡ","Ṡ N1 D1 P M2 G2 R1 S","Namo Namaste Girvani"],
 [44,"Bhavani","S R1 G2 M2 P D1 P N2 Ṡ","Ṡ N2 D1 P M2 G2 R1 S","Jayati Shiva Bhavani"],
 [45,"Shivapantuvarali","S R1 G2 M2 P D1 N3 Ṡ","Ṡ N3 D1 P M2 G2 R1 S","Sri Satyanarayanam"],
 [46,"Stavarajam","S R1 M2 P D2 Ṡ","Ṡ N2 D2 P M2 G2 S","Madhurambam Bhajare"],
 [47,"Sauviram","S R1 G2 M2 P D2 N3 Ṡ","Ṡ N3 D2 M2 G2 R1 S","Sarasa Sauvira Rasa"],
 [48,"Jivantika","S R1 G2 M2 P D3 N3 Ṡ","Ṡ N3 P M2 G2 R1 S","Brihadisa Katakshena"],
 [49,"Dhavalangam","S R1 G3 M2 P D1 Ṡ","Ṡ N1 P M2 G3 R1 S","Shringaradi Nava Rasangi"],
 [50,"Namadeshi","S R1 G3 M2 P D1 N2 Ṡ","Ṡ N2 D1 P M2 G3 R1 S","Narmada Kaveri Tiranilaye"],
 [51,"Kashiramakriya","S G3 R1 G3 M2 P D1 N3 Ṡ","Ṡ N3 D1 P M2 G3 R1 S","Ucchishta Ganapatau"],
 [52,"Ramamanohari","S R1 G3 M2 P D2 N2 Ṡ","Ṡ N2 D2 P M2 G3 R1 S","Matangi Sri Rajarajeshwari"],
 [54,"Vamshavati","S R1 G3 M2 P D3 N3 Ṡ","Ṡ N3 P M2 G3 R1 S","Bhakta Vatsalam"],
 [55,"Shamalam","S R2 G2 M2 P D1 Ṡ","Ṡ N1 D1 P M2 G2 R2 S","Shyamalangi Matangi Namaste"],
 [56,"Chamaram","S R2 G2 M2 P D1 N2 Ṡ","Ṡ N2 D1 P M2 G2 R2 S","Siddhi Vinayakam"],
 [57,"Sumadhyuti","S R2 G2 M2 P D1 N3 Ṡ","Ṡ N3 D1 P M2 G2 R2 S","Kamakshi Kamakoti Peetha Vasini"],
 [58,"Deshisimharavam","S R2 G2 M2 P D2 N2 Ṡ","Ṡ N2 D2 P M2 G2 R2 S","Sri Kanthimathim"],
 [59,"Dhamavati","S R2 G2 M2 P D2 N3 Ṡ","Ṡ N3 D2 P M2 G2 R2 S","Ramachandrasya Dasoham"],
 [60,"Nishadham","S R2 G2 M2 P D3 N3 Ṡ","Ṡ N3 P M2 G2 R2 S","Nishadhadi Desadhipati Nuta"],
 [61,"Kuntalam","S R2 G3 M2 P D1 Ṡ","Ṡ N1 D1 P M2 G3 R2 S","Sri Sugandhi Kuntalambike"],
 [62,"Ratipriya","S R2 G3 M2 P D1 N2 Ṡ","Ṡ N2 D1 P M2 G3 R2 S","Mara Ratipriyam"],
 [63,"Gitapriya","S R2 G3 M2 P D1 N3 Ṡ","Ṡ N3 D1 P M2 G3 R2 S","Sadhujana Vinutam Guruguham"],
 [64,"Bhushavati","S R2 G3 M2 P D2 N2 Ṡ","Ṡ N2 D2 P M2 G3 R2 S","Bhushavatim Manju Bhashavatim"],
 [66,"Chaturangini","S R2 G3 M2 P D3 N3 Ṡ","Ṡ N3 P M2 G3 R2 S","Ekamranatheswarena"],
 [67,"Santanamanjari","S R3 G3 M2 P D1 Ṡ","Ṡ N1 D1 P M2 R3 S","Santana Manjari Sankari"],
 [68,"Jyoti","S R3 G3 M2 P D1 N2 Ṡ","Ṡ N2 D1 P M2 G3 S","Rame Bharata Palita"],
 [69,"Dhautapanchamam","S R3 G3 M2 P D1 N3 Ṡ","Ṡ N3 D1 P M2 R3 G3 S","Matangi Marakatangi"],
 [70,"Nasamani","S R3 G3 M2 P D2 N2 Ṡ","Ṡ N2 D2 P M2 R3 G3 S","Sri Rama Saraswati Sevitam"],
 [71,"Kusumakaram","S R3 G3 M2 P D2 N3 Ṡ","Ṡ N3 D2 P M2 R3 G3 S","Kusumakara Shobhita"],
 [72,"Rasamanjari","S R3 G3 S P M2 P N3 D3 N3 Ṡ","Ṡ N3 D3 N3 P M2 P R3 G3 S","Shringara Rasamanjarim"]
];
const JATIS=[{name:"Tisra",n:3},{name:"Chatusra",n:4},{name:"Khanda",n:5},{name:"Misra",n:7},{name:"Sankeerna",n:9}];
const SULADI=[
 {name:"Dhruva",angas:"LDLL",names:["Mani","Srikara","Pramana","Poorna","Bhuvana"],def:1},
 {name:"Matya",angas:"LDL",names:["Sara","Sama","Udaya","Udeerna","Rava"],def:1},
 {name:"Rupaka",angas:"DL",names:["Chakra","Patti","Raja","Kula","Bindu"],def:1},
 {name:"Jhampa",angas:"LAD",names:["Kadamba","Madhura","Chana","Sura","Kara"],def:3},
 {name:"Triputa",angas:"LDD",names:["Sankha","Adi","Dushkara","Leela","Bhoga"],def:0},
 {name:"Ata",angas:"LLDD",names:["Gupta","Lekha","Vidala","Loya","Dheera"],def:2},
 {name:"Eka",angas:"L",names:["Sudha","Mana","Rata","Raga","Vasu"],def:1}
];
const GATIS=[{name:"Tisra",n:3,syl:"ta ki ta"},{name:"Chatusra",n:4,syl:"ta ka dhi mi"},{name:"Khanda",n:5,syl:"ta ka ta ki ta"},{name:"Misra",n:7,syl:"ta ki ta ta ka dhi mi"},{name:"Sankeerna",n:9,syl:"ta ka dhi mi ta ka ta ki ta"}];
const CHAPUS=[
 {name:"Tisra Chapu",groups:[1,2],syl:"ta · ka di",use:"Three beats split 1 + 2. Light and quick, often in bhajans and folk-derived songs."},
 {name:"Khanda Chapu",groups:[2,3],syl:"ta ka · ta ki ta",use:"Five beats split 2 + 3. Common in kritis and padams."},
 {name:"Misra Chapu",groups:[3,2,2],syl:"ta ki ta · ta ka · di mi",use:"Seven beats split 3 + 2 + 2. One of the most used talas in kritis after Adi and Rupaka."},
 {name:"Sankeerna Chapu",groups:[4,5],syl:"ta ka di mi · ta ka ta ki ta",use:"Nine beats split 4 + 5. Rarer, heard in some compositions and pallavis."}
];
const FINGERS=["Little finger","Ring finger","Middle finger","Index finger","Thumb","Little finger","Ring finger","Middle finger"];
const STHAYIS=[{name:"Anumandra",oct:-2,mark:"̤",desc:"Two dots below. Below the normal range; reached by deep male voices and instruments like the veena."},
 {name:"Mandra",oct:-1,mark:"̣",desc:"One dot below. The lower register."},
 {name:"Madhya",oct:0,mark:"",desc:"No dot. The middle register, where most melody lives."},
 {name:"Tara",oct:1,mark:"̇",desc:"One dot above. The upper register, used for climaxes."},
 {name:"Atitara",oct:2,mark:"̈",desc:"Two dots above. Above the normal range; mostly instruments."}];
const SHRUTIS=[["1 · C",261.63],["1½ · C♯",277.18],["2 · D",293.66],["2½ · D♯",311.13],["3 · E",329.63],["4 · F",349.23],["4½ · F♯",369.99],["5 · G",392.00],["5½ · G♯",415.30],["6 · A",440.00],["6½ · A♯",466.16],["7 · B",493.88]];
const SUBD="₀₁₂₃₄₅₆₇₈₉", sub=n=>String(n).split("").map(c=>SUBD[+c]).join("");
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-");
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");

/* ================= raga helpers ================= */
function melaSwaras(n){const k=(n-1)%36, rg=PAIRS[Math.floor(k/6)], dn=PAIRS[k%6];
  return {R:"R"+rg[0],G:"G"+rg[1],M:n<=36?"M1":"M2",D:"D"+dn[0],N:"N"+dn[1]};}
function melaScale(n){const s=melaSwaras(n);return ["S",s.R,s.G,s.M,"P",s.D,s.N];}
function melaAro(n){return melaScale(n).join(" ")+" Ṡ";}
function melaAva(n){return "Ṡ "+melaScale(n).slice().reverse().join(" ");}
/* parse a scale string into {t: token, o: octave} */
function parseScale(str){return str.split(/\s+/).filter(Boolean).map(x=>x==="Ṡ"?{t:"S",o:1}:{t:x,o:0});}
function tokens(str){return parseScale(str).map(x=>x.t);}
function noteDisp(x,shift){const m=x.t.match(/^([A-Z])(\d?)$/), oct=x.o+shift, st=STHAYIS.find(s=>s.oct===oct);
  return m[1]+(st?st.mark:"")+(m[2]?sub(m[2]):"");}
function classify(j,p){
  const par=new Set(melaScale(p)), a=parseScale(j.aro), v=parseScale(j.ava);
  const pos=x=>POS[x.t]+12*x.o;
  let vak=false; for(let i=1;i<a.length;i++) if(pos(a[i])<=pos(a[i-1])) vak=true;
  for(let i=1;i<v.length;i++) if(pos(v[i])>=pos(v[i-1])) vak=true;
  const na=new Set(a.map(x=>x.t)).size, nv=new Set(v.map(x=>x.t)).size;
  const JN={5:"Audava",6:"Shadava",7:"Sampurna"}, nm=n=>JN[n]||(n+"-note");
  const missA=melaScale(p).filter(t=>!a.some(x=>x.t===t)), missV=melaScale(p).filter(t=>!v.some(x=>x.t===t));
  const anya=[...new Set(a.concat(v).map(x=>x.t).filter(t=>!par.has(t)))];
  return {vak,na,nv,jati:`${nm(na)}–${nm(nv)}`,missA,missV,anya,same:!vak&&na===7&&nv===7&&!anya.length&&!(j.anya||[]).length};
}
const SWF={S:"Sa",R:"Ri",G:"Ga",M:"Ma",P:"Pa",D:"Dha",N:"Ni"};
function autoWhy(j,c){
  let s=`In Muthuswami Dikshitar's school this is the raga of melakarta ${j.p}, sung with his own phrasing. `;
  if(c.same) return s+"Its outline uses the same seven notes as the melakarta. What sets it apart is the way Dikshitar's kritis move through them.";
  const parts=[];
  if(c.missA.length) parts.push(`skips ${c.missA.map(t=>SWF[t[0]]).join(" and ")} going up`);
  if(c.missV.length) parts.push(`skips ${c.missV.map(t=>SWF[t[0]]).join(" and ")} coming down`);
  if(parts.length) s+="It "+parts.join(" and ")+". ";
  if(c.vak) s+="Its line also turns back on itself in places instead of moving straight.";
  return s.trim();
}

/* build janya objects */
const JANYAS=[];
CURATED.forEach(j=>JANYAS.push(Object.assign({kind:"curated"},j)));
ASAM.forEach(a=>JANYAS.push({kind:"asam",p:a[0],name:a[1],aro:a[2],ava:a[3],c:[[a[4],MD]]}));
JANYAS.forEach(j=>{j.cls=classify(j,j.p); if(!j.why) j.why=autoWhy(j,j.cls); j.slug=slug(j.name);});
const JBYMELA={}; JANYAS.forEach(j=>{(JBYMELA[j.p]=JBYMELA[j.p]||[]).push(j);});
Object.values(JBYMELA).forEach(l=>l.sort((a,b)=>(a.kind==="curated"?0:1)-(b.kind==="curated"?0:1)));
function melaComps(k){return (MCOMP[k]||[]).concat([[KOTI[k-1],"Koteeswara Iyer · from his 72-melakarta cycle"]]);}

/* ================= tree ================= */
const BYID={};
function N(id,name,o){const n=Object.assign({id,name,children:null,_open:false},o||{});BYID[id]=n;return n;}
function kids(parent,list){parent.children=list;list.forEach(c=>c._parent=parent);return parent;}
function melaLabel(n){return `${n} · ${MELAS[n-1]}${ALIAS[n]?" ("+ALIAS[n]+")":""}`;}

const root=N("root","Carnatic Music",{type:"concept",branch:"root",_open:true,html:"<p>Carnatic music, the classical music of South India, rests on two systems. <b>Raga</b> governs melody: which notes, in what order, with which ornaments. <b>Tala</b> governs time: a repeating cycle counted with the hands.</p><p>In a concert both run together. A singer improvises an alapana to open up a raga across its sthayis, sings a composition set in a raga and a tala, then improvises neraval and kalpana swaras that must land back on the tala's first beat.</p>"});
const raga=N("raga","Raga",{type:"concept",branch:"raga",_open:true,html:"<p>A raga is a melodic framework, more than a scale. It defines which swaras are used, the order they may move in, and the characteristic phrases and gamakas (oscillations and slides) that make it recognisable.</p><p>Ragas are organised as a family tree. The 72 <b>melakartas</b>, also called janaka ragas, are parent scales. Every other raga is a <b>janya</b>, derived from one of them.</p>"});
const sthayiNode=N("sthayi","Sthayis",{type:"sthayi",branch:"raga"});
const swaraNode=N("swaras","Swarasthanas",{type:"swaras",branch:"raga"});
const melaRoot=N("mela","Melakarta · 72",{type:"concept",branch:"raga",_open:true,html:"<p>A melakarta (also called mela or janaka raga) uses all seven swaras both ways, in straight order, with exactly one variant of each. That simple rule produces exactly 72 scales.</p><p>The 72 split into two halves by Ma, then into 12 chakras of six, each chakra sharing the same Ri, Ga and Ma. Open any melakarta to see its janya ragas.</p>"});
const halves=[N("half-1","Shuddha Ma · 1–36",{type:"concept",branch:"raga",_open:true,html:"<p>The first 36 melakartas use <b>Shuddha Madhyama (M1)</b>. Each has a twin in the second half, 36 places later, that is identical except for Prati Ma. Shankarabharanam (29) and Kalyani (65) are such a pair.</p>"}),
 N("half-2","Prati Ma · 37–72",{type:"concept",branch:"raga",html:"<p>Melakartas 37 to 72 use <b>Prati Madhyama (M2)</b>, the raised fourth. Kalyani (65), Shanmukhapriya (56) and Hemavati (58) live here.</p>"})];
const chakraNodes=CHAKRAS.map((c,i)=>{
  const first=i*6+1;
  const ch=N("chakra-"+(i+1),c[0]+" chakra",{type:"chakra",branch:"raga",ci:i,label:`${c[0]} · ${first}–${first+5}`});
  kids(ch,[0,1,2,3,4,5].map(k=>{const n=first+k;
    const m=N("mela-"+n,MELAS[n-1],{type:"mela",branch:"raga",num:n,label:melaLabel(n),_open:n===29});
    kids(m,(JBYMELA[n]||[]).map(j=>N(`mj-${n}-${j.slug}`,j.name,{type:"janya",branch:"raga",j})));
    return m;}));
  return ch;
});
kids(halves[0],chakraNodes.slice(0,6)); kids(halves[1],chakraNodes.slice(6));
kids(melaRoot,halves);
const janyaRoot=N("janya","Janya types",{type:"concept",branch:"raga",html:"<p>A janya raga is born from a melakarta. It may skip notes, take a zig-zag path, or borrow a note from outside. Thousands of janya ragas exist, and most ragas heard in concerts are janyas.</p><p>This branch sorts well-known janyas by kind. The four kinds overlap, so each example sits under its most telling trait. Every melakarta's own janyas are inside that melakarta.</p>"});
kids(janyaRoot,JTYPES.map(t=>{const tn=N("jt-"+t.key,t.name,{type:"concept",branch:"raga",html:t.html});
  kids(tn,JANYAS.filter(j=>j.t===t.key).map(j=>N("jx-"+j.slug,j.name,{type:"janya",branch:"raga",j})));return tn;}));
kids(raga,[sthayiNode,swaraNode,melaRoot,janyaRoot]);

const tala=N("tala","Tala",{type:"concept",branch:"tala",_open:true,html:"<p>A tala is a fixed cycle of beats that repeats for the whole piece. One full cycle is an <b>avartanam</b>. Musicians keep it visibly with claps, finger counts and waves called <b>kriyas</b>.</p><p>The first beat, <b>samam</b>, is the anchor: improvised passages are built to land there. A song may begin on samam or a little after it; that starting point is its <b>eduppu</b>.</p>"});
const angaRoot=N("angas","Angas",{type:"concept",branch:"tala",html:"<p>Angas are the building blocks of a tala. Old texts list six, but three do nearly all the work today.</p>"});
kids(angaRoot,[
 N("a-laghu","Laghu  I",{type:"concept",branch:"tala",html:"<p><b>Laghu (I)</b> is a clap followed by finger counts, starting from the little finger. Its length is not fixed: the jati decides it, from 3 beats (Tisra) to 9 (Sankeerna). Written with a subscript, so I₄ is a four-beat laghu: clap, little, ring, middle.</p>"}),
 N("a-drutam","Drutam  O",{type:"concept",branch:"tala",html:"<p><b>Drutam (O)</b> is always two beats: a clap, then a wave with the palm turned up.</p>"}),
 N("a-anu","Anudrutam  U",{type:"concept",branch:"tala",html:"<p><b>Anudrutam (U)</b> is a single clap, one beat. Among the 35 talas only the Jhampa family uses it.</p>"}),
 N("a-others","Guru · Plutam · Kakapadam",{type:"concept",branch:"tala",html:"<p>Guru (8 beats), plutam (12) and kakapadam (16) appear in the older 108-tala system and in some rare pallavis. You will seldom need them for kritis.</p>"})]);
const jatiRoot=N("jatis","Jatis · 5",{type:"concept",branch:"tala",html:"<p>Jati sets the length of the laghu. Change the jati and the same anga pattern becomes a different tala. Five jatis times seven patterns gives the 35 talas.</p>"});
kids(jatiRoot,JATIS.map(j=>N("jati-"+j.name,`${j.name} · ${j.n}`,{type:"concept",branch:"tala",html:`<p><b>${j.name} jati</b> makes the laghu ${j.n} beats long: a clap and ${j.n-1} finger counts.</p>`})));
const suladiRoot=N("suladi","Suladi Sapta · 35",{type:"concept",branch:"tala",_open:true,html:"<p>The seven Suladi talas are seven fixed orders of angas. The scheme is credited to the era of Purandara Dasa, who used it in his suladi compositions and in the alankaram exercises still taught to every beginner.</p><p>Each pattern combines with the five jatis, giving 35 named talas. Open a family to see its five members, or use the full grid in the Tala Lab below.</p>"});
const angaSym=s=>s.angas.split("").map(a=>a==="L"?"I":a==="D"?"O":"U").join(" ");
function angaStr(s,j){return s.angas.split("").map(a=>a==="L"?"I"+sub(JATIS[j].n):a==="D"?"O":"U").join("  ");}
function angaCount(s,j){return s.angas.split("").reduce((t,a)=>t+(a==="L"?JATIS[j].n:a==="D"?2:1),0);}
kids(suladiRoot,SULADI.map((s,si)=>{
  const sn=N("s-"+s.name,s.name,{type:"suladi",branch:"tala",si,label:`${s.name}  ${angaSym(s)}`,_open:si===4});
  kids(sn,JATIS.map((j,ji)=>N(`t-${si}-${ji}`,s.names[ji],{type:"tala35",branch:"tala",si,ji,label:`${s.names[ji]} · ${angaCount(s,ji)}`})));
  return sn;
}));
const gatiRoot=N("gati","Gati / Nadai",{type:"concept",branch:"tala",html:"<p>Gati, also called nadai, is the number of pulses inside each beat. It is independent of the tala: Adi tala can run in Tisra gati (three per beat) or Chatusra gati (four per beat), and the feel changes completely.</p>"});
kids(gatiRoot,GATIS.map((g,gi)=>N("g-"+g.name,`${g.name} · ${g.n}`,{type:"gati",branch:"tala",gi})));
const chapuRoot=N("chapu","Chapu",{type:"concept",branch:"tala",html:"<p>Chapu talas are short cycles kept by marking each group with a beat instead of finger counts. Their uneven groupings give them a lilt that suits padams, javalis and many kritis.</p>"});
kids(chapuRoot,CHAPUS.map((c,ci)=>N("c-"+ci,c.name,{type:"chapu",branch:"tala",ci,label:`${c.name} · ${c.groups.join("+")}`})));
const useRoot=N("inuse","In concerts",{type:"concept",branch:"tala",html:"<p>Most compositions use a handful of talas.</p><ul><li><b>Adi</b> (Chatusra Triputa, 8 beats) carries the majority of kritis and varnams, including all five of Tyagaraja's Pancharatna kritis.</li><li><b>Rupaka</b>, <b>Misra Chapu</b> and <b>Khanda Chapu</b> come next.</li><li><b>Khanda Ata</b> (14 beats) is the classic tala for Ata tala varnams such as Viriboni.</li><li>The rest of the 35 appear mainly in the sapta tala alankarams students practise and in ragam-tanam-pallavi, where performers choose an unusual tala as a showpiece.</li></ul>"});
kids(tala,[angaRoot,jatiRoot,suladiRoot,gatiRoot,chapuRoot,useRoot]);
kids(root,[raga,tala]);
BYID["chakra-5"]._open=true;
(function setDepth(n,d){n.depth=d;(n.children||[]).forEach(c=>setDepth(c,d+1));})(root,0);

/* ================= audio core ================= */
let actx=null, noiseBuf=null;
function ensureAudio(){
  if(!actx){const AC=window.AudioContext||window.webkitAudioContext; if(!AC) return false; actx=new AC();
    noiseBuf=actx.createBuffer(1,actx.sampleRate*0.5,actx.sampleRate);const d=noiseBuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;}
  if(actx.state==="suspended") actx.resume(); return true;
}
function reduced(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches;}

/* ================= scale player ================= */
const PLAY={sthayi:0, shruti:2, drone:true, busy:null};
function pluck(t,f,dur,bus,peak){
  const g=actx.createGain(), lp=actx.createBiquadFilter(); lp.type="lowpass"; lp.frequency.setValueAtTime(3200,t); lp.frequency.exponentialRampToValueAtTime(700,t+dur);
  g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(peak,t+0.01); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  [["triangle",0],["sawtooth",5]].forEach(([ty,dt])=>{const o=actx.createOscillator();o.type=ty;o.frequency.value=f;o.detune.value=dt;o.connect(lp);o.start(t);o.stop(t+dur+0.05);});
  lp.connect(g).connect(bus);
}
function stopScale(){
  if(!PLAY.busy) return;
  const b=PLAY.busy; PLAY.busy=null;
  try{b.bus.gain.setTargetAtTime(0,actx.currentTime,0.05);}catch(e){}
  clearInterval(b.drone); b.timers.forEach(clearTimeout);
  setTimeout(()=>{try{b.bus.disconnect();}catch(e){}},400);
  document.querySelectorAll("[data-scale]").forEach(x=>x.textContent=x.dataset.label);
  document.querySelectorAll(".sw span.on").forEach(x=>x.classList.remove("on"));
}
/* notes: [{semi (from madhya Sa), id}] */
function playNotes(notes,btn,step){
  if(PLAY.busy){const was=PLAY.busy.btn; stopScale(); if(was===btn) return;}
  if(!ensureAudio()) return;
  const base=SHRUTIS[PLAY.shruti][1]/2;   /* tune madhya Sa one octave below the kattai reference for a vocal register */
  const bus=actx.createGain(); bus.gain.value=0.9; bus.connect(actx.destination);
  const t0=actx.currentTime+0.15, st=step||0.46, timers=[];
  const shift=12*STHAYIS.find(s=>s.oct===PLAY.sthayi).oct;
  let droneTimer=null;
  if(PLAY.drone){
    const pat=[-5+shift,0+shift,0+shift,-12+shift]; let i=0, tn=t0-0.1;
    const tick=()=>{while(tn<actx.currentTime+0.3){pluck(tn,base*Math.pow(2,pat[i%4]/12),2.4,bus,0.045);i++;tn+=0.62;}};
    tick(); droneTimer=setInterval(tick,120);
  }
  notes.forEach((n,i)=>{
    const t=t0+0.9*(PLAY.drone?1:0)+i*st, last=i===notes.length-1;
    pluck(t,base*Math.pow(2,(n.semi+shift)/12),last?1.4:st*1.6,bus,0.22);
    if(n.id) timers.push(setTimeout(()=>{document.querySelectorAll(".sw span.on").forEach(x=>x.classList.remove("on"));const el=document.getElementById(n.id);if(el)el.classList.add("on");},(t-actx.currentTime)*1000));
  });
  const end=0.9*(PLAY.drone?1:0)+notes.length*st+1.6;
  timers.push(setTimeout(()=>{if(PLAY.busy&&PLAY.busy.bus===bus) stopScale();},(t0-actx.currentTime+end)*1000));
  PLAY.busy={bus,drone:droneTimer,timers,btn};
  if(btn) btn.textContent="■ Stop";
}
function scaleNotes(aro,ava,prefix){
  const a=parseScale(aro), v=parseScale(ava), out=[];
  a.forEach((x,i)=>out.push({semi:POS[x.t]+12*x.o,id:`${prefix}a${i}`}));
  v.forEach((x,i)=>{if(i===0&&out.length&&out[out.length-1].semi===POS[x.t]+12*x.o) return; out.push({semi:POS[x.t]+12*x.o,id:`${prefix}v${i}`});});
  return out;
}
function scaleRows(aro,ava,prefix){
  const sh=PLAY.sthayi;
  const row=(lab,str,k)=>`<div class="row"><span class="lab">${lab}</span><span class="sw">${parseScale(str).map((x,i)=>`<span id="${prefix}${k}${i}">${noteDisp(x,sh)}</span>`).join("")}</span></div>`;
  return `<div class="scale">${row("Arohana",aro,"a")}${row("Avarohana",ava,"v")}</div>`;
}
function playerHTML(){
  return `<div class="player"><button class="btn sm" data-scale data-label="▶ Play scale">▶ Play scale</button>
  <div class="seg" role="group" aria-label="Sthayi">${STHAYIS.filter(s=>Math.abs(s.oct)<=1).map(s=>`<button data-sthayi="${s.oct}" aria-pressed="${s.oct===PLAY.sthayi}">${s.name}</button>`).join("")}</div>
  <label>Sa<select data-shruti aria-label="Shruti (pitch of Sa)">${SHRUTIS.map((s,i)=>`<option value="${i}"${i===PLAY.shruti?" selected":""}>${s[0]}</option>`).join("")}</select></label>
  <label><input type="checkbox" data-drone${PLAY.drone?" checked":""}> Tambura</label></div>`;
}

/* ================= panel ================= */
const panel=document.getElementById("panel");
let selectedId="mela-29", current=null;
function chipsFor(list){return '<div class="chips">'+list.map(n=>`<button class="chip ${n.branch}" data-go="${n.id}">${esc(n.label||n.name)}</button>`).join("")+"</div>";}
function crumbs(n){const a=[];let p=n._parent;while(p){a.unshift(p);p=p._parent;}return a.slice(1);}
function listenURL(title,raga){return "https://www.youtube.com/results?search_query="+encodeURIComponent((title.replace(/\s*\(.*?\)\s*/g," ")+" "+raga+" carnatic").trim());}
function compsHTML(list,raga){
  return '<ul class="comps">'+list.map(c=>`<li><span>${esc(c[0])}<br><i>${esc(c[1])}</i></span><a href="${listenURL(c[0],raga)}" target="_blank" rel="noopener">Listen ↗</a></li>`).join("")+"</ul>";
}
function stripHTML(used, anya){
  const set=new Set(used.map(t=>POS[t])), an=new Set((anya||[]).map(t=>POS[t])), lab={};
  used.concat(anya||[]).forEach(t=>{lab[POS[t]]=t;});
  return '<div class="strip" aria-label="Swara positions">'+STRIP.map((names,i)=>{
    const on=set.has(i), a=an.has(i)&&!on, fixed=(i===0||i===7);
    return `<div class="cell${on?" on":""}${a?" anya":""}${fixed?" fixed":""}" title="${names.join(" / ")}"><b>${on||a?(lab[i]||names[0]):"·"}</b>${i}</div>`;
  }).join("")+"</div>";
}
const ORD=["first","second","third","fourth","fifth","sixth"];
function renderPanel(n){
  current=n;
  let h="";
  const path=crumbs(n).map(p=>p.name).join(" › ");
  const tag=`<span class="tag">${esc(path||"Start here")}</span>`;
  if(n.type==="mela"){
    const k=n.num, s=melaSwaras(k), ci=Math.ceil(k/6)-1, pos=(k-1)%6+1, sc=melaScale(k), twin=k<=36?k+36:k-36;
    h=`<div>${tag}<h3>${MELAS[k-1]}</h3><p class="sub">Melakarta ${k}${ALIAS[k]?" · commonly called "+ALIAS[k]:""}</p></div>
    <dl class="kv"><dt>Chakra</dt><dd>${CHAKRAS[ci][0]} (${ci+1}), ${ORD[pos-1]} raga in it</dd>
    <dt>Ma</dt><dd>${k<=36?"Shuddha (M1)":"Prati (M2)"}</dd>
    <dt>Twin</dt><dd><button class="chip raga" data-go="mela-${twin}">${melaLabel(twin)}</button></dd></dl>
    ${scaleRows(melaAro(k),melaAva(k),"sc")}${playerHTML()}
    ${stripHTML(sc)}<p class="striplegend">The 12 positions of one sthayi, Sa on the left. Lit cells are the swaras this raga uses.</p>
    <p class="note">${CHAKRAS[ci][0]} chakra fixes ${s.R}, ${s.G} and ${s.M}. Being ${ORD[pos-1]} in the chakra fixes ${s.D} and ${s.N}.</p>
    <div><h4>Janya ragas</h4>${chipsFor(n.children)}</div>
    <div><h4>Compositions in ${MELAS[k-1]}</h4>${compsHTML(melaComps(k),ALIAS[k]||MELAS[k-1])}</div>`;
  } else if(n.type==="janya"){
    const j=n.j, all=[...new Set(tokens(j.aro).concat(tokens(j.ava)))], c=j.cls;
    const kind=j.kind==="curated"?`${JTYPES.find(t=>t.key===j.t).name} janya`:"Dikshitar-school raga";
    h=`<div>${tag}<h3>${esc(j.name)}</h3><p class="sub">${kind} · ${c.jati}${c.vak?" · vakra":""}</p></div>
    <dl class="kv"><dt>Parent</dt><dd><button class="chip raga" data-go="mela-${j.p}">${melaLabel(j.p)}</button></dd></dl>
    ${scaleRows(j.aro,j.ava,"sc")}${playerHTML()}
    ${stripHTML(all.filter(t=>!(j.anya||[]).includes(t)), j.anya)}
    <p class="striplegend">${j.anya?"Dashed cell: the anya swara borrowed from outside the parent scale.":"Lit cells are the swaras this raga uses."}</p>
    <p class="note">${esc(j.why)}</p>
    <div><h4>Compositions in ${esc(j.name)}</h4>${compsHTML(j.c,j.name.replace(/\s*\(.*\)/,""))}</div>`;
  } else if(n.type==="chakra"){
    const i=n.ci, first=i*6+1, s=melaSwaras(first);
    h=`<div>${tag}<h3>${CHAKRAS[i][0]} chakra</h3><p class="sub">Chakra ${i+1} · melakartas ${first}–${first+5}</p></div>
    <p>Named after ${CHAKRAS[i][1]}, because it is chakra number ${i+1}. All six ragas inside share <span class="mono">${s.R} ${s.G} ${s.M}</span> and differ only in Dha and Ni.</p>
    ${stripHTML(["S",s.R,s.G,s.M,"P"])}<p class="striplegend">The fixed lower half shared by every raga in this chakra.</p>
    ${chipsFor(n.children)}`;
  } else if(n.type==="swaras"){
    h=`<div>${tag}<h3>Swarasthanas</h3><p class="sub">The 12 note positions in a sthayi</p></div>
    <p>Carnatic music names seven swaras: Sa Ri Ga Ma Pa Dha Ni. Sa and Pa are fixed. The other five each have variants, which gives 12 positions in the octave and 16 names, since four positions have two names.</p>
    ${stripHTML(["S","P"])}<p class="striplegend">Sa and Pa, the fixed notes. Hover a cell to see its names.</p>
    <p class="note">Two names for one pitch matter because a melakarta must contain one Ri and one Ga. In Kanakangi, position 2 counts as Ga (G1), while in Kharaharapriya the same pitch counts as Ri (R2).</p>`;
  } else if(n.type==="sthayi"){
    h=`<div>${tag}<h3>Sthayis</h3><p class="sub">The registers: one sthayi is one octave</p></div>
    <p>Every swara can be sung in more than one sthayi. A Sa in the middle register and the Sa above it are the same swara a sthayi apart. Notation shows the register with dots.</p>
    <div class="ladder">${STHAYIS.slice().reverse().map(s=>`<div class="rung${s.oct===0?" home":""}"><b>${s.name}</b><span>${["S","R","G","M","P","D","N"].map(t=>noteDisp({t,o:0},s.oct)).join(" ")}</span></div>`).join("")}</div>
    <p>${STHAYIS.map(s=>`<b>${s.name}</b>: ${s.desc}`).join(" ")}</p>
    <p class="note">Open any raga and switch between Mandra, Madhya and Tara in its player to hear and see its scale in each sthayi.</p>
    <div><button class="btn sm" data-sthayidemo data-scale data-label="▶ Hear Sa in three sthayis">▶ Hear Sa in three sthayis</button></div>`;
  } else if(n.type==="suladi"){
    const s=SULADI[n.si];
    h=`<div>${tag}<h3>${s.name} tala</h3><p class="sub">Anga pattern <span class="anga">${angaSym(s)}</span></p></div>
    <p>The five jatis give five talas in this family. ${JATIS[s.def].name} jati is the one used in the beginner alankaram.</p>
    <div class="chips">${JATIS.map((j,ji)=>`<button class="chip tala" data-go="t-${n.si}-${ji}">${s.names[ji]} · ${j.name} · ${angaCount(s,ji)}</button>`).join("")}</div>
    <div><button class="btn ghost" data-play="S${n.si}-${s.def}">Play ${s.names[s.def]} in the Tala Lab</button></div>`;
  } else if(n.type==="tala35"){
    const s=SULADI[n.si], j=JATIS[n.ji], tot=angaCount(s,n.ji);
    const parts=s.angas.split("").map(a=>a==="L"?`laghu of ${j.n}`:a==="D"?"drutam of 2":"anudrutam of 1");
    h=`<div>${tag}<h3>${s.names[n.ji]}</h3><p class="sub">${j.name} jati ${s.name} tala${s.names[n.ji]==="Adi"?" · the most used tala in Carnatic music":""}</p></div>
    <dl class="kv"><dt>Angas</dt><dd class="anga">${angaStr(s,n.ji)}</dd><dt>Beats</dt><dd class="mono">${tot} aksharas per cycle</dd><dt>Built from</dt><dd>${parts.join(", ")}</dd></dl>
    ${n.ji===s.def?'<p class="note">This is the jati used for the '+s.name+' tala alankaram, so most students have already sung in it.</p>':""}
    <div><button class="btn" data-play="S${n.si}-${n.ji}">▶ Play in the Tala Lab</button></div>`;
  } else if(n.type==="gati"){
    const g=GATIS[n.gi];
    h=`<div>${tag}<h3>${g.name} gati</h3><p class="sub">${g.n} pulses in every beat</p></div>
    <p class="mono fs120">${g.syl}</p>
    <p>Recite the syllables once per beat. In the Tala Lab, choosing this gati sounds ${g.n} soft ticks inside each beat.</p>
    <div><button class="btn ghost" data-gati="${n.gi}">Use ${g.name} gati in the Lab</button></div>`;
  } else if(n.type==="chapu"){
    const c=CHAPUS[n.ci];
    h=`<div>${tag}<h3>${c.name}</h3><p class="sub">${c.groups.reduce((a,b)=>a+b,0)} beats, grouped ${c.groups.join(" + ")}</p></div>
    <p class="mono fs115">${c.syl}</p><p>${c.use}</p>
    <div><button class="btn" data-play="C${n.ci}">▶ Play in the Tala Lab</button></div>`;
  } else {
    h=`<div>${tag}<h3>${esc(n.name)}</h3></div>${n.html||""}${n.children?`<div><p class="muted inside-label">Inside</p>${chipsFor(n.children)}</div>`:""}`;
  }
  panel.innerHTML=h; panel.scrollTop=0;
}
function currentScale(){
  if(!current) return null;
  if(current.type==="mela") return [melaAro(current.num),melaAva(current.num)];
  if(current.type==="janya") return [current.j.aro,current.j.ava];
  return null;
}
panel.addEventListener("click",e=>{
  const go=e.target.closest("[data-go]"), pl=e.target.closest("[data-play]"), ga=e.target.closest("[data-gati]"),
        sc=e.target.closest("[data-scale]"), sth=e.target.closest("[data-sthayi]");
  if(go){revealNode(BYID[go.dataset.go]);}
  else if(pl){loadTala(pl.dataset.play); document.getElementById("lab").scrollIntoView({behavior:reduced()?"auto":"smooth"});}
  else if(ga){setGati(+ga.dataset.gati); document.getElementById("lab").scrollIntoView({behavior:reduced()?"auto":"smooth"});}
  else if(sc&&sc.hasAttribute("data-sthayidemo")){sthayiDemo(sc);}
  else if(sc){const s=currentScale(); if(s) playNotes(scaleNotes(s[0],s[1],"sc"),sc);}
  else if(sth){stopScale(); PLAY.sthayi=+sth.dataset.sthayi; renderPanel(current);}
});
panel.addEventListener("change",e=>{
  if(e.target.matches("[data-shruti]")){PLAY.shruti=+e.target.value; stopScale();}
  if(e.target.matches("[data-drone]")){PLAY.drone=e.target.checked;}
});
function sthayiDemo(btn){
  const keep=PLAY.sthayi; PLAY.sthayi=0;
  playNotes([{semi:-12},{semi:0},{semi:12},{semi:0},{semi:-12}],btn,0.9);
  PLAY.sthayi=keep;
}
document.getElementById("sthayidemo").addEventListener("click",e=>{const b=e.currentTarget;b.dataset.label=b.dataset.label||b.textContent;b.setAttribute("data-scale","");sthayiDemo(b);});

/* ================= map ================= */
const RINGS=[0,100,190,275,355,430,505];
const svgEl=document.getElementById("map"), svg=d3.select(svgEl);
const gAll=svg.append("g"), gLinks=gAll.append("g"), gNodes=gAll.append("g");
const zoom=d3.zoom().scaleExtent([0.15,2.6]).on("zoom",e=>gAll.attr("transform",e.transform));
svg.call(zoom).on("dblclick.zoom",null);
let lastRoot=null;
function update(){
  const h=d3.hierarchy(root,d=>d._open?d.children:null);
  d3.tree().size([2*Math.PI,1]).separation((a,b)=>(a.parent===b.parent?1:1.5)/Math.max(a.depth,1))(h);
  h.each(d=>{d.r=RINGS[Math.min(d.depth,6)];const a=d.x-Math.PI/2;d.px=d.r*Math.cos(a);d.py=d.r*Math.sin(a);});
  lastRoot=h;
  gLinks.selectAll("path").data(h.links(),d=>d.target.data.id).join("path")
    .attr("class",d=>"link "+d.target.data.branch).attr("d",d3.linkRadial().angle(d=>d.x).radius(d=>d.r));
  const nodes=gNodes.selectAll("g.node").data(h.descendants(),d=>d.data.id).join(enter=>{
    const g=enter.append("g").attr("tabindex",0).attr("role","button"); g.append("circle"); g.append("text"); return g;});
  nodes.attr("transform",d=>`translate(${d.px},${d.py})`)
    .attr("class",d=>{const hasK=!!(d.data.children&&d.data.children.length);const st=!hasK?"leaf":(d.data._open?"open":"closed");
      return `node ${d.data.branch} ${st} d${Math.min(d.depth,3)}${d.data.id===selectedId?" sel":""}`;})
    .attr("aria-label",d=>(d.data.label||d.data.name)+(d.data.children?(d.data._open?", open":", closed"):""));
  nodes.select("circle").attr("r",d=>d.depth===0?16:d.depth===1?11:d.data.children?7:5);
  nodes.select("text").text(d=>d.data.label||d.data.name).each(function(d){
    const t=d3.select(this);
    if(d.depth<=1){t.attr("transform",null).attr("x",0).attr("y",d.depth===0?36:-20).attr("dy",null).attr("text-anchor","middle");}
    else{const deg=d.x*180/Math.PI-90, flip=d.x>=Math.PI;
      t.attr("transform",`rotate(${flip?deg+180:deg})`).attr("x",flip?-12:12).attr("y",0).attr("dy","0.33em").attr("text-anchor",flip?"end":"start");}
  });
  nodes.on("click",(e,d)=>{e.stopPropagation();clickNode(d.data);})
       .on("keydown",(e,d)=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();clickNode(d.data);}});
}
function closeSiblings(n){if(n.depth>=3&&n._parent){n._parent.children.forEach(s=>{if(s!==n)s._open=false;});}}
function clickNode(n){
  let opened=false;
  if(n.children&&n.depth>0){ if(!n._open){n._open=true;closeSiblings(n);opened=true;} else if(selectedId===n.id){n._open=false;} }
  stopScale(); selectedId=n.id; renderPanel(n); update();
  if(opened) fitTo(n.id,true);
}
function revealNode(n){
  let p=n._parent; const chain=[];
  while(p){chain.unshift(p);p=p._parent;}
  chain.forEach(c=>{if(!c._open){c._open=true;closeSiblings(c);}});
  if(n.children&&n.type==="mela"&&!n._open){n._open=true;closeSiblings(n);}
  stopScale(); selectedId=n.id; renderPanel(n); update(); fitTo(n.type==="mela"?n.id:(n._parent?n._parent.id:n.id),true);
}
function fitTo(id,subOnly){
  const pts=[];
  lastRoot.each(d=>{
    let inc=!subOnly; if(subOnly){let a=d;while(a){if(a.data.id===id){inc=true;break;}a=a.parent;}}
    if(!inc) return;
    pts.push([d.px,d.py]);
    if(d.depth>=2){const a=d.x-Math.PI/2, ext=(d.data.label||d.data.name).length*7+18, rr=d.r+ext*(d.children?0.5:1);
      pts.push([rr*Math.cos(a),rr*Math.sin(a)]);}
    else pts.push([d.px-70,d.py+44],[d.px+70,d.py-30]);
  });
  if(!pts.length) return;
  const xs=pts.map(p=>p[0]), ys=pts.map(p=>p[1]);
  const x0=Math.min(...xs)-24, x1=Math.max(...xs)+24, y0=Math.min(...ys)-60, y1=Math.max(...ys)+40;
  const w=svgEl.clientWidth||800, h=svgEl.clientHeight||600;
  const k=Math.max(0.15,Math.min(1.5,Math.min(w/(x1-x0),h/(y1-y0))));
  const t=d3.zoomIdentity.translate(w/2-k*(x0+x1)/2,h/2-k*(y0+y1)/2+14).scale(k);
  (reduced()?svg:svg.transition().duration(550)).call(zoom.transform,t);
}
document.getElementById("zin").onclick=()=>svg.transition().duration(250).call(zoom.scaleBy,1.3);
document.getElementById("zout").onclick=()=>svg.transition().duration(250).call(zoom.scaleBy,1/1.3);
document.getElementById("zfit").onclick=()=>fitTo("root",false);

/* search */
const searchable=Object.values(BYID).filter(n=>["mela","chakra","tala35","chapu","gati","suladi","sthayi"].includes(n.type)||(n.type==="janya"&&n.id.startsWith("mj-")));
document.getElementById("searchlist").innerHTML=searchable.map(n=>`<option value="${esc(n.label||n.name)}"></option>`).join("");
const searchEl=document.getElementById("search");
function doSearch(){
  const q=searchEl.value.trim().toLowerCase(); if(!q) return;
  const norm=s=>s.toLowerCase();
  const hit=searchable.find(n=>norm(n.label||n.name)===q)||searchable.find(n=>norm(n.name)===q)
    ||searchable.find(n=>n.type==="mela"&&ALIAS[n.num]&&norm(ALIAS[n.num])===q)
    ||searchable.find(n=>norm(n.name).startsWith(q))||searchable.find(n=>norm(n.label||n.name).includes(q));
  if(hit) revealNode(hit);
}
searchEl.addEventListener("change",doSearch);
searchEl.addEventListener("keydown",e=>{if(e.key==="Enter")doSearch();});

/* ================= all 72 table ================= */
(function(){
  const t=document.getElementById("all72");
  let rows="<thead><tr><th>#</th><th>Janaka raga</th><th>Swaras</th><th>Composition</th><th>Janya ragas and a composition in each</th></tr></thead><tbody>";
  CHAKRAS.forEach((c,ci)=>{
    rows+=`<tr class="chakrarow" data-chakra="${ci}"><td colspan="5">${c[0]} chakra<span>${ci*6+1}–${ci*6+6} · ${ci<6?"Shuddha Ma":"Prati Ma"}</span></td></tr>`;
    for(let k=ci*6+1;k<=ci*6+6;k++){
      const s=melaSwaras(k), comps=melaComps(k), js=JBYMELA[k]||[];
      const text=[MELAS[k-1],ALIAS[k]||"",...comps.flat(),...js.map(j=>j.name+" "+j.c.flat().join(" "))].join(" ").toLowerCase();
      rows+=`<tr data-k="${k}" data-c="${ci}" data-text="${esc(text)}"><td class="num">${k}</td>
      <td><button class="mname" data-open="mela-${k}">${MELAS[k-1]}</button>${ALIAS[k]?`<small>${ALIAS[k]}</small>`:""}</td>
      <td class="sw">${[s.R,s.G,s.M,s.D,s.N].join(" ")}</td>
      <td>${esc(comps[0][0])}<small>${esc(comps[0][1].replace(/ · .*/,""))}</small></td>
      <td><div class="jl">${js.map(j=>`<div><button class="mname lite" data-open="mj-${k}-${j.slug}">${esc(j.name)}</button> · ${esc(j.c[0][0])}<small>${esc(j.c[0][1])}</small></div>`).join("")}</div></td></tr>`;
    }
  });
  t.innerHTML=rows+"</tbody>";
  t.addEventListener("click",e=>{const b=e.target.closest("[data-open]");if(!b)return;
    revealNode(BYID[b.dataset.open]); document.getElementById("maph").scrollIntoView({behavior:reduced()?"auto":"smooth"});});
  const f=document.getElementById("filter72"), cnt=document.getElementById("count72");
  const apply=()=>{const q=f.value.trim().toLowerCase(); let n=0; const vis=new Set();
    t.querySelectorAll("tr[data-k]").forEach(r=>{const show=!q||r.dataset.text.includes(q); r.hidden=!show; if(show){n++;vis.add(r.dataset.c);}});
    t.querySelectorAll("tr.chakrarow").forEach(r=>{r.hidden=!vis.has(r.dataset.chakra);});
    cnt.textContent=q?`${n} of 72 shown`:`72 janaka ragas · ${JANYAS.length} janya ragas`;};
  f.addEventListener("input",apply); apply();
})();

/* ================= tala lab ================= */
let cur=null, beats=[], gati=GATIS[1], playing=false, timer=null, nextT=0, bIdx=0, sIdx=0, queue=[], shown=[0,0];
const dial=document.getElementById("dial"), syll=document.getElementById("syll");
function talaFromKey(key){
  if(key[0]==="S"){const [si,ji]=key.slice(1).split("-").map(Number), s=SULADI[si], j=JATIS[ji];
    return {key,name:s.names[ji],full:`${j.name} jati ${s.name} tala`,parts:s.angas.split("").map(a=>a==="L"?{t:"L",n:j.n}:a==="D"?{t:"D",n:2}:{t:"A",n:1}),anga:angaStr(s,ji),si,ji};}
  const c=CHAPUS[+key.slice(1)];
  return {key,name:c.name,full:`Grouped ${c.groups.join(" + ")}`,parts:c.groups.map(n=>({t:"G",n})),anga:c.syl,ci:+key.slice(1)};
}
function beatsOf(t){const out=[];t.parts.forEach((p,pi)=>{for(let i=0;i<p.n;i++){let k,lab;
  if(p.t==="L"){k=i===0?"clap":"finger";lab=i===0?"Clap":FINGERS[i-1];}
  else if(p.t==="D"){k=i===0?"clap":"wave";lab=i===0?"Clap":"Wave";}
  else if(p.t==="A"){k="clap";lab="Clap";}
  else {k=i===0?"clap":"count";lab=i===0?"Clap":"Count";}
  out.push({k,lab,pi,i,pt:p.t});}});return out;}
const ANGANAME={L:"Laghu",D:"Drutam",A:"Anudrutam",G:"Group"};
function drawDial(){
  const Nn=beats.length, c=170, R=118, step=2*Math.PI/Nn, br=Math.max(7,Math.min(15,(2*Math.PI*R/Nn)*0.3));
  let s="", start=0;
  cur.parts.forEach((p,pi)=>{
    const a0=start*step-step/2+0.03, a1=(start+p.n)*step-step/2-0.03;
    const path=d3.arc()({innerRadius:141,outerRadius:147,startAngle:a0,endAngle:a1});
    s+=`<path class="arc" data-pi="${pi}" transform="translate(${c},${c})" d="${path}"></path>`;
    const am=(a0+a1)/2, lx=c+161*Math.sin(am), ly=c-161*Math.cos(am);
    const sym=p.t==="L"?"I"+sub(p.n):p.t==="D"?"O":p.t==="A"?"U":String(p.n);
    s+=`<text class="angalab" x="${lx.toFixed(1)}" y="${ly.toFixed(1)}">${sym}</text>`;
    start+=p.n;
  });
  beats.forEach((b,i)=>{const a=i*step, x=c+R*Math.sin(a), y=c-R*Math.cos(a), tx=c+(R-br-12)*Math.sin(a), ty=c-(R-br-12)*Math.cos(a);
    s+=`<g class="beat ${b.k}" data-i="${i}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${br.toFixed(1)}"></circle><text x="${tx.toFixed(1)}" y="${(ty+3.5).toFixed(1)}">${i+1}</text></g>`;});
  s+=`<text class="dial-n" id="d-n" x="${c}" y="${c-38}"></text><text class="dial-g" id="d-g" x="${c}" y="${c+8}"></text><text class="dial-s" id="d-s" x="${c}" y="${c+34}"></text>`;
  dial.innerHTML=s;
  syll.innerHTML=gati.syl.split(" ").map((w,i)=>`<span data-s="${i}">${w}</span>`).join("");
  show(0,0);
}
function show(b,sIx){
  shown=[b,sIx];
  dial.querySelectorAll(".beat").forEach(el=>el.classList.toggle("on",+el.dataset.i===b));
  const bt=beats[b];
  dial.querySelectorAll(".arc").forEach(el=>el.classList.toggle("on",+el.dataset.pi===bt.pi));
  document.getElementById("d-g").textContent=bt.lab;
  document.getElementById("d-s").textContent=`beat ${b+1} of ${beats.length} · ${ANGANAME[bt.pt]}`;
  document.getElementById("d-n").textContent=b===0?"Samam":"";
  syll.querySelectorAll("span").forEach(el=>el.classList.toggle("on",+el.dataset.s===sIx));
}
dial.addEventListener("click",e=>{const g=e.target.closest(".beat");if(g&&!playing)show(+g.dataset.i,0);});
function loadTala(key){
  cur=talaFromKey(key); beats=beatsOf(cur);
  document.getElementById("np-name").textContent=cur.name;
  document.getElementById("np-sub").textContent=`${cur.full} · ${beats.length} beats per cycle`;
  document.getElementById("np-anga").textContent=cur.anga;
  document.getElementById("talasel").value=key;
  document.querySelectorAll(".cellbtn").forEach(b=>b.classList.toggle("sel",b.dataset.play===key));
  document.querySelectorAll("#chapucards .card").forEach(b=>b.classList.toggle("sel",b.dataset.play===key));
  let note;
  if(cur.si!==undefined){const s=SULADI[cur.si];
    note=cur.name==="Adi"?"Adi is Chatusra Triputa: a four-beat laghu and two drutams. Most kritis and varnams are set in it."
      :cur.ji===s.def?`${cur.name} is the tala used for the ${s.name} tala alankaram.`
      :`Same ${s.name} pattern as the alankaram, with the laghu stretched or shrunk to ${JATIS[cur.ji].n} beats.`;}
  else note="Chapu talas are counted by group. Only the start of each group is marked, so the count is felt more than shown.";
  document.getElementById("labnote").textContent=note;
  bIdx=0;sIdx=0;queue=[]; if(actx) nextT=actx.currentTime+0.06;
  drawDial();
}
function setGati(gi){gati=GATIS[gi];
  document.querySelectorAll("#gatiseg button").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.g===gi?"true":"false"));
  document.querySelectorAll("#gaticards .card").forEach(b=>b.classList.toggle("sel",+b.dataset.g===gi));
  sIdx=0;queue=[]; if(actx) nextT=actx.currentTime+0.06;
  syll.innerHTML=gati.syl.split(" ").map((w,i)=>`<span data-s="${i}">${w}</span>`).join(""); show(shown[0],0);}
function noise(t,freq,q,type,peak,dur,att){
  const src=actx.createBufferSource();src.buffer=noiseBuf;const f=actx.createBiquadFilter();f.type=type;f.frequency.value=freq;f.Q.value=q;
  const g=actx.createGain();g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(peak,t+(att||0.003));g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  src.connect(f).connect(g).connect(actx.destination);src.start(t);src.stop(t+dur+0.02);
}
function tone(t,freq,peak,dur,type){
  const o=actx.createOscillator();o.type=type||"sine";o.frequency.value=freq;const g=actx.createGain();
  g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(peak,t+0.004);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  o.connect(g).connect(actx.destination);o.start(t);o.stop(t+dur+0.02);
}
function soundBeat(b,t,isSam){
  if(!document.getElementById("sound").checked) return;
  if(b.k==="clap"){noise(t,1300,0.9,"bandpass",0.9,0.13);noise(t+0.008,2200,1.2,"bandpass",0.4,0.08);}
  else if(b.k==="finger"){tone(t,1600,0.22,0.05);}
  else if(b.k==="wave"){noise(t,700,0.7,"lowpass",0.3,0.18,0.03);}
  else {tone(t,1300,0.1,0.04);}
  if(isSam){tone(t,1046,0.18,0.9);tone(t,1568,0.08,0.7);tone(t,2637,0.04,0.5);}
}
function soundSub(t){if(document.getElementById("sound").checked) tone(t,2600,0.05,0.025);}
function sched(){
  const spb=60/+document.getElementById("tempo").value, sp=spb/gati.n;
  while(nextT<actx.currentTime+0.12){
    if(sIdx>=gati.n){sIdx=0;bIdx=(bIdx+1)%beats.length;}
    if(sIdx===0) soundBeat(beats[bIdx],nextT,bIdx===0); else soundSub(nextT);
    queue.push({t:nextT,b:bIdx,s:sIdx}); nextT+=sp; sIdx++;
  }
}
function frame(){
  if(!playing) return;
  const now=actx.currentTime; let last=null;
  while(queue.length&&queue[0].t<=now) last=queue.shift();
  if(last&&last.b<beats.length) show(last.b,last.s);
  requestAnimationFrame(frame);
}
const playBtn=document.getElementById("play");
playBtn.addEventListener("click",()=>{
  if(playing){playing=false;clearInterval(timer);playBtn.textContent="▶ Play";queue=[];return;}
  if(!ensureAudio()){document.getElementById("labnote").textContent="This browser has no Web Audio, so the Lab can't play sound here. You can still step through beats by tapping them on the dial.";return;}
  playing=true;playBtn.textContent="■ Stop";bIdx=0;sIdx=0;queue=[];nextT=actx.currentTime+0.08;
  timer=setInterval(sched,25);sched();requestAnimationFrame(frame);
});
const tempo=document.getElementById("tempo"), tempoOut=document.getElementById("tempoout");
tempo.addEventListener("input",()=>{tempoOut.textContent=tempo.value+" beats/min";});
document.getElementById("talasel").addEventListener("change",e=>loadTala(e.target.value));

/* ================= static builders ================= */
(function(){
  const sel=document.getElementById("talasel");
  sel.innerHTML=SULADI.map((s,si)=>`<optgroup label="${s.name}">`+JATIS.map((j,ji)=>`<option value="S${si}-${ji}">${s.names[ji]} · ${j.name} ${s.name} · ${angaCount(s,ji)}</option>`).join("")+"</optgroup>").join("")
    +'<optgroup label="Chapu">'+CHAPUS.map((c,ci)=>`<option value="C${ci}">${c.name} · ${c.groups.reduce((a,b)=>a+b,0)}</option>`).join("")+"</optgroup>";
  document.getElementById("gatiseg").innerHTML=GATIS.map((g,gi)=>`<button data-g="${gi}" aria-pressed="${gi===1}">${g.name} ${g.n}</button>`).join("");
  document.getElementById("gatiseg").addEventListener("click",e=>{const b=e.target.closest("button");if(b)setGati(+b.dataset.g);});
  const t=document.getElementById("grid35");
  t.innerHTML="<thead><tr><th>Family</th>"+JATIS.map(j=>`<th>${j.name}<span>laghu = ${j.n}</span></th>`).join("")+"</tr></thead><tbody>"
    +SULADI.map((s,si)=>`<tr><th scope="row"><b>${s.name}</b><span class="anga fs85">${angaSym(s)}</span></th>`
      +JATIS.map((j,ji)=>`<td><button class="cellbtn" data-play="S${si}-${ji}" title="${j.name} jati ${s.name} tala: ${angaStr(s,ji)}"><span>${s.names[ji]}${s.def===ji?'<i class="def" aria-label="alankaram jati"></i>':""}</span><span class="cnt">${angaCount(s,ji)}</span></button></td>`).join("")+"</tr>").join("")+"</tbody>";
  t.addEventListener("click",e=>{const b=e.target.closest(".cellbtn");if(b)loadTala(b.dataset.play);});
  const gc=document.getElementById("gaticards");
  gc.innerHTML=GATIS.map((g,gi)=>`<button class="card${gi===1?" sel":""}" data-g="${gi}"><h4>${g.name} · ${g.n}</h4><span class="mono">${g.syl}</span><p class="muted">${g.n} pulses per beat${gi===1?". The default feel of most kritis.":gi===0?". Gives a lilting, triplet feel.":"."}</p></button>`).join("");
  gc.addEventListener("click",e=>{const b=e.target.closest(".card");if(b)setGati(+b.dataset.g);});
  const cc=document.getElementById("chapucards");
  cc.innerHTML=CHAPUS.map((c,ci)=>`<button class="card" data-play="C${ci}"><h4>${c.name}</h4><span class="mono">${c.syl}</span><p>${c.use}</p></button>`).join("");
  cc.addEventListener("click",e=>{const b=e.target.closest(".card");if(b)loadTala(b.dataset.play);});
  document.getElementById("swaratable").innerHTML=SWNAMES.map((s,i)=>`<tr><td class="mono">${i}</td><td>${s[0]}</td><td class="mono">${s[1]}</td></tr>`).join("");
  document.getElementById("pairtable").innerHTML=PAIRS.map((p,i)=>`<tr><td class="mono">${i+1}</td><td class="mono">R${p[0]} G${p[1]}</td><td class="mono">D${p[0]} N${p[1]}</td></tr>`).join("");
  document.getElementById("ladder").innerHTML=STHAYIS.slice().reverse().map(s=>`<div class="rung${s.oct===0?" home":""}"><b>${s.name}</b><span>${["S","R","G","M","P","D","N"].map(t=>noteDisp({t,o:0},s.oct)).join(" ")}</span></div>`).join("");
})();

/* ================= boot ================= */
window.__VIPANCHI={JANYAS,JBYMELA,melaScale,classify,KOTI};
update(); renderPanel(BYID[selectedId]); loadTala("S4-1");
requestAnimationFrame(()=>fitTo("root",false));
window.addEventListener("resize",()=>{clearTimeout(window.__rz);window.__rz=setTimeout(()=>fitTo("root",false),200);});
})();
