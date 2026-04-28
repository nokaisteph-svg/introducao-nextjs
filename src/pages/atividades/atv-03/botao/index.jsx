import styles from './index.module.css';

function Botao({ texto, onClick, acao }) {
    return (
        <button
            className={`${styles.botao} ${acao === '+' ? styles.mais : styles.menos}`}

        >
            {texto}
        </button>
    );
}

export default Botao;