const Header = () => (
    <header className="bg-white p-6 shadow-xl flex items-center justify-center space-x-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img
          src="/staugustine.jpg/" // Update with the actual path to your logo
          alt="St Augustine Logo"
          className="h-16" // Adjust size of the logo as needed
        />
        <div className="text-center">
          {/* Church Title */}
          <h1 className="text-4xl font-bold text-brown-800">St Augustine Catholic Parish & University Chaplaincy, Juja</h1>
          {/* Page Title */}
          <h2 className="text-2xl font-medium text-yellow-600">Sacramental Register</h2>
        </div>
      </div>
    </header>
  );
  
  export default Header;
 