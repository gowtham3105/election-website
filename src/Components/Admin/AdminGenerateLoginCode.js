import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const AdminGenerateLoginCode = ({
	isSigned,
	isAdmin,
	isModerator,
	tokenId,
}) => {
	return <div>

        <Container>
            <Row>
                <Col>
                    <h1>Generate Login Code</h1>
                </Col>

            </Row>
        </Container>
    </div>;
};
