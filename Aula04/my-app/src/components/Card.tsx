type CardProps = {
  title: string;
  price: number;
  className?: string;
}

const Card = ({title, price, className} : CardProps) => {
  return (
    <div className={className}>
      <button>
        BUY
      </button>
      <h1>
        {title}
      </h1>
      <h2>
        Description:
      </h2>
      <p>
        This is generic description for the {title} product.
        It costs {price} Euros.
      </p>
    </div>
  )
}

export default Card