'use client';

import React, { useState } from 'react';
import PageContainer from '@/components/container/PageContainer';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import FaqModal from '@/components/modal/FAQs-modal/FaqModal';
import { initialFAQs } from '@/data/data';

const FAQ = () => {


    const [faqs, setFaqs] = useState(initialFAQs);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentFAQ, setCurrentFAQ] = useState({});

    const isEditMode = currentFAQ?.id !== undefined;

    const handleEdit = (faq) => {
        setCurrentFAQ(faq);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setCurrentFAQ({ question: '', answer: '' });
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (isEditMode) {
            const updatedFaqs = faqs.map((faq) =>
                faq.id === currentFAQ.id ? { ...faq, ...currentFAQ } : faq
            );
            setFaqs(updatedFaqs);
        } else {
            const newFAQ = {
                ...currentFAQ,
                id: Date.now(),
            };
            setFaqs([...faqs, newFAQ]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        const updatedFaqs = faqs.filter((faq) => faq.id !== id);
        setFaqs(updatedFaqs);
    };

    return (
        <PageContainer>
            <div className="flex justify-between mb-8">
                <h1 className="text-xl font-semibold">FAQs</h1>
            </div>

            <div className='h-[73vh]'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-5 rounded-sm shadow-[0px_4px_4px_0px_#00000040] bg-white"
                        >
                            <div className="flex justify-between items-start">
                                <h2 className="text-base font-medium text-gray-700 mb-2 flex flex-col gap-4">
                                    <span className="text-gray-500 font-normal">
                                        Question no: {index + 1}
                                    </span>
                                    <span>{faq.question}</span>
                                </h2>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => handleEdit(faq)}
                                        className="text-[#5CA97E] hover:text-green-800 text-lg cursor-pointer"
                                    >
                                        <FaEdit size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(faq.id)}
                                        className="text-red-500 hover:text-red-700 text-lg cursor-pointer"
                                    >
                                        <FaTrashAlt size={17} />
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {faq.answer}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Add FAQ Button */}
            <div className="flex justify-center sticky bottom-0">
                <button
                    onClick={handleAdd}
                    className="bg-[#5CA97E] hover:bg-green-700 text-white px-6 py-2 rounded text-sm shadow-md"
                >
                    + Add FAQ
                </button>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <FaqModal {...{ setCurrentFAQ, currentFAQ, setIsModalOpen, handleSave, isEditMode, }} />
                )}
            </AnimatePresence>
        </PageContainer>
    );
};

export default FAQ;
