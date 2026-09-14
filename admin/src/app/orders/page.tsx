import OrdersTable from "@/components/OrdersTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyurtmalar | ALLMAX Fix Price Admin",
  description: "ALLMAX buyurtmalar ro'yxati",
};

export default function OrdersPage() {
  return (
    <div className="py-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Buyurtmalar Boshqaruvi
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Viloyatlar bo&apos;yicha kelib tushgan buyurtmalarni nazorat qilish, Click / Payme / Naqd to&apos;lovlari va buyurtma holatini yangilash.
          </p>
        </div>
      </div>

      <OrdersTable />
    </div>
  );
}
