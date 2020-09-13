import React, { useEffect, useState } from "react";
import axios from "axios";
function Index() {
  const [coolMsg, setCoolMsg] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    axios.get("/api/getData").then(({ data }) => {
      console.log("r:", data);
      setCoolMsg(data);
    });
  }, []);

  async function onSubmit() {
    try {
      const { data } = await axios.post("/api/postData", { test: "is cool" });
      console.log("data:", data);
    } catch (error) {
      console.log("error:", error.response.data.cool);
      // console.log("error:", error.response.data);
      setError(error.response.data.cool);
    }
  }

  return (
    <div>
      <div className="text">{coolMsg}</div>
      {error && <h3 className="error">{error}</h3>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return onSubmit();
        }}
      >
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Index;
