import React from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Col } from 'react-bootstrap'

export const SearchForm = ({handleOnChange, str}) => {
    console.log(str)
    return (
        <div>
            <Form>
                <Form.Group as ={Row}>
                    <Form.Label column sm="2">Search :{" "} </Form.Label>
                    <Col sm="9">
                    <Form.Control 
                    name="searchStr"
                    placeholder="Search here ..."
                    onChange={handleOnChange}
                    value={str}

                    />
                    </Col>
                </Form.Group>
            </Form>
            
        </div>
    )
}

SearchForm.propTypesropTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}