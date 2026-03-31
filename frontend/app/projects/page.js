import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LatestProjects from "@/components/sections/latest-projects";

export const metadata = {
  title: "Our Latest Projects | Sailee Plywood",
  description: "Explore our diverse portfolio of premium plywood projects, including kids rooms, modular kitchens, and luxury interiors.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Page Header Spacer */}
      <div className="h-20" />
      
      {/* Full Projects Section with Filters */}
      <div className="py-10">
        <LatestProjects showFilters={true} limit={null} />
      </div>
      
      <Footer />
    </main>
  );
}
