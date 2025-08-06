


export default async function SkoleInfo() {
  const response = await fetch('https://dummyjson.com/products', {
  })

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return await response.json();
}