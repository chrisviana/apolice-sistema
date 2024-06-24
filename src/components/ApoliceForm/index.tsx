import React, { useState, useEffect } from "react"
import { IApolice } from "../../interface/IApolice"
import { GroupForm, Form, ContainerPolicyForm, ButtonAddPolicy, GroupFoof, ButtonSave } from "./style"
import ButtonTrash from '../../assets/trash.svg'
interface Cobertura {
  nome: string
  valor: number
}

interface ApoliceFormProps {
  onSubmit: (apolice: IApolice) => void
  editMode: boolean
  currentApolice: IApolice | undefined
}

export function ApoliceForm({
  onSubmit,
  editMode,
  currentApolice,
}: ApoliceFormProps) {
  const [numero, setNumero] = useState("")
  const [valorPremio, setValorPremio] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [cpfCnpj, setCpfCnpj] = useState("")
  const [coberturas, setCoberturas] = useState<Cobertura[]>([
    { nome: "", valor: 0 },
  ])

  useEffect(() => {
    if (editMode && currentApolice) {
      setNumero(currentApolice.numero)
      setValorPremio(currentApolice.valor_premio?.toString())
      setNome(currentApolice.segurado?.nome)
      setEmail(currentApolice.segurado?.email)
      setCpfCnpj(currentApolice.segurado?.cpf_cnpj)
      setCoberturas(
        currentApolice.coberturas &&
          currentApolice.coberturas.map((cobertura: Cobertura) => ({
            nome: cobertura.nome,
            valor: cobertura.valor,
          }))
      )
    }
  }, [editMode, currentApolice])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      numero,
      valor_premio: parseFloat(valorPremio),
      segurado: { nome, email, cpf_cnpj: cpfCnpj },
      coberturas: coberturas.map((cobertura) => ({
        nome: cobertura.nome,
        valor: parseFloat(cobertura.valor.toString()),
      })),
    })

    setNumero("")
    setValorPremio("")
    setNome("")
    setEmail("")
    setCpfCnpj("")
    setCoberturas([{ nome: "", valor: 0 }])
  }

  const handleCoberturaChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedCoberturas = coberturas.map((cobertura, i) =>
      i === index
        ? {
            ...cobertura,
            [field]: field === "valor" ? parseFloat(value) : value,
          }
        : cobertura
    )
    setCoberturas(updatedCoberturas)
  }

  const addCobertura = () => {
    setCoberturas([...coberturas, { nome: "", valor: 0 }])
  }

  const removeCobertura = (index: number) => {
    setCoberturas(coberturas.filter((_, i) => i !== index))
  }

  return (
    <ContainerPolicyForm>
  <Form onSubmit={handleSubmit}>
      <GroupForm>
        <label>Número:</label>

        <input
          type="text"
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </GroupForm>
      <GroupForm>
        <label>Valor Prêmio:</label>
        <input
          type="text"
          placeholder="Valor Prêmio"
          value={valorPremio}
          onChange={(e) => setValorPremio(e.target.value)}
        />
      </GroupForm>
      <GroupForm>
        <label>Nome do Segurado:</label>
        <input
          type="text"
          placeholder="Nome do Segurado"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </GroupForm>
      <GroupForm>
        <label>Email do Segurado:</label>
        <input
          type="email"
          placeholder="Email do Segurado"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </GroupForm>
      <GroupForm>
        <label>CPF/CNPJ do Segurado:</label>
        <input
          type="text"
          placeholder="CPF/CNPJ do Segurado"
          value={cpfCnpj}
          onChange={(e) => setCpfCnpj(e.target.value)}
        />
      </GroupForm>
      <GroupFoof>
        {coberturas &&
          coberturas.map((cobertura, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Nome da Cobertura"
                value={cobertura.nome}
                onChange={(e) =>
                  handleCoberturaChange(index, "nome", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Valor da Cobertura"
                value={cobertura.valor.toString()}
                onChange={(e) =>
                  handleCoberturaChange(index, "valor", e.target.value)
                }
              />
              <button type="button" onClick={() => removeCobertura(index)}>
                <img src={ButtonTrash} alt="Excluir" />
              </button>
            </div>
          ))}
        <ButtonAddPolicy type="button" onClick={addCobertura}>
          Adicionar Cobertura
        </ButtonAddPolicy>
      </GroupFoof>

      <ButtonSave type="submit">{editMode ? "Atualizar" : "Salvar"}</ButtonSave>
    </Form>
    </ContainerPolicyForm>
   
  )
}
