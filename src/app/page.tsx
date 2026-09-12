import { EnergyPurchase } from "@/components/energy-purchase";
import { getServiceConfig } from "@/lib/service-config";

export const dynamic = "force-dynamic";

export default async function Home() {
  const config = await getServiceConfig();
  return <EnergyPurchase config={config} />;
}
