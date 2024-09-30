import React, { useState } from 'react';
import './App.css';
import ItemForm from './ItemForm';
import itemImage from './item.jpg'; // Import the background image

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div style={styles.appContainer}>
      <ItemForm addItem={addItem} />
      <div style={styles.itemList}>
        {items.map((item, index) => (
          <div key={index} style={styles.item}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Quantity: {item.quantity}</p>
            <button style={styles.deleteButton} onClick={() => deleteItem(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles for the App component
const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full height of the viewport
    backgroundImage: `url(${itemImage})`, // Set the background image
    backgroundSize: 'cover', // Cover the entire area
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Prevent repetition of the image
    padding: '20px', // Add some padding
    boxSizing: 'border-box', // Include padding in height calculations
  },
  itemList: {
    marginTop: '20px',
    width: '100%',
    maxWidth: '600px', // Set a max width for the item list
  },
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default App;
