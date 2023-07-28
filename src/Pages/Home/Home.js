import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      // .get("http://localhost:8080/", { withCredentials: true })
      .get("http://kzrcgaexjh.us18.qoddiapp.com/", { withCredentials: true })
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
      {loading ? (
        <div>Loading...</div>
      ) : auth ? (
        <div>
          <h1>You are Authorized {name}</h1>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <h1>{message}</h1>
          <h1>You are not Authorized</h1>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
      <div className={classes.homeLayout}>
        <div className={classes.outerBox}>
          <div className={classes.startContainer}>
            {!loading && (
              <button
                className={classes.startTitle}
                onClick={() => navigate("/login")}
              >
                지금 바로
                <br />
                하나 메이트 시작하기
              </button>
            )}
          </div>
          <div className={classes.buttonContainer}>
            <div className={`${classes.homeButton} ${classes.button0}`}>
              용돈
            </div>
            <div className={`${classes.homeButton} ${classes.button1}`}></div>
            <div className={`${classes.homeButton} ${classes.button2}`}>
              대출
            </div>
            <div className={`${classes.homeButton} ${classes.button3}`}>
              모임통장
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
