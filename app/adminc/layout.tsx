import React, { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


import { Button } from "@/components/ui/button";


const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session?.user?.id) redirect("/sign-in");



  return (
    <main className="flex min-h-screen w-full flex-row">
      

      <div className="admin-container">
        <Button className="user-card">wow</Button>
      
        {children}
      </div>
    </main>
  );
};
export default Layout;