export const dynamic = 'force-dynamic';

import DashboardClient from './DashboardClient';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardClient>{children}</DashboardClient>;
}
