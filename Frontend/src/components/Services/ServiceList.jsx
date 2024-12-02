
<<<<<<< HEAD

=======
import React from 'react'
>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
import { services } from './../../assets/data/services'
import ServiceCard from './ServiceCard'

function ServiceList() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            {services.map((item, index) => (
                <ServiceCard item={item} index={index} key={index} />
            ))}
        </div>
    )
}

export default ServiceList