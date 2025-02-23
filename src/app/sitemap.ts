import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://relaxcast.net";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/rain-sounds`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/brown-noise`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date().toISOString(),
    },
  ];
}
