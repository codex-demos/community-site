import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard'; // Adjust the import path based on your project structure
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Classifieds = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const itemsArray = [];
      querySnapshot.forEach((doc) => {
        itemsArray.push({ id: doc.id, ...doc.data() });
      });
      setItems(itemsArray);
    };

    fetchItems();
  }, []);
  return (
    <div className="classifieds-container">
      {items.map((item, index) => (
        <ItemCard
          key={index}
          item={item}
        />
      ))}
    </div>
  );
};
export default Classifieds;
