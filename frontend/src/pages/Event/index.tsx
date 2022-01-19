import { useParams } from "react-router-dom";

const EventPage = () => {
   const params = useParams();

   return (
      <div>Event: { `${params.eventId}` }</div>
   );
}

export default EventPage;