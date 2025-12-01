const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

// Sample products data
const products = [
  // Electronics
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling headphones with 30-hour battery life and superior sound quality.',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    inStock: true,
    rating: 4.5,
    reviews: 234
  },
  {
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracker with heart rate monitor, GPS, and water resistance.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    inStock: true,
    rating: 4.7,
    reviews: 456
  },
  {
    name: 'Laptop Stand Aluminum',
    description: 'Ergonomic laptop stand with adjustable height and ventilation design.',
    price: 49.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    inStock: true,
    rating: 4.3,
    reviews: 128
  },
  {
    name: '4K Webcam',
    description: 'Ultra HD webcam with auto-focus and built-in microphone for streaming.',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500',
    inStock: true,
    rating: 4.4,
    reviews: 167
  },
  {
    name: 'Wireless Gaming Mouse',
    description: 'RGB gaming mouse with programmable buttons and 16000 DPI sensor.',
    price: 79.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    inStock: true,
    rating: 4.6,
    reviews: 289
  },

  // Clothing
  {
    name: 'Classic Denim Jacket',
    description: 'Vintage-style denim jacket with a comfortable fit and timeless design.',
    price: 89.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    inStock: true,
    rating: 4.5,
    reviews: 312
  },
  {
    name: 'Cotton Crew Neck T-Shirt',
    description: 'Premium cotton t-shirt in multiple colors, perfect for everyday wear.',
    price: 24.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    inStock: true,
    rating: 4.2,
    reviews: 445
  },
  {
    name: 'Slim Fit Jeans',
    description: 'Comfortable stretch denim jeans with a modern slim fit.',
    price: 69.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    inStock: true,
    rating: 4.4,
    reviews: 198
  },
  {
    name: 'Leather Jacket',
    description: 'Genuine leather jacket with quilted lining and zippered pockets.',
    price: 249.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    name: 'Running Shorts',
    description: 'Lightweight athletic shorts with moisture-wicking fabric.',
    price: 34.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500',
    inStock: true,
    rating: 4.3,
    reviews: 223
  },

  // Home & Kitchen
  {
    name: 'Stainless Steel Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe and auto-shutoff.',
    price: 79.99,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500',
    inStock: true,
    rating: 4.5,
    reviews: 267
  },
  {
    name: 'Non-Stick Cookware Set',
    description: '10-piece cookware set with durable non-stick coating.',
    price: 149.99,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
    inStock: true,
    rating: 4.6,
    reviews: 189
  },
  {
    name: 'Ceramic Knife Set',
    description: 'Professional chef knife set with ergonomic handles.',
    price: 59.99,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500',
    inStock: true,
    rating: 4.4,
    reviews: 334
  },
  {
    name: 'Electric Blender',
    description: 'High-speed blender with multiple settings for smoothies and more.',
    price: 99.99,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500',
    inStock: true,
    rating: 4.3,
    reviews: 201
  },
  {
    name: 'Bamboo Cutting Board Set',
    description: 'Eco-friendly bamboo cutting boards in three sizes.',
    price: 39.99,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=500',
    inStock: true,
    rating: 4.7,
    reviews: 412
  },

  // Sports & Outdoors
  {
    name: 'Yoga Mat Premium',
    description: 'Extra-thick yoga mat with non-slip surface and carrying strap.',
    price: 44.99,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500',
    inStock: true,
    rating: 4.6,
    reviews: 378
  },
  {
    name: 'Adjustable Dumbbells',
    description: 'Space-saving adjustable dumbbells with weight range 5-52 lbs.',
    price: 199.99,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500',
    inStock: true,
    rating: 4.8,
    reviews: 245
  },
  {
    name: 'Camping Tent 4-Person',
    description: 'Waterproof camping tent with easy setup and ventilation.',
    price: 159.99,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500',
    inStock: true,
    rating: 4.5,
    reviews: 167
  },
  {
    name: 'Mountain Bike Helmet',
    description: 'Lightweight bike helmet with adjustable fit and ventilation.',
    price: 54.99,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1557427161-4701a0fa506f?w=500',
    inStock: true,
    rating: 4.4,
    reviews: 298
  },
  {
    name: 'Hiking Backpack 40L',
    description: 'Durable hiking backpack with multiple compartments and rain cover.',
    price: 89.99,
    category: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500',
    inStock: true,
    rating: 4.7,
    reviews: 189
  },

  // Books
  {
    name: 'The Science of Success',
    description: 'Bestselling book on personal development and achieving goals.',
    price: 19.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
    inStock: true,
    rating: 4.6,
    reviews: 523
  },
  {
    name: 'Modern Web Development',
    description: 'Comprehensive guide to full-stack web development.',
    price: 49.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500',
    inStock: true,
    rating: 4.8,
    reviews: 312
  },
  {
    name: 'Mindfulness & Meditation',
    description: 'Practical guide to meditation and stress reduction techniques.',
    price: 16.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=500',
    inStock: true,
    rating: 4.5,
    reviews: 445
  },
  {
    name: 'Healthy Cooking 101',
    description: 'Cookbook with 200+ nutritious and delicious recipes.',
    price: 29.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500',
    inStock: true,
    rating: 4.7,
    reviews: 267
  },
  {
    name: 'Financial Freedom Guide',
    description: 'Step-by-step guide to managing finances and building wealth.',
    price: 24.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500',
    inStock: true,
    rating: 4.6,
    reviews: 389
  },

  // Beauty & Personal Care
  {
    name: 'Natural Face Serum',
    description: 'Organic vitamin C serum for radiant and youthful skin.',
    price: 34.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    inStock: true,
    rating: 4.5,
    reviews: 234
  },
  {
    name: 'Electric Toothbrush',
    description: 'Sonic electric toothbrush with multiple cleaning modes.',
    price: 69.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500',
    inStock: true,
    rating: 4.6,
    reviews: 456
  },
  {
    name: 'Hair Dryer Professional',
    description: 'Ionic hair dryer with multiple heat settings and diffuser.',
    price: 89.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500',
    inStock: true,
    rating: 4.4,
    reviews: 178
  },
  {
    name: 'Skincare Gift Set',
    description: 'Complete skincare set with cleanser, toner, and moisturizer.',
    price: 79.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    inStock: true,
    rating: 4.7,
    reviews: 345
  },
  {
    name: 'Essential Oils Set',
    description: 'Pure essential oils set with 10 popular scents and diffuser.',
    price: 44.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500',
    inStock: true,
    rating: 4.5,
    reviews: 289
  },

  // Toys & Games
  {
    name: 'LEGO Creative Building Set',
    description: '500+ pieces for endless creative building possibilities.',
    price: 59.99,
    category: 'Toys & Games',
    image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500',
    inStock: true,
    rating: 4.8,
    reviews: 567
  },
  {
    name: 'Board Game Collection',
    description: 'Classic family board game for 2-6 players.',
    price: 34.99,
    category: 'Toys & Games',
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500',
    inStock: true,
    rating: 4.6,
    reviews: 423
  },
  {
    name: 'RC Racing Car',
    description: 'Remote control car with high-speed performance and LED lights.',
    price: 79.99,
    category: 'Toys & Games',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500',
    inStock: true,
    rating: 4.5,
    reviews: 234
  },
  {
    name: 'Educational Science Kit',
    description: 'STEM learning kit with 30+ experiments for kids.',
    price: 49.99,
    category: 'Toys & Games',
    image: 'https://images.unsplash.com/photo-1564574623559-646197f2c8f1?w=500',
    inStock: true,
    rating: 4.7,
    reviews: 312
  },
  {
    name: 'Puzzle 1000 Pieces',
    description: 'Premium jigsaw puzzle with beautiful landscape artwork.',
    price: 24.99,
    category: 'Toys & Games',
    image: 'https://images.unsplash.com/photo-1566694271453-390536dd1f0d?w=500',
    inStock: true,
    rating: 4.4,
    reviews: 189
  },

  // Automotive
  {
    name: 'Car Phone Mount',
    description: 'Universal smartphone holder with adjustable grip and 360° rotation.',
    price: 19.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500',
    inStock: true,
    rating: 4.3,
    reviews: 267
  },
  {
    name: 'Dash Cam HD',
    description: 'Full HD dash camera with night vision and loop recording.',
    price: 89.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=500',
    inStock: true,
    rating: 4.5,
    reviews: 198
  },
  {
    name: 'Tire Pressure Gauge Digital',
    description: 'Accurate digital tire pressure gauge with LED display.',
    price: 14.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500',
    inStock: true,
    rating: 4.4,
    reviews: 145
  },
  {
    name: 'Car Vacuum Cleaner',
    description: 'Portable handheld vacuum with powerful suction for car interiors.',
    price: 39.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500',
    inStock: true,
    rating: 4.2,
    reviews: 223
  },
  {
    name: 'Jump Starter Power Bank',
    description: 'Portable jump starter with USB charging ports and flashlight.',
    price: 79.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1614359910845-5f1d96c59c3f?w=500',
    inStock: true,
    rating: 4.6,
    reviews: 178
  },

  // Pet Supplies
  {
    name: 'Automatic Pet Feeder',
    description: 'Programmable pet feeder with portion control and timer.',
    price: 69.99,
    category: 'Pet Supplies',
    image: 'https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=500',
    inStock: true,
    rating: 4.5,
    reviews: 289
  },
  {
    name: 'Dog Grooming Kit',
    description: 'Complete grooming set with clippers, scissors, and brushes.',
    price: 49.99,
    category: 'Pet Supplies',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500',
    inStock: true,
    rating: 4.4,
    reviews: 234
  },
  {
    name: 'Cat Scratching Post',
    description: 'Multi-level cat tree with scratching posts and hideaway.',
    price: 89.99,
    category: 'Pet Supplies',
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500',
    inStock: true,
    rating: 4.6,
    reviews: 312
  },
  {
    name: 'Pet Carrier Backpack',
    description: 'Comfortable pet carrier with ventilation and safety features.',
    price: 54.99,
    category: 'Pet Supplies',
    image: 'https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?w=500',
    inStock: true,
    rating: 4.5,
    reviews: 178
  },
  {
    name: 'Interactive Dog Toy Set',
    description: 'Durable chew toys and puzzle toys for mental stimulation.',
    price: 29.99,
    category: 'Pet Supplies',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500',
    inStock: true,
    rating: 4.7,
    reviews: 445
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log(`${products.length} products added successfully!`);

    console.log('\n✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
