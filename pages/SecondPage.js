import React from "react";
import { useRouter } from "next/router";

const SecondPage = () => {
   const { query } = useRouter()

   return (
      <h1>Welcome to {query.content}</h1>
   )
}

export default SecondPage;