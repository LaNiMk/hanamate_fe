import { Fragment, useState, useEffect } from "react";
import axios from "axios";
// import classes from "./Home.module.css";
import HomeTitle from "../../components/Layout/HomeTitle";
import HomeButtonBox from "../../components/Button/HomeButtonBox";
import HomeCardBox from "../../components/Card/HomeCardBox";
import Footer from "../../components/Layout/Footer";

const Home = (props) => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://hanamate.onrender.com/", { withCredentials: true })
      // .get("http://localhost:8080/", { withCredentials: true })
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
    <Fragment>
      {/* {auth && <Header title="Home" />} */}
      {/* <Header title="Home" /> */}
      <HomeTitle auth={auth} name={name} message={message} loading={loading} />
      <HomeButtonBox />
      <HomeCardBox />
      <Footer />
    </Fragment>
  );
};

export default Home;
