import { useSelector } from "react-redux";
import Header from "../../components/FormHeader";
import Login from "../../components/Login";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const auth = useSelector((state: any) => state.auth);

  if (auth.user) return <Navigate to={"/balance"} />;

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Header heading="Login to your account" />
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
