import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ApoliceForm } from '../ApoliceForm'
import { IApolice } from '../../interface/IApolice'


interface ApoliceFormWarapperProps {
  editMode: boolean;
}

export function ApoliceFormWrapper({ editMode }: ApoliceFormWarapperProps) {

  const { id } = useParams();
  const navigate = useNavigate();
  const [currentApolice, setCurrentApolice] = useState<IApolice>({} as IApolice);

  useEffect(() => {
    if (editMode && id) {
      fetch(`/api/apolices/${id}`)
        .then(response => response.json())
        .then(data => setCurrentApolice(data));
    }
  }, [editMode, id]);

  const handleSubmit = (apolice: IApolice) => {
    if (editMode) {
      fetch(`/api/apolices/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(apolice)
      }).then(() => {
        navigate('/');
      });
    } else {
      fetch('/api/apolices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(apolice)
      }).then(() => {
        navigate('/');
      });
    }
  };

  return (
    <ApoliceForm
      onSubmit={handleSubmit}
      editMode={editMode}
      currentApolice={currentApolice}
    />
  );
}

