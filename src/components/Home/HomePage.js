import videoHomepage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  console.log("accout:", account);
  console.log("isAuthenticated:", isAuthenticated);

  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-hero">There's a better way to ask</div>
        <div className="desc-hero">
          You don't want to make a boring form.And your audience won't answer
          one. Create a typeform instead-and make every happy.
        </div>
        <div className="btn-hero">
          <button>Get's started. It's free</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
