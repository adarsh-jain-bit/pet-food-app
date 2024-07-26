"use client"
import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    product_name: '',
    product_price: 0,
    product_oldprice: 0,
    product_description: '',
    product_category: '',
    product_brand: '',
    stock: 0,
    // images: null
  });


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({
      ...form,
      [name]: type === 'number' ? parseFloat(value) : type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product_name', form.product_name);
    formData.append('product_price', form.product_price);
    formData.append('product_oldprice', form.product_oldprice);
    formData.append('product_description', form.product_description);
    formData.append('product_category', form.product_category);
    formData.append('product_brand', form.product_brand);
    formData.append('stock', form.stock);
console.log(formData)
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        body: formData,
      });
    console.log("res" , res)
      if (res.ok) {
        const data = await res.json();
        console.log('Product added:', data);
        setForm({
          product_name: '',
          product_price: 0,
          product_oldprice: 0,
          product_description: '',
          product_category: '',
          product_brand: '',
          stock: 0,
        });
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Failed to add product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="product_name"
        placeholder="Product Name"
        value={form.product_name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="product_price"
        placeholder="Product Price"
        value={form.product_price}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="product_oldprice"
        placeholder="Product Old Price"
        value={form.product_oldprice}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="product_description"
        placeholder="Product Description"
        value={form.product_description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="product_category"
        placeholder="Product Category"
        value={form.product_category}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="product_brand"
        placeholder="Product Brand"
        value={form.product_brand}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={form.stock}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}
