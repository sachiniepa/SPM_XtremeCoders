import React from "react";

export default () => {
  return (
    <footer className="footer">
      Copyright &copy;{" "}
      {new Date().getFullYear() +
        "/" +
        new Date().getMonth() +
        "/" +
        new Date().getDate()}{" "}
      SLIIT Internship Program
    </footer>
  );
};
