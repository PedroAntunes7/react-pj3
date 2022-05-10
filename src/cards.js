import './cards.css'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Cards = () => {
    return(

<>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    Exelencia por onde passamos, nossa estrategia de trabalho é especifica, bla bla bla...
Exelencia por onde passamos, nossa estrategia de trabalho é especifica, bla bla bla...
Exelencia por onde passamos, nossa estrategia de trabalho é especifica, bla bla bla...
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card className="col-4" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
Exelencia por onde passamos, nossa estrategia de trabalho é especifica, bla bla bla...
Exelencia por onde passamos, nossa estrategia de trabalho é especifica, bla bla bla...
Exelencia por onde passamos, nossa estrategia de trabalho é especifica, bla bla bla...
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

</>
    )
}

export default Cards