import React from 'react'
import TimeAvailabilityCard from './TimeAvailabilityCard'
import TimeSelect from './TimeSelect'


function FormikControl(props) {
    const {control, ...rest } = props
    switch(control){
        case 'timeAvailabilityCard': return <TimeAvailabilityCard {...rest}/>
        case 'timeSelect': return <TimeSelect {...rest}/>
        
        default: return null
    
        
    }
  
}

export default FormikControl