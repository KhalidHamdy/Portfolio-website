import SideBar from "@/components/pages/admin/sideBar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>
  <div className="flex">
  <SideBar />
  {children}
  </div>
  </>;
}
