import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';  
  
class AddConsultant extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      first_name: '',  
      middle_name: '',  
      last_name: '',  
      mobile: '',  
      email_id: '',  
      alternate_email_id: '',  
      city: '',  
      state: '',  
      country: '',  
      will_relocate: '',  
      skype_id: '',  
      work_authorisation: '',  
      visa_validity_end_date: '',  
      expected_ctc: '',  
      current_ctc: '',  
      h1b_holder_name: '',  
      h1b_holder_contact_number: '',  
      years_of_experience: '',  
      no_of_years_holding_h1b: '',  
      green_card_applied: '',  
      green_card_status: '',  
      any_active_offers: '',  
      reason_for_change: '',
      notice_period: '',  
      constraints_to_join_new_offer: '',
    }  
  
    if (props.consultant.id) {  
      this.state = props.consultant  
    } else {  
      this.state = this.initialState;  
    }  
  
    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  
  }  
  
  handleChange(event) {  
    const name = event.target.name;  
    const value = event.target.value;  
  
    this.setState({  
      [name]: value  
    })  
  }  
  
  handleSubmit(event) {  
    event.preventDefault();  
    this.props.onFormSubmit(this.state);  
    this.setState(this.initialState);  
  }  
  render() {  
    let pageTitle;  
    let actionStatus;  
    if (this.state.id) {  
  
      pageTitle = <h2>Edit Consultantt</h2>  
      actionStatus = <b>Update</b>  
    } else {  
      pageTitle = <h2>Add Consultant</h2>  
      actionStatus = <b>Save</b>  
    }  
  
    return (  
      <div>        
        <h2> {pageTitle}</h2>  
        <Row>  
          <Col sm={7}>  
            <Form onSubmit={this.handleSubmit}>  
              <Form.Group controlId="FirstName">  
                <Form.Label>First Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="first_name"  
                  value={this.state.first_name}  
                  onChange={this.handleChange}  
                  placeholder="First Name" />  
              </Form.Group>
              <Form.Group controlId="MiddleNmae">  
                <Form.Label>Last Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="middle_name"  
                  value={this.state.middle_name}  
                  onChange={this.handleChange}  
                  placeholder="Middle Name" />  
              </Form.Group>   
              <Form.Group controlId="LastName">  
                <Form.Label>Last Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="last_name"  
                  value={this.state.last_name}  
                  onChange={this.handleChange}  
                  placeholder="Last Name" />  
              </Form.Group>  
              <Form.Group controlId="EmailId">  
                <Form.Label>EmailId</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="email_id"  
                  value={this.state.email_id}  
                  onChange={this.handleChange}  
                  placeholder="EmailId" />  
              </Form.Group>  
              <Form.Group controlId="MobileNo">  
                <Form.Label>MobileNo</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="mobile"  
                  value={this.state.mobile}  
                  onChange={this.handleChange}  
                  placeholder="MobileNo" />  
              </Form.Group>  
              <Form.Group controlId="City">  
                <Form.Label>City</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="city"  
                  value={this.state.city}  
                  onChange={this.handleChange}  
                  placeholder="City" />  
              </Form.Group>  
              <Form.Group controlId="State">  
                <Form.Label>State</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="state"  
                  value={this.state.state}  
                  onChange={this.handleChange}  
                  placeholder="state" />  
              </Form.Group> 
              <Form.Group controlId="country">  
                <Form.Label>Country</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="country"  
                  value={this.state.country}  
                  onChange={this.handleChange}  
                  placeholder="country" />  
              </Form.Group> 
  
              <Form.Group controlId="PinCode">  
                <Form.Label>PinCode</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="PinCode"  
                  value={this.state.PinCode}  
                  onChange={this.handleChange}  
                  placeholder="PinCode" />  
              </Form.Group>  
              <Form.Group>  
                <Form.Control type="hidden" name="UserId" value={this.state.UserId} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
  
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
  }  
}  
  
export default AddConsultant; 