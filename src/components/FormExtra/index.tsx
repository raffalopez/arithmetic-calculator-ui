import { Link } from "react-router-dom";

export default function FormExtra({
  accountCreation,
}: {
  accountCreation: boolean;
}) {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-sky-900"
        >
          Remember me
        </label>
      </div>
      {!accountCreation ? (
        <div className="flex items-center">
          <label
            htmlFor="sign-up"
            className="ml-auto block text-sm flex-end text-sky-700"
          >
            <Link to="/sign-up">Sign up</Link>
          </label>
        </div>
      ) : (
        <div className="flex items-center">
          <label
            htmlFor="sign-up"
            className="ml-auto block text-sm flex-end text-sky-700"
          >
            <Link to="/">Sign in</Link>
          </label>
        </div>
      )}
    </div>
  );
}
