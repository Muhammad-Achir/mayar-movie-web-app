export default function Movie(props) {
    const movie = props.movie
    return (
        <tr>
            <td>{movie.name}</td>
            <td>{movie.genre}</td>
            <td>{movie.actor.name}</td>
        </tr>
    )
}