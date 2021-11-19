import React from 'react';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export function SetInterval(props){
  const [intervalMs, setIntervalMs] = React.useState()

  const handleSubmit =  (e) => {
    localStorage.setItem('pollingInterval', intervalMs)
  };

return   <>
            <Form onSubmit={handleSubmit}v>
                <Form.Group as={Col} controlId="routerId">
                        <Form.Label style={{textAlign: 'left', fontWeight: 'bold'}}>Polling Interval ({localStorage.getItem('pollingInterval')}ms + 5ish)</Form.Label>
                        <Form.Control className="mb-3" size="sm"  onChange={e => setIntervalMs(e.target.value)} placeholder="Interval Ms ex. 10000" name="interval" style={{textAlign: 'left', fontWeight: 'bold'}}/>
                </Form.Group>
                <Col xl={4}>
                    <Form.Control type="submit" value="Change" className="btn btn-success btn-sm mb-3"/>
                </Col>
            </Form>
        </>
             
  }
    