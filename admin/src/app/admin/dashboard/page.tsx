import AdminDashboard from "@/components/AdminDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistika & Dashboard | ALLMAX Fix Price Admin",
  description: "ALLMAX Fix Price savdo ko'rsatkichlari va buyurtmalar statistikasi",
};

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}
