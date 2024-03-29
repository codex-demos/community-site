import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '24px',
    margin: '10px 0',
  },
  text: {
    fontSize: '16px',
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

// The WelcomeBanner component
const WelcomeBanner = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Welcome to Our Community Marketplace!</h2>
      <p style={styles.text}>
        Our platform is designed to bring the community together by allowing you
        to easily buy and sell items. Whether you're looking to declutter your
        home or find treasures, our marketplace is here for you.
      </p>
      <p style={styles.text}>
        Why wait? Join us now and start sharing your items with your neighbors.
        It's easy, fast, and convenient.
      </p>
      <button style={styles.button}>Sell Your Stuff</button>
    </div>
  );
};

export default WelcomeBanner;
