import React from 'react';
import { getNews } from 'services/apiNews';

export default function NewsPage() {
  getNews();
  return <div>NewsPage</div>;
}
