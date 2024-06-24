import { createServer, Model, Response } from 'miragejs' 

export function makeServer() {
  createServer({
    models: {
      apolice: Model,
    },

    seeds(server) {
      server.create('apolice', {
        id: "1",
        numero: 125456,
        valor_premio: 100.0,
        segurado: {
          nome: 'Rita de Cassia',
          email: 'ritadecassia@email.com',
          cpf_cnpj: '123.456.789-00'
        },
        coberturas: [
          {
            nome: 'Incêndio',
            valor: 14.0
          }
        ]
      }) 
    },

    routes() {
      this.namespace = 'api' 

      this.get('/apolices', (schema, request) => {
        let { page = 1, pageSize = 10, search = '' } = request.queryParams 
        page = Number(page) 
        pageSize = Number(pageSize) 

        let apolices = schema.db.apolices.where(apolice => 
          apolice.segurado.nome.toLowerCase().includes(search.toLowerCase()) ||
          apolice.numero.toString().includes(search)
        ) 

        const totalItens = apolices.length 
        const totalPages = Math.ceil(totalItens / pageSize) 

        apolices = apolices.slice((page - 1) * pageSize, page * pageSize) 

        return new Response(200, {}, { content: apolices, page, totalItens, totalPages }) 
      }) 

      this.post('/apolices', (schema, request) => {
        const attrs = JSON.parse(request.requestBody) 
        return schema.db.apolices.insert(attrs) 
      }) 

      this.put('/apolices/:id', (schema, request) => {
        const id = request.params.id 
        const attrs = JSON.parse(request.requestBody) 
        return schema.db.apolices.update(id, attrs) 
      }) 

      this.get('/apolices/:id', (schema, request) => {
        const id = request.params.id 
        return schema.db.apolices.find(id) 
      }) 

      this.delete('/apolices/:id', (schema, request) => {
        const id = request.params.id 
        return schema.db.apolices.remove(id) 
      }) 
    },
  }) 
}
