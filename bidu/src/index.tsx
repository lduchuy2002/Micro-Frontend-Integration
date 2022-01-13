import React from 'react';

export default function () {
    return(
        <div className="container row py-5">
            {
                'BIDU ECOMMERCE APP'.split(' ').map((s,index)=>(
                    <div className="card col-md-4" key={index}>
                        <div className="card-header">
                            <h4 className="card-title text-center">{s}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}