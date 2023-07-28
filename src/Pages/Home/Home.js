import { useState, useEffect } from "react";
import axios from "axios";
// import classes from "./Home.module.css";
import HomeLayout from "../../components/Layout/HomeLayout";
import HomeHeader from "../../components/Layout/HomeHeader";
// import HomeFooter from "../../components/Layout/HomeFooter";
import HomeButton from "../../components/Button/HomeButton";
import HomeCard from "../../components/Card/HomeCard";
import See from "../../assets/view.gif";

const Home = (props) => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/", { withCredentials: true })
      // .get("http://kzrcgaexjh.us18.qoddiapp.com/", { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setMessage(res.data.Message);
        }
        setLoading(false);
      });
  }, []);

  return (
    <HomeLayout>
      <HomeHeader auth={auth} name={name} message={message} loading={loading} />
      <HomeButton />
      <HomeCard
        title="적금"
        description="어떤 적금 상품이 있을까?"
        icon={See}
      />
    </HomeLayout>
  );
};

export default Home;
