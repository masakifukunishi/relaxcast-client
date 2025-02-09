import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://relaxcast.net";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/ocean-sounds`,
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
  ];
}
