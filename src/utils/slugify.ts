export const slugify = (text: string) => {
  const trMap: { [key: string]: string } = {
    'ç': 'c', 'Ç': 'c',
    'ğ': 'g', 'Ğ': 'g',
    'ş': 's', 'Ş': 's',
    'ü': 'u', 'Ü': 'u',
    'ı': 'i', 'İ': 'i',
    'ö': 'o', 'Ö': 'o'
  };
  
  let slug = text;
  for (const key in trMap) {
    slug = slug.replace(new RegExp(key, 'g'), trMap[key]);
  }
  
  return slug
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    + '-hali-yikama';
};

export const unslugify = (slug: string) => {
  // Remove the trailing suffix
  const base = slug.replace(/-hali-yikama$/, '');
  
  // Convert back to readable text (approximate, since we lost TR characters)
  return base
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
