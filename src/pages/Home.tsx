import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const [fileName, setFileName] = useState('');
  const [fileURL, setFileURL] = useState('');

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setFileURL(fileReader.result); // Lưu URL của ảnh vào state
      };
      fileReader.readAsDataURL(file); // Đọc tệp và trả về URL dạng base64
    }
  };


  const handleDragOver = (event: any) => {
    event.preventDefault(); // Ngừng hành động mặc định của trình duyệt
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setFileURL(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Table</h1>
      <div className="flex items-center justify-center w-full">
        <label
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >

          {fileName != '' ? (
               <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
               <span className="font-semibold">File selected: </span>
               <img src={fileURL} alt={fileName} className="mt-2 max-w-full h-auto rounded-md" />
             </div>
          ) :

            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
          }

          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="relative overflow-x-auto ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">
                White
              </td>
              <td className="px-6 py-4">
                Laptop PC
              </td>
              <td className="px-6 py-4">
                $1999
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">
                Black
              </td>
              <td className="px-6 py-4">
                Accessories
              </td>
              <td className="px-6 py-4">
                $99
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  );

};

export default Home;
