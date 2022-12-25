export function BookPreview({book}){
    return <div>
        <h2>{book.title}</h2>
        <h3>{book.listPrice.amount}</h3>
    </div>
}