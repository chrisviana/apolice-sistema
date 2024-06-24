import { Link, Outlet } from 'react-router-dom'
import { ContainerNavigation } from './style'

export const Navigation = () => {
  return (
    <>
      <ContainerNavigation>
        <h1>Gerenciamento de Apólices</h1>
        <div>
          <Link to="/">Lista de Apolice</Link>
          <Link to="/create">Criar Nova Apólice</Link>
        </div>
      </ContainerNavigation>
      <Outlet />
    </>

  )
}