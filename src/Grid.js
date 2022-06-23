import Card from './Card';
import {useState,useEffect} from 'react';
import Load from './pages/Load';


const Grid = (props) => {
    const [data,setData] = useState([]);
    const getData = async () => {
        let newData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=54d622d860034f938e32eca4d66e2256`);
        props.setProgress(60);
        let res = await newData.json();
        setData(res.articles);
        props.setProgress(70);
        setTimeout(() => {
        props.setProgress(100);
        },2000);
    }
    useEffect(() => {
        props.setProgress(30);
        getData();
    },[]);
    return (
        <>
          <div className="mt-4 w-screen py-4 overflow-hidden">
            <div className="container mx-auto px-4 myclass">
              {
                (data.length > 0) ? (data.map((item,index)=> {
                    return <Card id={index} date={item.publishedAt} name={item.source.name} url={item.url} title={item.title} img={item.urlToImage} description={item.description}/>
                })) : <div><Load/><Load/><Load/></div>
              }
            </div>
          </div>
        </>
    );
}

export default Grid;