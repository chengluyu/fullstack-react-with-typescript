import React from "react";
import PropTypes from "prop-types";

const App: React.FC<AppProps> = ({ name }) => <div>Hello, {name}!</div>;

App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;

export type AppProps = {
  name: string;
};
