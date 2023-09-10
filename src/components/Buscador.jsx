const Buscador = ({wizardData, setWizardFilter, setSearcher}) => {
  
  const handleInput = (e) => {
    setSearcher = e.target.value.toLowerCase()

    const result = wizardData.filter((wiz) => 
    wiz.name.toLowerCase().includes(setSearcher) ||
    wiz.house.toLowerCase().includes(setSearcher)
    )

    setWizardFilter(result)
  }

  return (
    <>
      <h1>Looking for a wizard here!</h1>
      <div>
        <input onChange={handleInput}
          className='mb-3 inp'
          type='text'
          name='searcher'
          placeholder="Lets's magic begin!"
      />
      </div>
    </>
  )
}
export default Buscador