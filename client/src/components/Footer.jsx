
export default function Footer() {

    const phoneNumber = "917668338593"; // +91 9876543210
    const message = "Hi, I'm interested in your portfolio!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const email = "aaneeshpanwar@gmail.com";
    const subject = "Inquiry from your portfolio";
    const body = "Hi, I found your portfolio and would like to connect.";

    const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div className='bg-black/50 flex flex-col gap-4 backdrop-blur-2xl shadow-black min-h-50  py-4 font-jura'>
        <div className="flex justify-around">
            <div className='flex flex-col capitalize'>
                <h1 className='text-2xl relative text-gray-600 py-2'>Quick Links <hr className='w-16 border-cyan-800 '/></h1>
                <a href="#home" className='text-gray-400 pl-5 hover:text-white'>home</a>
                <a href="#skills" className='text-gray-400 pl-5 hover:text-white'>Technical skills</a>
                <a href="#projects" className='text-gray-400 pl-5 hover:text-white'>My works</a>
                <a href="#certifications" className='text-gray-400 pl-5 hover:text-white'>certifications</a>
                <a href="#journey" className='text-gray-400 pl-5 hover:text-white'>my journey</a>
                <a href="#contact" className='text-gray-400 pl-5 hover:text-white'>contact me</a>
            </div>
            <div className='flex flex-col capitalize'>
                <h1 className='text-2xl relative text-gray-600 py-2'>Contact Me <hr className='w-16 border-cyan-800 '/></h1>
                <a href="https://x.com/aneesh_panwar?t=bfFksuJHIrjvhmLqhw597A&s=08" className="hover:text-white pl-5 text-gray-400">X</a>
                <a href={emailLink} className="hover:text-white pl-5 text-gray-400">E-mail</a>
                <a href="https://www.linkedin.com/in/aneeshpanwar/" className="hover:text-white pl-5 text-gray-400">linked - in</a>
                <a href="https://t.me/Aneesh_panwar" className="hover:text-white pl-5 text-gray-400">Teligram</a>
                <a href="https://github.com/Aneesh-Panwar" className="hover:text-white pl-5 text-gray-400">github</a>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer" className="hover:text-white pl-5 text-gray-400"
                >Message</a>
            </div>
        </div>
        <div className="flex flex-col items-center px-10 text-gray-200 text-sm">
            <div className="bg-gray-700 h-0.5 my-2 w-90"></div>
            <div className="container mx-auto px-4 text-center">
                &copy; {new Date().getFullYear()} Aneesh Panwar. All rights reserved.
            </div>
            <div className="text-center">built with ❤️ & 🌻 using react.js + tailwind + node.js</div>

        </div>
        
    </div>
  )
}
