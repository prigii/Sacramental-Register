import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import MemberList from '../components/MemberList';
import AddMemberForm from '../components/AddMemberForm';
import axiosInstance from '../axiosInstance';

const fetchMembers = async (query) => {
  const { data } = await axiosInstance.get(`/api/members?search=${query}`);
  return data;
};

export default function Home() {
  const [query, setQuery] = useState('');
  const { data, isLoading } = useQuery({
    queryKey: ['members', query],
    queryFn: () => fetchMembers(query),
    enabled: !!query,
  });

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <SearchForm onSearch={setQuery} />
        <AddMemberForm />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <MemberList members={data || []} />
        )}
      </div>
    </div>
  );
}
