import { useState } from 'react';
import { addMember } from '../lib/members'; // Importing addMember function

const AddMemberForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    baptism_date: '',
    first_holy_communion_date: '',
    confirmation_date: '',
    holy_matrimony_date: '',
    death_date: '',
    outstation: '',
  });

  const [isFormVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMember(formData); // Using addMember function from lib/members
      alert('Member added successfully!');
      setFormData({
        name: '',
        baptism_date: '',
        first_holy_communion_date: '',
        confirmation_date: '',
        holy_matrimony_date: '',
        death_date: '',
        outstation: '',
      });
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="flex flex-col items-center my-4">
      <button
        onClick={toggleFormVisibility}
        className="bg-blue-500 text-white p-2 mb-4"
      >
        {isFormVisible ? 'Hide Form' : 'Add New Member'}
      </button>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Baptism Date</label>
            <input
              type="date"
              name="baptism_date"
              value={formData.baptism_date}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">First Holy Communion Date</label>
            <input
              type="date"
              name="first_holy_communion_date"
              value={formData.first_holy_communion_date}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirmation Date</label>
            <input
              type="date"
              name="confirmation_date"
              value={formData.confirmation_date}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Holy Matrimony Date</label>
            <input
              type="date"
              name="holy_matrimony_date"
              value={formData.holy_matrimony_date}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Death Date</label>
            <input
              type="date"
              name="death_date"
              value={formData.death_date}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Outstation</label>
            <input
              type="text"
              name="outstation"
              value={formData.outstation}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 w-full">
            Add Member
          </button>
        </form>
      )}
    </div>
  );
};

export default AddMemberForm;
