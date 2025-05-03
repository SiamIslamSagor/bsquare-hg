import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import ClientServicePage from "./ClientServicePage";
import { serviceData } from "./service-data";

// ✅ generateStaticParams must stay in a server component
export async function generateStaticParams() {
  return Object.keys(serviceData).map(key => ({
    slug: slugify(key),
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceMap = new Map();

  Object.values(serviceData).forEach(service => {
    const slugifiedTitle = slugify(service.title);
    serviceMap.set(slugifiedTitle, service);
  });

  const service = serviceMap.get(slug);
  if (!service) notFound();

  return <ClientServicePage service={service} />;
}
