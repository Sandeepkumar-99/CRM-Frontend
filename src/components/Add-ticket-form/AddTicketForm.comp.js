import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import PropTypes from "prop-types"



export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDt, frmErrData}) => {
    console.log(frmDt);
    return (
        <div className='jumbotron'>
            <h1 className='text-info text-center'>Add New Ticket</h1>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label>Subject*</Form.Label>
                        <Col sm ={9}>
                        <Form.Control 
                        name="subject"
                        value={frmDt.subject}
                        onChange={handleOnChange}
                        placeholder="Enter Subject Line"
                        required 
                        />
                        <Form.Text className='text-danger'>{frmErrData.subject && "Subject is Required"}</Form.Text>
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Row}>
                        <Form.Label>Issue Date*</Form.Label>
                        <Col sm ={9}>
                        <Form.Control 
                        type="date"
                        name="issueDate"
                        value={frmDt.issueDate}
                        onChange={handleOnChange}
                        required 
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description*</Form.Label>
                        <Col sm ={9}>
                        <Form.Control 
                        
                        as ="textarea"
                        name = "detail"
                        value={frmDt.detail}
                        rows="5"
                        onChange={handleOnChange}
                        required 
                        />
                        </Col>
                    </Form.Group>
                    <br></br>
                    <Button type="Submit" variant='info'> Create Ticket </Button>
                </Form>
        </div>
    )
}

AddTicketForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
};