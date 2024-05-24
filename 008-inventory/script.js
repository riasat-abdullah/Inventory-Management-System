// Initial products data
let products = [
  {
    name: 'Laptop',
    quantity: 10,
    price: 800,
    vendor: 'Dell',
    category: 'Electronics',
  },
  {
    name: 'Phone',
    quantity: 25,
    price: 500,
    vendor: 'Samsung',
    category: 'Electronics',
  },
  {
    name: 'Desk Chair',
    quantity: 15,
    price: 150,
    vendor: 'Ikea',
    category: 'Furniture',
  },
];

// Function to render products
function renderProducts() {
  const productTableBody = document.getElementById('productTableBody');
  productTableBody.innerHTML = '';

  products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="py-2 px-4 border-b text-center">${product.name}</td>
      <td class="py-2 px-4 border-b text-center">${product.quantity}</td>
      <td class="py-2 px-4 border-b text-center">${product.price}</td>
      <td class="py-2 px-4 border-b text-center">${product.vendor}</td>
      <td class="py-2 px-4 border-b text-center">${product.category}</td>
      <td class="py-2 px-4 border-b text-center">
        <button onclick="editProduct(${index})" class="bg-yellow-500 text-white p-2 rounded">Edit</button>
        <button onclick="deleteProduct(${index})" class="bg-red-500 text-white p-2 rounded">Delete</button>
      </td>
    `;
    productTableBody.appendChild(row);
  });
}

// Function to add or edit a product
function saveProduct(event) {
  event.preventDefault();
  const productId = document.getElementById('productId').value;
  const productName = document.getElementById('productName').value;
  const productQuantity = document.getElementById('productQuantity').value;
  const productPrice = document.getElementById('productPrice').value;
  const productVendor = document.getElementById('productVendor').value;
  const productCategory = document.getElementById('productCategory').value;

  const product = {
    name: productName,
    quantity: productQuantity,
    price: productPrice,
    vendor: productVendor,
    category: productCategory,
  };

  if (productId) {
    products[productId] = product;
  } else {
    products.push(product);
  }

  renderProducts();
  document.getElementById('productForm').reset();
}

// Function to populate form fields for editing
function editProduct(index) {
  const product = products[index];
  document.getElementById('productId').value = index;
  document.getElementById('productName').value = product.name;
  document.getElementById('productQuantity').value = product.quantity;
  document.getElementById('productPrice').value = product.price;
  document.getElementById('productVendor').value = product.vendor;
  document.getElementById('productCategory').value = product.category;
}

// Function to delete a product
function deleteProduct(index) {
  products.splice(index, 1);
  renderProducts();
}

// Initial render
renderProducts();
// Event listener for form submission
document.getElementById('productForm').addEventListener('submit', saveProduct);
