import "./navbar.css";
export default function Navbar() {
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* First element: Image */}
      <div className="flex items-center">
        <img src="/your-image-source.png" alt="Logo" className="w-12 h-12" />

        {/* Second element: List */}
        <ul className="flex space-x-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-indigo-500">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Third element: Div with button and image */}
      <div className="flex items-center">
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md mr-4">
          Button
        </button>
        <img
          src="/your-button-image.png"
          alt="Button Image"
          className="w-6 h-6"
        />
      </div>
    </nav>
  );
}
