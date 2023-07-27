import { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080", { withCredentials: true })
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
          <button>Login</button>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
