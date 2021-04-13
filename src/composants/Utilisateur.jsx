import './Utilisateur.scss';
import { Avatar, Button } from '@material-ui/core';
/* Ex3 - Point C */

export default function Utilisateur({utilisateur}) {
  return (
    <div className="Utilisateur">
      {/* Ex3 - Point D)iii) */}
      <span className="nom">Alibaba</span>
      <Avatar className="avatar" alt="Alibaba" src="" />
      {/* Ex3 - Point C */}
      <Button 
        variant="outlined"
        size="small"
        className="btnDeconnexion"
        onClick={() => alert('A compléter')}
      >
        Déconnexion
      </Button>
    </div>
  );
}