import React, { useState } from "react";

interface Customer {
    id: string;
    name: string;
    dob: string;
    address: string;
}

const Customer: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([
        { id: "C001", name: "Nimal Perera", dob: "1995-02-14", address: "Colombo" },
        { id: "C002", name: "Kamal Silva", dob: "1990-06-23", address: "Galle" },
    ]);

    const [formData, setFormData] = useState<Customer>({
        id: "",
        name: "",
        dob: "",
        address: "",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddCustomer = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            setCustomers(
                customers.map((c) => (c.id === editId ? { ...formData } : c))
            );
            setIsEditing(false);
            setEditId("");
        } else {
            setCustomers([...customers, formData]);
        }

        setFormData({ id: "", name: "", dob: "", address: "" });
    };

    const handleDelete = (id: string) => {
        setCustomers(customers.filter((c) => c.id !== id));
    };

    const handleEdit = (customer: Customer) => {
        setFormData(customer);
        setIsEditing(true);
        setEditId(customer.id);
    };

    return (
        <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-indigo-400 to-blue-300">
            <div className="max-w-5xl mx-auto bg-cyan-700 shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold text-indigo-700 mb-6">
                    Customer Management
                </h2>

                {/* Add / Edit Form */}
                <form
                    onSubmit={handleAddCustomer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                >
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="Customer ID"
                        className="border rounded px-3 py-2"
                        required
                        disabled={isEditing}
                    />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Customer Name"
                        className="border rounded px-3 py-2"
                        required
                    />
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className="border rounded px-3 py-2"
                        required
                    />
                    <div className="md:col-span-2 text-right">
                        <button
                            type="submit"
                            className={`${
                                isEditing ? "bg-green-600" : "bg-indigo-600"
                            } text-black px-6 py-2 rounded hover:opacity-90`}
                        >
                            {isEditing ? "Update Customer" : "Add Customer"}
                        </button>
                    </div>
                </form>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left border border-gray-400 rounded-lg">
                        <thead className="bg-indigo-300 text-indigo-900">
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">DOB</th>
                            <th className="py-2 px-4 border-b">Address</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="hover:bg-indigo-50 transition">
                                <td className="py-2 px-4 border-b">{customer.id}</td>
                                <td className="py-2 px-4 border-b">{customer.name}</td>
                                <td className="py-2 px-4 border-b">{customer.dob}</td>
                                <td className="py-2 px-4 border-b">{customer.address}</td>
                                <td className="py-2 px-4 border-b space-x-2">
                                    <button
                                        onClick={() => handleEdit(customer)}
                                        className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(customer.id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {customers.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center py-4 text-gray-500">
                                    No customers found.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Customer;
