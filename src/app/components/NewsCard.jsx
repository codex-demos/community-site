import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NewsCard = ({ article }) => {
  return (
    <Card
      className="mb-4 shadow-lg max-w-md mx-auto"
      style={{ width: '18rem' }}
    >
      <Card.Img
        variant="top"
        src={article.image}
        alt="News Image"
        className="h-48 w-full object-cover"
      />
      <Card.Body>
        <Card.Title className="font-bold">{article.title}</Card.Title>
        <Card.Text className="text-sm">{article.description}</Card.Text>
        <Button
          variant="primary"
          href={article.url}
          target="_blank"
          className="mt-2"
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
