import { useState, useEffect, Suspense } from 'react';
import { Linechart } from '../graphs/lineChart'
import { Scene } from './threeBenefits'
import './benefits.css';

function Benefits({ scooby }) {
    return (
        <div className="benefitsContainer">
            {
                !scooby ?
                <h1 style={{ fontSize: 40 }}>Reap the benefits of warehouse automation</h1>
                :
                null
            }
                    {
                        scooby ?
            <div className='benfitisInfoContainerScooby'>
                <div className='graphContainer' >

                            <Suspense fallback={<h1>Loading profile...</h1>}>
                                <Scene />
                            </Suspense>
                
                </div>
                <div className='benifitsInfo'>
                    <h1 className='headerInfo'>100%+ Scooby Accuracy</h1>
                    <p className='info'>
                        Human-led cycle count accuracy has<br />been capped at "99%" for decades. With<br />Ware, eclipse the status quo and get<br />picture-perfect cycle counts every time.
                    </p>
                </div>
            </div>
            :
            <div className='benfitisInfoContainer'>
                <div className='graphContainer' >
                            <Linechart />
                </div>
                <div className='benifitsInfo'>
                    <h1 className='headerInfo'>99%+ Accuracy</h1>
                    <p className='info'>
                        Human-led cycle count accuracy has<br />been capped at "99%" for decades. With<br />Ware, eclipse the status quo and get<br />picture-perfect cycle counts every time.
                    </p>
                </div>
            </div>
}
        </div>
    );
}

export default Benefits;
