import { AvatarProvider } from "@/context/AvatarContext";

import MainLayout from "@/components/layout/MainLayout";

export default function DashboardLayout({
  children,
}) {
  return (
    <AvatarProvider>
      <MainLayout>
        {children}
      </MainLayout>
    </AvatarProvider>
  );
}