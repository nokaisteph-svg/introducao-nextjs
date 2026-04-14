import { useState } from "react";

import styles from './index.module.css';

 function Atividade02() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }
    function handleIncrementa2 () {
        setNum(num - 1);
    }

    return (

        <div className={styles.container}>
            <h1> Atividade 2 </h1>
            <p> Contador </p>
            <br></br><br></br><br></br>
            <label className={styles.texto}>{`Contador: ${num}`}</label>            
            <label 
                onClick={() => handleIncrementa()}
                className={styles.botao}
            >+1</label>
                       
            <label 
                onClick={() => handleIncrementa2()}
                className={styles.botao}
            >-1</label>
        </div>
        
        
        
        
    );
    
}
export default Atividade02;