import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Get = () => {
    const url = 'http://dev-spis.newssalad.com:8081'
    const [param, setParam] = useState({
        page: 1,
        size: 3,
        keyword: '신세계푸드'
    })
    const [response, setResponse] = useState([])

    useEffect(()=> {
        axios.get(`${url}/news/realtime`,{params:param})
            .then(res => {
                console.log(res.data.data)
                setResponse(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='container'>
            <div className='title'>axios Get</div>

            {
                response && response.map((res)=>
                    <div className='newsContents'>
                        <div>{res.subject}</div>
                        <a href={res.url} target="_blank">{res.url}</a>
                    </div>
                )
            }



        </div>

    );
}

export default Get;
