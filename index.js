// Base a ser utilizada
const alunosDaEscola = [
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
    {nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}
];

function alunoExiste(aluno){
    // se não achar retorna -1
    return alunosDaEscola.findIndex(elemento => elemento.nome == aluno)   
}

function cursoExiste(indiceAluno){
    return alunosDaEscola[indiceAluno].cursos[0] !== undefined;    
}

function mediaNotas(notas){
    return notas.reduce((soma, elemento) => soma + elemento, 0) / notas.length;  // soma começa do 0
}

// implementação
function adicionarAluno(nomeAluno){
    //function adicionarAluno(nome:string)
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
    
    let modeloAluno = {nome:nomeAluno,notas:[],cursos:[],faltas:0};
    alunosDaEscola.push(modeloAluno);
    
    return `Aluno: ${nomeAluno} inserido com sucesso! =)`

}
//console.log(alunosDaEscola);
//console.log(adicionarAluno("Ana"));
//console.log(alunosDaEscola);


function listarAlunos(){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
    let cabecario = `${"=".repeat(100)} \n`;
    let rodape = `${"=".repeat(100)} \n`;
    let lista = cabecario;

    for (const aluno of alunosDaEscola) {
        lista += `nome: ${aluno.nome} ${"-".repeat(15 - aluno.nome.length)} `;
        lista += `notas: ${aluno.notas} ${"-".repeat(15 - JSON.stringify(aluno.notas).length)} `;
        lista += `faltas: ${aluno.faltas} ${"-".repeat(15 - JSON.stringify(aluno.faltas).length)} `; 
        for (const curso of aluno.cursos) {
            //objeto dentro de outro objeto...
            lista += `cursos: ${curso.nomeDoCurso} `;
        }
        lista += `\n`
    }
    lista += rodape
    return(lista);
}
//console.log(listarAlunos());



function buscarAluno(nomeDoAluno){
    //function buscarAluno(nome:string)
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, 
    tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
    //let resultadoBusca = alunosDaEscola.filter((elemento)=> elemento.nome == nomeDoAluno);
    let alunoBuscado = alunosDaEscola.find(elemento => (elemento.nome == nomeDoAluno));
        
        if (alunoBuscado != undefined){
            return alunoBuscado;
        }else{
            return mensagem = (`Aluno: ${nomeDoAluno} não cadastrado!`);
        }
}
//console.log(buscarAluno("Bruno"));



function matricularAluno(aluno, curso){
    //function matricularAluno(aluno:object, curso:string)
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, 
    e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
    let alunoExistente = alunoExiste(aluno);

    if(alunoExistente == -1){
        return ("Aluno não encontrado")
    }else{
        alunosDaEscola[alunoExistente].cursos.push({nomeDoCurso: curso, dataMatricula: new Date});
        return (`O aluno ${aluno} foi matriculado no curso ${curso} com sucesso! =)`)
    }
}
//console.log(matricularAluno("Bruno", "Artes"));


function aplicarFalta(aluno){
//function aplicarFalta(aluno:object)
/* Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
*/
    let alunoExistente = alunoExiste(aluno);
    // if ternario ? (if)   :(else)
    let cursoExistente = (alunoExistente !== -1) ? cursoExiste(alunoExistente) : false;

    if(alunoExistente == -1){
        return ("Aluno não encontrado")
    }

    if(cursoExistente == true){
        console.log(`Aluno ${aluno} recebeu falta`)
        return alunosDaEscola[alunoExistente].faltas += 1; // +=1 ...ele +1
    } else{
        return console.log("Aluno não está matriculado!")
    }
}
//aplicarFalta("Lucca"); // se colocar Bruno n dá pq ele n tem curso matriculado ainda...

    
function aplicarNota(aluno, nota){
//function aplicarNota(aluno:object)
/* Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
*/
    let alunoExistente = alunoExiste(aluno);
    // if ternario ? (if)   :(else)
    let cursoExistente = (alunoExistente !== -1) ? cursoExiste(alunoExistente) : false;

    if(alunoExistente == -1){
        return ("Aluno não encontrado")
    }

    if(cursoExistente == true){
        console.log(`Aluno ${aluno} recebeu nota ${nota}`)
        return alunosDaEscola[alunoExistente].notas.push(nota);
    } else{
        return console.log("Aluno não está matriculado!")
    }
}
console.log(listarAlunos());
aplicarNota("Lucca", 8);
console.log(listarAlunos());

 
function aprovarAluno(aluno){
//function aprovarAluno(aluno:object)
/* Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. 
Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
 */
    let alunoExistente = alunoExiste(aluno);
    let cursoExistente = (alunoExistente !== -1) ? cursoExiste(alunoExistente) : false;
    let media = (mediaNotas(alunosDaEscola[alunoExistente].notas)).toFixed(2); // 2 casas decimais!
    let faltas = alunosDaEscola[alunoExistente].faltas;

    if(alunoExistente == -1){
        return ("Aluno não encontrado")
    }

    if(cursoExistente == false){
        return console.log("Aluno não está matriculado!")
    } else if(media >= 7 && faltas <= 3){
        return console.log(`Aluno ${aluno} aprovado`); 
    }else{
        return console.log(`Aluno ${aluno} reprovado`); 
    }
}
//console.log(listarAlunos());
aprovarAluno("Guilherme");
//console.log(listarAlunos());