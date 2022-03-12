import { Container, InputGroup, Card, Row, Col } from "react-bootstrap";

function CatItem(item) {

    const handleClick = (event) => {
        event.preventDefault();
        alert(item.name + " : " + item.description);
    }

    return (
        <>
            <Card.Body style={{ background: "lightgrey" }}>
                <hr />
                <Card.Title className="title">{item.name}</Card.Title>
                <hr />
                <Card.Text style={{ textAlign: "left", color: "black" }}>{item.description}</Card.Text>
                <a onClick={handleClick} style={{ background: "black" }} class="btn btn-outline-info ">Info</a>
            </Card.Body>
        </>
    )
}

export default CatItem;