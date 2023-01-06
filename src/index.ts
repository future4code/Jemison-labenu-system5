import { criaEstudantes } from './endpoints/Estudante/criaEstudantes';
import { atualizaTurmas } from './endpoints/Turma/atualizaTurmas';
import { pegaTurmas } from './endpoints/Turma/pegaTurmas';
import { criaTurmas } from './endpoints/Turma/criaTurmas';
import app from './app'

app.get("/turma", pegaTurmas)

app.post("/turma", criaTurmas)

app.put("/turma/:id", atualizaTurmas)

app.post('/estudante', criaEstudantes)
