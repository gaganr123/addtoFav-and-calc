import React, { useState, useEffect } from "react";

const Test = () => {
  // { author, programming, name }
  //   alerting();
  const [details, setDetails] = useState({
    name: "",
    job: "",
  });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDetails({
        name: "gagan",
        job: "Developer",
      });
      setLoader(!loader);
    }, 2000);
  }, []);
  const unpdatDetails = () => {
    setDetails({
      //   name: "Change-name",
      //   job: "change job",
      ...details,
      name: "indu",
    });
  };
  return (
    <div className="text-center mt-3">
      {/* Test {author} and {programming.toString()} {name} */}
      {loader ? (
        <p>loading...</p>
      ) : (
        <p>
          Hello,i am {details.name} and i worked as a {details.job}
        </p>
      )}
      <div>
        <button className="btn btn-danger" onClick={unpdatDetails}>
          update state
        </button>
      </div>
    </div>
  );
};
// Test.defaultProps = {
//   name: "hero",
// };
export default Test;
