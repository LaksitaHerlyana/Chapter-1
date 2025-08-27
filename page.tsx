import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-white font-sans">
      {/* Header */}
      <header className="py-6 px-10 flex justify-between items-center border-b border-pink-800">
        <h1 className="text-pink-400 text-2xl font-bold">Laksita Herlyana</h1>
        <nav className="space-x-6 text-black uppercase tracking-wider">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>
      </header>

         {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-10 py-20">
        <div className="md:w-1/2">
          <h2 className="text-black text-3xl md:text-4xl font-semibold">
            ⋆. 𐙚 ˚𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 <span className="text-pink-400">𝐓𝐡𝐞 𝐋𝐚𝐤𝐬𝐢𝐭𝐚</span>.<br />
            <span className="text-pink-400"> 𝐏𝐚𝐠𝐞'𝐬⋆. 𐙚 ˚</span> |
          </h2>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget consectetur lorem.
          </p>
          <button className="mt-6 bg-pink-400 text-white-900 px-6 py-2 rounded">
            Contact Me
          </button>
        </div>
        <div className="md:w-1/4">
          <img src="image/Sitaa.png" alt="" width={100} height={100} className="w-100 h-100 rounded-full object-cover " />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-20 bg-white text-center">
        <h3 className="text-black text-2xl font-bold mb-4">
          My Real Life is Up to You? I am a <span className="text-pink-400">WordPress Developer</span>
        </h3>
        <p className="max-w-xl mx-auto text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus
          leo nec ornare diam. Sed commodo nibh ante.
        </p>
        <button className="mt-6 bg-pink-400 text-white px-6 py-2 rounded">
          Hire Me
        </button>
      </section>

      {/* Contact Info */}
      <section className="bg-pink-300 py-10 px-10 grid grid-cols-1 md:grid-cols-3 text-center border-t border-pink-300">
        <div>
          <h4 className="font-bold">Contact Me</h4>
          <p>+62 857-8883-0983</p>
        </div>
        <div>
          <h4 className="font-bold">Address</h4>
          <p>Klender Street, Jakarta, Indonesia</p>
        </div>
        <div>
          <h4 className="font-bold">Social Media</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-10 py-20 bg-white text-center">
        <h3 className="text-black text-2xl font-bold mb-10">Our Service</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div>
            <h4 className="text-pink-400 font-bold text-lg mb-2">Web & Inside Apps</h4>
            <p className="text-gray-400">Membuat aplikasi berbasis web & desktop untuk kebutuhan bisnis kamu.</p>
          </div>
          <div>
            <h4 className="text-pink-400 font-bold text-lg mb-2">Web & Mobile Apps</h4>
            <p className="text-gray-400">Membangun aplikasi cross-platform dengan performa tinggi.</p>
          </div>
          <div>
            <h4 className="text-pink-400 font-bold text-lg mb-2">SEO Marketing</h4>
            <p className="text-gray-400">Optimasi SEO agar website kamu mudah ditemukan di Google.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="px-10 py-20 text-center bg-pink-300 border-t border-pink-300 ">
        <h3 className=" text-3xl font-bold mb-10">Some History of My Life, 1980 - 2019</h3>
        <div className="max-w-2xl mx-auto text-gray-500 text-left space-y-4">
          <p><strong>1980:</strong> Born in Dhaka, Bangladesh</p>
          <p><strong>1995:</strong> Started learning web design</p>
          <p><strong>2008:</strong> Became full-time WordPress Developer</p>
          <p><strong>2019:</strong> Reached 100+ projects milestone</p>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <img src="image/sita.png" alt="Ashadul" width={100} height={50} className="rounded-full" />
          <span className=" text-gray-500 ml-4">Deks Of Birth — 05 March 2001</span>
        </div>
        <button className="mt-6 bg-pink-400 text-white-900 px-6 py-2 rounded">
          My Profession
        </button>
      </section>

      {/* Newsletter */}
      <section className="px-10 py-20 text-center">
        <h3 className="text-black text-2xl font-bold mb-4">Newsletter</h3>
        <form className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded text-black w-1/3"
          />
          <button type="submit" className="bg-pink-400 px-6 py-2 rounded">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-pink-300 border-t border-pink-300">
        <p className="text-sm text-gray-400">© 2025 Ashadul Islam. All rights reserved.</p>
      </footer>
    </main>
  );
}


