import React from 'react'
import './Login.css';
import ReactDOM from "react-dom/client";

export default function Login () {
    var [formData, setFormData] = React.useState({
        email: '',
        name:'',
        address:'',
        address2:'',
        city:'',
        province: 'not selected',
        postalCode:''
    })
    //var [x,setX] = useState(0)
    const province = ["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Nova Scotia","Ontario","Prince Edward Island","Quebec","Saskatchewan"]
    const onValueChange = (event) =>{
        // console.log(event.target.value)
        setFormData({...formData,[event.target.name] : event.target.value})
        
    }
    
    const onSubmitForm = (event) =>{
        event.preventDefault()
        console.log("Form submitted " + JSON.stringify(formData))
        const result = ReactDOM.createRoot(document.getElementById('submissionResult'))
        result.render(
            <div className='result'>
                <p>Email: {formData.email}</p>
                <p>Full Name: {formData.name}</p>
                <p>Address: {formData.address} {formData.address2}</p>
                <p>City: {formData.city}</p>
                <p>Province: {formData.province}</p>
                <p>Postal Code: {formData.postalCode}</p>
            </div>
        )
    }
    return (
        <>
            <form onSubmit={(e)=>onSubmitForm(e)}>
                <h2>Login form</h2>
                <div className='row'>
                    <label>Email</label>
                    <input
                        name='email'
                        type="text"
                        onChange={onValueChange}
                        placeholder="Enter Email"/>
                    <label>Full Name</label>
                    <input
                        name='name'
                        type="text"
                        onChange={onValueChange}
                        placeholder="Enter Full Name"/>
                </div>
                <div className='row'>
                    <label>Address</label>
                    <input
                    name='address'
                    type="text"
                    onChange={onValueChange}
                    placeholder="1234 Main St"/>
                </div>
                <div className='row'>
                    <label>Address2</label>
                    <input
                    name='address2'
                    type="text"
                    onChange={onValueChange}
                    placeholder="Apartment, studio, or floor"/>
                </div>

                <div className='row'>
                    <label>City</label>
                    <input
                    name='city'
                    type="text"
                    onChange={onValueChange}
                    placeholder="Enter City"/>
                    <label>Province</label>
                    <select name="provinces" onChange={(e)=>{onValueChange(e)}}>
                        <option key="not selected" value="not selected">not selected</option>
                        {
                            province.map((province)=>(
                                <option key={province} value={province}>{province}</option>
                            ))
                        }
                    </select>
                    <label>Postal Code</label>
                    <input
                    name='postalCode'
                    type="text"
                    onChange={onValueChange}
                    placeholder="Enter Postal Code"/>
                </div>
                <div className='row agree'>
                    <div>
                        <input
                        name='email'
                        type="checkbox"
                        onChange={onValueChange}/>
                        <label >Agree terms and conditions</label><br></br>
                    </div>
                    
                </div>
                
                <input type="submit" value="Login" className='btn'/>
            </form>
            <div id='submissionResult'>

            </div>
            
        </>
      
    )
}
