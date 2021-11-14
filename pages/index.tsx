import { useReducer, useState, useEffect } from "react";
import Layout from "../components/Layout";
import webSocket from "../utils/websocket";

const IndexPage = () => {

  return (
    <Layout title="Home">
      <div className="w-1/2 mx-auto mt-52">
        <p className="text-white text-3xl font-bold">You don’t have a channel selected</p>
        <p className="text-gray-300">Choose one from your existing channels</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
