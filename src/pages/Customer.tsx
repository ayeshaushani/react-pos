import React from "react";

const customers = [
    { id: "C001", name: "Nimal Perera", dob: "1995-02-14", address: "Colombo" },
    { id: "C002", name: "Kamal Silva", dob: "1990-06-23", address: "Galle" },
    { id: "C003", name: "Sunethra Fernando", dob: "1988-11-05", address: "Kandy" },
    { id: "C004", name: "Dinesh Jayasuriya", dob: "2000-01-09", address: "Matara" },
];

const Customer: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-indigo-400 to-blue-400">
            <div className="max-w-5xl mx-auto bg-emerald-300 shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold text-indigo-500 mb-4">Customer List</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-left border border-gray-500 rounded-lg">
                        <thead className="bg-indigo-400 text-indigo-900">
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Date of Birth</th>
                            <th className="py-2 px-4 border-b">Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="hover:bg-emerald-400 transition">
                                <td className="py-2 px-4 border-b">{customer.id}</td>
                                <td className="py-2 px-4 border-b">{customer.name}</td>
                                <td className="py-2 px-4 border-b">{customer.dob}</td>
                                <td className="py-2 px-4 border-b">{customer.address}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Customer;
