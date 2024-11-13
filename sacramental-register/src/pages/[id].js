import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';
import PrintableMember from '../components/PrintableMember';

const fetchMember = async (id) => {
  const { data } = await axiosInstance.get(`/api/members/${id}`);
  return data;
};

export default function MemberDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useQuery({
    queryKey: ['member', id],
    queryFn: () => fetchMember(id),
    enabled: !!id,
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <>
            <PrintableMember member={data} />
            <button onClick={handlePrint} className="bg-blue-500 text-white p-2 mt-2">
              Print
            </button>
          </>
        )
      )}
    </div>
  );
}
