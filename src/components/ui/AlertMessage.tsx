
const AlertMessage = ({ msg }: { msg: string }) => {
  return (
    <p className="text-sm text-red-600 pl-1 mt-1">{msg}</p>
  )
}

export default AlertMessage