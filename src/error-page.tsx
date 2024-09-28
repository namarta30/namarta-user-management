import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError; // Type assertion for the error
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col h-screen justify-center items-center bg-zinc-800 text-white p-5">
      <h1 className="text-5xl mt-4 ">Oops!</h1>
      <p className="mt-5">Sorry, an unexpected error has occurred.</p>
      <p className="mt-5">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
