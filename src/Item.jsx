const Item = ({ title, url, author, num_comments, points })=> {
    // console.log(item);  

  return (
    <>
        <li >
            <span><a href={url}>{title}</a></span>
            <span>{author}</span>
            <span>{num_comments}</span>
            <span>{points}</span>
        </li>
    </>
  )
}

export default Item;
