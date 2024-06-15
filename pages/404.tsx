import { useRouter } from "next/router";

const ErrorPage = () => {
    const router = useRouter();
  return (
    <>
   
      <div className="error-container">
        <div className="error-content">
            <h1 className="error-title">Oops!</h1>
            <h2 className="error-code">404</h2>
            <p className="error-message">We can't seem to find the page you're looking for.</p>
            <a href="/" className="error-button">Go Home</a>
        </div>
    </div>
    </>
  );
}

export default ErrorPage;

