export interface Offers {
  id: number,
  titulo: string,
  descricaoBreve: string,
  valor: number,
  categoria: {
    id: number,
    nome: string
  },
  detalhes: [
    string
  ],
  destaques: [
    string
  ]
}