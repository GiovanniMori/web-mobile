import LeftSideBar from "@/components/leftSideBar";
import RightSideBar from "@/components/rightSideBar";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center  gap-4">
        <LeftSideBar />
        {children}
        <RightSideBar />
      </div>
    </div>
  );
}
