import React, {useState} from 'react'

const YarnComponent = () => {

    const [type, setType] = useState('')
    const [color, setColor] = useState('')
    const [weight, setWeight] = useState('')

    function saveYarn(Event) {
        Event.preventDefault()

        const yarn = {type, color, weight}
        console.log('Yarn => ' + JSON.stringify(yarn))
    }

    return (
        <div className={'container'}>
            <br/> <br/>
            <div className={'row'}>
                <div className={'card col-md-6 offset-md-3 offset-md-3'}>
                    <h2 className={'text-center'}>Add Yarn</h2>
                    <div className={'card-body'}>
                        <form>
                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Type:</label>
                                <input
                                    type={'text'}
                                    placeholder={'Enter type of yarn'}
                                    name={'type'}
                                    className={'form-control'}
                                    value={type}
                                    onChange={(Event) => setType(Event.target.value)}
                                />
                            </div>

                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Color:</label>
                                <input
                                    type={'text'}
                                    placeholder={'Enter color of yarn'}
                                    name={'color'}
                                    className={'form-control'}
                                    value={color}
                                    onChange={(Event) => setColor(Event.target.value)}
                                />
                            </div>

                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Weight in grams (g):</label>
                                <input
                                    type={'number'}
                                    placeholder={'Enter weight of yarn'}
                                    name={'weight'}
                                    className={'form-control'}
                                    value={weight}
                                    onChange={(Event) => setWeight(Event.target.value)}
                                />
                            </div>
                                <button className={'btn btn-success'} onClick={saveYarn}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default YarnComponent
