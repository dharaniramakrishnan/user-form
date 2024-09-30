import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div style={styles.listContainer}>
      <h2 style={styles.heading}>Item List</h2>
      {items.length === 0 ? (
        <p style={styles.emptyMessage}>No items added yet.</p>
      ) : (
        <ul style={styles.list}>
          {items.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <div style={styles.itemDetails}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
              </div>
              <span style={styles.quantity}>x{item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  listContainer: {
    width: '400px',
    margin: '20px auto',
    padding: '20px',
    background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#343a40',
    fontSize: '24px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px',
    backgroundColor: '#e9ecef',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  itemDetails: {
    flex: 1,
  },
  quantity: {
    backgroundColor: '#6c757d',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '14px',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#868e96',
  },
};

export default ItemList;
