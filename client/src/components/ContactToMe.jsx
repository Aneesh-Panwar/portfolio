import { useRef } from "react";
import emailjs from "emailjs-com";
import { UserRoundPenIcon, MailIcon, MessageSquareHeart, SendHorizontal } from "lucide-react";




export default function ContactToMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.email.value;

    const confirmSend = window.confirm(
        `Make sure '${userEmail}' is your correct email..!\nI will be connecting through it.\
        \n\n Do you want to continue ??`
    );

    if (!confirmSend) {
        alert("Message not sent. Please double-check your email.");
        return;
    }

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    
    ).then(
      (result) => {
        alert("Message sent!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send. Try again.");
        console.error(error);
      }
    );
  };

  return (
    <div className='flex flex-wrap gap-6 font-jura justify-center'>
      <div className='px-4 flex flex-col gap-4 w-full max-w-100'>
        <h1 className='text-cyan-700 text-xl font-wallpoet pl-4 sm:mb-10 mb-4'>Let's connect...!!</h1>

        <div className='flex gap-4 p-4 relative z-30 text-shadow-3d text-xl shadow-3d rounded-md items-center '>
          <img src="./logos/social/linkedin.svg" alt="" className='h-6 bg-white p-0.5 rounded-sm shadow-3d' />
          <a href="https://www.linkedin.com/in/aneeshpanwar/" className='w-full'>Linked - In</a>
        </div>

        <div className='flex gap-4 p-4 relative z-30 text-shadow-3d text-xl shadow-3d rounded-md items-center '>
          <img src="./logos/social/twitter.svg" alt="" className='h-6 bg-white p-0.5 rounded-sm shadow-3d' />
          <a href="https://x.com/aneesh_panwar?t=bfFksuJHIrjvhmLqhw597A&s=08/aneeshpanwar/" className='w-full'>X</a>
        </div>

        <div className='flex gap-4 p-4 relative z-30 text-shadow-3d text-xl shadow-3d rounded-md items-center '>
          <MailIcon size={28} className='bg-white text-black p-0.5 rounded-sm shadow-3d' />
          <a href="mailto:aaneeshpanwar@gmail.com" className='w-full'>E-mail</a>
        </div>

        <div className='flex gap-4 p-4 relative z-30 text-shadow-3d text-xl shadow-3d rounded-md items-center '>
          <img src="./logos/social/whatsapp.svg" alt="" className='h-6 bg-white p-0.5 rounded-sm shadow-3d' />
          <a href="https://wa.me/917668338593" className='w-full'>Whatsapp</a>
        </div>
      </div>

      {/* CONTACT FORM */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className='p-6 px-4 flex flex-col gap-4 w-full max-w-100 rounded-md shadow-3d'
      >
        <div className='py-2 flex justify-center flex-col gap-4 text-xl w-full'>
          <div className='relative max-w-100'>
            <UserRoundPenIcon className='absolute ml-2 -translate-y-[50%] top-[50%]' />
            <input
              type="text"
              name="name"
              required
              className='shadow-3dr w-full rounded-md pl-10 py-2 h-15 outline-none'
              placeholder='Your Name'
            />
          </div>

          <div className='relative max-w-100'>
            <MailIcon className='absolute ml-2 -translate-y-[50%] top-[50%]' />
            <input
              type="email"
              name="email"
              required
              className='shadow-3dr rounded-md pl-10 py-2 w-full h-15 outline-none'
              placeholder='Email'
            />
          </div>

          <div className='relative max-w-100'>
            <MessageSquareHeart className='absolute ml-2 top-4' />
            <textarea
              name="message"
              required
              className='shadow-3dr rounded-md pl-10 py-2 w-full outline-none max-h-50'
              placeholder='Comment / Feedback'
            />
          </div>

          <button
            type="submit"
            className='shadow-3d rounded-md text-center py-2 mt-3 cursor-pointer active:bg-gray-950'
          >
            Message <SendHorizontal className='inline' />
          </button>
        </div>
      </form>
    </div>
  );
}
