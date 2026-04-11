import { useParams } from "react-router-dom";
import { servicos } from "../services/api";

export default function DetalheServico() {
  const { id } = useParams();

  const servico = servicos.find((s) => s.id === Number(id));

  if (!servico) return <p>Serviço não encontrado</p>;

  return (
    <div>
      <h1>{servico.nome}</h1>
      <p>{servico.descricao}</p>
      <p>Valor: R$ {servico.preco}</p>

      <h3>Documentos necessários:</h3>
      <ul>
        {servico.documentos.map((doc, i) => (
          <li key={i}>{doc}</li>
        ))}
      </ul>
    </div>
  );
}