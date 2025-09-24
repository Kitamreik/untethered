import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <hr />
        <br />
        <div className="mb-8 p-8 md:p-12 text-center">
        
          <Link
              to="/"
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80"
          >
              Back to Home
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default NotFound;
