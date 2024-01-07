import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const secondaryColor = "#F8F8FA";
const primaryColor = "#7469D4";
const tertiaryColor = "#F2F1FB";

const data = [
  {
    title: "Classic Burger",
    image_url:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
    price: 9.99,
    category: "Main Course",
  },
  {
    title: "Margherita Pizza",
    image_url:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8fDB8fHww",
    price: 12.99,
    category: "Main Course",
  },
  {
    title: "Caesar Salad",
    image_url:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D",
    price: 8.49,
    category: "Appetizer",
  },
  {
    title: "Grilled Chicken Sandwich",
    image_url:
      "https://images.unsplash.com/photo-1604467707321-70d5ac45adda?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbiUyMHNhbmR3aWNofGVufDB8fDB8fHww",
    price: 11.99,
    category: "Main Course",
  },
  {
    title: "Chocolate Brownie Sundae",
    image_url:
      "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJvd25pZSUyMHN1bmRhZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 6.99,
    category: "Dessert",
  },
  {
    title: "Vegetable Spring Rolls",
    image_url:
      "https://images.unsplash.com/photo-1600850056064-a8b380df8395?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlJTIwc3ByaW5nJTIwcm9sbHN8ZW58MHx8MHx8fDA%3D",
    price: 7.99,
    category: "Appetizer",
  },
  {
    title: "Shrimp Scampi Pasta",
    image_url:
      "https://images.unsplash.com/photo-1529042355636-0f06afe127a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNocmltcCUyMHNjYW1waSUyMHBhc3RhfGVufDB8fDB8fHww",
    price: 15.99,
    category: "Main Course",
  },
  {
    title: "Caprese Salad",
    image_url:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwcmVzZSUyMHNhbGFkfGVufDB8fDB8fHww",
    price: 9.49,
    category: "Appetizer",
  },
  {
    title: "BBQ Chicken Pizza",
    image_url:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHBpenphfGVufDB8fDB8fHww",
    price: 13.99,
    category: "Main Course",
  },
  {
    title: "Cheesecake Slice",
    image_url:
      "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 5.99,
    category: "Dessert",
  },
  {
    title: "Spinach and Feta Stuffed Mushrooms",
    image_url:
      "https://plus.unsplash.com/premium_photo-1664299044809-49dfceba749a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0dWZmZWQlMjBtdXNocm9vbXN8ZW58MHx8MHx8fDA%3D",
    price: 8.99,
    category: "Appetizer",
  },
  {
    title: "Chicken Alfredo Pasta",
    image_url:
      "https://images.unsplash.com/photo-1673081849580-2d36a09c8a6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpY2tlbiUyMGFsZnJlZG8lMjBwYXN0YXxlbnwwfHwwfHx8MA%3D%3D",
    price: 14.99,
    category: "Main Course",
  },
  {
    title: "Caramel Apple Pie",
    image_url:
      "https://images.unsplash.com/photo-1570299792061-8b78ae15915f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyYW1lbCUyMGFwcGxlJTIwcGllfGVufDB8fDB8fHww",
    price: 7.99,
    category: "Dessert",
  },
  {
    title: "Garlic Bread",
    image_url:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D",
    price: 4.99,
    category: "Appetizer",
  },
  {
    title: "Tuna Melt Sandwich",
    image_url:
      "https://images.unsplash.com/photo-1672078857105-a1229a7033b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVuYSUyMHNhbmR3aWNoZXN8ZW58MHx8MHx8fDA%3D",
    price: 10.99,
    category: "Main Course",
  },
  {
    title: "Mango Sorbet",
    image_url:
      "https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuZ28lMjBzb3JiZXR8ZW58MHx8MHx8fDA%3D",
    price: 6.49,
    category: "Dessert",
  },
  {
    title: "Buffalo Chicken Wings",
    image_url:
      "https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVmZmFsbyUyMGNoaWNrZW4lMjB3aW5nc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 9.99,
    category: "Appetizer",
  },
  {
    title: "Beef and Broccoli Stir-Fry",
    image_url:
      "https://images.unsplash.com/photo-1644704265419-96ddaf628e71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVlZiUyMGFuZCUyMGJyb2Njb2xpfGVufDB8fDB8fHww",
    price: 12.49,
    category: "Main Course",
  },
  {
    title: "Key Lime Pie",
    image_url:
      "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGltZSUyMHBpZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 8.99,
    category: "Dessert",
  },
  {
    title: "Mozzarella Sticks",
    image_url:
      "https://images.unsplash.com/photo-1511357840105-748c95f0a7e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW96emFyZWxsYSUyMHN0aWNrc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 6.99,
    category: "Appetizer",
  },
];

function getUniqueCategories(arr) {
  let uniqueCategories = {};

  arr.forEach((item) => {
    uniqueCategories[item.category] = true;
  });

  return Object.keys(uniqueCategories);
}

const categories = getUniqueCategories(data);

export {
  width,
  height,
  secondaryColor,
  primaryColor,
  tertiaryColor,
  data,
  categories,
};
