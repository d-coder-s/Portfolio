import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllSlugs } from "@/lib/servicesData";
import ServiceDetailClient from "./ServiceDetailClient";

/* ─────────────────────────────────────────────────────────────
   Static params
───────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ─────────────────────────────────────────────────────────────
   Dynamic SEO metadata per service
───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const title = service.title.toLowerCase();
  const baseUrl = "https://www.dcoder.online.com";

  return {
    title: `${service.title} Services India | Dcoder — Digital Studio`,
    description: service.description,
    keywords: [
      ...service.tags,
      `${title} company India`,
      `${title} agency India`,
      `affordable ${title} services India`,
      `best ${title} company India`,
      `hire ${title} developer India`,
      `custom ${title} development India`,
      "Dcoder digital studio",
      "web development agency India",
      "remote digital studio India",
    ],
    alternates: {
      canonical: `${baseUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} Services in India | Dcoder`,
      description: service.description,
      url: `${baseUrl}/services/${service.slug}`,
      images: [
        {
          url: service.imgSrc,
          width: 1200,
          height: 630,
          alt: `${service.title} services — Dcoder Digital Studio India`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Services | Dcoder India`,
      description: service.description,
      images: [service.imgSrc],
    },
  };
}

/* ─────────────────────────────────────────────────────────────
   Page — server component
───────────────────────────────────────────────────────────── */
export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return <ServiceDetailClient service={service} />;
}
