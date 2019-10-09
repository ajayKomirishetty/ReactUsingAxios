import React from 'react';
import { Table,Button } from 'react-bootstrap';  

import axios from 'axios';  
  
const apiUrl = 'http://localhost:3000/api/v1';  

class ConsultantsList extends React.Component{
  constructor(props){  
    super(props);  
    this.state = {  
       error:null,  
       consultants:[],  
       response: {}  
          
    }  
}  

componentDidMount(){  
   axios.get(apiUrl + '/consultants').then(response => response.data).then(  
        (result)=>{  
            this.setState({  
                consultants:result  
            });  
        },  
        (error)=>{  
            this.setState({error});  
        }  
    )  
}  

  
deleteConsultant(ConsultantId) {  
  const { consultants } = this.state;     
 axios.delete(apiUrl + '/consultants/' + ConsultantId).then(result=>{  
   alert(result.data);  
    this.setState({  
      response:result,  
      consultants:consultants.filter(consultant=>consultant.Id !== ConsultantId)  
    });  
  });  
}  

render(){         
    const{error,consultants}=this.state;  
    if(error){  
        return(  
            <div>Error:{error.message}</div>  
        )  
    }  
    else  
    {  
        return(  
     <div>  
                  
              <Table>  
                <thead className="btn-primary">  
                  <tr>  
                    <th>First Name</th>  
                    <th>Last Name</th>  
                    <th>EmailId</th>  
                    <th>MobileNo</th>  
                    <th>Address</th>  
                    <th>PinCode</th>  
                    <th>Action</th>  
                  </tr>  
                </thead>  
                <tbody>  
                  {consultants.map(consultant => (  
                    <tr key={consultant.id}>  
                      <td>{consultant.first_name}</td>  
                      <td>{consultant.last_name}</td>  
                      <td>{consultant.email_id}</td>  
                      <td>{consultant.mobile}</td>  
                      <td>{consultant.Address}</td>  
                      <td><Button variant="info" onClick={() => this.props.editConsultant(consultant.id)}>Edit</Button>       
                      <Button variant="danger" onClick={() => this.deleteConsultant(consultant.id)}>Delete</Button>  
                      
                      </td>  
                    </tr>  
                  ))}  
                </tbody>  
              </Table>  
            </div>  
          )  
    }  
}  
}  

export default ConsultantsList;  