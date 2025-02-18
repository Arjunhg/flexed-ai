import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import Button from '@/helper/Button';
// border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
        <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          {/* logo */}
          <div>
            <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center'>
              <LogoIcon className="h-8 w-8"/>
            </div>
          </div>

          {/* nav Items */}
          <div className='hidden md:block'>
            <nav className='flex gap-8 text-sm'>
              <a href="" className=' text-white/70 hover:text-white transition'>Features</a>
              <a href="" className=' text-white/70 hover:text-white transition'>Developers</a>
              <a href="" className=' text-white/70 hover:text-white transition'>Pricing</a>
              <a href="" className=' text-white/70 hover:text-white transition'>Change Log</a>
            </nav>
          </div>

          {/* button */}
          <div className='flex gap-5 items-center'>
            <Button>Join Waitlist</Button>
            <MenuIcon className="md:hidden"/>
          </div>
        </div>
      </div>
    </header>
  );
};

/*
Initial code from superflex:
import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import Button from '@/helper/Button';

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          {/* logo 
          <div>
            <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center'>
              <LogoIcon className="h-8 w-8"/>
            </div>
          </div>

          {/* nav Items 
          <div className='hidden md:block'>
            <nav className='flex gap-8 text-sm'>
              <a href="#" className='text-white/70 hover:text-white transition'>Features</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Developers</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Pricing</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Change Log</a>
              <a href="#" className='text-white/70 hover:text-white transition'>About Us</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Contact</a>
            </nav>
          </div>

          {/* button 
          <div className='flex gap-5 items-center'>
            <Button>Join Waitlist</Button>
            <MenuIcon className="md:hidden"/>
          </div>
        </div>
      </div>
    </header>
  );
};
*/ 