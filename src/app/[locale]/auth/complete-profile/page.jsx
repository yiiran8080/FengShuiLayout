'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function CompleteProfilePage() {
    const router = useRouter();
    // const searchParams = useSearchParams();

    const [formData, setFormData] = useState({
        userId: '',
        email: '',
        provider: '',
        gender: '',
        birthYear: new Date().getFullYear() - 30,
        birthMonth: 1,
        birthDay: 1,
        birthHour: 12,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // useEffect(() => {
    //     // Get query parameters
    //     const userId = searchParams.get('id');
    //     const email = searchParams.get('email');
    //     const provider = searchParams.get('provider');

    //     if (userId && email && provider) {
    //         setFormData(prev => ({
    //             ...prev,
    //             userId,
    //             email,
    //             provider
    //         }));
    //     } else {
    //         // No valid auth data, redirect to login
    //         router.push('/auth/login');
    //     }
    // }, [searchParams, router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name.includes('birth') && name !== 'birthYear' ? parseInt(value, 10) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/auth/complete-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to save profile');
            }

            // Success, redirect to home
            router.push('/');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Generate options for select elements
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const hours = Array.from({ length: 24 }, (_, i) => i);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="flex flex-col items-center justify-center px-6 py-12 mx-auto">
                <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-[#26A69A]">Complete Your Profile</h1>
                        <p className="mt-2 text-gray-600">
                            Please provide your birth details and gender to complete your profile
                        </p>
                    </div>

                    {error && (
                        <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#26A69A] focus:border-[#26A69A]"
                            >
                                <option value="" disabled>Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Birth Date and Time
                            </label>
                            <div className="grid grid-cols-2 gap-4 mt-1 sm:grid-cols-4">
                                <div>
                                    <label htmlFor="birthYear" className="block text-xs text-gray-500">
                                        Year
                                    </label>
                                    <select
                                        id="birthYear"
                                        name="birthYear"
                                        value={formData.birthYear}
                                        onChange={handleChange}
                                        required
                                        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#26A69A] focus:border-[#26A69A]"
                                    >
                                        {years.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="birthMonth" className="block text-xs text-gray-500">
                                        Month
                                    </label>
                                    <select
                                        id="birthMonth"
                                        name="birthMonth"
                                        value={formData.birthMonth}
                                        onChange={handleChange}
                                        required
                                        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#26A69A] focus:border-[#26A69A]"
                                    >
                                        {months.map(month => (
                                            <option key={month} value={month}>{month}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="birthDay" className="block text-xs text-gray-500">
                                        Day
                                    </label>
                                    <select
                                        id="birthDay"
                                        name="birthDay"
                                        value={formData.birthDay}
                                        onChange={handleChange}
                                        required
                                        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#26A69A] focus:border-[#26A69A]"
                                    >
                                        {days.map(day => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="birthHour" className="block text-xs text-gray-500">
                                        Hour
                                    </label>
                                    <select
                                        id="birthHour"
                                        name="birthHour"
                                        value={formData.birthHour}
                                        onChange={handleChange}
                                        required
                                        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#26A69A] focus:border-[#26A69A]"
                                    >
                                        {hours.map(hour => (
                                            <option key={hour} value={hour}>{hour}:00</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#26A69A] border border-transparent rounded-md shadow-sm hover:bg-[#1E8A7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26A69A]"
                            >
                                {loading ? 'Saving...' : 'Complete Profile'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
} 