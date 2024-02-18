import React, {useEffect, useState} from 'react'
import {listYarns} from "../services/YarnService.js";
import {useNavigate} from "react-router-dom";

const ListYarnComponent = () => {

    const [yarns, setYarns] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        listYarns().then((response) => {
            setYarns(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }, []);

    function addNewYarn() {
        navigate('/addYarn')
    }

    return (
        <div>
            <h2 className={'text-center'}> List of Yarn</h2>
            <button className={'btn btn-primary'} onClick={addNewYarn}>Add Yarn</button>
            <table style={{ margin: '0 auto', width: '70%' }} className={'table table-striped table-bordered'}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Color</th>
                    <th>Weight</th>
                </tr>
                </thead>
                <tbody>
                {
                    yarns.map(
                        yarn =>
                            <tr key={yarn.id}>
                                <td>{yarn.id}</td>
                                <td>{yarn.type}</td>
                                <td>{yarn.color}</td>
                                <td>{yarn.weight}</td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
export default ListYarnComponent