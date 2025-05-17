import React, { useState } from "react";

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("💌 Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen pt-20 px-4 bg-gradient-to-r from-indigo-100 to-blue-200 flex items-center justify-center">
            <div className="max-w-xl w-full bg-white p-10 rounded-2xl shadow-2xl border border-blue-200">
                <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full border border-indigo-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full border border-indigo-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Message</label>
                        <textarea
                            name="message"
                            rows={4}
                            className="w-full border border-indigo-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold py-3 rounded-md hover:from-indigo-600 hover:to-blue-700 transition shadow-md"
                    >
                        ✉️ Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
