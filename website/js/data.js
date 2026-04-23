/* ============================================
   TRAVEL LAB - Country Data
   Sample data for prototype demonstration.
   Each data point includes source attribution.
   ============================================ */

const PASSPORT_OPTIONS = [
  { code: "NL", name: "Netherlands", flag: "\ud83c\uddf3\ud83c\uddf1" },
  { code: "GB", name: "United Kingdom", flag: "\ud83c\uddec\ud83c\udde7" },
  { code: "PL", name: "Poland", flag: "\ud83c\uddf5\ud83c\uddf1" },
  { code: "US", name: "United States", flag: "\ud83c\uddfa\ud83c\uddf8" },
  { code: "JO", name: "Jordan", flag: "\ud83c\uddef\ud83c\uddf4" },
  { code: "PH", name: "Philippines", flag: "\ud83c\uddf5\ud83c\udded" },
  { code: "UA", name: "Ukraine",     flag: "\ud83c\uddfa\ud83c\udde6" }
];

const TRAVEL_DATA = {

  japan: {
    id: "japan",
    name: "Japan",
    flag: "\ud83c\uddef\ud83c\uddf5",
    region: "East Asia",
    capital: "Tokyo",
    currency: "Japanese Yen (\u00a5)",
    language: "Japanese",
    lat: 36.2,
    lng: 138.2,
    summary: "Japan blends ancient traditions with cutting-edge modernity. From serene temples in Kyoto to the neon-lit streets of Tokyo, it offers an experience unlike anywhere else. Thorough preparation will help you navigate its unique customs and travel systems with ease.",

    images: [
      { url: "/images/gallery-kyoto.jpg", caption: "Yasaka Pagoda at dusk, Kyoto" },
      { url: "/images/gallery-cherry.jpg", caption: "Cherry blossoms along the railway in spring" }
    ],

    visa: {
      "NL": { type: "Visa-Free", duration: "90 days", notes: "Valid passport required. No work permitted on tourist entry." },
      "GB": { type: "Visa-Free", duration: "90 days", notes: "Valid passport required. Extension possible at immigration offices." },
      "PL": { type: "Visa-Free", duration: "90 days", notes: "Valid passport required. Must have return or onward ticket." },
      "US": { type: "Visa-Free", duration: "90 days", notes: "Valid passport required. No work permitted on tourist entry." },
      "JO": { type: "Visa Required", duration: "Varies", notes: "Must apply at the Japanese embassy in Amman. Processing takes approximately 5 business days. Invitation letter may be required." },
      "PH": { type: "Visa Required", duration: "15 days (short-term)", notes: "Apply at the Japanese embassy. Requires confirmed itinerary, hotel bookings, and proof of financial means." },
      "UA": { type: "Visa-Free", duration: "90 days", notes: "Ukrainian passport holders may enter Japan visa-free for tourism. Confirm with the Japanese embassy before travel as conditions can change." },
      source: { name: "Ministry of Foreign Affairs of Japan", url: "https://www.mofa.go.jp/j_info/visit/visa/index.html", verified: "2026-04-08" }
    },

    health: [
      { name: "Routine Vaccinations", status: "Recommended", description: "Ensure routine vaccinations (MMR, DTP, Polio) are up to date before travel.", cost: null, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "WHO International Travel and Health", url: "https://www.who.int/travel-advice", verified: "2026-04-05" } },
      { name: "Hepatitis A", status: "Recommended", description: "Spread through contaminated food and water. Two doses provide long-term protection.", cost: 60, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "RIVM (Dutch National Institute for Public Health)", url: "https://www.rivm.nl/vaccinaties", verified: "2026-04-05" } },
      { name: "Japanese Encephalitis", status: "Recommended", description: "Risk exists in rural areas, especially during summer months. Consider if staying for extended periods or visiting rural regions.", cost: 95, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "GGD Travel Health Advisory", url: "https://www.ggdreisvaccinaties.nl", verified: "2026-04-05" } },
      { name: "Hepatitis B", status: "Recommended", description: "Recommended for longer stays or if you expect medical treatment during your trip.", cost: 45, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "CDC Travelers' Health", url: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/japan", verified: "2026-04-05" } }
    ],

    safety: {
      level: 1,
      color: "green",
      description: "Japan is considered one of the safest countries in the world for travellers. Crime rates are extremely low, and violent crime against tourists is rare. Natural disasters such as earthquakes and typhoons do occur, so familiarize yourself with local emergency procedures.",
      insurance_warning: false,
      insurance_note: "",
      source: { name: "Netherlands Ministry of Foreign Affairs", url: "https://www.nederlandwereldwijd.nl/reisadvies/japan", verified: "2026-04-08" }
    },

    culture: [
      { title: "Bowing", description: "Bowing is the standard greeting. A slight bow of the head is sufficient for tourists. Handshakes are also accepted in business settings.", source: { name: "Japan National Tourism Organization", url: "https://www.japan.travel/en/plan/etiquette/", verified: "2026-04-06" } },
      { title: "Shoes Off Indoors", description: "Always remove your shoes when entering homes, temples, and many traditional restaurants. Slippers are often provided at the entrance.", source: { name: "Japan National Tourism Organization", url: "https://www.japan.travel/en/plan/etiquette/", verified: "2026-04-06" } },
      { title: "Quiet on Public Transport", description: "Talking loudly or making phone calls on trains and buses is considered rude. Set your phone to silent mode and keep conversations quiet.", source: { name: "Japan National Tourism Organization", url: "https://www.japan.travel/en/plan/etiquette/", verified: "2026-04-06" } },
      { title: "Tipping", description: "Tipping is not customary in Japan and can sometimes be considered offensive. Excellent service is the cultural norm, not something that requires an extra payment.", source: { name: "Japan National Tourism Organization", url: "https://www.japan.travel/en/plan/etiquette/", verified: "2026-04-06" } },
      { title: "Cash Culture", description: "Despite being technologically advanced, Japan is still heavily cash-based. Many smaller restaurants, shrines, and local shops do not accept credit cards.", source: { name: "Japan Guide", url: "https://www.japan-guide.com/e/e2196.html", verified: "2026-04-06" } }
    ],

    booking: [
      { name: "JR Pass (Japan Rail Pass)", description: "Must be purchased before arriving in Japan. Offers unlimited travel on most JR trains including the Shinkansen (bullet train). Available in 7, 14, or 21-day options.", lead_time: "Purchase before departure", booking_url: "https://www.japanrailpass.net/", source: { name: "Japan Rail Pass Official", url: "https://www.japanrailpass.net/", verified: "2026-04-06" } },
      { name: "Fushimi Inari Shrine", description: "While the shrine itself is free and open 24/7, guided tours and special access areas may require advance booking during peak seasons.", lead_time: "1 week recommended", booking_url: "https://inari.jp/en/", source: { name: "Fushimi Inari Taisha Official", url: "https://inari.jp/en/", verified: "2026-04-06" } },
      { name: "teamLab Exhibitions", description: "Extremely popular digital art exhibitions in Tokyo. Tickets sell out days or weeks in advance, especially during holidays.", lead_time: "2 to 4 weeks", booking_url: "https://www.teamlab.art/e/borderless-azabudai/", source: { name: "teamLab Official", url: "https://www.teamlab.art/", verified: "2026-04-06" } },
      { name: "Sumo Tournament Tickets", description: "Held only during specific tournament months (January, May, September in Tokyo). Arena seats sell out on the first day of sales.", lead_time: "1 month or more", booking_url: "https://www.sumo.or.jp/en/", source: { name: "Japan Sumo Association", url: "https://www.sumo.or.jp/en/", verified: "2026-04-06" } }
    ],

    laws: [
      { type: "danger", title: "Zero Tolerance for Drugs", description: "Japan has some of the world's strictest drug laws. Possession of even small amounts can result in arrest, deportation, and a permanent entry ban. Some prescription drugs legal in your home country (including certain ADHD medications and cold remedies containing pseudoephedrine) are illegal in Japan. Carry a doctor's certificate and customs declaration for any prescription drugs.", source: { name: "Japan Customs", url: "https://www.customs.go.jp/english/", verified: "2026-04-08" } },
      { type: "warning", title: "Smoking Restrictions", description: "Smoking is banned in most outdoor public areas, pedestrian zones, and around train stations. Many cities have designated smoking areas only. Fines for smoking in prohibited zones can be significant.", source: { name: "Japan Tourism Agency", url: "https://www.mlit.go.jp/kankocho/en/", verified: "2026-04-08" } },
      { type: "info", title: "Photography at Temples and Shrines", description: "Many religious sites prohibit interior photography. Always follow posted signs. Some museums and galleries also prohibit photography. Photographing people without consent is considered a serious privacy violation.", source: { name: "Japan National Tourism Organization", url: "https://www.japan.travel/en/", verified: "2026-04-08" } }
    ],

    practical: {
      plug_type: { value: "Type A (two flat pins, same as US). Voltage is 100V.", source: { name: "World Standards", url: "https://www.worldstandards.eu/electricity/plugs-and-sockets/", verified: "2026-04-06" } },
      esim: { value: "eSIMs widely available from providers like Ubigi, Airalo, and IIJmio. Pocket WiFi rental is also very popular and available at airports.", source: { name: "Japan National Tourism Organization", url: "https://www.japan.travel/en/plan/internet/", verified: "2026-04-06" } },
      transport: { value: "Get a Suica or Pasmo IC card for seamless access to trains, buses, and even convenience store payments. Available at airport stations and major train stations.", source: { name: "Japan National Tourism Organization", url: "https://www.japan.travel/en/plan/getting-around/", verified: "2026-04-06" } },
      water_quality: { value: "Tap water is safe to drink throughout Japan and is held to a very high standard. It is one of the few countries in Asia where you can drink freely from the tap.", source: { name: "Japan National Tourism Organization", url: "https://www.japan.travel/en/", verified: "2026-04-06" } }
    }
  },

  thailand: {
    id: "thailand",
    name: "Thailand",
    flag: "\ud83c\uddf9\ud83c\udded",
    region: "Southeast Asia",
    capital: "Bangkok",
    currency: "Thai Baht (\u0e3f)",
    language: "Thai",
    lat: 15.9,
    lng: 100.9,
    summary: "Thailand is a favourite destination for travellers of all types, offering tropical beaches, ornate temples, vibrant street food, and warm hospitality. Whether you are visiting Bangkok's bustling markets or the islands of the south, preparation is key to a smooth trip.",

    images: [
      { url: "/images/gallery-thailand.jpg", caption: "Tropical beaches of southern Thailand" },
      { url: "/images/gallery-beach.jpg", caption: "Crystal-clear waters of the Gulf of Thailand" }
    ],

    visa: {
      "NL": { type: "Visa-Free", duration: "90 days", notes: "Dutch passport holders receive 90 days visa-free for tourism as of 2024." },
      "GB": { type: "Visa-Free", duration: "60 days", notes: "UK passport holders receive 60 days visa-free. Extendable by 30 days at immigration." },
      "PL": { type: "Visa-Free", duration: "90 days", notes: "Polish passport holders receive 90 days visa-free for tourism." },
      "US": { type: "Visa-Free", duration: "60 days", notes: "US passport holders receive 60 days visa-free. Extendable by 30 days at immigration." },
      "JO": { type: "Visa on Arrival", duration: "15 days", notes: "Available at international airports. Fee of 2,000 THB. Must have proof of accommodation and return flight." },
      "PH": { type: "Visa-Free", duration: "30 days", notes: "Philippine passport holders receive 30 days visa-free for tourism." },
      "UA": { type: "Visa-Free", duration: "30 days", notes: "Ukrainian passport holders receive 30 days visa-free. Extendable at Thai immigration offices." },
      source: { name: "Thai Ministry of Foreign Affairs", url: "https://www.mfa.go.th/en/page/visa-and-work-permit", verified: "2026-04-07" }
    },

    health: [
      { name: "Hepatitis A", status: "Recommended", description: "Common risk in Southeast Asia through contaminated food and water.", cost: 60, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "GGD Travel Health Advisory", url: "https://www.ggdreisvaccinaties.nl", verified: "2026-04-05" } },
      { name: "Typhoid", status: "Recommended", description: "Recommended for travellers who plan to eat street food or visit rural areas. Especially important for food industry workers.", cost: 80, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "WHO International Travel and Health", url: "https://www.who.int/travel-advice", verified: "2026-04-05" } },
      { name: "Hepatitis B", status: "Recommended", description: "Recommended for longer stays, frequent travel, or if medical procedures are anticipated.", cost: 45, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "RIVM", url: "https://www.rivm.nl/vaccinaties", verified: "2026-04-05" } },
      { name: "Rabies", status: "Recommended", description: "Consider if you plan to visit rural areas, go trekking, or expect contact with animals. Post-exposure treatment is available but may be difficult to access in remote areas.", cost: 75, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "CDC Travelers' Health", url: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/thailand", verified: "2026-04-05" } },
      { name: "Malaria Prophylaxis", status: "Recommended", description: "Risk exists in some border areas and forests, but not in major tourist areas like Bangkok, Chiang Mai city, or the main islands.", cost: 40, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "GGD Travel Health Advisory", url: "https://www.ggdreisvaccinaties.nl", verified: "2026-04-05" } }
    ],

    safety: {
      level: 2,
      color: "yellow",
      description: "Thailand is generally safe for tourists. Petty crime such as bag snatching and scams targeting tourists can occur in busy areas. Be cautious with tuk-tuk and gem shop scams. Avoid protest areas if political demonstrations occur. The southern border provinces have ongoing security concerns and should be avoided.",
      insurance_warning: true,
      insurance_note: "Some travel insurance policies exclude coverage in the three southernmost provinces (Yala, Pattani, Narathiwat) due to ongoing security concerns. Check your policy carefully if travelling near the Malaysian border.",
      source: { name: "UK Foreign, Commonwealth & Development Office", url: "https://www.gov.uk/foreign-travel-advice/thailand", verified: "2026-04-07" }
    },

    culture: [
      { title: "Respect for the Monarchy", description: "The Thai royal family is deeply revered. Lese-majesty laws are strictly enforced. Never make disrespectful comments about the King or royal family, even in jest.", source: { name: "UK FCDO Travel Advice", url: "https://www.gov.uk/foreign-travel-advice/thailand/local-laws-and-customs", verified: "2026-04-06" } },
      { title: "Temple Etiquette", description: "Cover your shoulders and knees when visiting temples. Remove shoes before entering. Women should never touch a monk or hand objects directly to them.", source: { name: "Tourism Authority of Thailand", url: "https://www.tourismthailand.org/", verified: "2026-04-06" } },
      { title: "The Wai Greeting", description: "The traditional Thai greeting is the 'wai,' performed by pressing your palms together near your chest and bowing slightly. It is polite to return a wai when greeted this way.", source: { name: "Tourism Authority of Thailand", url: "https://www.tourismthailand.org/", verified: "2026-04-06" } },
      { title: "Feet and Head", description: "Feet are considered the lowest and least clean part of the body. Never point your feet at people or Buddha images. The head is the most sacred part, so avoid touching anyone's head.", source: { name: "Tourism Authority of Thailand", url: "https://www.tourismthailand.org/", verified: "2026-04-06" } }
    ],

    booking: [
      { name: "Grand Palace, Bangkok", description: "One of the most visited attractions in Thailand. While walk-up tickets are available, the queues can be extremely long during peak season.", lead_time: "Same day, arrive early", booking_url: "https://www.royalgrandpalace.th/en/home", source: { name: "Grand Palace Official", url: "https://www.royalgrandpalace.th/en/home", verified: "2026-04-06" } },
      { name: "Full Moon Party (Koh Phangan)", description: "Famous monthly beach party. Accommodation on the island books out weeks in advance around the full moon date.", lead_time: "2 to 4 weeks for accommodation", booking_url: null, source: { name: "Tourism Authority of Thailand", url: "https://www.tourismthailand.org/", verified: "2026-04-06" } },
      { name: "Thai Cooking Classes", description: "Popular cooking classes in Chiang Mai and Bangkok fill up quickly during high season (November to February).", lead_time: "1 week", booking_url: null, source: { name: "Tourism Authority of Thailand", url: "https://www.tourismthailand.org/", verified: "2026-04-06" } }
    ],

    laws: [
      { type: "danger", title: "Lese-Majesty (Royal Defamation)", description: "Insulting, defaming, or threatening the Thai royal family is a criminal offence under Section 112 of the Thai Criminal Code, punishable by up to 15 years in prison per count. This applies to social media posts and even private jokes. Do not comment negatively about the monarchy in any setting.", source: { name: "UK FCDO", url: "https://www.gov.uk/foreign-travel-advice/thailand/local-laws-and-customs", verified: "2026-04-08" } },
      { type: "danger", title: "E-Cigarettes and Vaping Are Illegal", description: "E-cigarettes, vaporisers, and refills are banned in Thailand. Possession can result in a fine of up to THB 30,000 and/or up to 10 years imprisonment. Do not bring vaping devices into the country, even for personal use.", source: { name: "UK FCDO", url: "https://www.gov.uk/foreign-travel-advice/thailand/local-laws-and-customs", verified: "2026-04-08" } },
      { type: "danger", title: "Strict Drug Laws", description: "Drug trafficking can carry the death penalty in Thailand. Possession of even small amounts of illegal substances for personal use can result in years of imprisonment. Substances that are legal or decriminalised in your home country are not exempt.", source: { name: "UK FCDO", url: "https://www.gov.uk/foreign-travel-advice/thailand/local-laws-and-customs", verified: "2026-04-08" } },
      { type: "warning", title: "Taxi and Tuk-Tuk Scams", description: "Taxi drivers who refuse to use the meter and tuk-tuk drivers offering 'free tours' are common tourist scams. Always insist on the meter in taxis, or use Grab for reliable, fare-transparent travel. Gem shop and 'special deal' tours are also well-known scams.", source: { name: "Tourism Authority of Thailand", url: "https://www.tourismthailand.org/", verified: "2026-04-08" } }
    ],

    practical: {
      plug_type: { value: "Type A, B, and C plugs are used. Voltage is 220V. A universal adapter is recommended.", source: { name: "World Standards", url: "https://www.worldstandards.eu/electricity/plugs-and-sockets/", verified: "2026-04-06" } },
      esim: { value: "eSIMs available from Airalo and local providers. Physical SIM cards from AIS, DTAC, or TrueMove are cheap and sold at airports and 7-Elevens everywhere.", source: { name: "Tourism Authority of Thailand", url: "https://www.tourismthailand.org/", verified: "2026-04-06" } },
      transport: { value: "Bangkok: use the BTS Skytrain and MRT metro. Get a Rabbit card for cashless travel. Grab (ride-hailing app) is widely used and more reliable than street taxis for fair pricing.", source: { name: "Tourism Authority of Thailand", url: "https://www.tourismthailand.org/", verified: "2026-04-06" } },
      water_quality: { value: "Tap water is not safe to drink in Thailand. Always use bottled or filtered water for drinking and brushing teeth. Bottled water is cheap and widely available. Ice in reputable restaurants is generally made from filtered water.", source: { name: "WHO International Travel and Health", url: "https://www.who.int/travel-advice", verified: "2026-04-06" } }
    }
  },

  philippines: {
    id: "philippines",
    name: "Philippines",
    flag: "\ud83c\uddf5\ud83c\udded",
    region: "Southeast Asia",
    capital: "Manila",
    currency: "Philippine Peso (\u20b1)",
    language: "Filipino, English",
    lat: 12.9,
    lng: 121.8,
    summary: "The Philippines is an archipelago of over 7,000 islands offering stunning beaches, world-class diving, and incredibly warm hospitality. English is widely spoken, making it one of the most accessible destinations in Southeast Asia.",

    images: [
      { url: "/images/gallery-philippines.jpg", caption: "Pristine white sand beach, Palawan" },
      { url: "/images/gallery-beach.jpg", caption: "Turquoise waters off the Philippine coast" }
    ],

    visa: {
      "NL": { type: "Visa-Free", duration: "30 days", notes: "Extendable up to 36 months at Bureau of Immigration offices." },
      "GB": { type: "Visa-Free", duration: "30 days", notes: "Extendable at Bureau of Immigration. Return or onward ticket required." },
      "PL": { type: "Visa-Free", duration: "30 days", notes: "Extendable at Bureau of Immigration offices in major cities." },
      "US": { type: "Visa-Free", duration: "30 days", notes: "Extendable up to 36 months. Balikbayan privilege available for former Filipino citizens." },
      "JO": { type: "Visa Required", duration: "30 days", notes: "Must apply at the Philippine embassy. Requires invitation letter or hotel bookings, proof of funds, and return ticket." },
      "PH": { type: "No visa needed", duration: "Citizen", notes: "Philippine citizens do not need a visa for their own country." },
      "UA": { type: "Visa-Free", duration: "30 days", notes: "Ukrainian passport holders receive 30 days visa-free for tourism. Extendable at Bureau of Immigration offices." },
      source: { name: "Philippine Bureau of Immigration", url: "https://immigration.gov.ph/", verified: "2026-04-07" }
    },

    health: [
      { name: "Hepatitis A", status: "Recommended", description: "Common risk through food and water contamination, especially outside major cities.", cost: 60, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "WHO", url: "https://www.who.int/travel-advice", verified: "2026-04-05" } },
      { name: "Typhoid", status: "Recommended", description: "Risk is present throughout the country, particularly with street food and in rural areas.", cost: 80, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "CDC Travelers' Health", url: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/philippines", verified: "2026-04-05" } },
      { name: "Rabies", status: "Recommended", description: "Stray dogs are common throughout the Philippines. Pre-exposure vaccination is recommended for extended stays or rural travel.", cost: 75, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "GGD Travel Health Advisory", url: "https://www.ggdreisvaccinaties.nl", verified: "2026-04-05" } },
      { name: "Yellow Fever", status: "Required", description: "Required only if arriving from a country with risk of yellow fever transmission. Certificate must be presented at entry.", cost: 50, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "Philippine Bureau of Quarantine", url: "https://boq.gov.ph/", verified: "2026-04-05" } }
    ],

    safety: {
      level: 2,
      color: "yellow",
      description: "Most tourist areas are safe, including Manila's main districts, Cebu, Palawan, and Boracay. Exercise increased caution due to petty crime in urban areas. Avoid travel to western Mindanao and the Sulu Archipelago due to terrorism and kidnapping risks.",
      insurance_warning: true,
      insurance_note: "Most travel insurance policies will not cover incidents in the Sulu Archipelago, western Mindanao, and other areas under martial law or with active travel warnings. Verify your policy covers your specific destinations.",
      source: { name: "Netherlands Ministry of Foreign Affairs", url: "https://www.nederlandwereldwijd.nl/reisadvies/filipijnen", verified: "2026-04-07" }
    },

    culture: [
      { title: "Hospitality (Mano Po)", description: "Filipinos are known for their warmth. The 'mano po' gesture, where you take an elder's hand and press it to your forehead, is a sign of deep respect.", source: { name: "Philippine Department of Tourism", url: "https://www.tourism.gov.ph/", verified: "2026-04-06" } },
      { title: "Filipino Time", description: "Social events often start later than scheduled. However, for business meetings and official appointments, punctuality is expected.", source: { name: "Philippine Department of Tourism", url: "https://www.tourism.gov.ph/", verified: "2026-04-06" } },
      { title: "Pointing with Lips", description: "Filipinos often point to things using their lips rather than their fingers. This is a common gesture you will encounter daily.", source: { name: "Philippine Department of Tourism", url: "https://www.tourism.gov.ph/", verified: "2026-04-06" } },
      { title: "Tipping", description: "Tipping is appreciated but not mandatory. 10% is standard in restaurants if no service charge is included. Rounding up taxi fares is common.", source: { name: "Philippine Department of Tourism", url: "https://www.tourism.gov.ph/", verified: "2026-04-06" } }
    ],

    booking: [
      { name: "El Nido Island Hopping Tours", description: "The famous Tours A, B, C, and D in El Nido, Palawan are extremely popular. During peak season (December to May), tours sell out days in advance.", lead_time: "3 to 7 days", booking_url: null, source: { name: "El Nido Tourism", url: "https://www.tourism.gov.ph/", verified: "2026-04-06" } },
      { name: "Oslob Whale Shark Watching", description: "Daily visitor numbers are limited. During peak season, arrive very early or book through an accredited operator the day before.", lead_time: "1 day", booking_url: null, source: { name: "Philippine Department of Tourism", url: "https://www.tourism.gov.ph/", verified: "2026-04-06" } },
      { name: "Domestic Flights", description: "Inter-island flights with Cebu Pacific or Philippine Airlines can be very cheap if booked early, but prices surge close to travel dates. Delays and cancellations during typhoon season (June to November) are common.", lead_time: "2 to 4 weeks for best prices", booking_url: null, source: { name: "Cebu Pacific", url: "https://www.cebupacificair.com/", verified: "2026-04-06" } }
    ],

    laws: [
      { type: "danger", title: "Strict Drug Laws", description: "The Philippines has among the world's toughest drug enforcement. Possession of even small amounts of illegal drugs can result in lengthy imprisonment regardless of nationality. Do not purchase or accept drugs under any circumstances.", source: { name: "UK FCDO", url: "https://www.gov.uk/foreign-travel-advice/philippines/local-laws-and-customs", verified: "2026-04-08" } },
      { type: "warning", title: "No Smoking in Public", description: "Smoking is prohibited in all public places including streets, parks, beaches, and restaurants across most cities (enforced Metro-wide). Fines apply. Only smoke in designated smoking areas.", source: { name: "Philippine Department of Health", url: "https://www.doh.gov.ph/", verified: "2026-04-08" } },
      { type: "info", title: "Dress Modestly at Religious Sites", description: "The Philippines is predominantly Catholic. Cover shoulders and knees when entering churches and religious sites. Loud or disruptive behaviour inside churches is considered deeply disrespectful and can lead to removal.", source: { name: "Philippine Department of Tourism", url: "https://www.tourism.gov.ph/", verified: "2026-04-08" } }
    ],

    practical: {
      plug_type: { value: "Type A and Type B (same as US/Japan). Voltage is 220V. US devices may work without an adapter but check voltage compatibility.", source: { name: "World Standards", url: "https://www.worldstandards.eu/electricity/plugs-and-sockets/", verified: "2026-04-06" } },
      esim: { value: "eSIMs available from Airalo and Maya. Physical SIMs from Globe or Smart are widely available at airports and malls. Data is very affordable.", source: { name: "Philippine Department of Tourism", url: "https://www.tourism.gov.ph/", verified: "2026-04-06" } },
      transport: { value: "Use Grab for reliable ride-hailing. Jeepneys are the iconic and cheapest local transport. For inter-island travel, ferries (2GO, FastCat) connect major islands.", source: { name: "Philippine Department of Tourism", url: "https://www.tourism.gov.ph/", verified: "2026-04-06" } },
      water_quality: { value: "Tap water in the Philippines is generally not safe to drink outside filtered hotel systems. Always use bottled water for drinking and brushing teeth. In rural areas, boil or purify water before consumption.", source: { name: "WHO International Travel and Health", url: "https://www.who.int/travel-advice", verified: "2026-04-06" } }
    }
  },

  kazakhstan: {
    id: "kazakhstan",
    name: "Kazakhstan",
    flag: "\ud83c\uddf0\ud83c\uddff",
    region: "Central Asia",
    capital: "Astana",
    currency: "Kazakhstani Tenge (\u20b8)",
    language: "Kazakh, Russian",
    lat: 48.0,
    lng: 67.0,
    summary: "Kazakhstan is the largest landlocked country in the world, offering vast steppes, futuristic architecture in Astana, the cultural richness of Almaty, and stunning natural landscapes. It is an increasingly popular destination for adventurous travellers.",

    images: [
      { url: "/images/cta-mountains.jpg", caption: "Aerial view of the Tian Shan mountain range" },
      { url: "/images/gallery-pool.jpg", caption: "Modern resort overlooking the mountains" }
    ],

    visa: {
      "NL": { type: "Visa-Free", duration: "30 days", notes: "For tourism purposes. Registration with migration police required for stays over 30 days." },
      "GB": { type: "Visa-Free", duration: "30 days", notes: "For tourism purposes. Must register within 3 days of arrival if staying at a private residence." },
      "PL": { type: "Visa-Free", duration: "30 days", notes: "For tourism. EU citizens benefit from the visa-free regime." },
      "US": { type: "Visa-Free", duration: "30 days", notes: "For tourism. Registration requirements apply for longer stays." },
      "JO": { type: "eVisa", duration: "30 days", notes: "Apply online through the eVisa portal. Processing takes approximately 5 business days. Single entry." },
      "PH": { type: "Visa Required", duration: "30 days", notes: "Must apply at the Kazakh embassy. Requires letter of invitation, hotel bookings, and proof of financial means." },
      "UA": { type: "Visa-Free", duration: "30 days", notes: "Ukrainian passport holders can enter Kazakhstan visa-free for tourism. Registration with migration police required for stays over 3 days." },
      source: { name: "Ministry of Foreign Affairs of Kazakhstan", url: "https://www.gov.kz/memleket/entities/mfa/activities/4691", verified: "2026-04-07" }
    },

    health: [
      { name: "Routine Vaccinations", status: "Recommended", description: "Ensure routine vaccinations are current, including measles and tetanus.", cost: null, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "WHO", url: "https://www.who.int/travel-advice", verified: "2026-04-05" } },
      { name: "Hepatitis A", status: "Recommended", description: "Risk through contaminated food and water, particularly in rural areas.", cost: 60, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "CDC Travelers' Health", url: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/kazakhstan", verified: "2026-04-05" } },
      { name: "Typhoid", status: "Recommended", description: "Consider if visiting smaller towns or eating outside of major hotels and restaurants.", cost: 80, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "GGD Travel Health Advisory", url: "https://www.ggdreisvaccinaties.nl", verified: "2026-04-05" } },
      { name: "Rabies", status: "Recommended", description: "Consider if planning outdoor activities in rural areas or if you expect contact with animals.", cost: 75, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "WHO", url: "https://www.who.int/travel-advice", verified: "2026-04-05" } }
    ],

    safety: {
      level: 2,
      color: "yellow",
      description: "Kazakhstan is generally safe for travellers. Petty crime exists in larger cities, particularly around markets and transport hubs. Exercise normal precautions. Political demonstrations can occur; avoid large gatherings. Road conditions outside major cities can be poor.",
      insurance_warning: false,
      insurance_note: "",
      source: { name: "Netherlands Ministry of Foreign Affairs", url: "https://www.nederlandwereldwijd.nl/reisadvies/kazachstan", verified: "2026-04-07" }
    },

    culture: [
      { title: "Hospitality and Tea", description: "Kazakh hospitality is legendary. You will often be offered tea and food when visiting someone's home. Refusing can be considered impolite, so accept at least a small amount.", source: { name: "Kazakhstan Tourism Board", url: "https://www.kazakhstan.travel/en/", verified: "2026-04-06" } },
      { title: "Respect for Elders", description: "Kazakh culture places great importance on respecting elders. Let them sit first, serve them food first, and greet them first when entering a room.", source: { name: "Kazakhstan Tourism Board", url: "https://www.kazakhstan.travel/en/", verified: "2026-04-06" } },
      { title: "Right Hand", description: "Use your right hand to give and receive items, especially food. The left hand is considered less clean.", source: { name: "Kazakhstan Tourism Board", url: "https://www.kazakhstan.travel/en/", verified: "2026-04-06" } },
      { title: "Language", description: "Russian is widely spoken in cities and is the main language of business. Learning a few basic phrases in Kazakh or Russian will be greatly appreciated.", source: { name: "Kazakhstan Tourism Board", url: "https://www.kazakhstan.travel/en/", verified: "2026-04-06" } }
    ],

    booking: [
      { name: "Charyn Canyon Permits", description: "Entry permits are required for the national park. Can sometimes be purchased on arrival, but weekends and holidays may require advance arrangement.", lead_time: "1 to 3 days", booking_url: null, source: { name: "Kazakhstan Tourism Board", url: "https://www.kazakhstan.travel/en/", verified: "2026-04-06" } },
      { name: "Baikonur Cosmodrome Tours", description: "Visits to the world's oldest space launch facility require special permits arranged through licensed tour operators well in advance.", lead_time: "1 to 2 months", booking_url: null, source: { name: "Kazakhstan Tourism Board", url: "https://www.kazakhstan.travel/en/", verified: "2026-04-06" } }
    ],

    laws: [
      { type: "warning", title: "Photography Restrictions", description: "Photographing government buildings, military installations, police stations, and border areas is strictly prohibited and can lead to camera confiscation or detention. Always ask permission before photographing individuals, especially in traditional settings.", source: { name: "Netherlands Ministry of Foreign Affairs", url: "https://www.nederlandwereldwijd.nl/reisadvies/kazachstan", verified: "2026-04-08" } },
      { type: "danger", title: "Drug Laws", description: "Drug offences carry severe penalties in Kazakhstan, including long prison terms. Border controls are strict and searches are common. There is no leniency for tourists.", source: { name: "Netherlands Ministry of Foreign Affairs", url: "https://www.nederlandwereldwijd.nl/reisadvies/kazachstan", verified: "2026-04-08" } },
      { type: "info", title: "Currency and Registration", description: "Carry all currency exchange receipts as customs may ask you to account for currency when leaving. If staying at a private residence (not a hotel), you must register with the local migration police within 3 days of arrival. Hotels handle this automatically.", source: { name: "Kazakhstan Customs Committee", url: "https://www.gov.kz/", verified: "2026-04-08" } }
    ],

    practical: {
      plug_type: { value: "Type C and Type F (European standard). Voltage is 220V. Travellers from the US, UK, or Asia will need an adapter.", source: { name: "World Standards", url: "https://www.worldstandards.eu/electricity/plugs-and-sockets/", verified: "2026-04-06" } },
      esim: { value: "eSIMs available from Airalo. Local SIM cards from Kcell or Beeline are available at airports and telecom shops. Data coverage can be limited in remote areas.", source: { name: "Kazakhstan Tourism Board", url: "https://www.kazakhstan.travel/en/", verified: "2026-04-06" } },
      transport: { value: "Almaty has a metro system. Yandex Go is the main ride-hailing app. For inter-city travel, domestic flights are affordable and trains offer scenic routes across the steppe.", source: { name: "Kazakhstan Tourism Board", url: "https://www.kazakhstan.travel/en/", verified: "2026-04-06" } },
      water_quality: { value: "Tap water quality varies across Kazakhstan. In Almaty and Astana the water is treated but may taste unpleasant. Bottled water is recommended throughout your trip, particularly in rural areas.", source: { name: "WHO International Travel and Health", url: "https://www.who.int/travel-advice", verified: "2026-04-06" } }
    }
  },

  vietnam: {
    id: "vietnam",
    name: "Vietnam",
    flag: "\ud83c\uddfb\ud83c\uddf3",
    region: "Southeast Asia",
    capital: "Hanoi",
    currency: "Vietnamese Dong (\u20ab)",
    language: "Vietnamese",
    lat: 14.1,
    lng: 108.3,
    summary: "Vietnam captivates with its stunning landscapes, from the limestone karsts of Ha Long Bay to the terraced rice fields of Sapa. Its rich history, incredible street food, and affordable prices make it one of Southeast Asia's most rewarding destinations.",

    images: [
      { url: "/images/gallery-china.jpg", caption: "Ancient waterway town near Hoi An" },
      { url: "/images/gallery-vietnam-jungle.jpg", caption: "Tropical jungle landscape of northern Vietnam" }
    ],

    visa: {
      "NL": { type: "eVisa", duration: "90 days", notes: "Apply online at the official eVisa portal. Single entry. Processing takes approximately 3 business days." },
      "GB": { type: "eVisa", duration: "90 days", notes: "Apply online. Multiple entry available. Processing takes approximately 3 business days." },
      "PL": { type: "eVisa", duration: "90 days", notes: "Apply online at the official eVisa portal. Processing takes approximately 3 business days." },
      "US": { type: "eVisa", duration: "90 days", notes: "Apply online. Multiple entry available. Processing approximately 3 business days." },
      "JO": { type: "eVisa", duration: "30 days", notes: "Apply online at the official eVisa portal. Single entry. Must have at least 6 months passport validity." },
      "PH": { type: "Visa-Free", duration: "21 days", notes: "Philippine passport holders receive 21 days visa-free. For longer stays, apply for an eVisa." },
      "UA": { type: "eVisa", duration: "90 days", notes: "Apply online at the official Vietnam eVisa portal. Processing takes approximately 3 business days. Must have at least 6 months passport validity." },
      source: { name: "Vietnam Immigration Department", url: "https://evisa.xuatnhapcanh.gov.vn/", verified: "2026-04-07" }
    },

    health: [
      { name: "Hepatitis A", status: "Recommended", description: "Common risk throughout the country, especially with street food consumption.", cost: 60, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "GGD Travel Health Advisory", url: "https://www.ggdreisvaccinaties.nl", verified: "2026-04-05" } },
      { name: "Typhoid", status: "Recommended", description: "Recommended for all travellers. Risk is widespread, particularly in areas with limited sanitation.", cost: 80, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "WHO", url: "https://www.who.int/travel-advice", verified: "2026-04-05" } },
      { name: "Japanese Encephalitis", status: "Recommended", description: "Risk in rural areas, particularly in the north. Consider if travelling during the rainy season or staying in rural regions.", cost: 95, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "CDC Travelers' Health", url: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/vietnam", verified: "2026-04-05" } },
      { name: "Rabies", status: "Recommended", description: "Stray dogs are common. Pre-exposure vaccination recommended for rural travel or extended stays.", cost: 75, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "GGD Travel Health Advisory", url: "https://www.ggdreisvaccinaties.nl", verified: "2026-04-05" } },
      { name: "Malaria Prophylaxis", status: "Recommended", description: "Risk in some rural and forested areas, particularly in the central highlands. Not needed for major cities or coastal tourist areas.", cost: 40, booking_url: "https://www.ggdreisvaccinaties.nl", source: { name: "RIVM", url: "https://www.rivm.nl/vaccinaties", verified: "2026-04-05" } }
    ],

    safety: {
      level: 2,
      color: "yellow",
      description: "Vietnam is generally safe for tourists. Petty crime, especially bag snatching by motorbike riders, is common in Ho Chi Minh City and Hanoi. Be vigilant with your belongings in crowded areas. Traffic is chaotic and pedestrian crossings work differently than in Europe. Look both ways and walk steadily when crossing streets.",
      insurance_warning: false,
      insurance_note: "",
      source: { name: "UK Foreign, Commonwealth & Development Office", url: "https://www.gov.uk/foreign-travel-advice/vietnam", verified: "2026-04-07" }
    },

    culture: [
      { title: "Crossing the Street", description: "Traffic in Vietnamese cities rarely stops for pedestrians. The local technique is to walk at a steady, predictable pace and let the motorbikes flow around you. Do not make sudden stops or run.", source: { name: "Vietnam National Administration of Tourism", url: "https://vietnam.travel/", verified: "2026-04-06" } },
      { title: "Haggling", description: "Bargaining is expected at markets and with street vendors. Start at roughly 50% of the asking price and negotiate from there. Fixed-price shops and supermarkets do not expect haggling.", source: { name: "Vietnam National Administration of Tourism", url: "https://vietnam.travel/", verified: "2026-04-06" } },
      { title: "Dress Modestly at Temples", description: "Cover your shoulders and knees when visiting pagodas and temples. Remove shoes before entering. Some sites provide cover-ups at the entrance.", source: { name: "Vietnam National Administration of Tourism", url: "https://vietnam.travel/", verified: "2026-04-06" } },
      { title: "Tipping", description: "Tipping is not traditionally expected but is becoming more common in tourist areas. Rounding up the bill or leaving 5 to 10% is appreciated in restaurants.", source: { name: "Vietnam National Administration of Tourism", url: "https://vietnam.travel/", verified: "2026-04-06" } }
    ],

    booking: [
      { name: "Ha Long Bay Cruises", description: "Overnight cruises on Ha Long Bay are one of Vietnam's most popular experiences. Quality boats fill up weeks in advance during peak season (October to April).", lead_time: "2 to 4 weeks", booking_url: null, source: { name: "Vietnam National Administration of Tourism", url: "https://vietnam.travel/", verified: "2026-04-06" } },
      { name: "Sapa Trekking Permits", description: "Some trekking routes in the Hoang Lien Son area require permits. Tour operators typically arrange these, but book your trek at least a few days ahead.", lead_time: "3 to 5 days", booking_url: null, source: { name: "Vietnam National Administration of Tourism", url: "https://vietnam.travel/", verified: "2026-04-06" } },
      { name: "Reunification Express Train", description: "The scenic train from Hanoi to Ho Chi Minh City (or sections of it) is popular and sleeper berths sell out in advance, especially around Vietnamese holidays.", lead_time: "1 to 2 weeks", booking_url: "https://dsvn.vn/en", source: { name: "Vietnam Railways", url: "https://dsvn.vn/en", verified: "2026-04-06" } },
      { name: "Cu Chi Tunnels", description: "Guided tours to the Cu Chi Tunnels from Ho Chi Minh City are very popular. Small-group tours offer a better experience but book out faster.", lead_time: "2 to 3 days", booking_url: null, source: { name: "Vietnam National Administration of Tourism", url: "https://vietnam.travel/", verified: "2026-04-06" } }
    ],

    laws: [
      { type: "warning", title: "Taxi Scams and Fake Ride-Hailing", description: "Fake taxis and inflated fares are widespread, especially at airports and tourist spots in Ho Chi Minh City and Hanoi. Only use Grab (the verified ride-hailing app) or officially branded airport taxis. Be especially wary of drivers who approach you directly.", source: { name: "Vietnam National Administration of Tourism", url: "https://vietnam.travel/", verified: "2026-04-08" } },
      { type: "danger", title: "Drug Laws", description: "Drug trafficking carries the death penalty in Vietnam. Possession of illegal substances can result in long prison terms. Vietnamese authorities do not make exceptions for tourists. Never purchase or accept substances from strangers.", source: { name: "UK FCDO", url: "https://www.gov.uk/foreign-travel-advice/vietnam/local-laws-and-customs", verified: "2026-04-08" } },
      { type: "warning", title: "Photography Near Military Sites", description: "Photography of military bases, government buildings, border areas, and official infrastructure is prohibited and can result in camera confiscation or detention. When in doubt, do not photograph official-looking structures.", source: { name: "UK FCDO", url: "https://www.gov.uk/foreign-travel-advice/vietnam/local-laws-and-customs", verified: "2026-04-08" } }
    ],

    practical: {
      plug_type: { value: "Type A, C, and F plugs are used. Voltage is 220V. A universal adapter is recommended as socket types vary between hotels.", source: { name: "World Standards", url: "https://www.worldstandards.eu/electricity/plugs-and-sockets/", verified: "2026-04-06" } },
      esim: { value: "eSIMs available from Airalo and local providers. Physical SIMs from Viettel, Mobifone, or Vinaphone are very affordable and available at airports. Data coverage is excellent even in rural areas.", source: { name: "Vietnam National Administration of Tourism", url: "https://vietnam.travel/", verified: "2026-04-06" } },
      transport: { value: "Grab is the go-to ride-hailing app in all major cities. For longer distances, domestic flights are cheap with VietJet and Bamboo Airways. Sleeper buses are a popular budget option between cities.", source: { name: "Vietnam National Administration of Tourism", url: "https://vietnam.travel/", verified: "2026-04-06" } },
      water_quality: { value: "Tap water is not safe to drink in Vietnam. Always use bottled or filtered water for drinking and brushing teeth. Bottled water is widely available and inexpensive. Be cautious with ice at street stalls.", source: { name: "WHO International Travel and Health", url: "https://www.who.int/travel-advice", verified: "2026-04-06" } }
    }
  }

};

/* Country list for the world map (basic info only) */
const COUNTRY_LIST = Object.values(TRAVEL_DATA).map(c => ({
  id: c.id,
  name: c.name,
  flag: c.flag,
  region: c.region,
  lat: c.lat,
  lng: c.lng,
  summary: c.summary
}));
