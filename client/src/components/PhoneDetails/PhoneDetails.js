import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';
import Loading from "../Loading/Loading";
import PhoneList from "../PhoneList/PhoneList";
import { Link } from "react-router-dom";
import './PhoneDetails.css';

function PhoneDetails() {
    const { id } = useParams();
    const [phoneDetails, setPhoneDetails] = useState({});
    const [loading, setLoading] = useState(true);

    const API_URL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        axios
            .get(`${API_URL}/api/phones/${id}`)
            .then(response => {
                setPhoneDetails(response.data)
                console.log("Phone details:", response.data);
            })
            .catch(err => { console.log(err); });

            return () => {
                clearTimeout(loadingTimeout);
            };
    }, [id])


        return(
            <div className="phone-details-container">
                {loading ? (
                    <Loading />
                ) : (
                    <div>
                        <img src={`/assest/images/${phoneDetails[0].imageFileName}`} alt={phoneDetails[0].name} className="phone-details-image" />
                        <h1 className="phone-details-name">{phoneDetails[0].name}</h1>
                        <p className="phone-details-manufacturer">From:{phoneDetails[0].manufacturer}</p>
                        <p className="phone-details-description">{phoneDetails[0].description}</p>
                        <p className="phone-details-price">${phoneDetails[0].price}</p>
                        <p className="phone-details-screen">Screen: {phoneDetails[0].screen}</p>
                        <p className="phone-details-processor">Processor: {phoneDetails[0].processor}</p>
                        <p className="phone-details-ram">RAM: {phoneDetails[0].ram} GB</p>
                    </div>
                )}
                <Link to='/' className="back-link">Back to Phone List</Link>
            </div>
        )
    }

export default PhoneDetails;
