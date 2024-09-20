import "/src/app/heroSection.css";
import Image from 'next/image';
import Automate from "/src/Assets/automate.svg";
import EmailCampaign from "/src/Assets/email-campaign.svg";
import TrackYourResult from "/src/Assets/track-your-result.svg";
import SellDigitalProducts from "/src/Assets/Sell-digital-products.svg";
import {CircleArrowRight} from 'lucide-react';

const Herosection = () => {
  return (
    <div id='hero-section' className="py-20" >
        <div className="section-one pb-4">
            <div className="email-campaign flex justify-center items-center flex-col py-4 px-4 gap-4">
                <div className="email-illustration">
                <Image src={EmailCampaign} alt="email-illustration image" className='email-image'/>
                </div>
                <div className="email-content">
                    <div className="email-header flex justify-start gap-2 items-center">
                        <h2 className="text-xl font-semibold mb-1">Email campaigns</h2>
                        <CircleArrowRight size={16} className="CircleArrowRight"/>
                    </div>
                    <div className="email-paragraph">
                        <p>Create engaging, dynamic emails in minutes with our intuitive drag & drop email editor.</p>
                    </div>
                </div>
            </div>
            <div className="sell-digital-products flex justify-center items-center flex-col-reverse py-4 px-4 gap-4">
                <div className="digital-products-illustration">
                <Image src={SellDigitalProducts} alt="digital-products-illustration image" className='digital-products-image'/>
                </div>
                <div className="digital-products-content">
                    <div className="digital-products-header flex justify-start gap-2 items-center">
                        <h2 className="text-xl font-semibold mb-1">Sell Digital Products</h2>
                        <CircleArrowRight size={16} className="CircleArrowRight"/>
                    </div>
                    <div className="digital-products-paragraph">
                        <p>Sell ebooks, downloads, or whatever else will help subscribers.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-two">
            <div className="track-your-results flex justify-center items-center flex-col py-4 px-4 gap-4">
                <div className="track-results-illustration">
                <Image src={TrackYourResult} alt="track-results-illustration image" className='track-results-image'/>
                </div>
                <div className="track-results-content">
                    <div className="track-results-header flex justify-start gap-2 items-center">
                        <h2 className="text-xl font-semibold mb-1" >Track your results</h2>
                        <CircleArrowRight size={16} className="CircleArrowRight"/>
                    </div>
                    <div className="track-results-paragraph">
                        <p>Monitor performance to find what works best for your business.</p>
                    </div>
                </div>
            </div>
            <div className="automate flex justify-center items-start flex-col-reverse py-4 px-4 gap-4">
                <div className="automate-illustration">
                <Image src={Automate} alt="automate-illustration image" className='automate-image'/>
                </div>
                <div className="automate-content">
                    <div className="automate-header flex justify-start gap-2 items-center">
                        <h2 className="text-xl font-semibold mb-1" >Automations</h2>
                        <CircleArrowRight size={16} className="CircleArrowRight"/>
                    </div>
                    <div className="automate-paragraph">
                        <p>Send perfectly-timed and targeted emails automatically.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection