// import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import Image from "next/image"
// import Link from "next/link";
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

// export const getStaticProps = async ()=>{
//     const res = await fetch(`https://fakestoreapi.com/products `);
//     const data = await res.json();
//     return{
//       props:{
//         data, 
//       }
//     };
//   };

// const index = ({data}) => {
//   return (
//     <>
//       <nav className="navbar">
//         <ul className="nav-item">
//             <Link href="/" legacyBehavior>
//                 <a>Home</a>
//             </Link>
//         </ul>
//         <ul className="nav-item">
//             < Link href="/About" legacyBehavior>
//                 <a>About</a>
//             </ Link>
//         </ul>
//         <ul className="nav-item" >
//             < Link href="/Contact" legacyBehavior>
//                 <a>Contact</a>
//             </ Link>
//         </ul>
//         <ul className="nav-item">
//             < Link href="/Blog" legacyBehavior>
//                 <a>Blog</a>
//             </ Link>
//         </ul>
//         <ul className="nav-item" >
//             <Link href="/Product" legacyBehavior>
//                 <a>Product</a>
//             </Link>
//         </ul>
//       </nav>
//     <div className="main">
//     {
//     data.map((curr: { image: string | StaticImport; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; id: any; })=>{
//       return <div className="card">
//         <div className="card-content">
//           <Image src={curr.image} alt="Card image" height="400" width="250" className="card-image"></Image>
//           <h2 className="card-title">{curr.title}</h2>
//           <p className="card-text">{curr.price}</p>
//           <Link href={`/${curr.id}`}><button className="card-button">Read More</button></Link>
//       </div>
//     </div>
//     })
//    }   
//    </div>
//    </>
//   )
// }

// export default index;

import { GetStaticProps, NextPage } from 'next';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  image: string | StaticImport;
  title: string;
  price: number;
}

interface Props {
  data: Product[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data: Product[] = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Index: NextPage<Props> = ({ data }) => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-item">
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </ul>
        <ul className="nav-item">
          <Link href="/About" legacyBehavior>
            <a>About</a>
          </Link>
        </ul>
        <ul className="nav-item">
          <Link href="/Contact" legacyBehavior>
            <a>Contact</a>
          </Link>
        </ul>
        <ul className="nav-item">
          <Link href="/Blog" legacyBehavior>
            <a>Blog</a>
          </Link>
        </ul>
        <ul className="nav-item">
          <Link href="/Product" legacyBehavior>
            <a>Product</a>
          </Link>
        </ul>
      </nav>
      <div className="main">
        {data.map((curr: Product) => (
          <div className="card" key={curr.id}>
            <div className="card-content">
              <Image src={curr.image} alt="Card image" height="400" width="250" className="card-image" />
              <h2 className="card-title">{curr.title}</h2>
              <p className="card-text">${curr.price}</p>
              <Link href={`/${curr.id}`}>
                <button className="card-button">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;


