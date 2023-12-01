// // HTML-ში შექმენით ელემენტი, სადაც გენერირებული HTML იქნება დაწერილი
// const container = document.getElementById('product-container');

// // Fetch-ის გამოყენება
// fetch('https://fakestoreapi.com/products')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // მონაცემების მოსაქმედებლად forEach ციკლი
//     data.forEach(product => {
//       // შექმენით HTML ელემენტები და ჩასამართებლად მისამართები
//       const productDiv = document.createElement('div');
//       const image = document.createElement('img');
//       const rating = document.createElement('p');

//       // მონაცემების ჩამონათვალი
//       image.src = product.image;
//       rating.textContent = `Rating: ${product.rating.rate}`;

//       // HTML ელემენტების ჩამატება container-ში
//       productDiv.appendChild(image);
//       productDiv.appendChild(rating);
//       container.appendChild(productDiv);
//     });
//   })
//   .catch(error => {
//     console.error('Fetch error:', error);
//   });


 // Fetch data and render products
 function fetchDataAndRenderProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        renderProducts(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }

  // Render products to the product container
  function renderProducts(products) {
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      const image = document.createElement('img');
      image.src = product.image;
      productCard.appendChild(image);

      const title = document.createElement('h3');
      title.textContent = product.title;
      productCard.appendChild(title);

      const price = document.createElement('p');
      price.textContent = `$${product.price}`;
      productCard.appendChild(price);

      productContainer.appendChild(productCard);
    });
  }

  // Call the fetchDataAndRenderProducts function when the page loads
  window.onload = fetchDataAndRenderProducts;
  
