import React from 'react'

export default function card() {
    return (
        <div>
            const {name,bio,ident,image,fn}=props

return (
    <div>

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={props.image} />
<Card.Body>
<Card.Title></Card.Title>
<Card.Text>
  the card's content.
</Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
<ListGroupItem>{props.name}</ListGroupItem>
<ListGroupItem>{props.bio}</ListGroupItem>
<ListGroupItem>{props.ident}</ListGroupItem>
</ListGroup>
<Card.Body>
<>
{/*onClick={()=>fn(name)} */}
<Button variant="secondary" onClick={()=>fn(name)} size="lg" active>
click me!
</Button>
</>
</Card.Body>
</Card>

        </div>
    )
}
