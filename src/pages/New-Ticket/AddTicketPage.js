import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../components/Add-ticket-form/AddTicketForm.comp'
import { ShortText } from '../../utils/validation'

const initialFrmDt={
    subject: " ",
    issueDate: " ",
    detail: " ",
};

const initialFrmErrDt={
    subject: false,
    issueDate: false,
    detail: false,
};

export const AddTicket = () => {

    const[frmData, setFrmData] = useState(initialFrmDt);
    const[frmErrData, setFrmErrData] = useState(initialFrmErrDt);
    useEffect(() => {}, [frmData], [frmErrData]);

    const handleOnChange = e =>{
        const {name, value} = e.target;
        setFrmData({
             ...frmData,
             [name]: value,
        });
    };

    const handleOnSubmit = async (e) =>{
        e.preventDefault();

        setFrmErrData(initialFrmErrDt)

        const isSubjectValid = await ShortText(frmData.subject)

        setFrmErrData({
            ...initialFrmErrDt,
            subject: !isSubjectValid,
        });

        console.log("Form Submitted", frmData);
    }


    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                <AddTicketForm 
                handleOnChange={handleOnChange} 
                frmDt = {frmData}
                frmErrData = {frmErrData} 
                handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>


        </Container>
    )
}