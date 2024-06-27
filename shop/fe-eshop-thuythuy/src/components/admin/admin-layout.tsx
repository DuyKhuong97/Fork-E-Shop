import AdminNav from "./admin-nav";
import React from "react";

const AdminLayout: React.FunctionComponent<{}> = () => {
  return (
    <>
      <div className="py-2 lg:py-2 px-0 mx-0 flex md:flex-row w-full">
        <div className="px-0 flex flex-col md:flex-row w-full">
          <AdminNav />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
