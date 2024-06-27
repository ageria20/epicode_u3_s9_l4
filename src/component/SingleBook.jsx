import { Col, Button, Card, Badge } from "react-bootstrap"


const SingleBook = (props) =>{
    return (
        
        
            <Col className="mx-auto">
            <Card className="shadow" style={{width: "20rem"}} key={props.asin}> 
            <Card.Img variant="top" src={props.img} style={{aspectRatio: "3/4"}}/>
            <Card.Body>
              <Card.Title className="text-truncate">{props.title}</Card.Title>
              <Card.Text>
                    {props.category}
              </Card.Text>
              <Button variant="primary">
                Buy <Badge bg="secondary">${props.price}</Badge>
                <span className="visually-hidden"></span>
             </Button>
               
            </Card.Body>
          </Card>
          </Col>
    )
}
export default SingleBook