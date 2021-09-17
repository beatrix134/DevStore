import { Container } from './styled'


export default function Index() {
    return (
        <Container>
            <header className="header-left-box">
                <div className="svg-cabecalho-left-box"> <img src="/assets/images/Vector.png" alt="" /></div>
                <div className="devSchool"> <span>Dev</span>Store</div>
            </header>
            <div className="black-box"></div>
            <div className="left-box-management">
                <div> Gerenciamento </div>
                <img src="/assets/images/chevron-down.svg" alt="" />
            </div>
            <div className="left-box-aluno">
                <div> Produtos </div>
            </div> 
        </Container>
    )
}