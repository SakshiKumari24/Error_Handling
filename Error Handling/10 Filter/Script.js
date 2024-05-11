function filterProductsByCategory(products) {
    
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  const products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pant", category: "Clothing" },
    { name: "T-Shirt", category: "Clothing" },
    { name: "Sneakers", category: "Clothing" }
  ];
  
  const filterByCategory = filterProductsByCategory(products)
  
  const clothingProducts = filterByCategory("Clothing");
  console.log("Clothing Products:", clothingProducts);
  