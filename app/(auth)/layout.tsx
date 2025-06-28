import Image from "next/image";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-2" >
            <Image src="/icons/logbook.png" alt="logo" width={40} height={40} className="object-contain" />
            <Image src="/icons/logo.svg" alt="logo" width={70} height={70} className="object-contain" />
          </div>
          <div>{children}</div>
        </div>
      </section>
      <section className="auth-illustration">
        <Image src="/images/ver2.jpeg" alt="auth illustration" height={1000} width={1000} className="size-full object-cover" />

      </section>
    </main>
  );
};

export default Layout;
