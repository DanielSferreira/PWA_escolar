export interface User {
    email: string;
    password: string;
    remember_me: boolean;
}
// tslint:disable-next-line: class-name
export interface infos {
    quant: {
        quantidade: string;
    };
    primeiroDiaAula: Aulas;
}
export interface Parcelas {
    vencimento: string;
    valor: string;
}
export interface Aluno {
    id: number;
    codigo: string;
    nome: string;
    senha: string;
    id_aluno_dk: string;
    unidade: number;
}
export interface Faltas {
    presenca: string;
    data: string;
    horario: string;
}
export interface Aulas {
    CURSO: string;
    AULA: number;
    SITUACAO: string;
    data: string;
}
export interface ResponseLogin {
    passe: string;
    id_dk: string;
    id_om: string;
}
export interface Cursos {
    id: number;
    nome: string;
}

export interface Unidades {
    id: number;
    unidade: string;
}
export interface Modulos {
    id: number;
    idCurso: string;
    Modulo: number;
    CargaHoraria: number;
}
