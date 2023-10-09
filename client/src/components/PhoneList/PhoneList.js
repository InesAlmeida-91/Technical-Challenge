import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import './PhoneList.css';

function PhoneList() {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        axios
            .get(`${API_URL}/api/phones`)
            .then(response => {
                setPhones(response.data)
            })
            .catch(err => { console.log(err); });

            return () => {
                clearTimeout(loadingTimeout);
            };
    }, [])


    return(
        <>
            <h1 className="phone-list-heading">Phone List</h1>
            <div className="phone-list-container">
                {loading ? (
                    <Loading />
                ) : (
                    <ul className="phone-list">
                        {phones.map((phone) => (
                            <li key={phone.id} className="phone-list-item">
                                <Link to={`/phone/${phone.id}`} className="phone-list-link">
                                    {phone.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default PhoneList;