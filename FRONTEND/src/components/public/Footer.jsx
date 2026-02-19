import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="bg-[#100F57] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Scholify
            </h2>
            <p className="text-gray-400 text-sm">
              Modern school management system for admins, teachers, and students.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Student Management</li>
              <li>Teacher Management</li>
              <li>Attendance</li>
              <li>Reports</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About</li>
              <li>Contact</li>
              <li>Support</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-medium mb-4">
              Get Started
            </h3>

            <div className="flex items-center bg-white rounded-full p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm text-gray-800 rounded-full outline-none"
              />
              <Button size="sm">
                Start
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Scholify. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
