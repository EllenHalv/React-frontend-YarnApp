import React, {useEffect, useState} from 'react'
import {deleteYarn, listYarns} from "../services/YarnService.js";
import {useNavigate} from "react-router-dom";

const ListYarnComponent = () => {

    const [yarns, setYarns] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        getAllYarns();
    }, []);

    function getAllYarns() {
        listYarns().then((response) => {
            setYarns(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }

    function addNewYarn() {
        navigate('/addYarn')
    }

    function updateYarn(id) {
        navigate(`/updateYarn/${id}`)
    }

    function removeYarn(id) {
        console.log(id);

        deleteYarn(id).then((response) => {
            getAllYarns();
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <h2 className={'text-center'}> List of Yarn</h2>
            <br/> <br/>
            <button className={'btn btn-primary'} onClick={addNewYarn}
                    style={{marginLeft: '800px'}}>Add Yarn</button>
            <br/> <br/>
            <table style={{ margin: '0 auto', width: '40%' }} className={'table table-striped table-bordered'}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Color</th>
                    <th style={{ width: '100px' }}>Weight</th>
                    <th style={{ width: '200px' }}>Actions</th>
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
                                <td>
                                    <button className={'btn btn-info'} onClick={() => updateYarn(yarn.id)}>Update</button>
                                    <button className={'btn btn-danger'} onClick={() => removeYarn(yarn.id)}
                                        style={{marginLeft: '10px'}}>Delete</button>
                                </td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
export default ListYarnComponent