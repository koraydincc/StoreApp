import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CampaignItem = () => {
  const campaign = [
    {
      id: 1,
      imgUrl: 'img/campaigns/banner1.png',
      title: 'Kampanya 1',
      description: 'Bu kampanya hakkında açıklama 1.',
    },
    {
      id: 2,
      imgUrl: 'img/campaigns/banner2.png',
      title: 'Kampanya 2',
      description: 'Bu kampanya hakkında açıklama 2.',
    },
    {
      id: 3,
      imgUrl: 'img/campaigns/banner3.png',
      title: 'Kampanya 3',
      description: 'Bu kampanya hakkında açıklama 3.',
    },
    {
      id: 4,
      imgUrl: 'img/campaigns/banner4.png',
      title: 'Kampanya 4',
      description: 'Bu kampanya hakkında açıklama 4.',
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
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CampaignItem;
