export default function sitemap() {
  const baseUrl = 'https://www.allo.co.in';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
