import React,{useContext} from 'react'
import { AppContext } from '../appContext'
function Two(props) {
    const {data} = useContext(AppContext);
    return (
        <div>
            <h3>Two {data}</h3>
        </div>
    )
}

export default Two
