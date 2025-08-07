

export default async function SkoleInfo() {
  const response = await fetch("./data/sampledata.json", {
  })

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return await response.json();
}