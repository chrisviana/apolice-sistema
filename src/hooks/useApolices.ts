import { useState, useEffect } from 'react'  
import { fetchApolices, createApolice, updateApolice, deleteApolice } from '../services/api'  
import { IApolice } from '../interface/IApolice'

export const useApolices = () => {
  const [apolices, setApolices] = useState<IApolice[]>([])  
  const [loading, setLoading] = useState(false)  
  const [error, setError] = useState(null)  

  const loadApolices = async (page: number, pageSize: number, search: string) => {
    setLoading(true)  
    try {
      const data = await fetchApolices(page, pageSize, search)  
      setApolices(data.content)  
    } catch (err) {
      setError(err)  
    } finally {
      setLoading(false)  
    }
  }  

  const addApolice = async (apolice: any) => {
    try {
      await createApolice(apolice)  
      loadApolices(1, 10, '')  
    } catch (err) {
      setError(err)  
    }
  }  

  const editApolice = async (id: number, apolice: any) => {
    try {
      await updateApolice(id, apolice)  
      loadApolices(1, 10, '')  
    } catch (err) {
      setError(err)  
    }
  }  

  const removeApolice = async (id: number) => {
    try {
      await deleteApolice(id)  
      loadApolices(1, 10, '')  
    } catch (err) {
      setError(err)  
    }
  }  

  useEffect(() => {
    loadApolices(1, 10, '')  
  }, [])  

  return { apolices, loading, error, addApolice, editApolice, removeApolice, loadApolices }  
}  
