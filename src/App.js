import React from "react";
import { hot } from "react-hot-loader/root";
import { Button } from "@wordpress/components";
import apiFetch from "@wordpress/api-fetch";
import Posts from "./components/Posts";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}!</h1>

        <Button type="submit" isPrimary={true}>
          This is WordPress Button
        </Button>

        <Posts />
      </>
    );
  }
}

export default hot(App);
