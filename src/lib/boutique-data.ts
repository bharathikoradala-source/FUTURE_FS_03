export const IMG = {
  hero: "/images/showcase/ai_hero.jpg",
  newArrivals: "/images/showcase/ai_dress.jpg",
  dresses: "/images/products/dress_1.jpg", 
  kurtis: "/images/showcase/ai_kurti.jpg",
  sarees: "/images/showcase/ai_saree.jpg",
  ethnic: "/images/products/saree_1.jpg",
  western: "/images/products/dress_2.jpg",
  tops: "/images/products/dress_3.jpg",
  handbags: "/images/showcase/ai_handbag.jpg",
  footwear: "/images/showcase/ai_heels.jpg",
  accessories: "/images/showcase/ai_jewelry.jpg",
  
  // Gallery uses safe loremflickr generic fashion so we save the premium ones for products
  g1: "https://loremflickr.com/600/800/fashion,model,woman/all?lock=1",
  g2: "https://loremflickr.com/600/800/fashion,model,woman/all?lock=2",
  g3: "https://loremflickr.com/600/800/fashion,model,woman/all?lock=3",
  g4: "https://loremflickr.com/600/800/fashion,model,woman/all?lock=4",
  g5: "https://loremflickr.com/600/800/fashion,model,woman/all?lock=5",
  g6: "https://loremflickr.com/600/800/fashion,model,woman/all?lock=6",
  g7: "https://loremflickr.com/600/800/fashion,model,woman/all?lock=7",
  g8: "https://loremflickr.com/600/800/fashion,model,woman/all?lock=8",

  // Testimonials use faces
  t1: "https://loremflickr.com/200/200/indian,woman,face/all?lock=1",
  t2: "https://loremflickr.com/200/200/indian,woman,face/all?lock=2",
  t3: "https://loremflickr.com/200/200/indian,woman,face/all?lock=3",
  t4: "https://loremflickr.com/200/200/indian,woman,face/all?lock=4",
};

export const collections = [
  { key: "new_arrivals", title: "New Arrivals", desc: "Fresh off the atelier.", img: IMG.newArrivals },
  { key: "dresses", title: "Dresses", desc: "Elegance for every evening.", img: IMG.dresses },
  { key: "kurtis", title: "Kurtis", desc: "Everyday comfort meets tradition.", img: IMG.kurtis },
  { key: "sarees", title: "Sarees", desc: "Six yards of pure grace.", img: IMG.sarees },
  { key: "ethnic", title: "Ethnic Wear", desc: "Timeless heritage silhouettes.", img: IMG.ethnic },
  { key: "western", title: "Western Wear", desc: "Contemporary cuts.", img: IMG.western },
  { key: "tops", title: "Tops", desc: "Chic tops & tunics.", img: IMG.tops },
  { key: "handbags", title: "Handbags", desc: "Statement luxury bags.", img: IMG.handbags },
  { key: "footwear", title: "Footwear", desc: "Step out in style.", img: IMG.footwear },
  { key: "accessories", title: "Accessories", desc: "Curated finishing touches.", img: IMG.accessories },
];

export const products = [
  // SAREES (14 items: saree_2 to 10, ai_saree_1 to 5)
  { id: 101, name: "Crimson Banarasi Silk", category: "Sarees", brand: "Biba", price: 14500, rating: 4.8, isNew: true, img: "/images/products/saree_2.jpg" },
  { id: 102, name: "Midnight Blue Organza", category: "Sarees", brand: "FabIndia", price: 9200, rating: 4.6, isNew: false, img: "/images/products/saree_3.jpg" },
  { id: 103, name: "Emerald Kanjivaram", category: "Sarees", brand: "Nalli", price: 21000, rating: 4.9, isNew: true, img: "/images/products/saree_4.jpg" },
  { id: 104, name: "Blush Pink Chiffon", category: "Sarees", brand: "Biba", price: 6500, rating: 4.5, isNew: false, img: "/images/products/saree_5.jpg" },

  { id: 106, name: "Mint Green Georgette", category: "Sarees", brand: "FabIndia", price: 8400, rating: 4.4, isNew: false, img: "/images/products/saree_7.jpg" },
  { id: 107, name: "Ruby Red Patola", category: "Sarees", brand: "Nalli", price: 27500, rating: 5.0, isNew: true, img: "/images/products/saree_8.jpg" },
  { id: 108, name: "Lavender Silk Blend", category: "Sarees", brand: "Kalki", price: 11200, rating: 4.6, isNew: false, img: "/images/products/saree_9.jpg" },
  { id: 109, name: "Ivory Chikankari", category: "Sarees", brand: "Biba", price: 15600, rating: 4.8, isNew: true, img: "/images/products/saree_10.jpg" },
  { id: 110, name: "Tangerine Silk Wrap", category: "Sarees", brand: "Nalli", price: 13500, rating: 4.7, isNew: false, img: "/images/products/ai_saree_1.jpg" },
  { id: 111, name: "Violet Brocade Saree", category: "Sarees", brand: "Kalki", price: 19200, rating: 4.9, isNew: true, img: "/images/products/ai_saree_2.jpg" },
  { id: 112, name: "Peach Chanderi Silk", category: "Sarees", brand: "FabIndia", price: 8800, rating: 4.5, isNew: false, img: "/images/products/ai_saree_3.jpg" },
  { id: 113, name: "Maroon Kanjeevaram", category: "Sarees", brand: "Nalli", price: 24000, rating: 5.0, isNew: true, img: "/images/products/ai_saree_4.jpg" },
  { id: 114, name: "Turquoise Net Saree", category: "Sarees", brand: "Biba", price: 7900, rating: 4.4, isNew: false, img: "/images/products/ai_saree_5.jpg" },

  // DRESSES (7 items: dress_4 to 10)
  { id: 201, name: "Noir Evening Gown", category: "Dresses", brand: "AND", price: 12500, rating: 4.7, isNew: true, img: "/images/products/dress_4.jpg" },
  { id: 202, name: "Sapphire Velvet Midi", category: "Dresses", brand: "ONLY", price: 8900, rating: 4.5, isNew: false, img: "/images/products/dress_5.jpg" },
  { id: 203, name: "Pearl White Slip Dress", category: "Western Wear", brand: "Vero Moda", price: 5400, rating: 4.4, isNew: true, img: "/images/products/dress_6.jpg" },
  { id: 204, name: "Scarlet Ruffled Maxi", category: "Dresses", brand: "AND", price: 9800, rating: 4.6, isNew: false, img: "/images/products/dress_7.jpg" },
  { id: 205, name: "Ochre Wrap Dress", category: "Western Wear", brand: "ONLY", price: 4600, rating: 4.3, isNew: true, img: "/images/products/dress_8.jpg" },
  { id: 206, name: "Amethyst Floral Flare", category: "Dresses", brand: "Vero Moda", price: 7200, rating: 4.5, isNew: false, img: "/images/products/dress_9.jpg" },
  { id: 207, name: "Olive Green Sheath", category: "Dresses", brand: "AND", price: 6800, rating: 4.4, isNew: true, img: "/images/products/dress_10.jpg" },

  // HANDBAGS (5 items: handbag_1 to 5)
  { id: 401, name: "Camel Leather Tote", category: "Handbags", brand: "Allen Solly", price: 8500, rating: 4.8, isNew: true, img: "/images/products/handbag_1.jpg" },
  { id: 402, name: "Obsidian Quilted Clutch", category: "Handbags", brand: "Lavie", price: 4200, rating: 4.4, isNew: false, img: "/images/products/handbag_2.jpg" },
  { id: 403, name: "Burgundy Satchel", category: "Handbags", brand: "Caprese", price: 6700, rating: 4.6, isNew: true, img: "/images/products/handbag_3.jpg" },
  { id: 404, name: "Taupe Crossbody Bag", category: "Handbags", brand: "Allen Solly", price: 5100, rating: 4.5, isNew: false, img: "/images/products/handbag_4.jpg" },
  { id: 405, name: "Emerald Mini Bag", category: "Handbags", brand: "Caprese", price: 3900, rating: 4.3, isNew: true, img: "/images/products/handbag_5.jpg" },

  // JEWELRY (4 items)
  { id: 601, name: "Kundan Statement Choker", category: "Accessories", brand: "Tanishq", price: 15400, rating: 4.9, isNew: true, img: "https://loremflickr.com/600/800/jewelry,necklace,woman/all?lock=101" },
  { id: 602, name: "Diamond Tennis Bracelet", category: "Accessories", brand: "CaratLane", price: 42000, rating: 4.8, isNew: false, img: "https://loremflickr.com/600/800/jewelry,necklace,woman/all?lock=102" },
  { id: 603, name: "Gold Plated Jhumkas", category: "Accessories", brand: "Kalyan", price: 3800, rating: 4.5, isNew: true, img: "https://loremflickr.com/600/800/jewelry,necklace,woman/all?lock=103" },
  { id: 604, name: "Emerald Drop Earrings", category: "Accessories", brand: "Tanishq", price: 12500, rating: 4.7, isNew: false, img: "https://loremflickr.com/600/800/jewelry,necklace,woman/all?lock=104" }
];

export const testimonials = [
  { name: "Priya Sharma", role: "Fashion Enthusiast", text: "The quality is simply unmatched. My go-to for every festive season.", img: IMG.t1 },
  { name: "Anita Desai", role: "Wedding Planner", text: "ÉLANÉ is where I send all my brides. Impeccable curation.", img: IMG.t2 },
  { name: "Sneha Reddy", role: "Architect", text: "Finally, a place that understands minimal, sophisticated ethnic wear.", img: IMG.t3 },
  { name: "Meera Iyer", role: "Creative Director", text: "The attention to detail in their pieces makes me feel like royalty.", img: IMG.t4 },
];

export const faqs = [
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide via DHL Express. Deliveries typically take 5-7 business days." },
  { question: "Can I book a styling appointment?", answer: "Absolutely. You can book a virtual or in-store styling session via WhatsApp." },
  { question: "What is your return policy?", answer: "We accept returns within 14 days for unworn items with tags attached. Custom pieces are final sale." },
  { question: "Are your silk sarees authentic?", answer: "Yes, all our silk sarees are handwoven and carry the Silk Mark certification." },
];
