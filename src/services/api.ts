export const fetchApolices = async (page: number, pageSize: number, search: string) => {
  const response = await fetch(`/api/apolices?page=${page}&pageSize=${pageSize}&search=${search}`);
  return response.json();
};

export const createApolice = async (apolice: any) => {
  console.log(apolice)
  const response = await fetch('/api/apolices', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(apolice),
  });
  return response.json();
};

export const fetchApoliceById = async (id: string) => {
  const response = await fetch(`/api/apolices/${id}`);
  return response.json();
};

export const updateApolice = async (id: number, apolice: any) => {
  const response = await fetch(`/api/apolices/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(apolice),
  });
  return response.json();
};

export const deleteApolice = async (id: number) => {
  await fetch(`/api/apolices/${id}`, { method: 'DELETE' });
};
