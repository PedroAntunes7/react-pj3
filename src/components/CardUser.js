import './CardUser.css'

const CardUser = (props) => {
    const {id, name, price, img,
         status} = props;    
    return (
      <div data-id={id} 
           className="cardavatar">
        <img src={img}
            alt={name+' '+price}
            width="76px"
            height="76px"
        />
        <div>
            <h1>{name} {price}</h1>
            <p>{status}</p>
        </div>
      </div>
    );
  }
  
export default CardUser;