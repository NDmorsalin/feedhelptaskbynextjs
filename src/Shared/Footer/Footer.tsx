const Footer = () => {
    return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto space-y-8  py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">Note Trucker</h1>
          </div>
          
        </div>
        <hr className="border-gray-700" />
        <p className="text-center text-gray-500">© 2023 Note Trucker. All rights reserved.</p>
      </div>
    </footer>
    );
};

export default Footer;