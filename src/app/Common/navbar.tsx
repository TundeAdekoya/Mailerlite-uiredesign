import Image from 'next/image';
import CompanyImage from "/src/Assets/mailerlite-logo-navbar.svg";
import "/src/app/navbar.css";
import { ChevronDown, Globe, Menu } from 'lucide-react';



const Navbar = () => {
  return (
    <div id="navbar" className="flex justify-between items-center gap-x-10 py-3 ">
        <div className="company-logo " >
            <Image src={CompanyImage} alt="Company Logo" width={88} height={88} />
        </div>

        <div className="nav-list">
            <ul className='flex justify-center gap-x-8	'>
                <li>Features<ChevronDown size={16}/></li>
                <li>Pricing</li>
                <li>Gallery<ChevronDown size={16}/></li>
                <li>Why Lite</li>
                <li>Resources<ChevronDown size={16}/></li>
            </ul>
        </div>

        <div className="nav-call-to-action-web flex gap-x-6 justify-end items-center ">
            <ul className='flex gap-x-6'>
                <li className='gap-x-1'><Globe size={16}/>EN<ChevronDown size={16}/></li>
                <li className='login-cta'>Login</li>
            </ul>
            <button>Get Started</button>
        </div>

        <div className="nav-call-to-action-mobile flex gap-x-6 justify-end items-center">
            {/* <ul className='flex gap-x-6'>
                <li className='gap-x-1'><Globe size={16}/>EN<ChevronDown size={16}/></li>
            </ul> */}
            <button><Menu size={16}/></button>
        </div>

    </div>
  )
}

export default Navbar