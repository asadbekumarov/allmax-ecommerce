import AdminDashboard from "@/components/AdminDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boshqaruv Paneli | ALLMAX Fix Price Admin",
  description: "ALLMAX Fix Price do'koni boshqaruv va sotuvlar statistikasi paneli",
};

export default function AdminHomePage() {
  return <AdminDashboard />;
}
