import React, { useState } from "react";

interface StockItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

const Stock: React.FC = () => {
    const [stocks, setStocks] = useState<StockItem[]>([
        { id: "S001", name: "Mouse", quantity: 50, price: 1500 },
        { id: "S002", name: "Keyboard", quantity: 30, price: 2500 },
    ]);

    const [formData, setFormData] = useState<StockItem>({
        id: "",
        name: "",
        quantity: 0,
        price: 0,
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "quantity" || name === "price" ? Number(value) : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            setStocks(stocks.map(s => (s.id === editId ? { ...formData } : s)));
            setIsEditing(false);
            setEditId("");
        } else {
            setStocks([...stocks, formData]);
        }

        setFormData({ id: "", name: "", quantity: 0, price: 0 });
    };

    const handleEdit = (item: StockItem) => {
        setFormData(item);
        setIsEditing(true);
        setEditId(item.id);
    };

    const handleDelete = (id: string) => {
        setStocks(stocks.filter(s => s.id !== id));
    };

    return (
        <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-teal-550 to-indigo-100">
            <div className="max-w-5xl mx-auto bg-blue-400 shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold text-indigo-700 mb-6">Stock Management</h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="Stock ID"
                        className="border rounded px-3 py-2"
                        required
                        disabled={isEditing}
                    />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Item Name"
                        className="border rounded px-3 py-2"
                        required
                    />
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                        className="border rounded px-3 py-2"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Unit Price"
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
                            {isEditing ? "Update Stock" : "Add Stock"}
                        </button>
                    </div>
                </form>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left border border-gray-600 rounded-lg">
                        <thead className="bg-indigo-400 text-indigo-900">
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Qty</th>
                            <th className="py-2 px-4 border-b">Price (LKR)</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {stocks.map((stock) => (
                            <tr key={stock.id} className="hover:bg-indigo-50 transition">
                                <td className="py-2 px-4 border-b">{stock.id}</td>
                                <td className="py-2 px-4 border-b">{stock.name}</td>
                                <td className="py-2 px-4 border-b">{stock.quantity}</td>
                                <td className="py-2 px-4 border-b">{stock.price.toLocaleString()}</td>
                                <td className="py-2 px-4 border-b space-x-2">
                                    <button
                                        onClick={() => handleEdit(stock)}
                                        className="px-3 py-1 bg-yellow-400 text-blac rounded hover:bg-yellow-500"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(stock.id)}
                                        className="px-3 py-1 bg-red-500 text-black rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {stocks.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center py-4 text-gray-500">
                                    No stock items found.
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

export default Stock;
