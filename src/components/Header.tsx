    export default function Header() {

    return (
    //grid-rows-[auto_1fr_auto]: Đây là một cách tùy chỉnh để xác định chiều cao của các hàng trong grid.
    //auto: Hàng đầu tiên và hàng cuối cùng có chiều cao tự động, phù hợp với nội dung của chúng.
    //1fr: Hàng giữa sẽ chiếm không gian còn lại (chia đều theo phần trăm không gian còn lại sau khi đã phân phối cho các hàng auto).
    //ex:
    //__________
    //|  |     |
    //|  |     |
        <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 ">
        <header className="col-span-1 md:col-span-2 p-4 text-center border-b">
          <nav className="flex justify-between items-center ">
  
            {/* Logo  
            flex justify-between items-center → Căn menu ngang, logo bên trái, menu bên phải.
             */}
            {/* <div className="text-xl font-bold">MyLogo</div> */}
  
            {/* Menu  
            hidden md:flex → Ẩn menu trên mobile, chỉ hiển thị trên desktop.
            */}
            <ul className="hidden md:flex space-x-6">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/calendar" className="hover:text-gray-300">Calendar</a></li>
              <li><a href="/product" className="hover:text-gray-300">Product</a></li>
            </ul>
  
            <ul className="hidden md:flex space-x-6">
              <li><a href="#" className="hover:text-gray-300">Help</a></li>
              <li><a href="#" className="hover:text-gray-300">Profile</a></li>
            </ul>
  
            {/* Menu Mobile (Hamburger)
            Hamburger ☰ → Hiển thị trên mobile để mở menu.
             */}
            <button className="md:hidden">☰</button>
          </nav>
        </header>
        </div>
    );

};