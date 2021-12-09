import React, { useEffect, useState, useRef } from 'react'
import './rowpost.css';
import Youtube from 'react-youtube';
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constant';
import ScrollMenu from 'react-horizontal-scrolling-menu';
function Rowpost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch((err) => {
            console.log("network error found");
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            }
            else {
                console.log("video not found");
            }
        }).catch((err) => {
            console.log("error found. this video not availble");
        })
    }
    const scrollLeft = (e) => {
        let oldScroll = scrollDiv.current.scrollLeft;
        scrollDiv.current.scrollLeft = oldScroll - 300;
    }
    const scrollRight = (e) => {
        let oldScroll = scrollDiv.current.scrollLeft;
        scrollDiv.current.scrollLeft = oldScroll + 300;
    }
    const scrollDiv = useRef();

    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div className="row-content" >

                <div onClick={scrollLeft} className="arrows">
                    <div className="leftarrow"><div className="icon"><i className="fa fa-angle-left"></i></div></div>
                </div>

                <div className="posters" ref={scrollDiv}>
                    {movies.map((obj) =>
                        <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="posters" />
                    )}
                </div>

                <div onClick={scrollRight} className="arrows">
                    <div className="rightarrow"><div className="icon"><i className="fa fa-angle-right"></i></div></div>
                </div>

            </div>


            { urlId && <Youtube opts={opts} videoId={urlId.key} />}
        </div >
    )
}

export default Rowpost
