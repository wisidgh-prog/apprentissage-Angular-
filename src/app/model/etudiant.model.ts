
import { Classe } from "./Classe.model";

export interface Etudiant {
    id:string;
    nom: string;
    prenom: string;
    age: number;
    classe: Classe;
}
