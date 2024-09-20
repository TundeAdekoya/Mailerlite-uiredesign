import "/src/app/aboveTheFold.css";
import { CircleDot, CirclePlay, ArrowRight} from 'lucide-react';


const aboveTheFold = () => {
  return (
    <div id="aboveTheFold" className="flex justify-center items-center mb-20">   
        <div className="badge flex justify-center items-center py-2 px-4 gap-x-1">
            <CircleDot size={16}/>
            <p className="badge-web">Get a free 30 day trail of premium features - No credit card required</p>
            <p className="badge-mobile">Get a free 30 day trail of premium features</p>
        </div>

        <div className="main-content mt-12 text-center">
            <div className="main-text mb-6">
                <h1>Create digital solutions</h1>
                <h1>your audience will love</h1>
            </div>

            <div className="sub-text-web text-center mb-14">
                <p>Digital marketing tools to grow your audience faster and drive revenue </p>
                <p>smarter. Backed by 24/7 award-winning support.</p>
            </div>

            <div className="sub-text-mobile text-center mb-14">
                <p>Digital marketing tools to grow your audience faster and drive revenue smarter. Backed by 24/7 award-winning support. </p>
            </div>
        </div>

        <div className="main-cta flex gap-6">
            <button className="sign-up flex gap-2 justify-center items-center ">Sign up - it’s free<ArrowRight size={16}/></button>
            <button className="demo flex gap-2 justify-center items-center"><CirclePlay size={16}/>Watch demo</button>
        </div>
    </div>
  )
}

export default aboveTheFold