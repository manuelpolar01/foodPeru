import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Menu = () => {
  return (
    
    <div   style={{
     display:'flex',
      flexDirection:'column',
       marginTop:'80px',
      padding:'25px',
    
    } } >
;


    <Card style={{ width: '100%', padding:'5rem', backgroundImage:'url(/fruttiMare.jpg)',backgroundSize:'cover',backgroundPosition:'center', marginTop:'10px' }}>
   <Card.Body style={{textAlign:'center'}}>
       <Card.Text >
         scegle la migliore scelta.
        </Card.Text>
         <Link  className='btn btn-dark' to={'/menu/fruttimare'} >FRUTTI DI MARE</Link>
        </Card.Body>
    </Card>

    <Card style={{ width: '100%', padding:'5rem', backgroundImage:'url(/griglia.jpg)',backgroundSize:'cover',backgroundPosition:'center', marginTop:'10px' }}>
   <Card.Body style={{textAlign:'center'}}>
       <Card.Text >
         scegle la migliore scelta.
        </Card.Text>
         <Link  className='btn btn-dark' to={'/menu/criolla'} >CUCINA CREOLA</Link>
        </Card.Body>
    </Card>
    
    <Card style={{ width: '100%', padding:'5rem', backgroundImage:'url(/criolla.jpg)',backgroundSize:'cover',backgroundPosition:'center', marginTop:'10px' }}>
   <Card.Body style={{textAlign:'center'}}>
       <Card.Text >
         scegle la migliore scelta.
        </Card.Text>
         <Link  className='btn btn-dark' to={'/menu/antipasto'} >ANTIPASTI</Link>
        </Card.Body>
    </Card>

    <Card style={{ width: '100%', padding:'5rem', backgroundImage:'url(/griglia.jpg)',backgroundSize:'cover',backgroundPosition:'center', marginTop:'10px' }}>
   <Card.Body style={{textAlign:'center'}}>
       <Card.Text >
         scegle la migliore scelta.
        </Card.Text>
         <Link  className='btn btn-dark' to={'/menu/allagrigia'} > ALLA GRIGLIA</Link>
        </Card.Body>
    </Card>

    <Card style={{ width: '100%', padding:'5rem', backgroundImage:'url(/bevenda.jpg)',backgroundSize:'cover',backgroundPosition:'center', marginTop:'10px' }}>
   <Card.Body style={{textAlign:'center'}}>
       <Card.Text >
         scegle la migliore scelta.
        </Card.Text>
         <Link  className='btn btn-dark' to={'/menu/bevande'} >BEVANDE</Link>
        </Card.Body>
    </Card>

   
         
       </div>
    


  )
}

export default Menu
