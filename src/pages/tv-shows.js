import React, { useState } from 'react'
import One from './one'
import { AppContext } from '../appContext'
function TvShows() {
    const [state, setState] = useState(40)
    return (
        <div className="container" style={{ marginTop: '40px', color: 'white' }}>
            {console.log("tv shows")}
            <h2 style={{ color: 'white' }}>Tv shows</h2>
            <AppContext.Provider value={{ data: state }}>
                <One ></One>
            </AppContext.Provider>
        </div>
    )
}

export default TvShows
