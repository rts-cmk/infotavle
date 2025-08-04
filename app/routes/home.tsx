import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Infotavle" },
    { name: "description", content: "Roskilde tekniske skole infotavel" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>miiiav</h1>
    </div>
  )
}
