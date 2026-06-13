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
        description: "We handpick these English Willow bats for players who want serious power in tournaments. The sweet spot on this one is massive. Not sure about the weight? Send us a WhatsApp and we'll help you pick.",
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
            description: "हम इन इंग्लिश विलो बैट को उन खिलाड़ियों के लिए चुनते हैं जो टूर्नामेंट में गंभीर शक्ति चाहते हैं। इसका स्वीट स्पॉट बहुत बड़ा है। वजन के बारे में निश्चित नहीं हैं? हमें WhatsApp करें और हम आपकी मदद करेंगे।"
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
        description: "A solid, dependable Kashmir willow that’s perfect for weekend club matches or heavy net sessions. We’ve tested the cane handle ourselves—it feels great.",
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
            description: "एक ठोस, भरोसेमंद कश्मीर विलो जो सप्ताहांत क्लब मैचों या भारी नेट सत्रों के लिए एकदम सही है। हमने खुद केन हैंडल का परीक्षण किया है—यह बहुत अच्छा लगता है।"
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
        description: "If you play heavy tennis ball cricket, this is exactly what you need. It's light enough for quick swings but thick enough to clear the boundary easily.",
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
            description: "यदि आप भारी टेनिस बॉल क्रिकेट खेलते हैं, तो आपको बिल्कुल इसी की आवश्यकता है। यह त्वरित स्विंग के लिए काफी हल्का है लेकिन बाउंड्री पार करने के लिए काफी मोटा है।"
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
        description: "We know how important a kid's first bat is. This one is ultra-light so they can learn proper shots without straining. Call us if you need help choosing the right size.",
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
            description: "हम जानते हैं कि बच्चे का पहला बैट कितना महत्वपूर्ण होता है। यह अल्ट्रा-लाइट है ताकि वे बिना तनाव के सही शॉट सीख सकें। यदि आपको सही आकार चुनने में सहायता चाहिए तो हमें कॉल करें।"
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
        description: "Don't let moisture ruin your bat. We always recommend keeping your gear in a padded cover like this one. It's simple, tough, and gets the job done.",
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
            description: "नमी को अपना बैट खराब न करने दें। हम हमेशा अपने गियर को इस तरह के पैडेड कवर में रखने की सलाह देते हैं। यह सरल, सख्त है और अपना काम बखूबी करता है।"
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
        description: "These gloves are a favorite among our local club players. They offer great protection without feeling stiff. Your hands will thank you after a long innings.",
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
            description: "ये दस्ताने हमारे स्थानीय क्लब खिलाड़ियों के बीच पसंदीदा हैं। वे बिना कठोर महसूस किए शानदार सुरक्षा प्रदान करते हैं। लंबी पारी के बाद आपके हाथ आपको धन्यवाद देंगे।"
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
        description: "Good keeping gloves are hard to find at a fair price. We stock these because the octopus grip inside actually works, making those tough catches stick.",
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
            description: "उचित मूल्य पर अच्छे कीपिंग दस्ताने मिलना मुश्किल है। हम इन्हें इसलिए रखते हैं क्योंकि अंदर की ऑक्टोपस ग्रिप वास्तव में काम करती है, जिससे कैच आसानी से पकड़े जाते हैं।"
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
        description: "Everything you need to maintain your bat in one bag. We put this kit together because players kept asking us for grip cones and oil. It's a lifesaver.",
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
            description: "एक बैग में अपने बैट को बनाए रखने के लिए आवश्यक सब कुछ। हमने इस किट को एक साथ रखा क्योंकि खिलाड़ी हमसे ग्रिप कोन और तेल मांगते रहे। यह बहुत उपयोगी है।"
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
        description: "A bat needs a cover, so we bundled our popular Kashmir Willow with a padded cover to save you some money. Great choice if you're just getting back into the game.",
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
            description: "एक बैट को कवर की आवश्यकता होती है, इसलिए हमने आपके पैसे बचाने के लिए एक पैडेड कवर के साथ हमारे लोकप्रिय कश्मीर विलो को बंडल किया। यदि आप अभी खेल में वापस आ रहे हैं तो बढ़िया विकल्प।"
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
        description: "Our most popular bundle for regular weekend players. Grab the Kashmir Willow and our comfortable pro gloves together at a better price.",
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
            description: "नियमित सप्ताहांत खिलाड़ियों के लिए हमारा सबसे लोकप्रिय बंडल। बेहतर कीमत पर कश्मीर विलो और हमारे आरामदायक प्रो दस्ताने एक साथ लें।"
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
        description: "We put together this complete set so you don't have to hunt for individual items. You get the bat, gloves, and cover all at once. Need help sizing? Just WhatsApp us.",
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
            description: "हमने यह पूरा सेट एक साथ रखा है ताकि आपको अलग-अलग वस्तुओं की तलाश न करनी पड़े। आपको एक साथ बैट, दस्ताने और कवर मिलता है। आकार चुनने में सहायता चाहिए? बस हमें WhatsApp करें।"
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
