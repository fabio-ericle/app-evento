import { Link } from "react-router-dom";
import './styles.css';

const EventCard = () => {
   return (
      <div className="container-card">
         <h3>Title</h3>
         <h4>20/40</h4>
         <h4>descrição</h4>
         <Link to={"/aq"}>
            <a className="btn btn-primary">Entrar</a>
         </Link>
      </div>
   );
}

export default EventCard;