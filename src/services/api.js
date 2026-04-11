export const servicos = [
  {
    id: 1,
    nome: "Reconhecimento de Firma",
    preco: 15.80,
    descricao: "Confirmação de assinatura",
    documentos: ["Documento com foto","AUTÊNTICO: VALOR R$ 20.80. Reconhecido apenas na presença do dono da assinatura;","DUT: VALOR: 24.80. Reconhecido apenas na presença do dono da assinatura;","Obs: Caso não possua firma aberta neste cartório é necessário realizar a abertura para reconhecer. Valor da Abertura: R$40.46."]
  },
  {
    id: 2,
    nome: "Autenticação",
    preco: 9,
    descricao: "Cópia autenticada, para cada lado de conteúdo será cobrado 1 selo.",
    documentos: ["Documento original"]
  },
  {
    id: 3,
    nome: "Procuração de Veículo",
    preco: 123.02,
    descricao: "Poderes para representação",
    documentos: ["Documentos pessoas de ambas as partes: RG, CPF ou CNH;"," Documento do veículo."]
  },

   {
    id: 4,
    nome: "Escritura Pública de União Estável",
    preco: 243.11,
    descricao: "A união estável é a relação de convivência entre duas pessoas, configurada na convivência pública, contínua e duradoura, com o objetivo de constituição de família. Diferente do casamento civil formal, ela não exige uma cerimônia, mas garante direitos e deveres semelhantes",
    documentos: ["Documentos pessoas de ambas as partes", "Certidão de Comprovação de Estado Civil Atualizada", "Se possuir filhos em comum documento pessoal da criança" ]
  },
  {
    id: 5,
    nome: "Escritura Pública de Compra e Venda Imovél Urbano",
    preco: 270.70,
    descricao: "É o instrumento público pelo qual uma pessoa (vendedor) transmite a outra (comprador) o domínio e a posse de um bem imóvel pelo preço e condições ajustados entre as partes. É este documento que possui fé pública, garantindo segurança jurídica ao investimento realizado. ",
    documentos: [
        
     "Documentos pessoais de ambas as partes:RG, CPF ou CNH + qualificação completa", "Certidão de comprovação de estado civil dos compradores e vendedores", "Guia de ITBI","Matrícula Atualizada do Imóvel", "OBS: O valor da escritura é definido pela avalição feita pela prefeitura. Confira a baixo a tabela de valores de escritura:" ,"Avaliação de : R$ 0,01 à R$ 5.000,00 = R$ 270,70",
"Avaliação de : R$ 5.000,01 à R$ 10.000,00 = R$ 389,58",
"Avaliação de : R$ 10.000,01 à R$ 15.000,00 = R$ 564,70",
"Avaliação de : R$ 15.000,01 à R$ 20.000,00 = R$ 752,87",
"Avaliação de : R$ 20.000,01 à R$ 25.000,00 = R$ 941,04",
"Avaliação de : R$ 25.000,01 à R$ 30.000,00 = R$ 1.114,73",
"Avaliação de : R$ 30.000,01 à R$ 35.000,00 = R$ 1.310,12",
"Avaliação de : R$ 35.000,01 à R$ 40.000,00 = R$ 1.491,04",
"Avaliação de : R$ 40.000,01 à R$ 45.000,00 = R$ 1.679,20",
"Avaliação de : R$ 45.000,01 à R$ 50.000,00 = R$ 1.867,35",
"Avaliação de : R$ 50.000,01 à R$ 55.000,00 = R$ 2.070,00",
"Avaliação de : R$ 55.000,01 à R$ 60.000,00 = R$ 2.214,73",
"Avaliação de : R$ 60.000,01 à R$ 65.000,00 = R$ 2.446,31",
"Avaliação de : R$ 65.000,01 à R$ 70.000,00 = R$ 2.605,52",
"Avaliação de : R$ 70.000,01 à R$ 75.000,00 = R$ 2.808,17",
"Avaliação de : R$ 75.000,01 à R$ 80.000,00 = R$ 2.967,38",
"Avaliação de : R$ 80.000,01 à R$ 85.000,00 = R$ 3.184,48",
"Avaliação de : R$ 85.000,01 à R$ 90.000,00 = R$ 3.336,46",
"Avaliação de : R$ 90.000,01 à R$ 95.000,00 = R$ 3.604,24",
"Avaliação de : R$ 95.000,01 à R$ 100.000,00 = R$ 3.705,55",
"Avaliação de : R$ 100.000,01 à R$ 110.000,00 = R$ 4.327,92",
"Avaliação de : R$ 110.000,01 à R$ 120.000,00 = R$ 4.465,43",
"Avaliação de : R$ 120.000,01 à R$ 130.000,00 = R$ 4.588,46",
"Avaliação de : R$ 130.000,01 à R$ 140.000,00 = R$ 4.704,27",
"Avaliação de : R$ 140.000,01 à R$ 150.000,00 = R$ 4.791,09",
"Avaliação de : R$ 150.000,01 à R$ 160.000,00 = R$ 5.037,15",
"Avaliação de : R$ 160.000,01 à R$ 170.000,00 = R$ 5.181,89",
"Avaliação de : R$ 170.000,01 à R$ 180.000,00 = R$ 5.341,10",
"Avaliação de : R$ 180.000,01 à R$ 190.000,00 = R$ 5.572,69",
"Avaliação de : R$ 190.000,01 à R$ 200.000,00 = R$ 5.717,42",
"Avaliação de : R$ 200.000,01 à R$ 210.000,00 = R$ 6.122,71",
"Avaliação de : R$ 210.000,01 à R$ 220.000,00 = R$ 6.412,17",
"Avaliação de : R$ 220.000,01 à R$ 230.000,00 = R$ 6.774,02",
"Avaliação de : R$ 230.000,01 à R$ 240.000,00 = R$ 7.012,83",
"Avaliação de : R$ 240.000,01 à R$ 250.000,00 = R$ 7.396,40",
"Avaliação de : R$ 250.000,01 à R$ 260.000,00 = R$ 7.613,51",
"Avaliação de : R$ 260.000,01 à R$ 270.000,00 = R$ 7.902,99",
"Avaliação de : R$ 270.000,01 à R$ 280.000,00 = R$ 8.163,53",
"Avaliação de : R$ 280.000,01 à R$ 290.000,00 = R$ 8.293,78",
"Avaliação de : R$ 290.000,01 à R$ 300.000,00 = R$ 8.453,01",
"Avaliação de : R$ 300.000,01 à R$ 325.000,00 = R$ 8.728,01",
"Avaliação de : R$ 325.000,01 à R$ 350.000,00 = R$ 8.843,80",
"Avaliação de : R$ 350.000,01 à R$ 375.000,00 = R$ 9.017,48",
"Avaliação de : R$ 375.000,01 à R$ 400.000,00 = R$ 9.364,87",
"Avaliação de : R$ 400.000,01 à R$ 425.000,00 = R$ 9.480,66",
"Avaliação de : R$ 425.000,01 à R$ 450.000,00 = R$ 9.610,91",
"Avaliação de : R$ 450.000,01 à R$ 475.000,00 = R$ 9.741,18",
"Avaliação de : R$ 475.000,01 à R$ 500.000,00 = R$ 9.885,90",
"Avaliação de : R$ 500.000,01 à R$ 600.000,00 = R$ 10.077,22",
"Avaliação de : R$ 600.000,01 à R$ 700.000,00 = R$ 10.219,77",
"Avaliação de : R$ 700.000,01 à R$ 800.000,00 = R$ 10.360,39",
"Avaliação de : R$ 800.000,01 à R$ 900.000,00 = R$ 10.495,09",
"Avaliação de : R$ 900.000,01 à R$ 1.000.000,00 = R$ 10.634,78",
"Avaliação de : R$ 1.000.000,01 à R$ 2.000.000,00 = R$ 10.851,27",
"Avaliação de : R$ 2.000.000,01 à R$ 3.000.000,00 = R$ 11.065,21",
"Avaliação de : R$ 3.000.000,01 à R$ 4.000.000,00 = R$ 11.216,87",
"Avaliação de : R$ 4.000.000,01 à R$ 5.000.000,00 = R$ 11.405,36",
"Avaliação de : Superior a R$ 5.000.000,01 = R$ 11.593,84" ]
  }
];

export const atendentes = [
  {
    id: 1,
    nome: "João Silva",
    setor: "Escrituras",
    ramal: "101"
  },
  {
    id: 2,
    nome: "Maria Souza",
    setor: "Registro Civil",
    ramal: "102"
  }
];


export function fetchServicos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(servicos), 500);
  });
}

export function fetchAtendentes() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(atendentes), 500);
  });
}