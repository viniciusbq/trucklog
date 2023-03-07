import styles from './Navbar.module.css';
import logo from '../../assets/atomo.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img src={logo} alt="icone" />
      </a>
      <div className={styles.links}>
        <a href="">Sobre</a>
        <a href="">Produtos</a>
        <a href="">Contato</a>
        <a href="">For Teams</a>
      </div>
    </nav>
  );
};

export default Navbar;
