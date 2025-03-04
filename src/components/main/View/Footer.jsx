
const Footer =() => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 text-gray-400 px-6 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-indigo-400 text-2xl font-bold">🌊</span>
              </div>
              <p className="mt-4 text-sm">
                Making the world a better place through constructing elegant hierarchies.
              </p>
          
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white">
                  <i className="fab fa-facebook">ff</i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold">Solutions</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Marketing</a></li>
                <li><a href="#" className="hover:text-white">Analytics</a></li>
                <li><a href="#" className="hover:text-white">Automation</a></li>
                <li><a href="#" className="hover:text-white">Commerce</a></li>
                <li><a href="#" className="hover:text-white">Insights</a></li>
              </ul>
            </div>
    
            <div>
              <h3 className="text-gray-900 font-semibold">Support</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Submit Ticket</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
              </ul>
            </div>
    
            <div>
              <h3 className="text-gray-900 font-semibold">Company</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Jobs</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
    
            <div>
              <h3 className="text-gray-900 font-semibold">Legal</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">License</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm mt-10">
            © 2024 Your Company, Inc. All rights reserved.
          </div>
        </footer>
      );
   
}
export default Footer;