import { Link } from "react-router-dom"


export const Footer=()=>{
  

return <div className="text-black">
  <footer className="bg-orange-900 text-black">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                   <Link to={"/AboutUs"}>About Us</Link>
                </li>
                <li className="mb-4">
                   <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li className="mb-4">
                   <Link to={"/donate"}>Donate Now</Link>
                </li>
                
               
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="https://www.instagram.com/happytohelp14/" className="hover:underline">Instagram</a>
                </li>
                <li className="mb-4">
                    <a href="https://x.com/htoh14" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a href="https://www.facebook.com/htoh14/" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">how to donate</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                    <img src="/PayPal.png" alt="" />       
                            </li>
                <li className="">
                   <img src="/justgiving.webp" alt="" className="h-20 w-40"/>
                </li>
                
            </ul>
        </div>
   
    </div>
      
    </div>
</footer>
</div>

}