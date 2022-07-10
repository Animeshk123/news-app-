import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Load from './Load';

const Info = (props) => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const getData = async () => {
        let newData = await fetch(`http://localhost:3030/`);
        props.setProgress(60);
        let res = await newData.json();
        props.setProgress(70);
        setData(res.articles[id]);
        setTimeout(() => {
            props.setProgress(100);
        }, 2000);
    }

    useEffect(() => {
        props.setProgress(30);
        getData()
    },[]);
    return (
        <>{<div className="container mx-auto px-4 mt-6">
            <img className="rounded-md bg-gray-500 object-cover object-center" src={data.urlToImage}/>
            <h1 className="mt-4 font-bold text-xl">{data.title}</h1>
            <p className="mt-4">{data.description}</p>
            <p className="mt-2">{data.content}</p>
            <a href={data.url} className="mt-4 block text-blue-500">Read More..</a>
          </div>}
        </>

    );
}

export default Info;
