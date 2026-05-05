/**
 * @file   src\pages\exemplos\ex-05\index.jsx
 * @author Ewerton
 * @date   2026-04-14
 * @desc   [Descrição do componente ou arquivo]
 */

import { useState } from 'react';

import styles from './index.module.css';

export default function Atividade04() {
    // exemplo básico entrada de dados
    const [Qnt, setQnt] = useState('');
    const [nome, setNome] = useState('');
    
    // exemplo uso real
    // const [formData, setFormData] = useState({ nome: '', email: '' }); 
    const [cadastros, setCadastros] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Enviando para API:", formData);
        // Aqui você faria um POST para sua API
        setCadastros([...cadastros, nome])
    };
    
    return (
        <div className={styles.container}>

            <h1>Atividade 4 - Lista de Compra</h1>

            <form onSubmit={handleSubmit} className={styles.Quant}>
                <label htmlFor="userio">Item:</label>
                {/* exemplo básico entrada de dados */}
                <input
                    id="userio"
                    type="Int"
                    placeholder='Qtd'
                    value={Qnt}
                    onChange={e => setQnt(e.target.value)}
                />
                <button type="submit">Adicionar</button>
                </form>

            <form onSubmit={handleSubmit} className={styles.Item}>
                <label htmlFor="user">Item:</label>
                {/* exemplo básico entrada de dados */}
                <input
                    id="user"
                    type="text"
                    placeholder='Insira o item aqui'
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                {/* exemplo uso real */}
                {/* <input
                    id="user"
                    type="text"
                    placeholder='Insira seu nome aqui'
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                /> */}
                <button type="submit">Adicionar</button>
            </form>

            <h2>Lista</h2>
            {
                cadastros.map(item => <p key={item}>{item}</p>)
            }
        </div>
    );
}