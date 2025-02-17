export default function HeroSection() {
  return (
    <div
      className="grid min-h-screen place-items-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('your-image.jpg')" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-lg">Chào mừng bạn đến với trang chủ</p>
        <button className="mt-6 bg-blue-500 px-6 py-3 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}
