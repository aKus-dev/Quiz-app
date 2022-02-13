interface BoldProps {
    children: JSX.Element | JSX.Element[];
}

export const Bold = ( {children}: BoldProps) => {
  return (
    <div className="bold">
        {children}
    </div>
  )
}
