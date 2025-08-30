import React, { useState } from "react";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row gap-12 bg-white rounded-3xl overflow-hidden container w-full">

        {/* Product Image */}
        <div className="md:w-1/2 flex items-center justify-center bg-slate-100">
          <img
            src="https://i.imgur.com/Ex5x3IU.jpg"
            alt="Product"
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-10 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Title */}
            <h1 className="text-4xl font-extrabold text-slate-900">
              Premium Headphones
            </h1>

            {/* Category */}
            <p className="text-slate-500 text-sm uppercase tracking-wide">
              Electronics
            </p>

            {/* Price */}
            <p className="text-3xl font-semibold text-slate-900">
              $199.99
            </p>

            {/* Description */}
            <p className="text-slate-600 text-lg leading-relaxed">
              Experience crystal clear sound with these premium over-ear headphones.
              Designed for comfort and long listening sessions, with noise-cancellation
              technology for an immersive audio experience.
            </p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
            <div className="flex items-center gap-4 border border-slate-300 rounded-md px-4 py-2">
              <button
                onClick={decrease}
                className="text-slate-700 text-xl font-bold hover:text-slate-900"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={increase}
                className="text-slate-700 text-xl font-bold hover:text-slate-900"
              >
                +
              </button>
            </div>
            <button className="btn btn-secondary">
              Add to Cart
            </button>
          </div>

          {/* Additional Info */}
          <div className="text-slate-500 text-sm space-y-1 mt-6">
            <p><span className="font-medium text-slate-700">SKU:</span> 12345</p>
            <p><span className="font-medium text-slate-700">Availability:</span> In Stock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;