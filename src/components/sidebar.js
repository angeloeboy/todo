
import styled from 'styled-components';

export default function Sidebar(Todo){
    const Title = styled.h1`
        font-size: 2rem;
        margin: 0 auto;
        color: white;
        padding: 25px;
        text-align: center;
    `

    const SidebarDiv = styled.div`
        background-color: #272838;
        height: 100vh;
        max-width: 20vw;
        min-width: 300px;
        display: inline-block;
        /* flex: 1; */
    `

    const Button = styled.button`
        background-color:  ${props => props.add ? "#80C767": "red"}; 
        padding: 10px 20px;
        text-transform: uppercase;
        border: none;
        margin: 10px 10px;
        flex: 1;
    `
    const TodoContainer = styled.div`
        margin: 0px 10px;
    `

    const ButtonContainers = styled.div`
        display: flex;
        width: 90%;
        margin: 0 auto;
    `
    const TodoItems = styled.div`
        display: block;
        width: 100%;
        background-color: #134C6F;
        color: white;
    `
    let todoss = [
        {
            id: 1,
            text: "Angelo"
        },
        {
            id: 2,
            text: "Zuniga"
        },
        {
            id: 3,
            text: "Blabla"
        }
    ]

    let todoItemsClickHandler = (todo) =>{
        console.log(todo.id)
    }

    return(
        <SidebarDiv>
            <Title>Projects</Title>
            <ButtonContainers>
                <Button add> Add </Button>
                <Button> Sort by </Button>
            </ButtonContainers>

            <TodoContainer>
                {todoss.map( todo => {
                    return(
                        <TodoItems onClick={() => todoItemsClickHandler(todo)}> 
                            <p>{todo.id}</p>
                    <p>{todo.text}</p>
                        </TodoItems>
                    )
                })}
            </TodoContainer>
        </SidebarDiv>
    )
}