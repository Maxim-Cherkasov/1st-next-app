import React from "react";
import Link from 'next/link'

function GetLink(props) {
   return (
      <div>
         <Link href={`/SecondPage?content=${props.title}`}
            as={props.Disp}>
            <a>{props.title}</a>
         </Link>
      </div>
   );
}

export default GetLink;