import NewProductForm from "@/components/NewProductForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yangi Tovar Qo'shish | ALLMAX Fix Price Admin",
  description: "ALLMAX Fix Price do'koniga yangi tovar, narx polkasi va razmerlar zaxirasini kiritish",
};

export default function NewProductPage() {
  return (
    <div className="py-2">
      <NewProductForm />
    </div>
  );
}
