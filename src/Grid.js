import Card from './Card';
import {useState,useEffect} from 'react';
import Load from './pages/Load';


const Grid = (props) => {
    const [data,setData] = useState([]);
    const {setProgress} = props;
    const getData = async () => {
        let newData = await fetch(`https://news-api-backend.vercel.app/`);
        setProgress(60);
        let res = await newData.json();
        setData(res.articles);
        setProgress(70);
        setTimeout(() => {
        setProgress(100);
        },2000);
    }
    useEffect(() => {
        setProgress(30);
        getData();
    },[]);
    return (
        <>
          <div className="mt-4 w-screen py-4 overflow-hidden">
            <div className="container mx-auto px-4 myclass flex flex-wrap justify-center">
              {
                (data.length > 0) ? (data.map((item,index)=> {
                    return <Card id={index} date={item.publishedAt} name={item.source.name} url={item.url} title={item.title} img={item.urlToImage} description={item.description}/>
                })) : <div className='w-full h-auto flex flex-wrap justify-center'><Load/><Load/><Load/><Load/><Load/><Load/><Load/><Load/></div>
              }
            </div>
          </div>
        </>
    );
}

export default Grid;
