import React, { Component } from 'react';  
  
import { Container, Button } from 'react-bootstrap';  
import ConsultantsList from './ConsultantsList';  
import AddConsultant from './AddConsultant';  
import axios from 'axios';  
const apiUrl = 'http://localhost:3000/api/v1/';  
  
class ConsultantActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddConsltant: false,  
      error: null,  
      response: {},  
      consultantData: {},  
      isEditConsultant: false,  
      isConsultantDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddConsltant: true });  
    this.setState({ isConsultantDetails: false });  
  }  
  onDetails() {  
    this.setState({ isConsultantDetails: true });  
    this.setState({ isAddConsltant: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddConsltant: true });  
    this.setState({ isConsultantDetails: false });  
    if (this.state.isEditConsultant) {  
     axios.put(apiUrl + 'consultants/'+data.id,data).then(result => {  
      // alert(result.data);  
        this.setState({  
          response:result,    
          isAddConsltant: false,  
          isEditConsultant: false  
        })  
      });  
    } else {  
     
     axios.post(apiUrl + 'consultants',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddConsltant: false,  
          isEditConsultant: false  
        })  
      });  
    }  
    
  }  
  
  editConsultant = id => {  
  
    this.setState({ isConsultantDetails: false });  
   axios.put(apiUrl + "consultants/" + id).then(result => {  
  
        this.setState({  
          isEditConsultant: true,  
          isAddConsltant: true,  
          consultantData: result.data           
        });  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let consultantForm;  
    if (this.state.isAddConsltant || this.state.isEditConsultant) {  
  
      consultantForm = <AddConsultant onFormSubmit={this.onFormSubmit} consultant={this.state.consultantData} />  
       
    }  
    return (  
      <div className="App">  
 <Container>  
        <h1 style={{ textAlign: 'center' }}>Welcome to meson Technologies</h1>  
        <hr></hr>  
        {!this.state.isConsultantDetails && <Button variant="primary" onClick={() => this.onDetails()}> Consultant Details</Button>}  
        {!this.state.isAddConsltant && <Button variant="primary" onClick={() => this.onCreate()}>Add Consultant</Button>}  
        <br></br>  
        {!this.state.isAddConsltant && <ConsultantsList editConsultant={this.editConsultant} />}  
        {consultantForm}  
        </Container>  
      </div>  
    );  
  }  
}  
export default ConsultantActionApp; 