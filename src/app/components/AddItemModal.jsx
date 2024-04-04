import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth } from 'firebase/auth'; // Import for Firebase auth
import { db } from '../firebaseConfig'; // Import your Firebase config file
import { collection, addDoc } from 'firebase/firestore';

const AddItemModal = ({ show, handleClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');

  // Get the current user's ID from Firebase Authentication
  const auth = getAuth();
  const userId = auth.currentUser ? auth.currentUser.uid : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      console.error('No user logged in');
      return;
    }
    try {
      const docRef = await addDoc(collection(db, 'items'), {
        title,
        description,
        price,
        category,
        condition,
        // Include the user's ID
        userId,
      });
      console.log('Document written with ID:', docRef.id);
      handleClose();
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="itemTitle"
          >
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter item title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="itemDescription"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter item description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="itemPrice"
          >
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter item price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="itemCategory"
          >
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter item category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="itemCondition"
          >
            <Form.Label>Condition</Form.Label>
            <Form.Select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              required
            >
              <option value="">Select condition</option>
              <option value="New">New</option>
              <option value="Used - Like New">Used - Like New</option>
              <option value="Used - Good">Used - Good</option>
              <option value="Used - Acceptable">Used - Acceptable</option>
            </Form.Select>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddItemModal;
