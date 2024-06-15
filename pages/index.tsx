import Image from "next/image"
import Link from "next/link";

export const getStaticProps = async ()=>{
    const res = await fetch(`https://fakestoreapi.com/products `);
    const data = await res.json();
    return{
      props:{
        val : data,
      }
    };
  };

const index = ({val}) => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-item">
            <Link href="/" legacyBehavior>
                <a>Home</a>
            </Link>
        </ul>
        <ul className="nav-item">
            < Link href="/About" legacyBehavior>
                <a>About</a>
            </ Link>
        </ul>
        <ul className="nav-item" >
            < Link href="/Contact" legacyBehavior>
                <a>Contact</a>
            </ Link>
        </ul>
        <ul className="nav-item">
            < Link href="/Blog" legacyBehavior>
                <a>Blog</a>
            </ Link>
        </ul>
        <ul className="nav-item" >
            <Link href="/Product" legacyBehavior>
                <a>Product</a>
            </Link>
        </ul>
      </nav>
    <div className="main">
    {
    val.map((curr)=>{
      return <div className="card">
        <div className="card-content">
          <Image src={curr.image} alt="Card image" height="400" width="250" className="card-image"></Image>
          <h2 className="card-title">{curr.title}</h2>
          <p className="card-text">{curr.price}</p>
          <Link href={`/${curr.id}`}><button className="card-button">Read More</button></Link>
      </div>
    </div>
    })
   }   
   </div>
   </>
  )
}

export default index;
