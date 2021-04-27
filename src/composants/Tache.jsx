import './Tache.scss';
/* Ex3 - Point F)ii) */
import formaterDateEtHeure from '../services/utilitaires';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
export default function Tache({id, texte, completee, date}) {
  return (
    <div className="Tache">
      {/* Ex3 - Point F)iii) */}
      <CheckIcon color="primary">{completee} </CheckIcon>
      {/* Ex3 - Point F)i) */}
      <span className="texte">{id,texte}</span>
      {/* Ex3 - Point F)ii) */}
      <span className="date">{formaterDateEtHeure(date)}</span>
      {/* Ex3 - Point F)iii) */}
      <DeleteIcon color="primary">  </DeleteIcon>
    </div>
  );
}