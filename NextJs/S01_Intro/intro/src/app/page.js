//? app folder içindeki page.js "/" route olan home sayfasıdır

import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

//? nextjs'de tüm componentler default olarak server componenttir. client component kullanmak için "use client" direktifini kullanmamız gerekir

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">Hello from Home Page</h1>
      {/* <ServerComponent /> */}
      {/* <ClientComponent /> */}
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}