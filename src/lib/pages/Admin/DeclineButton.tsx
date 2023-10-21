import { Button } from '@chakra-ui/react';
import React from 'react';
import { useOperationMethod } from 'react-openapi-client';
import { Parameters } from 'openapi-client-axios';
import { useToasts } from 'react-toast-notifications';
import { useRouter } from 'next/router';

function DeclineButton({ item }: { item: any }) {
  const router = useRouter();
  const { addToast } = useToasts();
  const [declineComplaint, { data, loading, error }] = useOperationMethod(
    'Admincomplaintsdecline{id}'
  );
  const declineComplaints = async () => {
    const params: Parameters = {
      id: item.id,
    };
    try {
      const data = await (await declineComplaint(params)).data;
      if (data.status) {
        addToast('Complaint Declined', {
          appearance: 'success',
          autoDismiss: true,
        });
        window.location.reload();
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      variant="outline"
      borderColor="red"
      color="red"
      isLoading={loading}
      onClick={() => declineComplaints()}
      disabled={item.status == 'PENDING' ? false : true}
      _hover={{ color: 'white', bgColor: 'red' }}
    >
      Decline
    </Button>
  );
}

export default DeclineButton;
