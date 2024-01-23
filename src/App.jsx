import React from 'react'

const App = () => {
  return (
    <main className='bg-cl-DarkBlueIntro font-raleway'>
      <header className='text-white font-openSans grid grid-cols-2 p-8 lg:p-20 text-sm lg:text-base lg:grid-cols-[auto_1fr_auto]'>
        <img className="w-20 lg:w-40 lg:col-start-1 lg:col-end-2" src="/logo.svg" alt="" />

        <nav className='grid place-items-center lg:gap-12 grid-cols-3 lg:col-start-3 lg:col-end-4'>
          <a className="hover:font-bold ease transition-all hover:border-b-2" href="">Features</a>
          <a className="hover:font-bold ease transition-all hover:border-b-2" href="">Team</a>
          <a className="hover:font-bold ease transition-all hover:border-b-2" href="">Sign In</a>
        </nav>
      </header>

      <div className='grid place-items-center pt-8 pl-8 pr-8 bg-mobile-pattern bg-mobilepos lg:bg-desktoppos lg:bg-desktop-pattern bg-contain bg-no-repeat '>
        <div className='text-white text-sm lg:text-lg text-center grid gap-y-8 place-items-center mb-24 lg:max-w-[740px]'>
          <img src="/illustration-intro.png" alt="" />
          <h1 className='text-2xl lg:text-4xl font-bold'>All your files in one secure <span className='block lg:inline'>location, accessible</span> <span className='block lg:inline'>anywhere.</span></h1>
          <p className='max-w-[500px]'>Fylo stores all your most important files in 
          <span className="block lg:inline">one secure location. Access them wherever</span> 
          <span className="block lg:inline">you need, share and collaborate with friends</span> family, and co-workers.
          </p>
          <button className='rounded-full bg-cl-Blue transition-all hover:bg-cl-Cyan w-60 p-3 font-bold lg:text-base'>Get Started</button>
        </div>

        <div className='grid place-items-center font-openSans text-white text-sm lg:text-base gap-y-16 mb-24 lg:grid-cols-2 lg:gap-24'>
          <section className='grid place-items-center text-center gap-y-4 lg:grid-rows-[90px_auto_auto]'>
            <img src="/icon-access-anywhere.svg" alt="" />
            <h2 className='font-raleway text-lg font-bold lg:text-xl'>Access your files, anywhere</h2>
            <p>The ability to use a smartphone, tablet, or <span className="block">computer to access your account means your </span>
  <span className="block">files follow you everywhere.</span></p>
          </section>

          <section className='grid place-items-center text-center gap-y-4 lg:grid-rows-[90px_auto_auto]'>
            <img src="/icon-security.svg" alt="" />
            <h2 className='font-raleway text-lg font-bold lg:text-xl'>Security you can trust</h2>
            <p>2-factor authentication and user-controlled <span className="block">encryption are just a couple of the security</span> 
  <span className="block">features we allow to help secure your files.</span></p>
          </section>

          <section className='grid place-items-center text-center gap-y-4 lg:grid-rows-[90px_auto_auto]'>
            <img src="/icon-collaboration.svg" alt="" />
            <h2 className='font-raleway text-lg font-bold lg:text-xl'>Real-time collaboration</h2>
            <p>Securely share files and folders with friends, <span className="block">
              family and colleagues for live collaboration. 
                No
            </span> <span className="block">email attachments required.</span>
            </p>
          </section>

          <section className='grid place-items-center text-center gap-y-4 lg:grid-rows-[90px_auto_auto]'>
            <img src="/icon-any-file.svg" alt="" />
            <h2 className='font-raleway text-lg font-bold lg:text-xl'>Store any type of file</h2>
            <p>Whether you're sharing holidays photos or work <span className="block">documents, Fylo has you covered allowing for all</span> <span className="block">file types to be securely stored and shared.</span></p>
          </section>
        </div>

        <div className=' text-white grid items-center justify-items-start gap-y-4 text-sm lg:text-lg mb-24 lg:grid-cols-2 lg:grid-rows-4 lg:gap-x-24'>
          <img className="lg:row-span-4" src="/illustration-stay-productive.png" alt="" />
          <h2 className='pt-8 text-lg font-bold justify-self-center lg:justify-self-start lg:text-4xl'>Stay productive, <span className="lg:block">wherever you are</span></h2>
          <p className='font-openSans text-start max-w-[550px]'>Never let location be an issue when accessing <span className="block lg:inline">your files. Fylo has you covered for all of your file</span> <span className="block lg:inline">storage needs.</span>
          </p>
          <p className='font-openSans text-start max-w-[550px]'>Securely share files and folders with friends, <span className="block lg:inline">family and colleagues for live collaboration. No</span> <span className="block lg:inline">email attachments required.</span></p>

          <a href="" className='font-openSans text-cyan-400 flex gap-x-1 place-content-center items-center justify-self-start py-1 border-b border-cyan-400 transition-all hover:text-white hover:border-white hover:invert-100 hover:sepia-[0] hover:saturate-[0] hover:hue-rotate-[69deg] hover:brightness-[1.03] hover:contrast-[1.04]'>See how Fylo works <img src="/icon-arrow.svg" className='w-4 h-4' alt="" /></a>
        </div>

        <div className='max-w-[1200px] text-white text-xs lg:text-base p-2 grid gap-y-8 lg:grid-cols-3  gap-x-10'>
          <section className='p-4 bg-cl-DarkBlueTestimonials rounded-sm grid gap-y-6 lg:p-8'>
            <p className='leading-5'>Fylo has improved our team productivity by an <span className="block lg:inline">order of magnitude. Since making the switch our</span> <span className="block lg:inline">team has become a well-oiled collaboration
            </span> machine.</p>

            <div className='grid grid-cols-[auto_1fr] gap-x-2'>
              <img src="profile-1.jpg" className='w-8 rounded-full row-span-2 col-span-1' alt="" />
              <p className='font-bold col-start-2 col-end-3 row-start-1 row-end-2 text-xs'>Satish Patel</p>
              <p className='text-[10px] col-start-2 col-end-3 row-start-2 row-end-3 text-xs'>Founded & CEO, Huddle</p>
            </div>
          </section>

          <section className='p-4 bg-cl-DarkBlueTestimonials rounded-sm grid gap-y-6 lg:p-8'>
            <p className='leading-5'>Fylo has improved our team productivity by an <span className="block lg:inline">order of magnitude. Since making the switch our</span> <span className="block lg:inline  ">team has become a well-oiled collaboration
              </span> machine.</p>

            <div className='grid grid-cols-[auto_1fr] gap-x-2'>
              <img src="profile-2.jpg" className='w-8 rounded-full row-span-2 col-span-1' alt="" />
              <p className='font-bold col-start-2 col-end-3 row-start-1 row-end-2 text-xs'>Bruce McKenzie</p>
              <p className='text-[10px] col-start-2 col-end-3 row-start-2 row-end-3 text-xs'>Founded & CEO, Huddle</p>
            </div>
          </section>

          <section className='p-4 bg-cl-DarkBlueTestimonials rounded-sm grid gap-y-6 lg:p-8'>
            <p className='leading-5'>Fylo has improved our team productivity by an <span className="block lg:inline">order of magnitude. Since making the switch our</span> <span className="block lg:inline">team has become a well-oiled collaboration
              </span> machine.</p>

            <div className='grid grid-cols-[auto_1fr] gap-x-2'>
              <img src="profile-3.jpg" className='w-8 rounded-full row-span-2 col-span-1' alt="" />
              <p className='font-bold col-start-2 col-end-3 row-start-1 row-end-2 text-xs'>Iva Boyd</p>
              <p className='text-[10px] col-start-2 col-end-3 row-start-2 row-end-3 text-xs'>Founded & CEO, Huddle</p>
            </div>
          </section>
        </div>

        <div className='bg-cl-DarkBlueTestimonials max-w-[867px] text-white text-center px-6 py-8 lg:px-16 lg:py-10 lg:gap-y-4 text-sm lg:text-base grid gap-y-4 lg:gap-x-8 rounded-md translate-y-32 lg:grid-cols-3'>
            <h2 className='font-bold text-base lg:text-3xl lg:col-start-1 lg:col-end-4'>Get early access today</h2>

            <p className='lg:col-start-1 lg:col-end-4'>It only takes a minute to sign up and our 
            <span className="block lg:inline">free starter tier is extremely generous. If</span> 
            <span className="block lg:inline"> you have any questions, our support team</span> 
            <span className="block lg:inline">would be happy to help you.</span>
            </p>

            <input type="text" placeholder='email@example.com' className='rounded-full py-3 px-6 text-[10px] lg:text-base lg:col-start-1 lg:col-end-3'/>
            <button className='bg-cl-Blue transition-all hover:bg-cl-Cyan  p-3 font-bold rounded-full lg:text-base'>Get Started For Free</button>
        </div>

      </div>

      <footer className='bg-cl-DarkBlueFooter pt-44 px-8 grid gap-y-12 text-white pb-16 lg:grid-cols-2'>
          <img src="/logo.svg" alt="" className='lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2'/>

          <div className='grid grid-cols-[20px_1fr] text-base gap-4 items-start justify-start lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 lg:grid-cols-[20px_1fr_20px_1fr] lg:grid-rows-[20px_20px_20px]'>
            <img src="/icon-location.svg" className="mt-2 lg:grid-cols-start-1 lg:grid-col-end-2" alt="" />
            <p className='lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
  dolore magna aliqua</p>

            <img src="/icon-phone.svg" className="mt-2 lg:col-start-3 lg:col-end-4" alt="" />
            <p className='lg:row-start-1 lg:row-end-2 lg:col-start-4 lg:col-end-5'>+1-543-123-4567</p>

            <img src="/icon-email.svg" className="mt-2 lg:col-start-3 lg:col-end-4" alt="" />
            <p>example@fylo.com</p>

          </div>

          
          <nav className='grid gap-y-4 mt-8 lg:grid-cols-3 lg:mt-0 lg:grid-rows-4'>
            <a className="hover:font-bold transition-all lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2" href="">About Us</a>
            <a className="hover:font-bold transition-all lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3" href="">Jobs</a>
            <a className="hover:font-bold transition-all lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4" href="">Press</a>
            <a className="hover:font-bold transition-all lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5" href="">Blog</a>
            <a href="" className='hover:font-bold transition-all mt-8 lg:mt-0 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2'>Contact Us</a>
            <a className="hover:font-bold transition-all lg:col-end-3 lg:row-start-2 lg:row-end-3" href="">Terms</a>
            <a className="hover:font-bold transition-all lg:col-end-3 lg:row-start-3 lg:row-end-4" href="">Privacy</a>

            <div className='flex gap-8 lg:gap-4 justify-self-center'>
              <a href="" className='transition ease-in hover:invert-[.79] hover:sepia-[.72] hover:saturate-[3.21] hover:hue-rotate-[115deg] hover:brightness-[.96] hover:contrast-[.84] rounded-full border border-white w-8 h-8 flex place-content-center items-center'><i class="fa-brands fa-facebook-f"></i></a>
              <a href="" className='transition ease-in hover:invert-[.79] hover:sepia-[.72] hover:saturate-[3.21] hover:hue-rotate-[115deg] hover:brightness-[.96] hover:contrast-[.84] rounded-full border border-white w-8 h-8 flex place-content-center items-center'><i class="fa-brands fa-twitter"></i></a>
              <a href="" className='transition ease-in hover:invert-[.79] hover:sepia-[.72] hover:saturate-[3.21] hover:hue-rotate-[115deg] hover:brightness-[.96] hover:contrast-[.84] rounded-full border border-white w-8 h-8 flex place-content-center items-center'><i class="fa-brands fa-instagram"></i></a>
            </div>
          </nav>


          
        
      </footer>

    </main>
  )
}

export default App