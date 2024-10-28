import { ReactNode } from "react";
import NavBar from "./_components/NavBar";

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="selection:bg-[hsla(320,65%,52%,20%)]">
      <NavBar />
      {children}
    </div>
  );
}
