import React, { useState, useEffect } from 'react'



export default ({ updated, tax = {}, dds = [], taxs = [] }) => {
    const [source, setSource] = useState(null)
    const [target, setTarget] = useState(null)
    const [time, setTime] = useState(null)
    const [plan, setPlan] = useState(null)
    
    const plans = [30, 60, 120]
    const sources = taxs.reduce((acc, tax) => {
        // if (!acc.find(value => value == tax.source)) {
        //     acc.push(tax.source)
        // }

        if (!acc.includes(tax.source)) {
            acc.push(tax.source)
        }

        return acc
    }, [])

    useEffect(() => {
        updated({
            source,
            target,
            time: Number(time),
            plan: Number(plan)
        })
    }, )

    useEffect(() => {
        setSource(tax.source)
        setTarget(tax.target)
    }, [tax])


    return (
        <>
            
            <form >
                <div className="form-group">
                    <label htmlFor="source">Origem</label>
                    <select  value={tax.source} name="source" id="source" className="form-control" onChange={e => setSource(e.target.value)}>
                        <option value="" >Ecolha... </option>
                        {sources.map(dd => (
                            <option key={dd} value={dd}>{dd}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="target">Destino</label>
                    <select value={tax.target} name="target" id="target" className="form-control" onChange={e => setTarget(e.target.value)}>
                        <option value="" >Ecolha... </option>
                        {dds.map(dd => (
                            <option key={dd} value={dd}>{dd}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="time">Minutos</label>
                    <input id="time" name="time" className="form-control" step='1' min="0" onChange={e => setTime(e.target.value)} type="number" />
                </div>
                <div className="form-group ">
                    <label htmlFor="plan">Falemais</label>
                    <select name="plan" id="plan" className="form-control" onChange={e => setPlan(e.target.value)}>
                        <option value="" >Ecolha... </option>
                        {plans.map(plan => (
                            <option key={plan} value={plan}>{plan}</option>
                        ))}
                    </select>
                </div>
                
            </form>

        </>
    )
}