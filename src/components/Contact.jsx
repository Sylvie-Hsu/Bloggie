import React from "react";

const Contact = props => {
  console.log(props);
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);
  return (
    <div className="container">
      <h4 className="center" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quam ut
        veritatis at quae dolorem dicta ea harum nesciunt placeat cumque, quia
        dolore earum odit sunt facere, laudantium vitae? Neque?
      </p>
    </div>
  );
};

export default Contact;
