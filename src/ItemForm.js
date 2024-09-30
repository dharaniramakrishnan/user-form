import React, { useState } from 'react';
import itemImage from './item.jpg'; // Import the background image

const ItemForm = ({ addItem }) => {
  const [item, setItem] = useState({
    name: '',
    description: '',
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.name && item.description && item.quantity > 0) {
      addItem(item);
      setItem({ name: '', description: '', quantity: 1 });
    } else {
      alert('Please fill all fields and ensure quantity is greater than zero.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Add New Item</h2>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Description:</label>
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
          min="1"
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Add Item</button>
    </form>
  );
};

// Updated styles to include full background image
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${itemImage})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire form
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Prevent repetition of the image
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '320px',
    height: '400px', // Set a fixed height for the form
    margin: '20px auto',
    color: '#fff', // Change text color for visibility against the image
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    color: '#fff', // Change text color for visibility against the image
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    fontSize: '16px',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '12px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};

export default ItemForm;
