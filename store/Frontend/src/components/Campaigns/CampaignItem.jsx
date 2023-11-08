import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const CampaignItem = () => {
  const campaign = [
    {
      id: 1,
      imgUrl: 'img/campaigns/banner1.png',
      title: "New Season Sale",
   
    },
    {
      id: 2,
      imgUrl: 'img/campaigns/banner2.png',
      title: "New Season Sale",
    
    },
    {
      id: 3,
      imgUrl: 'img/campaigns/banner3.png',
      title: "New Season Sale",

    },
    {
      id: 4,
      imgUrl: 'img/campaigns/banner4.png',
      title: "New Season Sale",
   
    },
  ];

  return (
    <Row xs={1} md={2} className="g-4">
      {campaign.map((item) => (
        <Col key={item.id}>
          <Card>
            <Card.Img variant="top" src={item.imgUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
            
              <Card.Text><Button variant="outline-success">Go To Campaign</Button></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CampaignItem;
