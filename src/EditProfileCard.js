import React from 'react';
import './css/EditProfileCard.css';
import {Link} from 'react-router-dom';
import credit_card_logo from './assets/icons/credit_card_logo.png';
import Form from 'react-bootstrap/Form';

class EditProfileCard extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="edit-profile-card-container">
				<div className="row pt-2">
					<div className="col-3 ml-4">
						<h1>Edit Profile</h1>
					</div>
					<div className="col-2"></div>
					<Link to="/edit_profile_shipping"className=" button col-2 ">	
						<h2 className="text-center pt-1">Shipping</h2>
					</Link>

					<Link to="/edit_profile_billing" className=" button col-2 ml-2 ">
						<h2 className="my-auto text-center pt-1">Billing</h2>
					</Link>

					<Link className="button col-2 ml-2  ">
						<h2 className="my-auto text-center pt-1">Card</h2>
					</Link>
				</div>

				<div className="row pt-2">
					<div className="col-6 ml-5">
						<img src={credit_card_logo} />
					</div>
					
					<div className="col-4 pt-4">
						<div className="row">
							<form>
								<input
									type="text"
									placeholder="Card Holder"
									className="text-area-right"
								/>
							</form>
						</div>
						<div className="row pt-3">
							<form>
								<input
									type="text"
									placeholder="Card Number"
									className="text-area-right"
								/>
							</form>
						</div>
						<div className="row pt-3">
							<form>
								<input
									type="text"
									placeholder="MM/YY"
									className="text-area-right"
								/>
							</form>
						</div>
						<div className="row pt-3">
							<form>
								<input
									type="text"
									placeholder="CVV"
									className="text-area-right"
								/>
							</form>
						</div>
					</div>



				</div>
				
				<div className="row pt-5">
					<div className="col-8"></div>
					<div className="col-1 ml-5">
						<Link to="/profile" className="button-text" style={{ textDecoration: 'none' }}>Close</Link>
					</div>
					<div className="col-2 ml-4">
						<Link to="/profile" className="button-text" style={{ textDecoration: 'none' }}>Save</Link>
					</div>
					


				</div>

				
			</div>
		);
	}

}

export default EditProfileCard;