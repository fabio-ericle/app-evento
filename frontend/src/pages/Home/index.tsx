import EventCard from "../../components/EventCard";
import './styles.css';

const HomePage = () => {
   return (
      <div className="container">
         <div className="row">
            {
               [1, 2, 3, 4, 5].map((e, k) => (
                  <div key={k} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                     <EventCard />
                  </div>
               ))
            }
         </div>
      </div>
   );
}

export default HomePage;