import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center py-10">
        <div className="grid gap-5 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-lg">
          <div>
            <h1 className="hover:cursor-pointer text-xl font-bold">Digital Marketing Shop</h1>
            <p>
              Are you ready to take your business to the next level? We specialize
              in delivering innovative digital marketing solutions tailored to
              your unique needs.
              <b className="hover:cursor-pointer text-blue-500 my-5 block">Let’s Build Your Brand Together!</b>
              Partner with our company to harness the power of digital marketing
              and achieve your business goals.
            </p>
          </div>
          <div>
            <h1 className="hover:cursor-pointer text-xl font-bold">Information</h1>
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">For Help Center</p>
            <p className="cursor-pointer">Contact</p>
            <p className="cursor-pointer">Shipping Policy</p>
          </div>
          <div>
            <h1 className="hover:cursor-pointer text-xl font-bold">Account</h1>
            <p className="cursor-pointer">Dashboard</p>
            <p className="cursor-pointer">My Orders</p>
            <p className="cursor-pointer">Account Details</p>
            <p className="cursor-pointer">Track Order</p>
          </div>
          <div>
            <h1 className="hover:cursor-pointer text-xl font-bold">Shop</h1>
            <p className="cursor-pointer">Most Popular Products</p>
            <p className="cursor-pointer">New Features</p>
            <p className="cursor-pointer">What Makes Us Special</p>
            <p className="cursor-pointer">Sales Products</p>
          </div>
        </div>
      </div>
      <div className="hover:cursor-pointer bg-gray-200 text-center py-4">
        <p className="hover:cursor-pointer text-sm text-gray-600 font-bold">
          © {new Date().getFullYear()} Digital Marketing Shop. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
