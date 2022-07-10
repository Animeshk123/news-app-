import {NavLink} from 'react-router-dom';
import moment from 'moment';


const Card = (props) => {
    return (
        <NavLink to={`/info/${props.id}`}>
        <div className="w-full max-w-sm break-inside-avoid shadow-lg bg-white rounded-md p-3 mb-4">
         <img loading="lazy" className='bg-slate-400 w-full h-44 object-cover object-center rounded-sm' src={props.img} alt="preview"/>
         <h1 className="font-semibold capitalize text-xl py-2">{props.title}</h1>
         <p className='capitalize'>{props.description}</p>
         <div className="flex items-center justify-between mt-4">
          <a href={props.url}><p className="text-blue-600">{props.name}</p></a>
          <p>{moment(props.date).format("MMM Do YY")}</p>
         </div>
        </div>
        </NavLink>
    );
}

export default Card;
