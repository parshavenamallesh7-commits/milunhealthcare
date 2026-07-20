import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E6F0FA] to-[#F8FBFF] flex items-center justify-center px-4">
      <div className="max-w-xl text-center bg-white rounded-2xl shadow-xl p-8 md:p-10">
        <p className="text-sm font-semibold text-[#007BFF]">Error 404</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-black text-[#003087]">Page Not Found</h1>
        <p className="mt-4 text-gray-600">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745] text-white px-8 py-3 rounded-xl font-bold">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
