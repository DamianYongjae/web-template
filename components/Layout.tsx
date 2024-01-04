import { Fragment } from "react";
import { ToastContainer, Slide } from "react-toastify";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <title>title</title>
      </Head>
      <div
        className={`
        `}
      >
        {children}
      </div>
      <ToastContainer
        className="f6 z-9999"
        bodyClassName="w-100 h-100"
        autoClose={10000}
        closeOnClick={true}
        draggable={true}
        hideProgressBar={false}
        pauseOnHover={true}
        position="top-right"
        transition={Slide}
      />
    </Fragment>
  );
};

export default Layout;
