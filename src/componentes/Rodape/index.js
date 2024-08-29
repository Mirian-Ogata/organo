import './rodape.css'

const Rodape = () => {
    return(<footer className="footer">
                <section>
                    <ul>
                        <li>
                            <a>
                                <img src='.//imagens/fb.png' alt='facebook'/>
                            </a>
                        </li>
                        <li>
                            <a>
                            <img src='.//imagens/ig.png' alt='instagram'/>
                            </a>
                        </li>
                        <li>
                            <a>
                            <img src='.//imagens/tw.png' alt='twitter'/>
                            </a>
                        </li>
                    </ul>
                </section>
                    <section>
                    <img src='.//imagens/logo.png' alt='logo organo'/>
                    </section>
                    <section>
                        <p>Desenvolvido por Mirian Ogata | Alura</p>
                    </section>
            </footer>)
}

export default Rodape