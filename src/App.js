import React from "react";
import { hot } from "react-hot-loader/root";
import { Button } from "@wordpress/components";
import Posts from "./components/Posts";

function App({ name }) {
  return (
    <>
      <h1>Hello {name}!</h1>

      <Button type="submit" isPrimary={true}>
        This is a Button Component
      </Button>

      <Posts />
    </>
  );
}

export default hot(App);
