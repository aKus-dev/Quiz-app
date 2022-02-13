interface BoldProps {
    children: string;
}

export const Bold = ( {children}: BoldProps) => {
  return (
    <span className="bold">
        {children}
    </span>
  )
}
