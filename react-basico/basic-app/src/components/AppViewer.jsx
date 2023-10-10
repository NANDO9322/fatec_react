import styles from './AppViewer.module.css'
//Camada de Compilação de Serviços
const AppViewer = () => {
  //Retorno no display
  const professores = [
    { id: 1, nome: "José Armando Vargas", idade: 42, formacao: "Engenharia de Computação", titulacao: "Latu-Senso" },
    { id: 2, nome: "Ana Maria Silva", idade: 28, formacao: "Medicina", titulacao: "Doutorado" },
    { id: 3, nome: "Carlos Eduardo Souza", idade: 35, formacao: "Administração de Empresas", titulacao: "Bacharelado" },
    { id: 4, nome: "Mariana Santos", idade: 30, formacao: "Psicologia", titulacao: "Mestrado" },
    { id: 5, nome: "Rafael Oliveira", idade: 22, formacao: "Engenharia Elétrica", titulacao: "Graduação" },
    { id: 6, nome: "Luisa Rodrigues", idade: 27, formacao: "Ciência da Computação", titulacao: "Pós-Graduação" },
    { id: 7, nome: "Fernando Pereira", idade: 38, formacao: "Economia", titulacao: "Doutorado" },
    { id: 8, nome: "Isabel Alves", idade: 45, formacao: "Arquitetura", titulacao: "Mestrado" },
    { id: 9, nome: "Pedro Costa", idade: 32, formacao: "Engenharia Civil", titulacao: "Bacharelado" }
  ]

  return (
    <>
    <h2>Lista de Professores</h2>
    {/*{
        professores.map((professor) =>{
          return(
          <div key={professor.id}>
              <ul>
                <li><strong>Nome:</strong>{professor.nome}</li>
                <li><strong>Idade:</strong>{professor.idade}</li>
                <li><strong>Formação:</strong>{professor.formacao}</li>
                <li><strong>Titulação:</strong>{professor.titulacao}</li>
              </ul>
            </div>
          )
        })
      }*/}

      
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Formação</th>
            <th>Titulação</th>
          </tr>
        </thead>
        <tbody>
          {professores.map((professor) => {
            return (
              <tr className={professor.id % 2 == 1 ?  styles.linhaCinza : null} key={professor.id}>
                <td>{professor.id}</td>
                <td>{professor.nome}</td>
                <td>{professor.idade}</td>
                <td>{professor.formacao}</td>
                <td className ={professor.titulacao == "Mestrado" || professor.titulacao == "Doutorado" ?  styles.superTitulo : styles.normalTitulo   }>{professor.titulacao}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      

    </>
  )
}

export default AppViewer