import { Card } from "react-bootstrap";

const PizzasCard = ({ pokemon }) => {
    const { name, stats, image, types } = pizza;
    return (
        <Card
            style={{ width: "34rem" }}
            className="mt-5 mx-auto flex-row p-2"
        >
            <Card.Img
                height="300"
                variant="top"
                src={image}
            />
            <Card.Body>
                <Card.Title className="fw-bold">{name}</Card.Title>
                <ul className="text-left">
                    <Card.Text>
                        {stats?.map((stat, i) => (
                            <li key={i}>
                                {stat.name}: {stat.base}
                            </li>
                        ))}
                        {types?.map((type, i) => (
                            <li key={i}>{type.name}</li>
                        ))}
                    </Card.Text>
                </ul>
            </Card.Body>
        </Card>
    );
};

export default PizzasCard;