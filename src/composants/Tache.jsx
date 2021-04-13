import './Tache.scss';
/* Ex3 - Point F)ii) */

export default function Tache({id, texte, completee, date}) {
  return (
    <div className="Tache">
      {/* Ex3 - Point F)iii) */}
      basculer
      {/* Ex3 - Point F)i) */}
      <span className="texte">Texte de la tâche</span>
      {/* Ex3 - Point F)ii) */}
      <span className="date">(date formatée)</span>
      {/* Ex3 - Point F)iii) */}
      supprimer
    </div>
  );
}