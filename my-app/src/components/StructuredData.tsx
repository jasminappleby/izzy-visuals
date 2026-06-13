import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Person' | string;
  data: Record<string, any>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
