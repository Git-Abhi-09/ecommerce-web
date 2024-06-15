
import Image from "next/image";

export const getStaticPaths = async ()=>{
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data.map((curr)=>{
    return{
      params:{
        pageNo : curr.id.toString()
      },
    }
  })

  return {
    paths,
    fallback:false,
  };
};

export const getStaticProps = async (context)=>{
  const id = context.params.pageNo;
  const res = await fetch(`https://fakestoreapi.com/products/${id} `);
  const data = await res.json();
  return{
    props:{
      val : data,
    }
  }
};

const moreInfo = ({val}) => {
  return (
    <>
       <div className="card">
        <div className="card-content">
      <Image src={val.image} alt="Card image" height="400" width="250" className="card-image"></Image>
          <h2 className="card-title"> Title : {val.title}</h2>
          <h3 className="card-text">price : {val.price}</h3>
          <p className="card-text">description : {val.description}</p>
          <h3 className="card-text">category : {val.category}`</h3>
          <h3 className="card-text">rating : {val.rating.rate}</h3>
          <h3 className="card-text">count : {val.rating.count}</h3>
      </div>
  </div>
    </>
  )
}

export default moreInfo;
