const Lista = props => {
    const arr = [
        "JavaScripto",
        "Python",
        "Java",
        "C"
    ];

    return (
        <ul>
            {
                // arr.map((elemento, index) => {
                //     return (
                //         <li key={index}>
                //             {elemento}
                //         </li>
                //     )
                // })
                arr.map((elemento, index) => <li key={index}>{elemento}</li>)
            }
        </ul>
    )
}


export default Lista;