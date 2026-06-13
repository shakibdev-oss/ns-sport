// data.js

const products = [
    {
        id: "english-willow",
        category: "Cricket Bats",
        name: "NS Sport English Willow Bat",
        price: 12499,
        originalPrice: "16,999",
        discount: "26% off",
        rating: "4.8",
        reviewsCount: "1,245",
        stockUrgency: "Only 3 Left",
        badge: "Best Seller",
        size: "SH (Short Handle)",
        weight: "1160g - 1200g",
        description: "Top grade English willow for professional tournaments. Massive sweet spot and incredible balance. Handcrafted to perfection for extreme power hitting.",
        images: [
            "assets/english_willow_bat_1780413220671.png",
            "assets/images/english-willow-front.jpg",
            "assets/images/english-willow-back.jpg",
            "assets/images/english-willow-side.jpg",
            "assets/images/english-willow-handle.jpg",
            "assets/images/english-willow-close.jpg"
        ],
        featured: true,
        hi: {
            category: "क्रिकेट बैट",
            name: "NS Sport इंग्लिश विलो बैट",
            size: "SH (शॉर्ट हैंडल)",
            weight: "1160g - 1200g",
            description: "पेशेवर टूर्नामेंट के लिए टॉप ग्रेड इंग्लिश विलो। विशाल स्वीट स्पॉट और अविश्वसनीय संतुलन। अत्यधिक शक्ति हिटिंग के लिए पूर्णता से दस्तकारी की गई।"
        }
    },
    {
        id: "kashmir-willow",
        category: "Cricket Bats",
        name: "NS Sport Kashmir Willow Bat",
        price: 3499,
        originalPrice: "5,999",
        discount: "41% off",
        rating: "4.5",
        reviewsCount: "3,892",
        stockUrgency: "Hurry, selling fast!",
        badge: "Top Rated",
        size: "SH (Short Handle)",
        weight: "1180g - 1220g",
        description: "Premium Kashmir willow perfect for club matches and net practice. Durable and powerful with a comfortable cane handle.",
        images: [
            "assets/kashmir_willow_bat_1780413241395.png",
            "assets/images/kashmir-willow-front.jpg",
            "assets/images/kashmir-willow-back.jpg",
            "assets/images/kashmir-willow-side.jpg",
            "assets/images/kashmir-willow-handle.jpg"
        ],
        featured: true,
        hi: {
            category: "क्रिकेट बैट",
            name: "NS Sport कश्मीर विलो बैट",
            size: "SH (शॉर्ट हैंडल)",
            weight: "1180g - 1220g",
            description: "क्लब मैचों और नेट प्रैक्टिस के लिए उपयुक्त प्रीमियम कश्मीर विलो। आरामदायक केन हैंडल के साथ टिकाऊ और शक्तिशाली।"
        }
    },
    {
        id: "tennis-bat",
        category: "Cricket Bats",
        name: "NS Sport Tennis Ball Bat",
        price: 1299,
        originalPrice: "1,999",
        discount: "35% off",
        rating: "4.6",
        reviewsCount: "8,450",
        stockUrgency: "In Stock",
        badge: "Best Seller",
        size: "Full Size",
        weight: "950g - 1050g",
        description: "Lightweight design engineered specifically for heavy tennis ball cricket. Quick bat swing and supreme maneuverability.",
        images: [
            "assets/tennis_ball_bat_1780413257812.png",
            "assets/images/tennis-bat-front.jpg",
            "assets/images/tennis-bat-back.jpg",
            "assets/images/tennis-bat-side.jpg"
        ],
        featured: true,
        hi: {
            category: "क्रिकेट बैट",
            name: "NS Sport टेनिस बॉल बैट",
            size: "पूर्ण आकार",
            weight: "950g - 1050g",
            description: "विशेष रूप से भारी टेनिस बॉल क्रिकेट के लिए तैयार किया गया हल्का डिज़ाइन। त्वरित बैट स्विंग और सर्वोच्च गतिशीलता।"
        }
    },
    {
        id: "kids-bat",
        category: "Cricket Bats",
        name: "NS Sport Kids Bat",
        price: 899,
        originalPrice: "1,499",
        discount: "40% off",
        rating: "4.3",
        reviewsCount: "530",
        stockUrgency: "Only Few Left",
        badge: "New Arrival",
        size: "Size 3 / Size 4",
        weight: "Ultra Light",
        description: "The perfect starter bat for young champions. Lightweight, easy to handle, and beautifully crafted with a colorful grip.",
        images: [
            "assets/kids_cricket_bat_1780413274301.png",
            "assets/images/kids-bat-front.jpg",
            "assets/images/kids-bat-back.jpg"
        ],
        featured: false,
        hi: {
            category: "क्रिकेट बैट",
            name: "NS Sport किड्स बैट",
            size: "साइज 3 / साइज 4",
            weight: "अल्ट्रा लाइट",
            description: "युवा चैंपियनों के लिए एकदम सही शुरुआती बैट। हल्का, संभालने में आसान और रंगीन ग्रिप के साथ खूबसूरती से तैयार किया गया।"
        }
    },
    {
        id: "bat-cover",
        category: "Bat Covers",
        name: "NS Premium Padded Bat Cover",
        price: 499,
        originalPrice: "899",
        discount: "44% off",
        rating: "4.7",
        reviewsCount: "2,104",
        stockUrgency: "In Stock",
        badge: "Top Rated",
        size: "Universal Fit",
        weight: "150g",
        description: "High-quality padded bat cover to protect your weapon from scratches and moisture. Features an adjustable strap.",
        images: [
            "assets/images/bat-cover-main.jpg",
            "assets/images/bat-cover-open.jpg",
            "assets/images/bat-cover-side.jpg"
        ],
        featured: false,
        hi: {
            category: "बैट कवर",
            name: "NS प्रीमियम पैडेड बैट कवर",
            size: "यूनिवर्सल फिट",
            weight: "150g",
            description: "खरोंच और नमी से आपके हथियार को बचाने के लिए उच्च गुणवत्ता वाला गद्देदार बैट कवर। एक समायोज्य पट्टा सुविधाएँ।"
        }
    },
    {
        id: "batting-gloves",
        category: "Batting Gloves",
        name: "NS Pro Batting Gloves",
        price: 1599,
        originalPrice: "2,499",
        discount: "36% off",
        rating: "4.4",
        reviewsCount: "982",
        stockUrgency: "Only 5 Left",
        badge: "New Arrival",
        size: "Mens / Youth",
        weight: "200g pair",
        description: "Ergonomic batting gloves with high-density foam protection, sheep leather palm, and maximum ventilation.",
        images: [
            "assets/images/gloves-main.jpg",
            "assets/images/gloves-palm.jpg",
            "assets/images/gloves-side.jpg"
        ],
        featured: true,
        hi: {
            category: "बैटिंग ग्लव्स",
            name: "NS प्रो बैटिंग ग्लव्स",
            size: "पुरुष / युवा",
            weight: "200g जोड़ी",
            description: "उच्च घनत्व फोम संरक्षण, भेड़ के चमड़े की हथेली और अधिकतम वेंटिलेशन के साथ एर्गोनोमिक बैटिंग दस्ताने।"
        }
    },
    {
        id: "wk-gloves",
        category: "Wicket Keeping Gloves",
        name: "NS Elite Keeping Gloves",
        price: 2299,
        originalPrice: "3,599",
        discount: "36% off",
        rating: "4.9",
        reviewsCount: "412",
        stockUrgency: "In Stock",
        badge: "Top Rated",
        size: "Mens Large",
        weight: "450g pair",
        description: "Professional wicket keeping gloves with octopus grip rubber facing and padded inner lining for ultimate catching control.",
        images: [
            "assets/images/wk-main.jpg",
            "assets/images/wk-palm.jpg",
            "assets/images/wk-back.jpg"
        ],
        featured: false,
        hi: {
            category: "विकेट कीपिंग ग्लव्स",
            name: "NS एलीट कीपिंग ग्लव्स",
            size: "पुरुष बड़ा",
            weight: "450g जोड़ी",
            description: "ऑक्टोपस ग्रिप रबर फेसिंग और परम कैचिंग कंट्रोल के लिए पैडेड इनर लाइनिंग के साथ पेशेवर विकेट कीपिंग दस्ताने।"
        }
    },
    {
        id: "accessories-kit",
        category: "Cricket Accessories",
        name: "NS Master Accessories Kit",
        price: 999,
        originalPrice: "1,899",
        discount: "47% off",
        rating: "4.5",
        reviewsCount: "1,550",
        stockUrgency: "Trending",
        badge: "Best Seller",
        size: "Standard",
        weight: "Varies",
        description: "Complete accessories pack including bat grips, grip cone, bat tape, mallet, and linseed oil.",
        images: [
            "assets/images/acc-kit-main.jpg",
            "assets/images/acc-kit-items.jpg"
        ],
        featured: false,
        hi: {
            category: "क्रिकेट एक्सेसरीज़",
            name: "NS मास्टर एक्सेसरीज़ किट",
            size: "मानक",
            weight: "विभिन्न",
            description: "बैट ग्रिप्स, ग्रिप कोन, बैट टेप, मैलेट और अलसी के तेल सहित पूर्ण एक्सेसरीज़ पैक।"
        }
    },
    // COMBO OFFERS
    {
        id: "combo-bat-cover",
        category: "Combo Offers",
        name: "Bat + Cover Combo",
        price: 3799,
        originalPrice: "6,898",
        discount: "44% off",
        rating: "4.6",
        reviewsCount: "2,310",
        stockUrgency: "Only Few Left",
        badge: "Best Seller",
        size: "SH + Universal",
        weight: "1350g total",
        description: "Get our premium Kashmir Willow Bat and the Premium Padded Bat Cover at an unbeatable combo price. Perfect for players looking for quality and protection.",
        images: [
            "assets/kashmir_willow_bat_1780413241395.png",
            "assets/images/bat-cover-main.jpg"
        ],
        featured: false,
        hi: {
            category: "कॉम्बो ऑफर",
            name: "बैट + कवर कॉम्बो",
            size: "SH + यूनिवर्सल",
            weight: "1350g कुल",
            description: "हमारे प्रीमियम कश्मीर विलो बैट और प्रीमियम पैडेड बैट कवर को एक अपराजेय कॉम्बो कीमत पर प्राप्त करें। गुणवत्ता और सुरक्षा की तलाश करने वाले खिलाड़ियों के लिए बिल्कुल सही।"
        }
    },
    {
        id: "combo-bat-gloves",
        category: "Combo Offers",
        name: "Bat + Gloves Combo",
        price: 4899,
        originalPrice: "8,498",
        discount: "42% off",
        rating: "4.7",
        reviewsCount: "1,845",
        stockUrgency: "Trending",
        badge: "Top Rated",
        size: "SH + Mens",
        weight: "1400g total",
        description: "The ultimate striker's bundle. Includes the powerful Kashmir Willow Bat and ergonomic NS Pro Batting Gloves.",
        images: [
            "assets/kashmir_willow_bat_1780413241395.png",
            "assets/images/gloves-main.jpg"
        ],
        featured: false,
        hi: {
            category: "कॉम्बो ऑफर",
            name: "बैट + ग्लव्स कॉम्बो",
            size: "SH + पुरुष",
            weight: "1400g कुल",
            description: "अंतिम स्ट्राइकर बंडल। इसमें शक्तिशाली कश्मीर विलो बैट और एर्गोनोमिक NS प्रो बैटिंग ग्लव्स शामिल हैं।"
        }
    },
    {
        id: "combo-complete-kit",
        category: "Combo Offers",
        name: "Bat + Cover + Gloves Complete Kit",
        price: 5299,
        originalPrice: "9,397",
        discount: "43% off",
        rating: "4.9",
        reviewsCount: "5,120",
        stockUrgency: "Selling Fast",
        badge: "Best Seller",
        size: "Complete Set",
        weight: "1550g total",
        description: "The complete package for serious cricketers. Includes the Kashmir Willow Bat, Pro Batting Gloves, and the Padded Bat Cover.",
        images: [
            "assets/kashmir_willow_bat_1780413241395.png",
            "assets/images/gloves-main.jpg",
            "assets/images/bat-cover-main.jpg"
        ],
        featured: false,
        hi: {
            category: "कॉम्बो ऑफर",
            name: "बैट + कवर + ग्लव्स पूरा किट",
            size: "पूरा सेट",
            weight: "1550g कुल",
            description: "गंभीर क्रिकेटरों के लिए पूरा पैकेज। इसमें कश्मीर विलो बैट, प्रो बैटिंग ग्लव्स और पैडेड बैट कवर शामिल हैं।"
        }
    }
];

function getProductById(id) { return products.find(p => p.id === id); }
function getFeaturedProducts() { return products.filter(p => p.featured); }
function getProductsByCategory(categoryName) { return products.filter(p => p.category === categoryName); }
function getBestSellers() { return products.filter(p => p.badge === 'Best Seller' && p.category !== 'Combo Offers'); }
function getNewArrivals() { return products.filter(p => p.badge === 'New Arrival' && p.category !== 'Combo Offers'); }
function getComboOffers() { return products.filter(p => p.category === 'Combo Offers'); }
function getProductsByIds(ids) { return ids.map(id => getProductById(id)).filter(p => p !== undefined); }

// Search function
function searchProducts(query) {
    if (!query) return products;
    query = query.toLowerCase().trim();
    return products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
}
