import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios'
import { FirebaseContext } from '../../contexts/firebase';
import Button from '../share/Button';

const SupplierForm = () => {
    const { register, errors } = useForm();
    const [formData, setFormData] = useState();
    const [error, setError] = useState(false);
    const [message, setMessage] = useState();
    const firebase = useContext(FirebaseContext);
    const updateInput = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
    }
    const sendEmail = () => {
		Axios.post(
			'https://us-central1-happy-readers-89709.cloudfunctions.net/submit',
			formData,
		)
			.then((res) => {
				if (res.status === 200) {
					firebase.cloudDB.collection('emails').add(formData)
					.then(res => setMessage("Form submited successfully"))
				}
			})
			.catch(err => setError("Form failed to sent. Please submit again"))
        }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            company: '',
            address: '',
            taxNumber: '',
            businessLicense: '',
            contactPerson: '',
            contactPosition: '',
            email: '',
            phone: '',
            productRange: '',
            tradeTerm: '',
            catalog: '',
            factoryInfo: ''
        });
        sendEmail();
    }
    return (
        <div className='bg-light py-lg-5'>
            <div className='container p-3 pd-5 bg-light'>
                <h2 className='text-center my-3 mt-md-5'>Supplier Form</h2>
                <p className='text-center mb-3 mb-md-5'>Please complete the following form if you are interested to be our supplier partner.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="company">Company</label>
                            <input
                                type="text"
                                className="form-control"
                                id="company"
                                name="company"
                                ref={register({
                                    required: "Company is required",
                                    maxLength: { value: 100, message: "Max 100 characters" },
                                    minLength: { value: 3, message: "Min 3 characters" }
                                })} />
                            {errors.company && <p className='error-message'>{errors.company.message}</p>}
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                ref={register({
                                    required: "Address is required",
                                    maxLength: { value: 200, message: "Max 200 characters" },
                                    minLength: { value: 10, message: "Min 10 characters" }
                                })} />
                            {errors.address && <p className='error-message'>{errors.address.message}</p>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="taxNumber">Tax Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="taxNumber"
                                name="taxNumber"
                                ref={register({
                                    required: "Tax number is required",
                                    maxLength: { value: 100, message: "Max 100 characters" },
                                    minLength: { value: 3, message: "Min 3 characters" }
                                })} />
                            {errors.tax && <p className='error-message'>{errors.tax.message}</p>}

                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="businessLicense">Business License</label>
                            <input
                                type="text"
                                className="form-control"
                                id="businessLicense"
                                name="businessLicense"
                                ref={register({
                                    required: "Business license is required",
                                    maxLength: { value: 100, message: "Max 100 characters" },
                                    minLength: { value: 3, message: "Min 3 characters" }
                                })} />
                            {errors.businessLicense && <p className='error-message'>{errors.businessLicense.message}</p>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="contactPerson">Contact Person</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactPerson"
                                name="contactPerson"
                                ref={register({
                                    required: "Contact person is required",
                                    maxLength: { value: 100, message: "Max 100 characters" },
                                    minLength: { value: 3, message: "Min 3 characters" }
                                })} />
                            {errors.contactPerson && <p className='error-message'>{errors.contactPerson.message}</p>}
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="contactPosition">Position</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactPosition"
                                name="contactPosition"
                                ref={register({
                                    required: "Position is required",
                                    maxLength: { value: 100, message: "Max 100 characters" },
                                    minLength: { value: 3, message: "Min 3 characters" }
                                })} />
                            {errors.contactPosition && <p className='error-message'>{errors.contactPosition.message}</p>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                ref={register({
                                    required: "Email is required",
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Please enter a valid email"
                                    }
                                })}
                            />
                            {errors.email && <p className='error-message'>{errors.email.message}</p>}
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                ref={register({
                                    required: "Phone number is required",
                                    maxLength: { value: 12, message: "Max 12 characters" },
                                    minLength: { value: 6, message: "Min 8 characters" }
                                })} />
                            {errors.phone && <p className='error-message'>{errors.phone.message}</p>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="productRange">Product range</label>
                            <input type="text" className="form-control" id="productRange" name="productRange" />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="phone">Monthly capacity</label>
                            <input type="text" className="form-control" id="phone" name="phone" />
                        </div>
                    </div>
                    <fieldset className="form-group mt-4">
                        <div className="row">
                            <legend className="col-form-label col-sm-3 pt-0">Trade Terms</legend>
                            <div className="col-sm-9">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="tradeTerm" id="FOB" value="FOB" />
                                    <label className="form-check-label" htmlFor="FOB">FOB</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="tradeTerm" id="CF" value="CF" />
                                    <label className="form-check-label" htmlFor="CF">C &amp; F</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="tradeTerm" id="CIF" value="CIF" />
                                    <label className="form-check-label" htmlFor="CIF">CIF</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="tradeTerm" id="otherTerm" />
                                    <label className="form-check-label" htmlFor="other-term">Others</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <label htmlFor="catalog">Upload your product catalog</label>
                        <input
                            type="file"
                            className="form-control-file"
                            name="catalog"
                            id="catalog"
                            ref={register({
                                required: "This is required"
                            })} />
                        {errors.catalog && <p className='error-message'>{errors.catalog.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="factoryInfo">Other information about your manufactories</label>
                        <textarea className="form-control" id="factoryInfo" name="factoryInfo" rows="8"></textarea>
                    </div>
                    <Button text='submit' />
                </form>
            </div>
        </div>
    );
}

export default SupplierForm;

