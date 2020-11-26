import React, { useContext, createContext } from 'react'

//Context
export const TestsContext = createContext(null)

//Provider
export const TestsContextProvider = ({ children }) => {
  const [tests, setTests] = React.useState([])

  //ComponentDidMouunt
  React.useEffect(() => {}, [])

  //
  const values = React.useMemo(
    () => ({
      tests, // States que seran visibles en el contexto.
      setTests, // Funciones que son exportadas para manejo externo.
    }),
    [tests]
  ) // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return (
    <TestsContext.Provider value={values}>{children}</TestsContext.Provider>
  )
}

const useTestsContext = () => {
  const context = useContext(TestsContext)

  if (!context) {
    console.error('Error deploying App Context!!!')
  }

  return context
}

export default useTestsContext
