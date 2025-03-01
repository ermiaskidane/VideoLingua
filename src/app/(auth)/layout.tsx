
type Props = {
  children: React.ReactNode
}

const AuthLayout = async ({ children }: Props) => {

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="flex flex-col w-full items-center">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout