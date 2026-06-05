import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {siteData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
