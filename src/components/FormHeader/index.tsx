import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

interface IFormHeader {
  heading: string;
  paragraph?: string;
  linkName?: string;
  linkUrl?: string;
}

const FormHeader = ({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}: IFormHeader) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="" className="h-14 w-14" src={logo} />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-sky-900">
        {heading}
      </h2>
      <p className="text-center text-sm text-sky-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-sky-600 hover:text-sky-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default FormHeader;
