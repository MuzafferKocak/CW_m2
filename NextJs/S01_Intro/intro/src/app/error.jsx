"use client"; //! Error components must be Client Components
//? aplikasyonun herhangi bir yerinde hata fırlatıldığında otomatik error.js dosyası render edilir
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="mt-64 text-center">
      <h2 className="text-3xl text-red-600">Something went wrong!</h2>
    </div>
  );
}