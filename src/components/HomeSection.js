import Link from 'next/link';// Importing Link from Next.js for navigation.
import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home"  className=" relative min-h-screen bg-gradient-to-r from-blue-400 to-green-600 text-white flex flex-col justify-center items-center text-center p-8 border-0 rounded-lg">
      {/* Hero Section*/}
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight">
          Hello, I&rsquo;m Abdilah, a Full Stack Developer
        </h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto">
          I build responsive web and mobile applications that solve real-world problems. I am passionate about AI, Machine Learning, and creating innovative solutions.
        </p>

        {/* Call to Action Button */}
        <div className="mt-6 margin-auto flex justify-center ">
          <Link href="#about" className="inline-block bg-blue-950 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-gray-200 transition duration-300">
              Get Know Me
          </Link>
        </div>
      </div>

      {/*Profile image*/}
      <div className="h-100 w-100 overflow-hidden rounded-lg shadow-lg  mt-4">
      <Image src="/images/my_photo.jpg" alt="Profile" width={300} height={300} />
      </div>
    </section>
  );
}
