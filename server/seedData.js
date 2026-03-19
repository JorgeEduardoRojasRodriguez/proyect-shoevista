import mongoose from "mongoose";
import dotenv from "dotenv";
import Products from "./models/productModel.js";

dotenv.config();

const products = [
  {
    img: "/GenInfo/adidas.jpg",
    brand: "Adidas",
    title: "Adidas Ultraboost 22 Running Shoes",
    rating: 4.5,
    reviews: 1250,
    sellPrice: 2499,
    orders: "5000",
    mrp: "3999",
    discount: 38,
    category: "men"
  },
  {
    img: "/GenInfo/nike.png",
    brand: "Nike",
    title: "Nike Air Max 270 Sport Sneakers",
    rating: 4.7,
    reviews: 2100,
    sellPrice: 2899,
    orders: "7500",
    mrp: "4499",
    discount: 36,
    category: "men"
  },
  {
    img: "/GenInfo/puma.jpg",
    brand: "Puma",
    title: "Puma RS-X Bold Athletic Shoes",
    rating: 4.3,
    reviews: 890,
    sellPrice: 1999,
    orders: "3200",
    mrp: "3299",
    discount: 39,
    category: "men"
  },
  {
    img: "/GenInfo/skechers.jpg",
    brand: "Skechers",
    title: "Skechers Go Walk Max Walking Shoes",
    rating: 4.6,
    reviews: 1540,
    sellPrice: 2199,
    orders: "4800",
    mrp: "3599",
    discount: 39,
    category: "men"
  },
  {
    img: "/GenInfo/adidas.jpg",
    brand: "Adidas",
    title: "Adidas Stan Smith Classic Sneakers",
    rating: 4.8,
    reviews: 3200,
    sellPrice: 2299,
    orders: "9000",
    mrp: "3799",
    discount: 39,
    category: "women"
  },
  {
    img: "/GenInfo/nike.png",
    brand: "Nike",
    title: "Nike React Infinity Run Flyknit",
    rating: 4.6,
    reviews: 1870,
    sellPrice: 2699,
    orders: "6200",
    mrp: "4299",
    discount: 37,
    category: "women"
  },
  {
    img: "/GenInfo/puma.jpg",
    brand: "Puma",
    title: "Puma Cali Sport Heritage Sneakers",
    rating: 4.4,
    reviews: 1120,
    sellPrice: 2099,
    orders: "3900",
    mrp: "3499",
    discount: 40,
    category: "women"
  },
  {
    img: "/GenInfo/skechers.jpg",
    brand: "Skechers",
    title: "Skechers D'Lites Memory Foam Shoes",
    rating: 4.5,
    reviews: 2340,
    sellPrice: 1899,
    orders: "5600",
    mrp: "3199",
    discount: 41,
    category: "women"
  },
  {
    img: "/GenInfo/adidas.jpg",
    brand: "Adidas",
    title: "Adidas Superstar Kids Sneakers",
    rating: 4.7,
    reviews: 980,
    sellPrice: 1599,
    orders: "4100",
    mrp: "2599",
    discount: 38,
    category: "child"
  },
  {
    img: "/GenInfo/nike.png",
    brand: "Nike",
    title: "Nike Revolution 6 Kids Running Shoes",
    rating: 4.5,
    reviews: 1450,
    sellPrice: 1799,
    orders: "5300",
    mrp: "2899",
    discount: 38,
    category: "child"
  },
  {
    img: "/GenInfo/puma.jpg",
    brand: "Puma",
    title: "Puma Suede Classic Kids Shoes",
    rating: 4.4,
    reviews: 760,
    sellPrice: 1499,
    orders: "2800",
    mrp: "2499",
    discount: 40,
    category: "child"
  },
  {
    img: "/GenInfo/skechers.jpg",
    brand: "Skechers",
    title: "Skechers Twinkle Toes Kids Light-Up Shoes",
    rating: 4.8,
    reviews: 2100,
    sellPrice: 1699,
    orders: "6700",
    mrp: "2799",
    discount: 39,
    category: "child"
  },
  {
    img: "/GenInfo/adidas.jpg",
    brand: "Adidas",
    title: "Adidas NMD R1 Urban Sneakers",
    rating: 4.6,
    reviews: 1680,
    sellPrice: 2799,
    orders: "5900",
    mrp: "4499",
    discount: 38,
    category: "men"
  },
  {
    img: "/GenInfo/nike.png",
    brand: "Nike",
    title: "Nike Pegasus 39 Trail Running Shoes",
    rating: 4.7,
    reviews: 2450,
    sellPrice: 2999,
    orders: "8100",
    mrp: "4799",
    discount: 38,
    category: "men"
  },
  {
    img: "/GenInfo/puma.jpg",
    brand: "Puma",
    title: "Puma Future Rider Play On Sneakers",
    rating: 4.3,
    reviews: 920,
    sellPrice: 2199,
    orders: "3500",
    mrp: "3699",
    discount: 41,
    category: "women"
  },
  {
    img: "/GenInfo/skechers.jpg",
    brand: "Skechers",
    title: "Skechers Max Cushioning Elite",
    rating: 4.6,
    reviews: 1890,
    sellPrice: 2399,
    orders: "5200",
    mrp: "3899",
    discount: 38,
    category: "women"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Products.deleteMany({});
    console.log("Cleared existing products");

    await Products.insertMany(products);
    console.log(`Added ${products.length} products`);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
