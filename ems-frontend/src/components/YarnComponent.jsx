import React, {useEffect, useState} from 'react'
import {createYarn, getYarnById, updateYarn} from "../services/YarnService.js";
import {useNavigate, useParams} from "react-router-dom";

const YarnComponent = () => {

    const [type, setType] = useState('')
    const [color, setColor] = useState('')
    const [weight, setWeight] = useState('')

    const {id} = useParams();
    const [errors, setErrors] = useState({
        type: '',
        color: '',
        weight: ''
    })

    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getYarnById(id).then((response) => {
                setType(response.data.type);
                setColor(response.data.color);
                setWeight(response.data.weight);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])


    function saveOrUpdateYarn(Event) {
        Event.preventDefault()

        if(validateForm()){

            const yarn = {type, color, weight}
            console.log('Yarn => ' + JSON.stringify(yarn))

            if(id) {
                updateYarn(id, yarn).then((response) => {
                    console.log(response.data)
                    navigate('/yarns')
                }).catch((error) => {
                    console.error(error);
                })
            } else {
                createYarn(yarn).then((response) => {
                    console.log('Yarn added successfully')
                    navigate('/yarns')
                }).catch((error) => {
                    console.error('Error while adding yarn')
                })
            }
        }
    }

    function validateForm(){
        let valid = true

        const errorsCopy = {...errors}

        if(type.trim()) {
            errorsCopy.type = '';
        } else {
            errorsCopy.type = 'Type is required';
            valid = false;
        }

        if(color.trim()) {
            errorsCopy.color = '';
        } else {
            errorsCopy.color = 'Color is required';
            valid = false;
        }

        if(weight.trim()) {
            errorsCopy.weight = '';
        } else {
            errorsCopy.weight = 'Weight is required';
            valid = false;
        }

        setErrors(errorsCopy)
        return valid
    }

    function pageTitle() {
        if(id) {
            return <h2 className={'text-center'}>Update Yarn</h2>
        } else {
            return <h2 className={'text-center'}>Add Yarn</h2>
        }
    }

    return (
        <div className={'container'}>
            <br/> <br/>
            <div className={'row'}>
                <div className={'card col-md-6 offset-md-3 offset-md-3'}>
                    {pageTitle()}
                    <div className={'card-body'}>
                        <form>
                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Type:</label>
                                <input
                                    type={'text'}
                                    placeholder={'Enter type of yarn'}
                                    name={'type'}
                                    className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                                    value={type}
                                    onChange={(Event) => setType(Event.target.value)}
                                />
                                {errors.type && <div className={'invalid-feedback'}>{errors.type}</div>}
                            </div>

                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Color:</label>
                                <input
                                    type={'text'}
                                    placeholder={'Enter color of yarn'}
                                    name={'color'}
                                    className={`form-control ${errors.color ? 'is-invalid' : ''}`}
                                    value={color}
                                    onChange={(Event) => setColor(Event.target.value)}
                                />
                                {errors.color && <div className={'invalid-feedback'}>{errors.color}</div>}
                            </div>

                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Weight in grams (g):</label>
                                <input
                                    type={'number'}
                                    placeholder={'Enter weight of yarn'}
                                    name={'weight'}
                                    className={`form-control ${errors.weight ? 'is-invalid' : ''}`}
                                    value={weight}
                                    onChange={(Event) => setWeight(Event.target.value)}
                                />
                                {errors.weight && <div className={'invalid-feedback'}>{errors.weight}</div>}
                            </div>
                                <button className={'btn btn-success'} onClick={saveOrUpdateYarn}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default YarnComponent
