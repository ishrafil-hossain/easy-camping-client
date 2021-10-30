import React from 'react';
import './Safety.css'

const Sefety = () => {
    return (
        <div className="mt-5 mb-3">
            <h2 className="text-info">Safety partners</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-2 mb-5">

                <div className="col">
                    <div className="card border rounded-3 shadow p-3 mb-5 safety-card h-100 text-start">
                        <h3>Recreate Responsibly</h3>
                        <ol>
                            <li>Know before you go</li>
                            <li>Practice physical distancing</li>
                            <li>Plan ahead</li>
                            <li>Play it safe</li>
                            <li>Explore locally</li>
                        </ol>
                    </div>
                </div >
                <div className="col">
                    <div className="card border rounded-3 shadow p-3 mb-5 safety-card h-100 text-start">
                        <h3>Leave No Trace</h3>
                        <ol>
                            <li>Plan ahead and prepare</li>
                            <li>Travel and camp on durable surfaces</li>
                            <li>Plan ahead</li>
                            <li>Dispose of waste properly</li>
                            <li>Respect wildlife</li>
                        </ol>
                    </div>
                </div >
                <div className="col">
                    <div className="card border rounded-3 shadow p-3 mb-5 safety-card h-100 text-start">
                        <h3>National Weather Service</h3>
                        <p>We integrate with the National Weather Service to provide valuable fire advisories to Hosts and Hipcampers. Real-time Red Flag Warnings and Fire Weather Watch Warnings help keep our community safe.</p>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Sefety;