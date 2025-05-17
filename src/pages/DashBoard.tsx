import React from "react";
import { FaUsers, FaBoxes, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen pt-20 bg-gray-50 px-4">
            <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Admin Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {/* Customers */}
                <Link to="/customer">
                    <div className="bg-gradient-to-r from-blue-200 to-indigo-500 text-white p-6 rounded-lg shadow hover:shadow-xl transition cursor-pointer">
                        <div className="flex items-center space-x-4">
                            <FaUsers className="text-blue-600 text-3xl" />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">Customers</h2>
                                <p className="text-2xl text-blue-700 font-bold">120</p>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Stock */}
                <Link to="/stock">
                    <div className="bg-gradient-to-r from-blue-200 to-indigo-500 text-white p-6 rounded-lg shadow hover:shadow-xl transition cursor-pointer">
                        <div className="flex items-center space-x-4">
                            <FaBoxes className="text-green-600 text-3xl" />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">Stock</h2>
                                <p className="text-2xl text-green-700 font-bold">75</p>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Orders */}
                <Link to="/orders">
                    <div className="bg-gradient-to-r from-blue-200 to-indigo-500 text-white p-6 rounded-lg shadow hover:shadow-xl transition cursor-pointer">
                        <div className="flex items-center space-x-4">
                            <FaShoppingCart className="text-purple-600 text-3xl" />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">Orders</h2>
                                <p className="text-2xl text-purple-700 font-bold">48</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
