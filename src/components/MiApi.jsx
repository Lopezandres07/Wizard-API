import axios from 'axios'
import React, { useEffect } from 'react'
import {Card} from 'react-bootstrap'

const MiApi = ({wizardFilter, setWizardData, setWizardFilter}) => {
  
  const searchWizard = () => {
      const apiUrl = `https://hp-api.onrender.com/api/characters`

      axios
        .get(apiUrl)
        .then((response) => {
          const apiResponse = response.data.map((ele) => {
            return {
              name: ele.name,
              image: ele.image,
              house: ele.house,
              student: ele.hogwartsStudent,
              staff:ele.hogwartsStaff
            }
          })
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter((img) => img.image !== '')
          setWizardData(apiResponse)
          setWizardFilter(apiResponse)
          })
        .catch((error) => {
          console.log("You get an error when calling API:", error);
        })
  } 

  useEffect(() => {
    searchWizard()
  }, [])

  return (
    <>

      {wizardFilter.map((ele, e) => (
        <div className='cards'>
          <Card key={e.id} className='card' >
            <Card.Img className='img' variant="top" src={ele.image} />                          
              <Card.Body>
                <Card.Title>{ele.name}</Card.Title>
                <Card.Text>
                  {ele.house ? <p>House: {ele.house}</p> : null}
                  {ele.student ? "Student" : null}
                  {ele.staff ? "Professor" : null}
                  {!ele.student && !ele.staff ? "Enemy or Ally" : null}
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
      ))} 
   
    </>
  )
}

export default MiApi