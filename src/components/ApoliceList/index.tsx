import React, { useEffect, useState } from 'react'  
import { Link } from 'react-router-dom'  
import { IApolice } from '../../interface/IApolice'  
import { ContainerButton, ContainerList, LinkCriarApolice, List } from './style'  
import ButtonLeft from '../../assets/caret-left.svg'
import ButtonRight from '../../assets/caret-right.svg'
import Trash from '../../assets/trash.svg'
import Pencil from '../../assets/pencil.svg'

export function ApoliceList() {
  const [apolices, setApolices] = useState<IApolice[]>([])  
  const [currentPage, setCurrentPage] = useState(1)  
  const [pageSize] = useState(10)   
  const [searchTerm, setSearchTerm] = useState('')  
  const [totalPages, setTotalPages] = useState(1)  

  useEffect(() => {
    fetchApolices(currentPage, pageSize, searchTerm)  
  }, [currentPage, pageSize, searchTerm])  

  const fetchApolices = (page: number, limit: number, search: string) => {
    fetch(`/api/apolices?page=${page}&pageSize=${limit}&search=${search}`)
      .then(response => response.json())
      .then(data => {
        setApolices(data.content)  
        setTotalPages(data.totalPages)  
      })  
  }  

  const handleDelete = (id: number) => {
    fetch(`/api/apolices/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setApolices(apolices.filter((apolice: IApolice) => apolice.id !== id))  
      fetchApolices(currentPage, pageSize, searchTerm)
    })  
  }  

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage)  
    }
  }  

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)  
    setCurrentPage(1)  
  }  

  return (
    <ContainerList>
      <h1>Lista de Apólices</h1>
      <LinkCriarApolice to="/create">Criar Nova Apólice</LinkCriarApolice>
      <input
        type="text"
        placeholder="Buscar apólices..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <List>
        {apolices.map((apolice: IApolice) => (
          <li key={apolice.id}>
            <span>{apolice.numero} - {apolice.segurado.nome}</span>
            <Link to={`/edit/${apolice.id}`}><img src={Pencil} /></Link>
            <button onClick={() => apolice.id !== undefined && handleDelete(apolice.id)}>
              <img src={Trash} />
            </button>
          </li>
        ))}
      </List>
      <ContainerButton>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={ButtonLeft} />
        </button>
        <span>{` Página ${currentPage} de ${totalPages} `}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={ButtonRight} />
        </button>
      </ContainerButton>
    </ContainerList>
  )  
}
