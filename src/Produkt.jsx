

export default function Produkt({produkt,onDelete}) {
    return (
        <li>
            <h3>{produkt}</h3>
<button onClick={()=>onDelete(produkt)}>Löschen</button>
        </li>
    );
}
