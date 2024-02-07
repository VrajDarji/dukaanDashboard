import HeroNav from "@/components/HeroNav";
import Nav from "@/components/Nav";
import Table from "@/components/Table";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Nav />
      <HeroNav />
      <Table />
    </div>
  );
}
