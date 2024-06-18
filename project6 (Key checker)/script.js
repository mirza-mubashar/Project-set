let message = document.querySelector('.displayMessage')
window.addEventListener( 'keydown', (e)=>{
    message.innerHTML = `

    <table style=" border: 1px solid white;" >
        <tr>
            <th>Key </th>
            <th>Key Code </th>
            <th>Code </th>
        </tr>
        <tr>
            <td> ${e.key === ' ' ? 'space' : e.key} </td>
            <td> ${e.keyCode} </td>
            <td> ${e.code} </td>
        </tr>
    </table>

    `
} )