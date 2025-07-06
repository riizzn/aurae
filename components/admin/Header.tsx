import React from "react";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  return (
    <div className="admin-header">
      <div className="flex flex-col gap-1">
        <h4 className="text-2xl font-bold text-dark-400">
          Welcome, {session?.user?.name}
        </h4>
        <p className="text-light-500 text-base">
          Monitor all of your projects and tasks here
        </p>
      </div>
      <div>
        Search
      </div>
    </div>
  );
};

export default Header;
