import '../../../style/navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { doSignOut } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';

const products = [
  { name: 'Analytics', description: 'Understand your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak with customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Protect data', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Convert leads', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { userLoggedIn, currentUser } = useAuth();

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate('/login');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <header className="bg-gray-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8">
        <a href="#" className="-m-1.5 p-1.5">
          <img src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" className="h-8" />
        </a>
        
        <div className="flex lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="p-2.5 text-gray-700">
            <Bars3Icon className="size-6" />
          </button>
        </div>
        
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
              Product <ChevronDownIcon className="size-5 text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute top-full z-10 mt-3 w-64 bg-white shadow-lg rounded-md">
              <div className="p-4">
                {products.map((item) => (
                  <a key={item.name} href={item.href} className="flex items-center gap-x-4 p-2 hover:bg-gray-100">
                    <item.icon className="size-5 text-gray-600" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a href="#" className="text-sm font-semibold text-gray-900">Features</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Marketplace</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Company</a>
        </PopoverGroup>
        
        <div className="hidden lg:flex items-center gap-x-4">
          {userLoggedIn ? (
            <button onClick={handleSignOut} className="text-black">Logout</button>
          ) : (
            <button onClick={() => navigate('/signIn')} className="text-black">Sign In</button>
          )}
          {currentUser?.photoURL ? (
            <img src={currentUser.photoURL} className="w-10 h-10 rounded-full border-2 border-indigo-600" />
          ) : (
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full">
              {currentUser?.displayName?.[0] || '?'}
            </div>
          )}
        </div>
      </nav>
      
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 w-full bg-white p-6">
          <button onClick={() => setMobileMenuOpen(false)} className="p-2.5 text-gray-700">
            <XMarkIcon className="size-6" />
          </button>
          <div className="mt-6">
            <Disclosure>
              <DisclosureButton className="flex justify-between w-full p-2 text-base font-semibold text-gray-900">
                Product <ChevronDownIcon className="size-5" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2">
                {[...products, ...callsToAction].map((item) => (
                  <a key={item.name} href={item.href} className="block p-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </a>
                ))}
              </DisclosurePanel>
            </Disclosure>
            <a href="#" className="block p-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Features</a>
            <a href="#" className="block p-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a>
            <a href="#" className="block p-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Company</a>
          </div>
          <div className="mt-6">
            {userLoggedIn ? (
              <button onClick={handleSignOut} className="w-full p-2 text-black">Logout</button>
            ) : (
              <button onClick={() => navigate('/signIn')} className="w-full p-2 text-black">Sign In</button>
            )}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
