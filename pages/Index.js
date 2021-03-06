import React from "react";
import Link from 'next/link'
import GetLink from "../SharedComponents/DynamicRouter";

// Routing in Next.js

/*
function MyComponent(){
  return(
    <div>
        <p>Hello from Next.js!</p>
        <Link href='/About'>
          <a>About</a>
        </Link>
    </div>
  );
}
*/

// Dynamic Pages

function MyComponent() {
  return (
    <div>
      <GetLink title='Page 1'></GetLink>
      <GetLink title='Page 2'></GetLink>
      <GetLink title='Page 3'></GetLink>
    </div>
  );
}

export default MyComponent;