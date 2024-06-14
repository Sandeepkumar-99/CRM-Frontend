import React from "react";
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from "react-bootstrap";



export const LoginForm = ({handleOnChange, handleOnSubmit, formSwitcher, email, password}) => {
    return(
        <Container>
            <Row>
                <Col>
                <h1>Client Login</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address*</Form.Label>
                        <Form.Control 
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter Email"
                        required 
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Password*</Form.Label>
                        <Form.Control 
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        placeholder="password"
                        required 
                        />
                    </Form.Group>
                    <br></br>
                    <Button type="Submit">Login</Button>
                </Form>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                <a href="#!" onClick={() => formSwitcher('reset')}>Forgot Password?</a>
                </Col>
            </Row>
        </Container>
        
        
    );
};

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};